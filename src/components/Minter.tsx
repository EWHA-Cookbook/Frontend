import { ShdwDrive, ShadowFile} from "@shadow-drive/sdk";
import {clusterApiUrl, Connection, Keypair, PublicKey} from "@solana/web3.js";
import { FC, useCallback } from 'react';
// requirements stuff
// export const Minter: FC = () => {
//     const fs = require("fs");
//     const anchor = require("@project-serum/anchor");

//     // Load the keypair
//     function loadKeypair(filename: string):Keypair{
//         const secret = JSON.parse(fs.readFileSync(filename).toString()) as number[]
//         const secretKey = Uint8Array.from(secret)
//         return Keypair.fromSecretKey(secretKey)
//     }
//     const connection = new Connection(clusterApiUrl("mainnet-beta")); 
//     const kp = loadKeypair("minf8m9eFyp7292L77V9yfTYEgUoDW476ZkqoXng9Bi.json");
//     const wallet = new anchor.Wallet(kp);

//     async function createAccountBucket(): Promise<string>{
//         const drive = await new ShdwDrive(connection, wallet).init();
//         const resp = await drive.createStorageAccount("Recipe Book","100MB","v2");
//         console.log(resp.transaction_signature);
//         console.log(resp.shdw_bucket); 
//         return resp.shdw_bucket;
//     }


//     async function UploadCollectionJSON(){
//         const drive = await new ShdwDrive(connection, wallet).init();
//         const bucket = "CL4s5cFeeRe4tc4ihrPkNpbqWNVykKyZRtHvdwTSWDnH";//createAccountBucket();
//         // const fileBuff = fs.readFileSync("orca.json"); //https://shdw-drive.genesysgo.net/CL4s5cFeeRe4tc4ihrPkNpbqWNVykKyZRtHvdwTSWDnH/orca.png
        
//     const numbers = Array.from(Array(30).keys());
//     const files_images = numbers.map(idx=>
//         {
//             const fileBuff = fs.readFileSync('monkeys/monkeys_png/'+'monkey_'+(idx+1)+'.png'); //https://shdw-drive.genesysgo.net/CL4s5cFeeRe4tc4ihrPkNpbqWNVykKyZRtHvdwTSWDnH/orca.png
//             console.log('monkey_'+(idx+1)+'.png');
//             const fileToUpload: ShadowFile = {
//             name:'monkey_'+(idx+1)+'.png',
//             file:fileBuff
//             }
//             return fileToUpload;
//         });

//     const resp_1 = await drive.uploadMultipleFiles(new PublicKey(bucket), files_images);
//     resp_1.forEach((r: any) => console.log(r.status));
//     // const resp_2 = await drive.uploadMultipleFiles(new PublicKey(bucket), files_json);
//     // resp_2.forEach((r: any) => console.log(r.status));
//     // console.log(resp.message);
//     // console.log(resp.finalized_locations);
//     };
//     UploadCollectionJSON();
// return(

// );
// };