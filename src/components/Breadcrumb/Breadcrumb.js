import React from 'react';
import { Wrapper, Crumb, Content } from './Breadcrumb.styles';

const renderItemList = (items) => items.map((item, index) => {
	const isLast = index === items.length - 1;

	return (
		<Crumb key={item} isLast={isLast}>
			{item}
		</Crumb>
	);
});

const Breadcrumb = ({ items }) => (
	<Wrapper>
		<Content>
			{renderItemList(items)}
		</Content>
	</Wrapper>
);

Breadcrumb.defaultProps = {
	items: ['1', '2', '3', '4']
};

export default Breadcrumb;
