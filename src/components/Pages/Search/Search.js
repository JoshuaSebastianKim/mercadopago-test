import React, { Component } from 'react';
import qs from 'querystring';
import axios from 'axios';
import Breadcrumb from '../../Breadcrumb/Breadcrumb';
import ProductList from '../../ProductList/ProductList';
import Spinner from '../../UI/Spinner';

class Search extends Component {
	state = {
		loading: true,
		searchResults: null,
		error: null
	}

	componentDidMount() {
		const { location: { search } } = this.props;
		const query = qs.parse(search.replace('?', ''));

		this.search(query.search)
	}

	componentDidUpdate(prevProps) {
		const { location: { search: prevSearch } } = prevProps;
		const { location: { search } } = this.props;
		const prevQuery = qs.parse(prevSearch.replace('?', ''));
		const query = qs.parse(search.replace('?', ''));

		if(prevQuery.search !== query.search)
			this.search(query.search);
	}

	componentWillUnmount() {
		if(this.cancelRequest)
			this.cancelRequest();
	}

	async search(query) {
		if(this.cancelRequest)
			this.cancelRequest();

		this.setState({
			searchResults: null,
			loading: true
		});

		try {
			const { data } = await axios.get(`/api/items`, {
				params: {
					q: query
				},
				cancelToken: new axios.CancelToken(cancel => { this.cancelRequest = cancel; }),
				cache: true
			});

			this.setState({
				searchResults: data,
				loading: false
			});
		} catch (error) {
			if(error instanceof axios.Cancel)
				return;

			this.setState({
				error,
				searchResults: null,
				loading: false
			});
		}
	}

	render() {
		const { loading, error, searchResults } = this.state;

		if(loading)
			return <Spinner />

		if(error)
			return <div>{error.message}</div>

		return (
			<React.Fragment>
				<Breadcrumb items={searchResults.categories} />
				<ProductList items={searchResults.items} />
			</React.Fragment>
		);
	}
}

export default Search;