'use client'

import {
	createContext,
	useContext,
	useEffect,
	useState,
	type PropsWithChildren
} from 'react'
import client from '@/graphql/apollo-client'
import { gql } from '@apollo/client'

interface Product {
	__typename: string
	id: string
	name: string
	description: string
	price_in_cents: number
}
interface AllProductsType {
	allProducts: Product[]
}

interface ContextProps {
	allProducts: Product[]
}

const ProductContext = createContext({} as ContextProps)

export function ProductProvider({ children }: PropsWithChildren) {
	const [allProducts, setAllProducts] = useState<Product[]>([])

	useEffect(() => {
		const fetchData = async () => {
			try {
				const { data }: { data: AllProductsType } = await client.query({
					query: gql`
						query Products {
							allProducts {
								id
								name
								description
								price_in_cents
							}
						}
					`
				})

				setAllProducts(data.allProducts)
			} catch (error) {
				console.error('Could not fetch the data: ', error)
			}
		}

		fetchData()
	}, [])

	return (
		<ProductContext.Provider value={{ allProducts: allProducts }}>
			{children}
		</ProductContext.Provider>
	)
}

export const useProducts = () => useContext(ProductContext)
