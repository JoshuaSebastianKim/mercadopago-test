import styled from 'styled-components';
import { Wrapper as BaseWrapper } from '../UI/Wrapper.styles';
import { Content as BaseContent } from '../UI/Content.styles';

export const Wrapper = styled(BaseWrapper)``;

export const Content = styled(BaseContent)`
	padding-right: 32px
	background-color: #fff
	grid-template-areas:
		"image image image image image image image info info info"
		"description description description description description description description description description description"
`;

export const ProductImage = styled.img`
	grid-area: image
	align-self: center
	justify-self: center
	width: 100%
	height: auto
	max-width: 680px
	padding: 32px
`;

export const ProductInfo = styled.div`
	grid-area: info
	padding-top: 32px
`;

export const ProductStats = styled.div`
	display: flex
	font-size: 14px
	font-weight: 300
	color: ${props => props.theme.color.darkGray}
`;

export const ProductCondition = styled.div`
	&:after {
		content: '-';
		padding: 0 5px
	}
`;

export const ProductSoldQuantity = styled.div`

`;

export const ProductTitle = styled.h1`
	margin: 14px 0 0 0
	font-size: 24px
	line-height: 1.2em
	font-weight: 600
	color: ${props => props.theme.color.black}
`;

export const ProductPriceValue = styled.div`
	margin-top: 32px
	font-size: 46px
	line-height: 1
`;

export const ProductBuyButton = styled.button`
	margin-top: 32px;
	background: ${props => props.theme.color.blue}
	border: 0
	border-radius: 4px
	width: 100%
	height: 40px
	color: #fff
	font-size: 16px
	cursor: pointer

	&:hover {

	}
`;

export const ProductDescription = styled.div`
	grid-area: description
	padding: 32px
`;

export const ProductDescriptionTitle = styled.div`
	font-size: 28px
`;

export const ProductDescriptionBody = styled.div`
	margin-top: 32px
	font-size: 16px
	color: ${props => props.theme.color.gray}
`;
