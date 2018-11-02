import React from 'react';
import { Link } from 'react-router-dom';
import {
	Wrapper,
	Content,
	ProductItem,
	ProductImage,
	ProductInfo,
	ProductPrice,
	ProductPriceValue,
	ProductFreeShipping,
	ProductTitle,
	ProductLocation
} from './ProductList.styles';
import { formatPrice } from '../../utils';

const renderProductList = (items) => items.map((item) => {
	return (
		<Link to={`/items/${item.id}`} key={item.id}>
			<ProductItem>
				<ProductImage src={item.picture} />
				<ProductInfo>
					<ProductPrice>
						<ProductPriceValue>
							{formatPrice(item.price)}
						</ProductPriceValue>
						<ProductFreeShipping src="/static/images/ic_shipping.png" />
					</ProductPrice>
					<ProductTitle>
						{item.title}
					</ProductTitle>
				</ProductInfo>
				<ProductLocation>
					{item.location}
				</ProductLocation>
			</ProductItem>
		</Link>
	);
});

const ProductList = ({ items }) => (
	<Wrapper>
		<Content>
			{renderProductList(items)}
		</Content>
	</Wrapper>
);

ProductList.defaultProps = {
	items: [
		{
			id: '1',
			title: 'Celular Samsung Galaxy J7 Prime Liberado',
			price: {
				currency: 'ARS',
				amount: 12345,
				decimals: 0
			},
			picture: 'https://http2.mlstatic.com/celulares-samsung-D_Q_NP_747328-MLA28332924004_102018-Q.webp',
			condition: 'new',
			free_shipping: true,
			location: 'Capital Federal'
		}
	]
};

export default ProductList