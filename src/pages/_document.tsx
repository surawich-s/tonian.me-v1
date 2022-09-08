import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
    static async getInitialProps(ctx: any) {
        const initialProps = await Document.getInitialProps(ctx);
        return { ...initialProps };
    }

    render() {
        return (
            <Html className="mx-auto my-0 scroll-smooth" lang="en">
                <Head />
                <body className="font-sans text-black dark:text-white bg-slate-50 dark:bg-black">
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
