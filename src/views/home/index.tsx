// Next, React
import { FC, useEffect, useState } from 'react';
import Link from 'next/link';

// Wallet
import { useWallet, useConnection } from '@solana/wallet-adapter-react';

// Components
import { RequestAirdrop } from '../../components/RequestAirdrop';
import pkg from '../../../package.json';

// Store
import useUserSOLBalanceStore from '../../stores/useUserSOLBalanceStore';

// image
import Image from 'next/image';

export const HomeView: FC = ({}) => {
  const wallet = useWallet();
  const { connection } = useConnection();

  const balance = useUserSOLBalanceStore(s => s.balance);
  const { getUserSOLBalance } = useUserSOLBalanceStore();

  useEffect(() => {
    if (wallet.publicKey) {
      console.log(wallet.publicKey.toBase58());
      getUserSOLBalance(wallet.publicKey, connection);
    }
  }, [wallet.publicKey, connection, getUserSOLBalance]);

  return (
    
    <div className="p-4">
   
          
      {/* <svg className="">
        <ellipse></ellipse>
      </svg> */}
      
      <div className="pt-40 px-36 flex flex-col">
        
        <div className="flex flex-col mt-6 left-0 top-0 w-fit">
          <div className="text-sm font-normal align-bottom text-right text-slate-600 mt-4">v{pkg.version}</div>
          
          <Image className="inline" src="/Logo.png" alt="cookbook icon" width={391} height={70} />
          
          <div className="w-38 h-1.5 border-t-2 border-b-1 border-solid border-black"></div>
          <h1 className="font-serif text-left text-7xl md:mx-5 font-bold text-transparent text-inherit">
            Solana Cookbook
          </h1>
          
          
          <div className="w-38 h-1.5 border-t-1 border-b-2 border-black"></div>
        </div>
        <div>
          
        </div>
        
        <h4 className="mt-52 md:w-full text-2xl md:text-4xl text-center text-slate-300 my-2">
          
          <p className="font-serif font-normal text-black">
            {' '}
            See more <br /> Dishes
          </p>
          <p>↓</p>
        </h4>
        <div className="flex grid grid-cols-3 border-1 border-black gap-0 mt-80 py-42.5">
          <div className="col-span-1 bg-transparent">
          <Image src="/minimal1.png" alt="cookbook icon" width={500} height={140} />

          </div>
          <div className="col-span-2 bg-transparent">
            
            <h4 className="py-36 md:w-full text-2xl md:text-4xl text-center text-slate-300 my-2">
              <p className="font-serif font-normal text-black text-center">
                {' '}
                Create <br /> a new Menu
              </p>
              <Link href="/menu">
                <button className="mt-16 rounded-full bg-black color-white text-lg px-11 py-4">Mint</button>
              </Link>
            </h4>
          </div>
          <div className="col-span-2 bg-transparent">
            
            <h4 className="py-36 md:w-full text-2xl md:text-4xl text-center text-slate-300 my-2">
              <p className="font-serif font-normal text-black text-center">
                {' '}
                Create <br /> a new Dish <br /> to an existing Menu
              </p>
              <Link href="/add-dish">
                <button className="mt-16 rounded-full bg-black color-white text-lg px-11 py-4">Mint</button>
              </Link>
            </h4>
          </div>
          <div className="col-span-1 bg-transparent">
          <Image src="/minimal2.png" alt="cookbook icon" width={500} height={140} />
          </div>
          <div className="col-span-1 bg-transparent">
          <Image src="/minimal4.png" alt="cookbook icon" width={500} height={140} />
          </div>
          <div className="col-span-2 bg-transparent">
            <h4 className="py-36 md:w-full text-2x1 md:text-4xl text-center text-slate-300 my-2">
              <p className="font-serif font-normal text-black text-center">
                {' '}
                Create <br /> an Individual Recipe
              </p>
              <Link href="/individual-menu">
                <button className="mt-16 rounded-full bg-black color-white text-lg px-11 py-4">Mint</button>
              </Link>
            </h4>
          </div>
        </div>
        <div className="flex flex-col">
          <h4 className="pt-40 mt-30 text-2xl md:text-4x1 text-start text-black font-sans md:w-full color-black font-semibold">
            Need more Recipes?
          </h4>
          <h4 className="mt-2 md:w-full text-2xl md:text-2xl font-serif font-normal text-black my-2 text-right">
            <Link href="/explorer">more </Link>
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-x-9 h-40">
            <div className="bg-white border-black border-1 border-solid">a</div>
            <div className="bg-white border-black border-1 border-solid">b</div>
            <div className="bg-white border-black border-1 border-solid">c</div>
            <div className="bg-white border-black border-1 border-solid">c</div>
          </div>
        </div>
      </div>
  </div>
 
  );
};
