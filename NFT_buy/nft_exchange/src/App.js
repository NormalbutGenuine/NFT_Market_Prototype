import React, { useEffect, useState } from 'react';
import Caver from 'caver-js';
import keyInfo from "./scripts/keystore-0x3b83735cb454e79809b6e6d38487a6463c6e0d62-2021-12-20(1).json";
import keyInfo2 from "./scripts/keystore-0xccef2a9fd0818064e4d7206a730f9f123609e9a4-2021-12-22.json";
import dotenv from 'dotenv';
import abi from "./build/contracts/NFTMarket.json";
import bigInt from "big-integer";
import "./App.css";

dotenv.config();

console.log(process.env.REACT_APP_PRIVATE_KEY);

const privateKey = process.env.REACT_APP_PRIVATE_KEY;
const PASSWORD = process.env.REACT_APP_PASSWORD;
const TESTNET = process.env.REACT_APP_TESTNET;
const LASTNUM = process.env.REACT_APP_LAST_NUMBER;

const {klaytn} = window;

const caver = new Caver(klaytn);

const dec = caver.wallet.keyring.decrypt(keyInfo, PASSWORD);
caver.wallet.add(dec);
const dec2 = caver.wallet.keyring.decrypt(keyInfo2, PASSWORD);
caver.wallet.add(dec2);

const NFT_COLLECTION_ADDRESS = caver.utils.toChecksumAddress("0x1220b5043df9019023cd31460a2e58090927b9ce");
const NFT_MARKET_ADDRESS = caver.utils.toChecksumAddress("0xa82dEbb67E429b5Fe2FBB37129f81f293C3A5893");

const OWNER_ADDRESS = caver.utils.toChecksumAddress("0x3b83735cb454e79809b6e6d38487a6463c6e0d62");
const OWNER_ADDRESS2 = caver.utils.toChecksumAddress("0xccef2a9fd0818064e4d7206a730f9f123609e9a4");

let abip = JSON.stringify(abi);

abip = Buffer.from(abip, "utf-8");
let pabi = JSON.parse(abip);
// caver."klay".Contract
const NFT_MARKET_CONTRACT = new caver.klay.Contract(pabi.abi, NFT_MARKET_ADDRESS);
let sh = "";
let tid = "";

const App = () => {
  const [visible, setVisible] = useState(false);
  const [visible2, setVisible2] = useState(false);
  
  async function Buy() {
    
    try {
      const accounts = await klaytn.enable();
      console.log(accounts);
      console.log(klaytn.selectedAddress);

      let exchange_tx = await NFT_MARKET_CONTRACT.methods.fillOffer().send({
        from: accounts[0],
        value: 1*10**15,
        gas: 5000000,
      });
      console.log(exchange_tx);

      let tokenID = bigInt(exchange_tx.events[1].raw.topics[3].substr(2, 66), 16);
      tokenID = tokenID.value;
      tokenID = String(tokenID).substring(0, String(tokenID).length);
      sh = String(exchange_tx.transactionHash);
      setVisible((visible) => !visible);
      tid = tokenID;
      setVisible2((visible2) => !visible2);
      console.log(sh);
    } catch (e) {
      console.log("ERROR IS: " + e);
    }
  }

  return (
    <div className="App">
      <input type="button" value="Buy" id="mintButton" onClick={Buy}></input>
      <h2 id="token">tokenID:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {tid}</h2>
      <h2 id="result">result:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {sh}</h2>
      <h2 id="price">Price:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 0.001KLAY</h2>
    </div>

  )
}

export default App;