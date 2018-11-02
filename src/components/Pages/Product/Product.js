import React, { Component } from 'react';
import axios from 'axios';
import ProductDetails from '../../ProductDetails/ProductDetails';
import Breadcrumb from '../../Breadcrumb/Breadcrumb';
import Spinner from '../../UI/Spinner';

class Product extends Component {
	state = {
		loading: true,
		getResults: null,
		error: null
	}

	componentDidMount() {
		const { match: { params: { id } } } = this.props;

		this.get(id)
	}

	componentWillUnmount() {
		if(this.cancelRequest)
			this.cancelRequest();
	}

	async get(id) {
		if(this.cancelRequest)
			this.cancelRequest();

		this.setState({
			getResults: null,
			loading: true
		});

		try {
			const { data } = await axios.get(`/api/items/${id}`, {
				cancelToken: new axios.CancelToken(cancel => { this.cancelRequest = cancel; })
			});

			this.setState({
				getResults: data,
				loading: false
			});
		} catch(error) {
			this.setState({
				error,
				getResults: null,
				loading: false
			});
		}
	}
	

	render() {
		const { loading, error, getResults } = this.state;

		if(loading)
			return <Spinner />

		if(error)
			return <div>{error.message}</div>

		return (
			<React.Fragment>
				<Breadcrumb items={getResults.categories} />
				<ProductDetails item={getResults} />
			</React.Fragment>
		)
	}
}

export default Product;