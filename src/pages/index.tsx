import { type NextPage } from "next";
import Head from "next/head";
import HomeSection from "~/components/HomeSection";
import ProcessSection from "~/components/ProcessSection";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Maison Di Giorgio</title>
        <meta name="description" content="Digital Agency Maison Di Giorgio" />
      </Head>
      <main className="w-screen max-w-full overflow-hidden bg-primary">
        <HomeSection />
        <ProcessSection />
        <div className="h-screen w-screen"></div>
      </main>
    </>
  );
};

export default Home;
