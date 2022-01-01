const fs = require("fs");
const path = require("path");
const Caver = require('caver-js');
const events = require("events");
const bigInt = require("big-integer");
const keyInfo = require("./keystore-0x3b83735cb454e79809b6e6d38487a6463c6e0d62-2021-12-20(1).json");
const keyInfo2 = require("./keystore-0xccef2a9fd0818064e4d7206a730f9f123609e9a4-2021-12-22.json");

// 727 ~ 737
require("dotenv").config();
let em = new events.EventEmitter();

const privateKey = process.env.PRIVATE_KEY;
const PASSWORD = process.env.PASSWORD;
const TESTNET = process.env.TESTNET;
const LASTNUM = process.env.LAST_NUMBER;

const caver = new Caver(TESTNET);

const dec = caver.wallet.keyring.decrypt(keyInfo, PASSWORD);
caver.wallet.add(dec);
const dec2 = caver.wallet.keyring.decrypt(keyInfo2, PASSWORD);
caver.wallet.add(dec2);

const NFT_COLLECTION_ADDRESS = caver.utils.toChecksumAddress("0x5bd8bd0c4ebcb16c932ca0584fea6b9c1df0dd17");
const NFT_MARKET_ADDRESS = caver.utils.toChecksumAddress("0xa82dEbb67E429b5Fe2FBB37129f81f293C3A5893");

const OWNER_ADDRESS = caver.utils.toChecksumAddress("0x3b83735cb454e79809b6e6d38487a6463c6e0d62");
const OWNER_ADDRESS2 = caver.utils.toChecksumAddress("0xccef2a9fd0818064e4d7206a730f9f123609e9a4");

// contract(NFT 발행) 객체 생성
let rawdata = fs.readFileSync(path.resolve(__dirname, "../build/contracts/NFTCollection.json"));
let contractAbi = JSON.parse(rawdata);
const NFT_COL_ABI = contractAbi.abi;
const NFT_COL_CONTRACT = new caver.contract(NFT_COL_ABI, NFT_COLLECTION_ADDRESS);

let rawdata2 = fs.readFileSync(path.resolve(__dirname, "../build/contracts/NFTMarket.json"));
let contractAbi2 = JSON.parse(rawdata2);
const NFT_MARKET_ABI = contractAbi2.abi;
const NFT_MARKET_CONTRACT = new caver.contract(NFT_MARKET_ABI, NFT_MARKET_ADDRESS);

async function Buy() {
    try{
        let exchanged_num = process.env.EXCHANGED_NUMBER;
        console.log(Number(exchanged_num) +1);
        let exchange_tx = await NFT_MARKET_CONTRACT.methods.fillOffer().send({from: OWNER_ADDRESS, gas:500000, value: 1*10**15});
        console.log(exchange_tx);
        let line = fs.readFileSync("./.env", "utf-8");
        let line_box = line.split("\n");
        // EXCHANGED_NUMBER 초기화 -> fulfill된 마지막 offerId 저장
        if (line_box.length === 8){
            line_box[5] = `EXCHANGED_NUMBER = ${Number(exchanged_num)+1}`;
            fs.writeFileSync("./.env", line_box[0]+"\n"+line_box[1] + "\n" + line_box[2] + "\n" + line_box[3] + "\n" + line_box[4]);
            fs.appendFileSync("./.env", "\n" +line_box[5]);
            fs.appendFileSync("./.env", "\n" +line_box[6]);
            fs.appendFileSync("./.env", "\n" +line_box[7]);
        }
    } catch(e){
        console.log("ERROR IS: "+e);
    }
}

Buy();