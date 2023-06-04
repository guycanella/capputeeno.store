'use client'

import styled from 'styled-components'
import CategoryTypes from './CategoryTypes'

const CategorySection = styled.section`
	outline: 1px solid red;
`

const Pagination = styled.div``

const Categories = () => {
	return (
		<CategorySection>
			<CategoryTypes />
			<Pagination>1 2 3 4 5</Pagination>
		</CategorySection>
	)
}

export default Categories
