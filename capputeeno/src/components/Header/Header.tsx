'use client'

import styled from 'styled-components'
import { Saira_Stencil_One } from 'next/font/google'
import Icon from '../Icon'

const sairaStencil = Saira_Stencil_One({
	weight: ['400'],
	subsets: ['latin']
})

const StyledHeader = styled.header`
	outline: 1px solid red;
	width: 100%;
	background-color: #ffffff;
	display: flex;
	justify-content: center;
	padding-left: 10rem;
	padding-right: 10rem;
`

const Logo = styled.a`
	font-size: 40px;
	font-weight: 400;
	color: var(--logo-color);
	line-height: 150%;
`

const SearchInput = styled.input`
	font-size: 0.875rem;
	font-family: inherit;
	line-height: 1.375rem;
	color: #737380;
	background-color: #f3f5f6;
	border-radius: 8px;
	padding: 0.625rem 1rem;
	border: none;
`

const Header = () => {
	return (
		<StyledHeader>
			<Logo className={sairaStencil.className}>capputeeno</Logo>
			<SearchInput placeholder='Procurando por algo específico?' />
			<Icon name='Minicart' />
		</StyledHeader>
	)
}

export default Header
