'use client'

import styled from 'styled-components'
import { Saira_Stencil_One } from 'next/font/google'
import Icon from '../Icon'
import SearchInput from '../SearchInput/SearchInput'

const sairaStencil = Saira_Stencil_One({
	weight: ['400'],
	subsets: ['latin']
})

const StyledHeader = styled.header`
	width: 100%;
	background-color: #ffffff;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding-left: 10rem;
	padding-right: 10rem;
`

const Logo = styled.a`
	font-size: 40px;
	font-weight: 400;
	color: var(--logo-color);
`

const Div = styled.div`
	display: flex;
	align-items: center;
`

const Button = styled.button`
	background-color: transparent;
	border: none;
	cursor: pointer;

	&:hover {
		svg {
			stroke: var(--orange-detail);
		}
	}
`

const Header = () => {
	return (
		<StyledHeader>
			<Logo className={sairaStencil.className}>capputeeno</Logo>
			<Div>
				{/* <SearchInput placeholder='Procurando por algo específico?' /> */}
				<SearchInput placeholder='Procurando por algo específico?' />
				<Button>
					<Icon name='Minicart' width={24} height={24} stroke='#737380' />
				</Button>
			</Div>
		</StyledHeader>
	)
}

export default Header
