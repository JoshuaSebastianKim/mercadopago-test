import styled from 'styled-components';
import { fadeIn } from './animations.styles';

export const Content = styled.div`
	grid-column: ${props => `2 / span ${props.theme.grid.columns - 2}`}
	display: grid
	grid-template-columns: ${props => Array(props.theme.grid.columns - 2).fill('1fr').join(' ')}
	grid-column-gap: ${props => props.theme.grid.columnGap}
	animation: ${fadeIn} .25s linear
`;

Content.defaultProps = {
	theme: {
		grid: {
			columns: 12,
			columnGap: '12px'
		}
	}
}

export default {
	Content
};