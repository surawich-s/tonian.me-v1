import { useQuery } from '@apollo/client';
import Head from 'next/head';
import BlogList from '../components/BlogList';
import Navbar from '../components/Navbar';
import ScrollTopButton from '../components/ScrollTopButton';
import { GET_POSTS } from '../graphql';

export default function Blog() {
	const { data, loading } = useQuery(GET_POSTS);

	return (
		<div className="flex min-h-screen flex-col  justify-center py-2">
			<Head>
				<title>Blogs</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Navbar />
			<main className="mx-auto flex flex-1 flex-col items-center text-center md:w-3/4">
				{!loading && <BlogList posts={data.posts.nodes} />}
				<ScrollTopButton />
			</main>
		</div>
	);
}
