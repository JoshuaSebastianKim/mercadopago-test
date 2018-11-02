import styled from 'styled-components';
import { Wrapper as BaseWrapper } from '../UI/Wrapper.styles';
import { Content as BaseContent } from '../UI/Content.styles';

export const Wrapper = styled(BaseWrapper)`
	padding: 16px 2%
`;

export const Content = styled(BaseContent)`
	display: flex
`;

export const Crumb = styled.div`
	font-size: 14px
	color: ${props => props.isLast ? props.theme.color.darkGray : props.theme.color.gray }

	${props => props.isLast ?
		`
		font-weight: bold;
		`:
		`
		&:after {
			content: '>';
			padding: 0 5px;
		}
		`
	}
`;