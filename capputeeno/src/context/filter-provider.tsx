'use client'

import {
	createContext,
	useContext,
	useEffect,
	useState,
	type PropsWithChildren,
	type Dispatch,
	type SetStateAction
} from 'react'

interface FilterContextProps {
	currentCategory: CategoryType
	currentFilter: FilterType
	priceOrder: typeof priceOrder
	setCurrentCategory: Dispatch<SetStateAction<CategoryType>>
	setCurrentFilter: Dispatch<SetStateAction<FilterType>>
}

type FilterType = (typeof priceOrder)[keyof typeof priceOrder]

const FilterContext = createContext({} as FilterContextProps)

export enum CategoryType {
	All,
	Tshirts,
	Mugs
}

const priceOrder = {
	news: 'Novidades',
	price_desc: 'Preço: Maior - menor',
	price_asc: 'Preço: Menor - maior',
	top_selling: 'Mais vendidos'
} as const

export function FilterProvider({ children }: PropsWithChildren) {
	const [currentCategory, setCurrentCategory] = useState<CategoryType>(
		CategoryType.All
	)
	const [currentFilter, setCurrentFilter] = useState<FilterType>(
		priceOrder.news
	)

	return (
		<FilterContext.Provider
			value={{
				currentCategory,
				currentFilter,
				priceOrder,
				setCurrentCategory,
				setCurrentFilter
			}}
		>
			{children}
		</FilterContext.Provider>
	)
}

export const useFilter = () => useContext(FilterContext)
