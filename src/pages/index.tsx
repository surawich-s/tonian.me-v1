import Head from "next/head";
import Layout from "../components/Layout";
import Profile from "../components/Profile";
import ProjectList from "../components/ProjectList";
import data from "../utils/data.json";

export default function Home() {
    return (
        <div className="flex min-h-screen flex-col justify-center">
            <Head>
                <title>Surawich Sittsarn</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Layout>
                <Profile />
                <ProjectList projects={data.projects} />
            </Layout>
        </div>
    );
}
