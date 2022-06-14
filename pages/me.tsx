import Head from 'next/head';
import Navbar from '../components/Navbar';
import Profile from '../components/Profile';

export default function Me() {
	return (
		<div className="flex min-h-screen flex-col justify-center py-2">
			<Head>
				<title>About me</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Navbar />
			<main className="mx-auto flex flex-1 flex-col items-center md:mt-10 text-center md:w-3/4">
				<Profile />
			</main>
		</div>
	);
}
