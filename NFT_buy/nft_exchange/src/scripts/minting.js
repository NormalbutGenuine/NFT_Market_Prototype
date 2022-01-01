const fs = require("fs");
const path = require("path");
const Caver = require('caver-js');
const events = require("events");
const bigInt = require("big-integer");
const keyInfo = require("./keystore-0x3b83735cb454e79809b6e6d38487a6463c6e0d62-2021-12-20(1).json");
const keyInfo2 = require("./keystore-0xccef2a9fd0818064e4d7206a730f9f123609e9a4-2021-12-22.json");

require("dotenv").config();

let em = new events.EventEmitter();

const privateKey = process.env.PRIVATE_KEY;
const PASSWORD = process.env.PASSWORD;
const TESTNET = process.env.TESTNET;
const ORDER = process.env.ORDER_AMOUNT;

const caver = new Caver(TESTNET);
const dec = caver.wallet.keyring.decrypt(keyInfo2, PASSWORD);
caver.wallet.add(dec);
const dec2 = caver.wallet.keyring.decrypt(keyInfo, PASSWORD);
caver.wallet.add(dec2);
// 지갑에 주소가 들어있어야 sign할 수 있다.
//caver.wallet.getKeyring(dec.address)._address
console.log(caver.wallet.getKeyring(dec.address));
const NFT_COLLECTION_ADDRESS = caver.utils.toChecksumAddress("0x1220b5043df9019023cd31460a2e58090927b9ce");
const NFT_MARKET_ADDRESS = caver.utils.toChecksumAddress("0xaf82a8E0aC01AA78E7B75267C47C440A6ea71C55");

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

// 직전에 발행했던 토큰의 최종 번호 호출(checkNum.txt 파일에 저장되어 있음)
let start_Number = process.env.LAST_NUMBER;
let counter = Number(start_Number)+1;
console.log("Start Number is: "+counter);
let last_Number = 0;
// 설정된 발행 갯수만큼 발행하기 위해 초기에 시작하는 숫자
let check_num = 1;
let URI = process.env.BASEURI;

async function NFT_Mint(){
    try{
		// ORDER(발행하고자 하는 토큰의 갯수) 보다 check_num이 크다면 발행이 모두 끝난 것이므로 조건 설정
		if (Number(ORDER) >= check_num){
			try {
				let tx = await NFT_COL_CONTRACT.methods.safeMint(`${URI}/${counter}.json`).send({from: OWNER_ADDRESS2, gas:500000});
				console.log(tx.events.Transfer.raw);
				counter = counter + 1;
				console.log("발행된 갯수: "+check_num);
				check_num = check_num + 1;
				// tx의 이벤트로그를 추출해서 tokenID를 구한다.
				let tokenID = bigInt(tx.events.Transfer.raw.topics[3].substr(2, 66), 16);
				tokenID = tokenID.value;
				tokenID = String(tokenID).substring(0, String(tokenID).length);
				console.log(tokenID);
				// 구한 tokenID를 tokenURI함수의 인자로 넣어서 해당 토큰의 URI를 리턴받는다.
				let getURI = await NFT_COL_CONTRACT.methods.tokenURI(Number(tokenID)).call();
				console.log(getURI);
				last_Number = String(getURI).replace(/[^0-9]/g,'');
				console.log("current last number is: "+last_Number);
				// 판매 컨트랙트에 토큰의 운영권을 승인한다.
				await NFT_COL_CONTRACT.methods.approve(NFT_MARKET_ADDRESS, Number(tokenID)).send({from: OWNER_ADDRESS2, gas: 500000});
				// 판매등록
				await NFT_MARKET_CONTRACT.methods.makeOffer(Number(tokenID), 1*10**15).send({from: OWNER_ADDRESS2, gas: 500000});
				// tx가 발생했다면 (컨트랙트가 성공적으로 safeMint함수를 실행했다면 mint!이벤트를 emit한다.)
				em.emit("mint!", tx);
			} catch (e){
				console.log("ERROR OCCURED: "+e);
				let save_num = Number(ORDER) - (check_num-1);
				let line = fs.readFileSync("./.env", "utf-8");
				let line_box = line.split("\n");
				console.log(line_box.length);
				if (line_box.length === 8){
					console.log("Fail");
					fs.writeFileSync("./.env", line_box[0]+"\n"+line_box[1] + "\n" + line_box[2] + "\n" + line_box[3] + "\n" + line_box[4] + "\n" + line_box[5]);
					fs.appendFileSync("./.env", "\n" + "ORDER_AMOUNT= "+save_num);
					fs.appendFileSync("./.env", "\n"+"LAST_NUMBER= "+last_Number);
				} else{
					fs.appendFileSync("./.env", "\n"+"LAST_NUMBER= "+last_Number);
				}
			}
		} else {
			console.log("END");
			let line = fs.readFileSync("./.env", "utf-8");
			let line_box = line.split("\n");
			let save_num = Number(ORDER) - (check_num-1);
			if (line_box.length === 8){
				fs.writeFileSync("./.env", line_box[0]+"\n"+line_box[1] + "\n" + line_box[2] + "\n" + line_box[3] + "\n" + line_box[4] + "\n" + line_box[5]);
				fs.appendFileSync("./.env", "\n" + "ORDER_AMOUNT= "+save_num);
				fs.appendFileSync("./.env", "\n"+"LAST_NUMBER= "+last_Number);
			} else{
				fs.appendFileSync("./.env", "\n" + "ORDER_AMOUNT= "+save_num);
				fs.appendFileSync("./.env", "\n"+"LAST_NUMBER= "+last_Number);
			}
		}
    } catch(e){
        console.log(e);
    }
}

em.on("mint!", function(data){
    setTimeout(() => NFT_Mint(), 1000);
});

NFT_Mint();
// fs.writeFile("./checkNum.txt", String(last_Number)+"\n", function(err){
// 	if (err === null) {
// 		console.log("success");
// 	} else{
// 		console.log("fail");
// 	}
// });