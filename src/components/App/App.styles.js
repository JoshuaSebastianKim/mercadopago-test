import styled from 'styled-components';

export const Wrapper = styled.div`
	display: grid;
	grid-template-rows: 56px 1fr
	flex-direction: column
	background-color: ${props => props.theme.color.lightGray}
	min-height: 100%
`;

export default {
	Wrapper
};