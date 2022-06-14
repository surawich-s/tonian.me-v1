import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
	static async getInitialProps(ctx: any) {
		const initialProps = await Document.getInitialProps(ctx);
		return { ...initialProps };
	}

	render() {
		return (
			<Html
				className="mx-auto my-0 scroll-smooth bg-indigo-200 dark:bg-black"
				lang="en"
			>
				<Head />
				<body className="font-sans">
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
