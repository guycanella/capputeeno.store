'use client'

import styled from 'styled-components'

const categoryTypes = [
	{
		categoryId: '1',
		label: 'todos os produtos'
	},
	{
		categoryId: '2',
		label: 'camisetas'
	},
	{
		categoryId: '3',
		label: 'canecas'
	}
]

const UnorderedList = styled.ul`
	outline: 1px solid blue;
	display: flex;
	gap: 2.5rem;

	li {
		button {
			display: block;
			border: none;
			background-color: transparent;
			font-family: inherit;
			text-transform: uppercase;
			cursor: pointer;
		}
	}
`

const CategoryTypes = () => {
	return (
		<UnorderedList>
			{categoryTypes.map((category) => (
				<li key={category.categoryId}>
					<button>{category.label}</button>
				</li>
			))}
		</UnorderedList>
	)
}

export default CategoryTypes
