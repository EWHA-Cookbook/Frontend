import { FC } from "react";
import { SignMessage } from '../../components/SignMessage';
import { SendTransaction } from '../../components/SendTransaction';
import { SendVersionedTransaction } from '../../components/SendVersionedTransaction';
import { Minter } from '../../components/Minter';
export const MenuView: FC = ({ }) => {

  return (
    <div className="md:hero mx-auto p-4">
      <div className="md:hero-content flex flex-col">
        <h1 className="text-center text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-zinc-500 to-black mt-10 mb-8">
          Menu
        </h1>
        {/* CONTENT GOES HERE */}
        <div className="text-center">
        <Minter />
  
        </div>
      </div>
    </div>
  );
};
