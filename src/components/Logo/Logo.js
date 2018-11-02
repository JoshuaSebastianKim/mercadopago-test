import React from 'react';
import { Link } from 'react-router-dom';
import { Wrapper } from './Logo.styles';

const Logo = () => {
	return (
		<Wrapper>
			<Link to="/">
				<img src="/static/images/Logo_ML.png" alt="Mercadolibre" />
			</Link>
		</Wrapper>
	);
};

export default Logo;