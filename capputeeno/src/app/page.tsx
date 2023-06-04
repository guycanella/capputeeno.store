'use client'

import Categories from '@/components/Categories/Categories'
import styles from './page.module.css'
import { useProducts } from '@/context/products-context'

export default function Home() {
	const { allProducts } = useProducts()

	return (
		<main className={styles.main}>
			<Categories />
			<p>{JSON.stringify(allProducts, null, 2)}</p>
		</main>
	)
}
