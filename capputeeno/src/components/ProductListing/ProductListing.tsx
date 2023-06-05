'use client'

import { useProducts } from '@/context/products-context'

const ProductListing = () => {
	const { allProducts } = useProducts()

	return <p>{JSON.stringify(allProducts, null, 2)}</p>
}

export default ProductListing
