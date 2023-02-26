import type { NextPage } from "next";
import Head from "next/head";
import { MenuView } from "../views";

const Menu: NextPage = (props) => {
  return (
    <div>
      <Head>
        <title>Solana CookBook Recipe Minter</title>
        <meta
          name="description"
          content="Basic Functionality"
        />
      </Head>
      <MenuView />
    </div>
  );
};

export default Menu;
