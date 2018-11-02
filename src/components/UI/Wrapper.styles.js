import styled from 'styled-components';

export const Wrapper = styled.div`
	width: 100%
	padding: 0 2%
	display: grid
	grid-template-columns: ${props => Array(props.theme.grid.columns).fill('1fr').join(' ')}
	grid-column-gap: ${props => props.theme.grid.columnGap}
`;

Wrapper.defaultProps = {
	theme: {
		grid: {
			columns: 12,
			columnGap: '12px'
		}
	}
}

export default {
	Wrapper
};