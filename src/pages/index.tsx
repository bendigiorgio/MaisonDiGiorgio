import { type NextPage } from "next";
import Head from "next/head";
import AboutSection from "~/components/AboutSection";
import HomeSection from "~/components/HomeSection";
import NavBar from "~/components/NavBar";
import ProcessSection from "~/components/ProcessSection/ProcessSection";

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
        <AboutSection />
        <NavBar />
      </main>
    </>
  );
};

export default Home;
