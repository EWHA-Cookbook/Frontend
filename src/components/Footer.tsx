import { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';
export const Footer: FC = () => {
    return (
        <div className="relative mb-40 my-80">
            <footer className="border-t-2 border-[#141414] bg-white hover:text-black absolute w-full" >
                <div className="ml-12 py-12 mr-12">
                    <div className="grid grid-cols-2 md:grid-cols-6 gap-2 md:gap-8 md:space-x-12 relative">
                        <div className='flex flex-col col-span-2 mx-4 items-center md:items-start'>
                            <div className='flex flex-row ml-1'>
                                
                            </div>
                            <div className="flex md:ml-2">
                            <div className="hidden sm:inline w-22 h-22 md:p-2 ml-10">
                                <Link
                                href="http://localhost:3000/"
                                rel="noopener noreferrer"
                                passHref
                                className="text-secondary hover:text-white"
                                >
                                <h1 className="text-center text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-indigo-500 to-fuchsia-500 mt-10 mb-8">
                                    <Image src="/Logo.png" alt="cookbook icon" width={250} height={140} />
                                </h1>
                                </Link>
                            </div>
                        </div>
                </div>
                        <div className="mb-6 items-center mx-auto max-w-screen-lg">
                            <div className="font-normal capitalize mb-2.5">Copyrights 2022. Solana Cookbook.  All rights reserved</div>
                        </div>

                        <div className="mb-6 items-center mx-auto max-w-screen-lg">
                            <h5 className="font-normal capitalize tracking-tight  mb-2.5">BE THE SOLANA CHEF </h5>
                            <div className="mb-6 items-center mx-auto max-w-screen-lg">
                                <h5 className="font-normal capitalize tracking-tight  mb-2.5">DEVELOPERS</h5>
                                <h5 className="font-normal capitalize tracking-tight  mb-2.5">DEVELOPERS</h5>
                            </div>            
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};
