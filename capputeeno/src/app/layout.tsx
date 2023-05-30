import './globals.css'
import { Saira } from 'next/font/google'

const saira = Saira({
	weight: ['300', '400', '500', '600'],
	subsets: ['latin']
})

export const metadata = {
	title: 'Capputeeno',
	description: 'Coffee and t-shirts'
}

export default function RootLayout({
	children
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='en'>
			<body className={saira.className}>{children}</body>
		</html>
	)
}
