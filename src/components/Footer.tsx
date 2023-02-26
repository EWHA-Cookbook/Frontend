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
                            <div className="flex flex-col mt-6 left-0 top-0 w-fit">
                                <Image className="inline" src="/Logo.png" alt="cookbook icon" width={200} height={47.88} />
                                <div className="w-35 h-1.5 border-t-2 border-b-1 border-solid border-black"></div>
                                    <h1 className="font-serif text-left text-xl md:mx-5 font-bold text-inherit">Solana Cookbook</h1>
                                <div className="w-35 h-1.5 border-t-1 border-b-2 border-black"></div>
                            </div>
                        </div>
                </div>
                        <div className="mb-6 items-center mx-auto max-w-screen-lg border">
                            <div className="font-normal mb-2.5">Copyrights 2022. Solana Cookbook.  All rights reserved</div>
                        </div>
                        <div className="mb-6 items-center mx-auto max-w-screen-lg">
                            {/*Be The Solana Chef  */}
                            <Image className="inline" src="/Logo.png" alt="cookbook icon" width={200} height={47.88} />
                            <div className="mb-6 items-center mx-auto max-w-screen-lg">
                            {/* Discord Twitter Solana EWHA-CHAIN*/}
                            </div>            
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};
