import React from 'react';
import {
	Wrapper,
	Content,
	ProductImage,
	ProductInfo,
	ProductStats,
	ProductCondition,
	ProductSoldQuantity,
	ProductBuyButton,
	ProductPriceValue,
	ProductTitle,
	ProductDescription,
	ProductDescriptionTitle,
	ProductDescriptionBody
} from './ProductDetails.styles';
import { formatPrice } from '../../utils';

const ProductDetails = ({ item }) => (
	<Wrapper>
		<Content>
			<ProductImage src={item.picture} />
			<ProductInfo>
				<ProductStats>
					<ProductCondition>
						{
							item.condition === 'new' ? 'Nuevo' :
							'Usado'
						}
					</ProductCondition>
					<ProductSoldQuantity>
						{item.sold_quantity}
						<span> vendidos</span>
					</ProductSoldQuantity>
				</ProductStats>
				<ProductTitle>
					{item.title}
				</ProductTitle>
				<ProductPriceValue>
					{formatPrice(item.price)}
				</ProductPriceValue>
				<ProductBuyButton>
					Comprar
				</ProductBuyButton>
			</ProductInfo>
			<ProductDescription>
				<ProductDescriptionTitle>
					Descripción del producto
				</ProductDescriptionTitle>
				<ProductDescriptionBody>
					{item.description}
				</ProductDescriptionBody>
			</ProductDescription>
		</Content>
	</Wrapper>
);

ProductDetails.defaultProps = {
	item: {
		author: {
			name: 'Joshua',
			lastname: 'kim'
		},
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
		sold_quantity: 123,
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
	}
};

export default ProductDetails;