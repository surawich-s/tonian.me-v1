import { useQuery } from '@apollo/client';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import ProjectList from '../components/ProjectList';
import ScrollTopButton from '../components/ScrollTopButton';
import { GET_POSTS } from '../graphql';

export default function Home() {
	const { data, loading } = useQuery(GET_POSTS);

	return (
		<div className="flex min-h-screen flex-col justify-center py-2">
			<Head>
				<title>Surawich Sittsarn</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Navbar />
			<main className="mx-auto flex flex-1 flex-col items-center text-center md:w-3/4">
				{!loading && <ProjectList projects={data.posts.edges} />}
				<ScrollTopButton />
			</main>
		</div>
	);
}
