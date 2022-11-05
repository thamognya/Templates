import '../styles/globals.scss'

export default function RootLayout({
	children
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			<head>
				<title>Document</title>
			</head>
			<body>{children}</body>
		</html>
	)
}