var CoinKey = require('coinkey'); 
var Mnemonic = require('bitcore-mnemonic');
var code = new Mnemonic(Mnemonic.Words.SPANISH);
code.toString();
var xpriv = code.toHDPrivateKey();
var wallet = new CoinKey.createRandom();

console.log("SAVE BUT DO NOT SHARE THIS:", wallet.privateKey.toString('hex'));
console.log("Address:", wallet.publicAddress);

export default function newWallet(req, res) {
   
  
    const response = {
      privateKey:  wallet.privateKey.toString('hex'),
      address:  wallet.publicAddress,
      mnemonic: code.toString(),
    };
  
    res.json({ data: response });
  }