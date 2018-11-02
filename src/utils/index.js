exports.formatPrice = (price) => new Intl.NumberFormat(
	'es-AR',
	{
		style: 'currency',
		currency: price.currency,
		minimumFractionDigits: 0,
		currencyDisplay: 'symbol'
	}
).format(price.amount / Math.pow(1, price.decimals));

exports.getAuthor = () => ({
	author: {
		name: 'Joshua',
		lastname: 'Kim'
	}
});
