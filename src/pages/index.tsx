import type { NextPage } from "next";
import Head from "next/head";
import { HomeView } from "../views";

const Home: NextPage = (props) => {
  return (
    <div>
      <Head>
        <title>Solana CookBook Recipe Minter</title>
        <meta
          name="description"
          content="Solana CookBook Main"
        />
      </Head>
      <HomeView />
    </div>
  );
};

export default Home;
