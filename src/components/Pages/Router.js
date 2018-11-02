import React from 'react';
import { Router as ReactRouter, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import Header from '../Header/Header';
import Home from './Home/Home';
import Search from './Search/Search';
import Product from './Product/Product';
import NotFound from './NotFound/NotFound';
import { Page } from '../UI/Page.styles';

export const history = createHistory();

const Router = () => (
	<ReactRouter history={history}>
		<React.Fragment>
			<Header />
			<Route render={({ location }) => (
				<Page key={location.pathname}>
					<Switch location={location}>
						<Route exact path="/" component={Home} />
						<Route path="/items/:id" component={Product} />
						<Route path="/items" component={Search} />
						<Route component={NotFound} />
					</Switch>
				</Page>
			)}
			/>
		</React.Fragment>
	</ReactRouter>
);

export default Router;