import styled from 'styled-components';
import { Wrapper as BaseWrapper } from '../UI/Wrapper.styles';
import { Content as BaseContent } from '../UI/Content.styles';

export const Wrapper = styled(BaseWrapper)`
	background-color: ${props => props.theme.color.primary}
`;

export const Content = styled(BaseContent)`
	animation: none
`