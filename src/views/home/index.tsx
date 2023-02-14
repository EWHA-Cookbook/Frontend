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
    <div className="md:hero p-4">
      <svg className="">
        <ellipse></ellipse>
      </svg>
      <div className="md:hero-content flex flex-col">
        <div className="flex flex-col flex-start mt-6 left-0 top-0 ">
          <div className="text-sm font-normal align-bottom text-right text-slate-600 mt-4">v{pkg.version}</div>
          <Image className="inline" src="/Logo.png" alt="cookbook icon" width={391} height={70} />
          <div className="w-38 h-1.5 border-t-2 border-b-1 border-black"></div>
          <h1 className="font-serif text-left text-5xl md:pl-12 font-bold text-transparent text-inherit">
            Solana Cookbook
          </h1>
        </div>
        <h4 className="mt-52 md:w-full text-2x1 md:text-4xl text-center text-slate-300 my-2">
          <p className="font-serif font-normal text-black">
            {' '}
            See more <br /> Dishes
          </p>
          <p>Arrow</p>
        </h4>
        <div className="flex flex-col mt-20 border-1 border-black py-42.5">
          <div className=""></div>
        </div>
      </div>
    </div>
  );
};
