const express = require('express');
const axios = require('axios');
const { getAuthor } = require('../utils');

const router = express.Router();

router.get('/', async(req, res) => {
	// Validate input
	if(!req.query || !req.query.q) {
		return res.status(400).send('400 Bad Request');
	}

	try {
		const { data } = await axios.get('https://api.mercadolibre.com/sites/MLA/search', { params: { q: req.query.q } });
		const responseData = {
			...getAuthor(),
			categories: getCategoriesFromFilters(data.filters),
			items: getItems(data.results)
		};
	
		res.send(responseData);
	} catch(error) {
		res.status(500).send(error);
	}
});

router.get('/:id', async(req, res) => {
	const { id } = req.params;

	try {
		const [{ data: itemData }, { data: descriptionData }] = await Promise.all([
			axios.get('https://api.mercadolibre.com/items/' + id),
			axios.get('https://api.mercadolibre.com/items/' + id + '/description')
		]);
		const { data: categoryData } = await axios.get('https://api.mercadolibre.com/categories/' + itemData.category_id);
		const responseData = {
			...getAuthor(),
			...getItem(itemData, descriptionData),
			categories: getCategoryPathFromRoot(categoryData)
		};

		res.send(responseData);
	} catch(error) {
		res.status(500).send(error);
	}
});

function getCategoriesFromFilters(filters) {
	const categoryFilter = filters.find(f => f.id === 'category');

	if(!categoryFilter)
		return [];

	const categoryWithPathFromRoot = categoryFilter.values.find(v => Array.isArray(v.path_from_root));

	if(!categoryWithPathFromRoot)
		return [];

	return flatCategoryPathFromRoot(categoryWithPathFromRoot.path_from_root)
}

function getCategoryPathFromRoot(categoryData) {
	return flatCategoryPathFromRoot(categoryData.path_from_root);
}

function flatCategoryPathFromRoot(pahtFromRoot) {
	return pahtFromRoot.map(p => p.name);
}

function getItem(data, description) {
	return {
		id: data.id,
		title: data.title,
		price: {
			currency: data.currency_id,
			amount: data.price,
			decimals: 0
		},
		picture: data.pictures[0].secure_url,
		condition: data.condition,
		free_shipping: data.shipping.free_shipping,
		sold_quantity: data.sold_quantity,
		description: description.plain_text
	}
}

function getItems(items) {
	return items.map(i => ({
		id: i.id,
		title: i.title,
		price: {
			currency: i.currency_id,
			amount: i.price,
			decimals: 0
		},
		picture: i.thumbnail,
		condition: i.condition,
		free_shipping: i.shipping.free_shipping
	}));
}

module.exports = router;
