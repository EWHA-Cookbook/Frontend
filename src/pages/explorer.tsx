import type { NextPage } from "next";
import Head from "next/head";
import { ExplorerView } from "../views";

const Mint: NextPage = (props) => {
  return (
    <div>
      <Head>
        <title>Solana Scaffold</title>
        <meta
          name="description"
          content="Explorer Functionality"
        />
      </Head>
      <ExplorerView />
    </div>
  );
};

export default Mint;
