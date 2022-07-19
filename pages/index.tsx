import Head from "next/head";
import Navbar from "../components/Navbar";
import ProjectList from "../components/ProjectList";
import ScrollTopButton from "../components/ScrollTopButton";
import data from "../utils/data.json";

export default function Home() {
    return (
        <div className="flex min-h-screen flex-col justify-center py-2">
            <Head>
                <title>Surawich Sittsarn</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar />
            <main className="mx-auto flex flex-1 flex-col items-center text-center w-4/5 md:w-3/4">
                <ProjectList projects={data.projects} />
                <ScrollTopButton />
            </main>
        </div>
    );
}
