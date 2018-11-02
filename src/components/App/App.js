import React from 'react';
import { ThemeProvider } from 'styled-components';
import axios from 'axios';
import { cacheAdapterEnhancer } from 'axios-extensions';
import Router from '../Pages/Router';
import { Wrapper } from './App.styles';

axios.defaults.adapter = cacheAdapterEnhancer(axios.defaults.adapter)

const theme = {
	grid: {
		columns: 12,
		columnGap: '12px'
	},
	color: {
		primary: '#ffe600',
		black: '#333',
		darkGray: '#666',
		gray: '#999',
		lightGray: '#eee',
		blue: '#3483fa'
	}
};

const index = () => (
	<ThemeProvider theme={theme}>
		<Wrapper>
			<Router />
		</Wrapper>
	</ThemeProvider>
);

export default index;