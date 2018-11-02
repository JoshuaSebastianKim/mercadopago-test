import styled from 'styled-components';
import { Wrapper as BaseWrapper } from '../UI/Wrapper.styles';
import { Content as BaseContent } from '../UI/Content.styles';

export const Wrapper = styled(BaseWrapper)``;

export const Content = styled(BaseContent)`
	display: flex
	flex-direction: column

	> a {
		position: relative
		flex: 1
		text-decoration: none
		color: ${props => props.theme.color.black}
	}

	> a:after {
		content: '';
		position: absolute;
		top: 0;
		left: 16px;
		right: 16px;
		height: 1px;
		background-color: ${props => props.theme.color.lightGray};
	}

	> a:first-child:after {
		content: none;
	}
`;

export const ProductItem = styled.div`
	display: grid
	grid-template-columns: 212px 1fr 150px
	width: 100%
	background-color: #fff
`;

export const ProductImage = styled.img`
	width: 180px
	height: 180px
	border-radius: 4px
	margin: 16px
`;

export const ProductInfo = styled.div`
	display: flex
	justify-content: center
	flex-direction: column
`;

export const ProductPrice = styled.div`
	display: flex
	align-items: center
	margin-bottom: 32px
`;

export const ProductPriceValue = styled.div`
	font-size: 24px
`;

export const ProductFreeShipping = styled.img`
	margin-left: 16px
`;

export const ProductTitle = styled.div`
	font-size: 18px
	margin-bottom: 32px
`;

export const ProductLocation = styled.div`
	display: flex
	align-items: center
	padding-bottom: 48px
	font-size: 12px
	color: ${props => props.theme.color.gray}
`;

