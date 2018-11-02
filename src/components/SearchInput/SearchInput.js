import React, { Component } from 'react';
import qs from 'querystring';
import { Button, Input, Wrapper } from './SearchInput.styles';
import { history } from '../Pages/Router';

class SearchInput extends Component {
	state = {
		searchQuery: ''
	}

	componentDidMount() {
		const query = qs.parse(window.location.search.replace('?', ''));

		if(query.search) {
			this.setState({
				searchQuery: query.search
			});
		}
	}

	handleInputChange = (event) => {
		this.setState({
			searchQuery: event.target.value
		});
	}

	handleInputKeyPress = (event) => {
		if(event.key === 'Enter')
			this.submit();
	}

	handleSubmitClick = () => {
		this.submit();
	}

	submit = () => {
		const { searchQuery } = this.state;

		if(!searchQuery)
			return;

		history.push({
			pathname: '/items',
			search: `?search=${searchQuery}`
		});
	}

	render() {
		const { searchQuery } = this.state;

		return (
			<Wrapper>
				<Input value={searchQuery} placeholder="Nunca dejes de buscar" onChange={this.handleInputChange} onKeyPress={this.handleInputKeyPress} />
				<Button onClick={this.handleSubmitClick}>
					<img src="/static/images/ic_Search.png" alt="search" />
				</Button>
			</Wrapper>
		);
	}
}

export default SearchInput;