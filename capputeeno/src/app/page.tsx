import Categories from '@/components/Categories/Categories'
import styles from './page.module.css'
import ProductListing from '@/components/ProductListing/ProductListing'

export default function Home() {
	return (
		<main className={styles.main}>
			<Categories />
			<ProductListing />
		</main>
	)
}
