import React from 'react';
import Logo from '../Logo/Logo';
import SearchInput from '../SearchInput/SearchInput';
import { Wrapper, Content } from './Header.styles';

const Header = () => (
	<Wrapper as="header">
		<Content>
			<Logo />
			<SearchInput />
		</Content>
	</Wrapper>
)

export default React.memo(Header);
