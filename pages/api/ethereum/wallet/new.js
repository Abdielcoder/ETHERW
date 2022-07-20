import { ethers } from "ethers";
var Mnemonic = require('bitcore-mnemonic');
var code = new Mnemonic(Mnemonic.Words.SPANISH);
code.toString();
var xpriv = code.toHDPrivateKey();
var wallet = new CoinKey.createRandom();
export default function newWallet(req, res) {
  const wallet = ethers.Wallet.createRandom();

  const response = {
    privateKey: wallet.privateKey,
    address: wallet.address,
    mnemonic: code.toString(),
  };

  res.json({ data: response });
}