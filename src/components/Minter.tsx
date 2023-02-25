import { ShdwDrive, ShadowFile} from "@shadow-drive/sdk";
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import {clusterApiUrl, Connection, Keypair, PublicKey} from "@solana/web3.js";
import { FC, useCallback } from 'react';
import { notify } from "../utils/notifications";

// requirements stuff
export const Minter: FC = () => {
    const { publicKey} = useWallet();
    const { connection } = useConnection();
    const fs = require("fs");

  
    // const kp = loadKeypair("minf8m9eFyp7292L77V9yfTYEgUoDW476ZkqoXng9Bi.json");
    // const wallet = new anchor.Wallet(kp);
  
    const onClick = useCallback(async () => {
    if (!publicKey) {
        notify({ type: 'error', message: `Wallet not connected!` });
        console.log('error', `Send Transaction: Wallet not connected!`);
        return;
    }
    try {

        console.log(publicKey);
        const drive = await new ShdwDrive(connection, publicKey).init();
    }catch (error: any) {
        notify({ type: 'error', message: `Airdrop failed!`, description: error?.message });
        console.log('error', `Airdrop failed! ${error?.message}`);
    }
    // const resp = await drive.createStorageAccount("Recipe Book","100MB","v2");
    // console.log(resp.transaction_signature);
    // console.log(resp.shdw_bucket); 
    // notify({ type: 'success', message: `Transaction succesful!`, txid:resp.transaction_signature });
    // notify({ type: 'success', message: `Transaction succesful!`, txid:resp.shdw_bucket});
    
   
}, [publicKey, notify, connection]);

    // async function UploadCollectionJSON(){
    //     const drive = await new ShdwDrive(connection, wallet).init();
    //     const bucket = "CL4s5cFeeRe4tc4ihrPkNpbqWNVykKyZRtHvdwTSWDnH";//createAccountBucket();
    //     // const fileBuff = fs.readFileSync("orca.json"); //https://shdw-drive.genesysgo.net/CL4s5cFeeRe4tc4ihrPkNpbqWNVykKyZRtHvdwTSWDnH/orca.png
        
    // const numbers = Array.from(Array(30).keys());
    // const files_images = numbers.map(idx=>
    //     {
    //         const fileBuff = fs.readFileSync('monkeys/monkeys_png/'+'monkey_'+(idx+1)+'.png'); //https://shdw-drive.genesysgo.net/CL4s5cFeeRe4tc4ihrPkNpbqWNVykKyZRtHvdwTSWDnH/orca.png
    //         console.log('monkey_'+(idx+1)+'.png');
    //         const fileToUpload: ShadowFile = {
    //         name:'monkey_'+(idx+1)+'.png',
    //         file:fileBuff
    //         }
    //         return fileToUpload;
    //     });

    // const resp_1 = await drive.uploadMultipleFiles(new PublicKey(bucket), files_images);
    // resp_1.forEach((r: any) => console.log(r.status));
    // // const resp_2 = await drive.uploadMultipleFiles(new PublicKey(bucket), files_json);
    // // resp_2.forEach((r: any) => console.log(r.status));
    // // console.log(resp.message);
    // // console.log(resp.finalized_locations);
    // };
    // UploadCollectionJSON();

return(
   
    <div className="flex flex-row justify-center">
    <div className="relative group items-center">
        <div className="m-1 absolute -inset-0.5 bg-gradient-to-r from-zinc-500 to-white-500 
        rounded-lg blur opacity-20 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
            <button
                className="group w-60 m-2 btn animate-pulse bg-gradient-to-br from-yellow-500 to-zinc-500 hover:from-white hover:to-purple-300 text-black"
                onClick={onClick} disabled={!publicKey}
            >
                <div className="hidden group-disabled:block ">
                Wallet not connected
                </div>
                 <span className="block group-disabled:hidden" >
                   Storage Memory!!
                </span>
            </button>
     </div>
</div>
);
};