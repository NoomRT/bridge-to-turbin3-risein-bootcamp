import { Keypair } from "@solana/web3.js";
// Now we're going to create a new Keypair, like so:

// Generate a new keypair
let kp = Keypair.generate();
console.log(`You've generated a new Solana wallet: ${kp.publicKey.toBase58()}`);
console.log(`Solana wallet Secret Key: ${kp.secretKey}`);

// to save wallet locally
// touch dev-wallet.json
