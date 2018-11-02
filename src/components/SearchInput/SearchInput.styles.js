import styled from 'styled-components';

export const Wrapper = styled.div`
	display: flex
	margin: 8px 0
	grid-column: 2 / span 10
	border-radius: 3px
	overflow: hidden
`;

export const Input = styled.input`
	flex: 1
	border: 0
	font-size: 18px
	padding: 0 8px
	color: ${props => props.theme.color.black}
`;

export const Button = styled.button`
	width: 40px
	border: 0
	background-color: ${props => props.theme.color.lightGray}
`;