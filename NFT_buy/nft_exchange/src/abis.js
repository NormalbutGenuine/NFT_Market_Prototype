module.exports = [
  {
    "contractName": "NFTMarket",
    "abi": [
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "_nftCollection",
            "type": "address"
          }
        ],
        "stateMutability": "nonpayable",
        "type": "constructor"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "address",
            "name": "user",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "amount",
            "type": "uint256"
          }
        ],
        "name": "ClaimFunds",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "offerId",
            "type": "uint256"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "token_id",
            "type": "uint256"
          },
          {
            "indexed": false,
            "internalType": "address",
            "name": "user",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "price",
            "type": "uint256"
          },
          {
            "indexed": false,
            "internalType": "bool",
            "name": "fulfilled",
            "type": "bool"
          },
          {
            "indexed": false,
            "internalType": "bool",
            "name": "cancelled",
            "type": "bool"
          }
        ],
        "name": "Offer",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "offerId",
            "type": "uint256"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "id",
            "type": "uint256"
          },
          {
            "indexed": false,
            "internalType": "address",
            "name": "owner",
            "type": "address"
          }
        ],
        "name": "OfferCancelled",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "offerId",
            "type": "uint256"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "id",
            "type": "uint256"
          },
          {
            "indexed": false,
            "internalType": "address",
            "name": "newOwner",
            "type": "address"
          }
        ],
        "name": "OfferFilled",
        "type": "event"
      },
      {
        "stateMutability": "nonpayable",
        "type": "fallback"
      },
      {
        "inputs": [],
        "name": "fillCount",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
      },
      {
        "inputs": [],
        "name": "offerCount",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "name": "offers",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "offerId",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "token_id",
            "type": "uint256"
          },
          {
            "internalType": "address",
            "name": "user",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "price",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "fulfilled",
            "type": "bool"
          },
          {
            "internalType": "bool",
            "name": "cancelled",
            "type": "bool"
          }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "_id",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "_price",
            "type": "uint256"
          }
        ],
        "name": "makeOffer",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "fillOffer",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function",
        "payable": true
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "_offerId",
            "type": "uint256"
          }
        ],
        "name": "cancelOffer",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      }
    ],
    "metadata": "{\"compiler\":{\"version\":\"0.8.4+commit.c7e474f2\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_nftCollection\",\"type\":\"address\"}],\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"address\",\"name\":\"user\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"ClaimFunds\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"offerId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"token_id\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"address\",\"name\":\"user\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"price\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"fulfilled\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"cancelled\",\"type\":\"bool\"}],\"name\":\"Offer\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"offerId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"id\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"}],\"name\":\"OfferCancelled\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"offerId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"id\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"address\",\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"OfferFilled\",\"type\":\"event\"},{\"stateMutability\":\"nonpayable\",\"type\":\"fallback\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_offerId\",\"type\":\"uint256\"}],\"name\":\"cancelOffer\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"fillCount\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"fillOffer\",\"outputs\":[],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_id\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_price\",\"type\":\"uint256\"}],\"name\":\"makeOffer\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"offerCount\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"offers\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"offerId\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"token_id\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"user\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"price\",\"type\":\"uint256\"},{\"internalType\":\"bool\",\"name\":\"fulfilled\",\"type\":\"bool\"},{\"internalType\":\"bool\",\"name\":\"cancelled\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"/C/Users/dev04/Desktop/Project/Klaytn_Exchange/contracts/NFT_Exchange.sol\":\"NFTMarket\"},\"evmVersion\":\"istanbul\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":false,\"runs\":200},\"remappings\":[]},\"sources\":{\"/C/Users/dev04/Desktop/Project/Klaytn_Exchange/contracts/NFTCollection.sol\":{\"keccak256\":\"0x34683848dfe4b1135eb990d79dd3870e5ff182bcfb25eb391a937c40f8a173df\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://45734656317000343f59a3e8226eba160ca599f6ec9196ad247c6b43763fd0ef\",\"dweb:/ipfs/QmeARRXnCj3FLgYpn2TewwCP6vRtXLdSKCyjMCB2PDpGi1\"]},\"/C/Users/dev04/Desktop/Project/Klaytn_Exchange/contracts/NFT_Exchange.sol\":{\"keccak256\":\"0x1a0dc8c37d91352218041b85f1ac5665aa68b555679b2bb9ab69ed4c163bec1e\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://a97134bc93d3aea59712075f00c1a023e1fe0b10d848d8c999c2ab75b7486011\",\"dweb:/ipfs/QmTyf6kEeFXwWegeGrKKWcQKr5UNVUsguAasYhQ6aqeZww\"]},\"@openzeppelin/contracts/token/ERC721/ERC721.sol\":{\"keccak256\":\"0x81c02855bc239e16ec09eee000a8bec691424c715188d6d881037e69c45414c4\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://46e3ecc8920aeb78c362a387520fe28e022cdc6d04256d9e5874eb8ff6868b6d\",\"dweb:/ipfs/QmdfCTHrV6CZMGiM3KqGF8tWkdNvGpEmWFyy72X1LAHsz2\"]},\"@openzeppelin/contracts/token/ERC721/IERC721.sol\":{\"keccak256\":\"0x516a22876c1fab47f49b1bc22b4614491cd05338af8bd2e7b382da090a079990\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://a439187f7126d31add4557f82d8aed6be0162007cd7182c48fd934dbab8f3849\",\"dweb:/ipfs/QmRPLguRFvrRJS7r6F1bcLvsx6q1VrgjEpZafyeL8D7xZh\"]},\"@openzeppelin/contracts/token/ERC721/IERC721Receiver.sol\":{\"keccak256\":\"0xd5fa74b4fb323776fa4a8158800fec9d5ac0fec0d6dd046dd93798632ada265f\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://33017a30a99cc5411a9e376622c31fc4a55cfc6a335e2f57f00cbf24a817ff3f\",\"dweb:/ipfs/QmWNQtWTPhA7Lo8nbxbc8KFMvZwbFYB8fSeEQ3vuapSV4a\"]},\"@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol\":{\"keccak256\":\"0x0a79511df8151b10b0a0004d6a76ad956582d32824af4c0f4886bdbdfe5746e5\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://afbedcf17f31db719e6fdc56caa8f458799c5fa2eb94cb1e94ef18f89af85768\",\"dweb:/ipfs/QmVmqRdBfbgYThpZSoAJ5o9mnAMjx8mCHHjv3Rh8cQAAg3\"]},\"@openzeppelin/contracts/token/ERC721/extensions/IERC721Enumerable.sol\":{\"keccak256\":\"0x483f88fbbb1d6d75000fbe8ce14279b5e6121cd5a29ff5f1b91fed407735a6c3\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://51cbe83f9ccd8619d58ca5458ff49c470c656a45856b0e7435eebf5f5d431bf1\",\"dweb:/ipfs/QmZwR7nwu4hzVJW2m3JTPyjUopoxZUxjYLSgcSK5D4F7E2\"]},\"@openzeppelin/contracts/token/ERC721/extensions/IERC721Metadata.sol\":{\"keccak256\":\"0x75b829ff2f26c14355d1cba20e16fe7b29ca58eb5fef665ede48bc0f9c6c74b9\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://a0a107160525724f9e1bbbab031defc2f298296dd9e331f16a6f7130cec32146\",\"dweb:/ipfs/QmemujxSd7gX8A9M8UwmNbz4Ms3U9FG9QfudUgxwvTmPWf\"]},\"@openzeppelin/contracts/utils/Address.sol\":{\"keccak256\":\"0x51b758a8815ecc9596c66c37d56b1d33883a444631a3f916b9fe65cb863ef7c4\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://997ca03557985b3c6f9143a18b6c3a710b3bc1c7f189ee956d305a966ecfb922\",\"dweb:/ipfs/QmQaD3Wb62F88SHqmpLttvF6wKuPDQep2LLUcKPekeRzvz\"]},\"@openzeppelin/contracts/utils/Context.sol\":{\"keccak256\":\"0xe2e337e6dde9ef6b680e07338c493ebea1b5fd09b43424112868e9cc1706bca7\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://6df0ddf21ce9f58271bdfaa85cde98b200ef242a05a3f85c2bc10a8294800a92\",\"dweb:/ipfs/QmRK2Y5Yc6BK7tGKkgsgn3aJEQGi5aakeSPZvS65PV8Xp3\"]},\"@openzeppelin/contracts/utils/Strings.sol\":{\"keccak256\":\"0x32c202bd28995dd20c4347b7c6467a6d3241c74c8ad3edcbb610cd9205916c45\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://8179c356adb19e70d6b31a1eedc8c5c7f0c00e669e2540f4099e3844c6074d30\",\"dweb:/ipfs/QmWFbivarEobbqhS1go64ootVuHfVohBseerYy9FTEd1W2\"]},\"@openzeppelin/contracts/utils/introspection/ERC165.sol\":{\"keccak256\":\"0xd10975de010d89fd1c78dc5e8a9a7e7f496198085c151648f20cba166b32582b\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://fb0048dee081f6fffa5f74afc3fb328483c2a30504e94a0ddd2a5114d731ec4d\",\"dweb:/ipfs/QmZptt1nmYoA5SgjwnSgWqgUSDgm4q52Yos3xhnMv3MV43\"]},\"@openzeppelin/contracts/utils/introspection/IERC165.sol\":{\"keccak256\":\"0x447a5f3ddc18419d41ff92b3773fb86471b1db25773e07f877f548918a185bf1\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://be161e54f24e5c6fae81a12db1a8ae87bc5ae1b0ddc805d82a1440a68455088f\",\"dweb:/ipfs/QmP7C3CHdY9urF4dEMb9wmsp1wMxHF6nhA2yQE5SKiPAdy\"]}},\"version\":1}",
    "bytecode": "0x608060405234801561001057600080fd5b50604051620011ef380380620011ef83398181016040528101906100349190610090565b80600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050610102565b60008151905061008a816100eb565b92915050565b6000602082840312156100a257600080fd5b60006100b08482850161007b565b91505092915050565b60006100c4826100cb565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6100f4816100b9565b81146100ff57600080fd5b50565b6110dd80620001126000396000f3fe6080604052600436106100595760003560e01c806305b7cdd31461006c5780631115c24d146100955780634abe6a1d146100c05780636051e4dc146100ca5780638a72ea6a146100f5578063ef706adf146101375761005a565b5b34801561006657600080fd5b50600080fd5b34801561007857600080fd5b50610093600480360381019061008e9190610a02565b610160565b005b3480156100a157600080fd5b506100aa610357565b6040516100b79190610cba565b60405180910390f35b6100c861035d565b005b3480156100d657600080fd5b506100df6106b4565b6040516100ec9190610cba565b60405180910390f35b34801561010157600080fd5b5061011c600480360381019061011791906109d9565b6106ba565b60405161012e96959493929190610d0c565b60405180910390f35b34801561014357600080fd5b5061015e600480360381019061015991906109d9565b610730565b005b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166323b872dd3330856040518463ffffffff1660e01b81526004016101bf93929190610b83565b600060405180830381600087803b1580156101d957600080fd5b505af11580156101ed573d6000803e3d6000fd5b5050505060008081548092919061020390610dc6565b91905055506040518060c0016040528060005481526020018381526020013373ffffffffffffffffffffffffffffffffffffffff168152602001828152602001600015158152602001600015158152506002600080548152602001908152602001600020600082015181600001556020820151816001015560408201518160020160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506060820151816003015560808201518160040160006101000a81548160ff02191690831515021790555060a08201518160040160016101000a81548160ff0219169083151502179055509050507f93e711896d4ef527d199d7e101922e20f918cbb248a0fb0977c52fda24aa1f1d60005483338460008060405161034b96959493929190610d0c565b60405180910390a15050565b60005481565b6001600081548092919061037090610dc6565b9190505550600060026000600154815260200190815260200160002090506001548160000154146103d6576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103cd90610c5a565b60405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff168160020160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161415610469576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161046090610bba565b60405180910390fd5b8060040160009054906101000a900460ff16156104bb576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104b290610c1a565b60405180910390fd5b8060040160019054906101000a900460ff161561050d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161050490610bda565b60405180910390fd5b80600301543414610553576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161054a90610c7a565b60405180910390fd5b60018160040160006101000a81548160ff021916908315150217905550600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166323b872dd303384600101546040518463ffffffff1660e01b81526004016105d393929190610b83565b600060405180830381600087803b1580156105ed57600080fd5b505af1158015610601573d6000803e3d6000fd5b505050508060020160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc349081150290604051600060405180830381858888f1935050505015801561066f573d6000803e3d6000fd5b507fd9157c065213ada613694e84b1e27fe2efd62d85c6b82bd6c842a4999491e72a6001548260010154336040516106a993929190610cd5565b60405180910390a150565b60015481565b60026020528060005260406000206000915090508060000154908060010154908060020160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060030154908060040160009054906101000a900460ff16908060040160019054906101000a900460ff16905086565b60006002600083815260200190815260200160002090508181600001541461078d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161078490610c5a565b60405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff168160020160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161461081f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161081690610c9a565b60405180910390fd5b600015158160040160009054906101000a900460ff16151514610877576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161086e90610bfa565b60405180910390fd5b600015158160040160019054906101000a900460ff161515146108cf576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108c690610c3a565b60405180910390fd5b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166323b872dd303384600101546040518463ffffffff1660e01b815260040161093293929190610b83565b600060405180830381600087803b15801561094c57600080fd5b505af1158015610960573d6000803e3d6000fd5b5050505060018160040160016101000a81548160ff0219169083151502179055507f5b166b4d0498ff8c4719999cb6154c5d197e6f020f9fbfcf9d347f84576cfab7828260010154336040516109b893929190610cd5565b60405180910390a15050565b6000813590506109d381611090565b92915050565b6000602082840312156109eb57600080fd5b60006109f9848285016109c4565b91505092915050565b60008060408385031215610a1557600080fd5b6000610a23858286016109c4565b9250506020610a34858286016109c4565b9150509250929050565b610a4781610d7e565b82525050565b610a5681610d90565b82525050565b6000610a69602583610d6d565b9150610a7482610e3e565b604082019050919050565b6000610a8c602583610d6d565b9150610a9782610e8d565b604082019050919050565b6000610aaf602583610d6d565b9150610aba82610edc565b604082019050919050565b6000610ad2602283610d6d565b9150610add82610f2b565b604082019050919050565b6000610af5602283610d6d565b9150610b0082610f7a565b604082019050919050565b6000610b18601483610d6d565b9150610b2382610fc9565b602082019050919050565b6000610b3b602f83610d6d565b9150610b4682610ff2565b604082019050919050565b6000610b5e602b83610d6d565b9150610b6982611041565b604082019050919050565b610b7d81610dbc565b82525050565b6000606082019050610b986000830186610a3e565b610ba56020830185610a3e565b610bb26040830184610b74565b949350505050565b60006020820190508181036000830152610bd381610a5c565b9050919050565b60006020820190508181036000830152610bf381610a7f565b9050919050565b60006020820190508181036000830152610c1381610aa2565b9050919050565b60006020820190508181036000830152610c3381610ac5565b9050919050565b60006020820190508181036000830152610c5381610ae8565b9050919050565b60006020820190508181036000830152610c7381610b0b565b9050919050565b60006020820190508181036000830152610c9381610b2e565b9050919050565b60006020820190508181036000830152610cb381610b51565b9050919050565b6000602082019050610ccf6000830184610b74565b92915050565b6000606082019050610cea6000830186610b74565b610cf76020830185610b74565b610d046040830184610a3e565b949350505050565b600060c082019050610d216000830189610b74565b610d2e6020830188610b74565b610d3b6040830187610a3e565b610d486060830186610b74565b610d556080830185610a4d565b610d6260a0830184610a4d565b979650505050505050565b600082825260208201905092915050565b6000610d8982610d9c565b9050919050565b60008115159050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b6000610dd182610dbc565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff821415610e0457610e03610e0f565b5b600182019050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f546865206f776e6572206f6620746865206f666665722063616e6e6f7420666960008201527f6c6c206974000000000000000000000000000000000000000000000000000000602082015250565b7f412063616e63656c6c6564206f666665722063616e6e6f742062652066756c6660008201527f696c6c6564000000000000000000000000000000000000000000000000000000602082015250565b7f412066756c66696c6c6564206f666665722063616e6e6f742062652063616e6360008201527f656c6c6564000000000000000000000000000000000000000000000000000000602082015250565b7f416e206f666665722063616e6e6f742062652066756c66696c6c65642074776960008201527f6365000000000000000000000000000000000000000000000000000000000000602082015250565b7f416e206f666665722063616e6e6f742062652063616e63656c6c65642074776960008201527f6365000000000000000000000000000000000000000000000000000000000000602082015250565b7f546865206f66666572206d757374206578697374000000000000000000000000600082015250565b7f546865204b4c415920616d6f756e742073686f756c64206d617463682077697460008201527f6820746865204e46542050726963650000000000000000000000000000000000602082015250565b7f546865206f666665722063616e206f6e6c792062652063616e63656c6564206260008201527f7920746865206f776e6572000000000000000000000000000000000000000000602082015250565b61109981610dbc565b81146110a457600080fd5b5056fea2646970667358221220e0b3adfad6f5637be9d7c58a721d3a3f68e33d75727c4367481f4f5d5dea181464736f6c63430008040033",
    "deployedBytecode": "0x6080604052600436106100595760003560e01c806305b7cdd31461006c5780631115c24d146100955780634abe6a1d146100c05780636051e4dc146100ca5780638a72ea6a146100f5578063ef706adf146101375761005a565b5b34801561006657600080fd5b50600080fd5b34801561007857600080fd5b50610093600480360381019061008e9190610a02565b610160565b005b3480156100a157600080fd5b506100aa610357565b6040516100b79190610cba565b60405180910390f35b6100c861035d565b005b3480156100d657600080fd5b506100df6106b4565b6040516100ec9190610cba565b60405180910390f35b34801561010157600080fd5b5061011c600480360381019061011791906109d9565b6106ba565b60405161012e96959493929190610d0c565b60405180910390f35b34801561014357600080fd5b5061015e600480360381019061015991906109d9565b610730565b005b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166323b872dd3330856040518463ffffffff1660e01b81526004016101bf93929190610b83565b600060405180830381600087803b1580156101d957600080fd5b505af11580156101ed573d6000803e3d6000fd5b5050505060008081548092919061020390610dc6565b91905055506040518060c0016040528060005481526020018381526020013373ffffffffffffffffffffffffffffffffffffffff168152602001828152602001600015158152602001600015158152506002600080548152602001908152602001600020600082015181600001556020820151816001015560408201518160020160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506060820151816003015560808201518160040160006101000a81548160ff02191690831515021790555060a08201518160040160016101000a81548160ff0219169083151502179055509050507f93e711896d4ef527d199d7e101922e20f918cbb248a0fb0977c52fda24aa1f1d60005483338460008060405161034b96959493929190610d0c565b60405180910390a15050565b60005481565b6001600081548092919061037090610dc6565b9190505550600060026000600154815260200190815260200160002090506001548160000154146103d6576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103cd90610c5a565b60405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff168160020160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161415610469576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161046090610bba565b60405180910390fd5b8060040160009054906101000a900460ff16156104bb576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104b290610c1a565b60405180910390fd5b8060040160019054906101000a900460ff161561050d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161050490610bda565b60405180910390fd5b80600301543414610553576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161054a90610c7a565b60405180910390fd5b60018160040160006101000a81548160ff021916908315150217905550600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166323b872dd303384600101546040518463ffffffff1660e01b81526004016105d393929190610b83565b600060405180830381600087803b1580156105ed57600080fd5b505af1158015610601573d6000803e3d6000fd5b505050508060020160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc349081150290604051600060405180830381858888f1935050505015801561066f573d6000803e3d6000fd5b507fd9157c065213ada613694e84b1e27fe2efd62d85c6b82bd6c842a4999491e72a6001548260010154336040516106a993929190610cd5565b60405180910390a150565b60015481565b60026020528060005260406000206000915090508060000154908060010154908060020160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060030154908060040160009054906101000a900460ff16908060040160019054906101000a900460ff16905086565b60006002600083815260200190815260200160002090508181600001541461078d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161078490610c5a565b60405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff168160020160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161461081f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161081690610c9a565b60405180910390fd5b600015158160040160009054906101000a900460ff16151514610877576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161086e90610bfa565b60405180910390fd5b600015158160040160019054906101000a900460ff161515146108cf576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108c690610c3a565b60405180910390fd5b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166323b872dd303384600101546040518463ffffffff1660e01b815260040161093293929190610b83565b600060405180830381600087803b15801561094c57600080fd5b505af1158015610960573d6000803e3d6000fd5b5050505060018160040160016101000a81548160ff0219169083151502179055507f5b166b4d0498ff8c4719999cb6154c5d197e6f020f9fbfcf9d347f84576cfab7828260010154336040516109b893929190610cd5565b60405180910390a15050565b6000813590506109d381611090565b92915050565b6000602082840312156109eb57600080fd5b60006109f9848285016109c4565b91505092915050565b60008060408385031215610a1557600080fd5b6000610a23858286016109c4565b9250506020610a34858286016109c4565b9150509250929050565b610a4781610d7e565b82525050565b610a5681610d90565b82525050565b6000610a69602583610d6d565b9150610a7482610e3e565b604082019050919050565b6000610a8c602583610d6d565b9150610a9782610e8d565b604082019050919050565b6000610aaf602583610d6d565b9150610aba82610edc565b604082019050919050565b6000610ad2602283610d6d565b9150610add82610f2b565b604082019050919050565b6000610af5602283610d6d565b9150610b0082610f7a565b604082019050919050565b6000610b18601483610d6d565b9150610b2382610fc9565b602082019050919050565b6000610b3b602f83610d6d565b9150610b4682610ff2565b604082019050919050565b6000610b5e602b83610d6d565b9150610b6982611041565b604082019050919050565b610b7d81610dbc565b82525050565b6000606082019050610b986000830186610a3e565b610ba56020830185610a3e565b610bb26040830184610b74565b949350505050565b60006020820190508181036000830152610bd381610a5c565b9050919050565b60006020820190508181036000830152610bf381610a7f565b9050919050565b60006020820190508181036000830152610c1381610aa2565b9050919050565b60006020820190508181036000830152610c3381610ac5565b9050919050565b60006020820190508181036000830152610c5381610ae8565b9050919050565b60006020820190508181036000830152610c7381610b0b565b9050919050565b60006020820190508181036000830152610c9381610b2e565b9050919050565b60006020820190508181036000830152610cb381610b51565b9050919050565b6000602082019050610ccf6000830184610b74565b92915050565b6000606082019050610cea6000830186610b74565b610cf76020830185610b74565b610d046040830184610a3e565b949350505050565b600060c082019050610d216000830189610b74565b610d2e6020830188610b74565b610d3b6040830187610a3e565b610d486060830186610b74565b610d556080830185610a4d565b610d6260a0830184610a4d565b979650505050505050565b600082825260208201905092915050565b6000610d8982610d9c565b9050919050565b60008115159050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b6000610dd182610dbc565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff821415610e0457610e03610e0f565b5b600182019050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f546865206f776e6572206f6620746865206f666665722063616e6e6f7420666960008201527f6c6c206974000000000000000000000000000000000000000000000000000000602082015250565b7f412063616e63656c6c6564206f666665722063616e6e6f742062652066756c6660008201527f696c6c6564000000000000000000000000000000000000000000000000000000602082015250565b7f412066756c66696c6c6564206f666665722063616e6e6f742062652063616e6360008201527f656c6c6564000000000000000000000000000000000000000000000000000000602082015250565b7f416e206f666665722063616e6e6f742062652066756c66696c6c65642074776960008201527f6365000000000000000000000000000000000000000000000000000000000000602082015250565b7f416e206f666665722063616e6e6f742062652063616e63656c6c65642074776960008201527f6365000000000000000000000000000000000000000000000000000000000000602082015250565b7f546865206f66666572206d757374206578697374000000000000000000000000600082015250565b7f546865204b4c415920616d6f756e742073686f756c64206d617463682077697460008201527f6820746865204e46542050726963650000000000000000000000000000000000602082015250565b7f546865206f666665722063616e206f6e6c792062652063616e63656c6564206260008201527f7920746865206f776e6572000000000000000000000000000000000000000000602082015250565b61109981610dbc565b81146110a457600080fd5b5056fea2646970667358221220e0b3adfad6f5637be9d7c58a721d3a3f68e33d75727c4367481f4f5d5dea181464736f6c63430008040033",
    "immutableReferences": {},
    "generatedSources": [
      {
        "ast": {
          "nodeType": "YulBlock",
          "src": "0:805:14",
          "statements": [
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "70:80:14",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "80:22:14",
                    "value": {
                      "arguments": [
                        {
                          "name": "offset",
                          "nodeType": "YulIdentifier",
                          "src": "95:6:14"
                        }
                      ],
                      "functionName": {
                        "name": "mload",
                        "nodeType": "YulIdentifier",
                        "src": "89:5:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "89:13:14"
                    },
                    "variableNames": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "80:5:14"
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "value",
                          "nodeType": "YulIdentifier",
                          "src": "138:5:14"
                        }
                      ],
                      "functionName": {
                        "name": "validator_revert_t_address",
                        "nodeType": "YulIdentifier",
                        "src": "111:26:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "111:33:14"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "111:33:14"
                  }
                ]
              },
              "name": "abi_decode_t_address_fromMemory",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "offset",
                  "nodeType": "YulTypedName",
                  "src": "48:6:14",
                  "type": ""
                },
                {
                  "name": "end",
                  "nodeType": "YulTypedName",
                  "src": "56:3:14",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "value",
                  "nodeType": "YulTypedName",
                  "src": "64:5:14",
                  "type": ""
                }
              ],
              "src": "7:143:14"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "233:207:14",
                "statements": [
                  {
                    "body": {
                      "nodeType": "YulBlock",
                      "src": "279:16:14",
                      "statements": [
                        {
                          "expression": {
                            "arguments": [
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "288:1:14",
                                "type": "",
                                "value": "0"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "291:1:14",
                                "type": "",
                                "value": "0"
                              }
                            ],
                            "functionName": {
                              "name": "revert",
                              "nodeType": "YulIdentifier",
                              "src": "281:6:14"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "281:12:14"
                          },
                          "nodeType": "YulExpressionStatement",
                          "src": "281:12:14"
                        }
                      ]
                    },
                    "condition": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "dataEnd",
                              "nodeType": "YulIdentifier",
                              "src": "254:7:14"
                            },
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "263:9:14"
                            }
                          ],
                          "functionName": {
                            "name": "sub",
                            "nodeType": "YulIdentifier",
                            "src": "250:3:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "250:23:14"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "275:2:14",
                          "type": "",
                          "value": "32"
                        }
                      ],
                      "functionName": {
                        "name": "slt",
                        "nodeType": "YulIdentifier",
                        "src": "246:3:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "246:32:14"
                    },
                    "nodeType": "YulIf",
                    "src": "243:2:14"
                  },
                  {
                    "nodeType": "YulBlock",
                    "src": "305:128:14",
                    "statements": [
                      {
                        "nodeType": "YulVariableDeclaration",
                        "src": "320:15:14",
                        "value": {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "334:1:14",
                          "type": "",
                          "value": "0"
                        },
                        "variables": [
                          {
                            "name": "offset",
                            "nodeType": "YulTypedName",
                            "src": "324:6:14",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "349:74:14",
                        "value": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "headStart",
                                  "nodeType": "YulIdentifier",
                                  "src": "395:9:14"
                                },
                                {
                                  "name": "offset",
                                  "nodeType": "YulIdentifier",
                                  "src": "406:6:14"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "391:3:14"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "391:22:14"
                            },
                            {
                              "name": "dataEnd",
                              "nodeType": "YulIdentifier",
                              "src": "415:7:14"
                            }
                          ],
                          "functionName": {
                            "name": "abi_decode_t_address_fromMemory",
                            "nodeType": "YulIdentifier",
                            "src": "359:31:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "359:64:14"
                        },
                        "variableNames": [
                          {
                            "name": "value0",
                            "nodeType": "YulIdentifier",
                            "src": "349:6:14"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              "name": "abi_decode_tuple_t_address_fromMemory",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "headStart",
                  "nodeType": "YulTypedName",
                  "src": "203:9:14",
                  "type": ""
                },
                {
                  "name": "dataEnd",
                  "nodeType": "YulTypedName",
                  "src": "214:7:14",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "value0",
                  "nodeType": "YulTypedName",
                  "src": "226:6:14",
                  "type": ""
                }
              ],
              "src": "156:284:14"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "491:51:14",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "501:35:14",
                    "value": {
                      "arguments": [
                        {
                          "name": "value",
                          "nodeType": "YulIdentifier",
                          "src": "530:5:14"
                        }
                      ],
                      "functionName": {
                        "name": "cleanup_t_uint160",
                        "nodeType": "YulIdentifier",
                        "src": "512:17:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "512:24:14"
                    },
                    "variableNames": [
                      {
                        "name": "cleaned",
                        "nodeType": "YulIdentifier",
                        "src": "501:7:14"
                      }
                    ]
                  }
                ]
              },
              "name": "cleanup_t_address",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "value",
                  "nodeType": "YulTypedName",
                  "src": "473:5:14",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "cleaned",
                  "nodeType": "YulTypedName",
                  "src": "483:7:14",
                  "type": ""
                }
              ],
              "src": "446:96:14"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "593:81:14",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "603:65:14",
                    "value": {
                      "arguments": [
                        {
                          "name": "value",
                          "nodeType": "YulIdentifier",
                          "src": "618:5:14"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "625:42:14",
                          "type": "",
                          "value": "0xffffffffffffffffffffffffffffffffffffffff"
                        }
                      ],
                      "functionName": {
                        "name": "and",
                        "nodeType": "YulIdentifier",
                        "src": "614:3:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "614:54:14"
                    },
                    "variableNames": [
                      {
                        "name": "cleaned",
                        "nodeType": "YulIdentifier",
                        "src": "603:7:14"
                      }
                    ]
                  }
                ]
              },
              "name": "cleanup_t_uint160",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "value",
                  "nodeType": "YulTypedName",
                  "src": "575:5:14",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "cleaned",
                  "nodeType": "YulTypedName",
                  "src": "585:7:14",
                  "type": ""
                }
              ],
              "src": "548:126:14"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "723:79:14",
                "statements": [
                  {
                    "body": {
                      "nodeType": "YulBlock",
                      "src": "780:16:14",
                      "statements": [
                        {
                          "expression": {
                            "arguments": [
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "789:1:14",
                                "type": "",
                                "value": "0"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "792:1:14",
                                "type": "",
                                "value": "0"
                              }
                            ],
                            "functionName": {
                              "name": "revert",
                              "nodeType": "YulIdentifier",
                              "src": "782:6:14"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "782:12:14"
                          },
                          "nodeType": "YulExpressionStatement",
                          "src": "782:12:14"
                        }
                      ]
                    },
                    "condition": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "value",
                              "nodeType": "YulIdentifier",
                              "src": "746:5:14"
                            },
                            {
                              "arguments": [
                                {
                                  "name": "value",
                                  "nodeType": "YulIdentifier",
                                  "src": "771:5:14"
                                }
                              ],
                              "functionName": {
                                "name": "cleanup_t_address",
                                "nodeType": "YulIdentifier",
                                "src": "753:17:14"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "753:24:14"
                            }
                          ],
                          "functionName": {
                            "name": "eq",
                            "nodeType": "YulIdentifier",
                            "src": "743:2:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "743:35:14"
                        }
                      ],
                      "functionName": {
                        "name": "iszero",
                        "nodeType": "YulIdentifier",
                        "src": "736:6:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "736:43:14"
                    },
                    "nodeType": "YulIf",
                    "src": "733:2:14"
                  }
                ]
              },
              "name": "validator_revert_t_address",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "value",
                  "nodeType": "YulTypedName",
                  "src": "716:5:14",
                  "type": ""
                }
              ],
              "src": "680:122:14"
            }
          ]
        },
        "contents": "{\n\n    function abi_decode_t_address_fromMemory(offset, end) -> value {\n        value := mload(offset)\n        validator_revert_t_address(value)\n    }\n\n    function abi_decode_tuple_t_address_fromMemory(headStart, dataEnd) -> value0 {\n        if slt(sub(dataEnd, headStart), 32) { revert(0, 0) }\n\n        {\n\n            let offset := 0\n\n            value0 := abi_decode_t_address_fromMemory(add(headStart, offset), dataEnd)\n        }\n\n    }\n\n    function cleanup_t_address(value) -> cleaned {\n        cleaned := cleanup_t_uint160(value)\n    }\n\n    function cleanup_t_uint160(value) -> cleaned {\n        cleaned := and(value, 0xffffffffffffffffffffffffffffffffffffffff)\n    }\n\n    function validator_revert_t_address(value) {\n        if iszero(eq(value, cleanup_t_address(value))) { revert(0, 0) }\n    }\n\n}\n",
        "id": 14,
        "language": "Yul",
        "name": "#utility.yul"
      }
    ],
    "deployedGeneratedSources": [
      {
        "ast": {
          "nodeType": "YulBlock",
          "src": "0:12387:14",
          "statements": [
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "59:87:14",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "69:29:14",
                    "value": {
                      "arguments": [
                        {
                          "name": "offset",
                          "nodeType": "YulIdentifier",
                          "src": "91:6:14"
                        }
                      ],
                      "functionName": {
                        "name": "calldataload",
                        "nodeType": "YulIdentifier",
                        "src": "78:12:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "78:20:14"
                    },
                    "variableNames": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "69:5:14"
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "value",
                          "nodeType": "YulIdentifier",
                          "src": "134:5:14"
                        }
                      ],
                      "functionName": {
                        "name": "validator_revert_t_uint256",
                        "nodeType": "YulIdentifier",
                        "src": "107:26:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "107:33:14"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "107:33:14"
                  }
                ]
              },
              "name": "abi_decode_t_uint256",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "offset",
                  "nodeType": "YulTypedName",
                  "src": "37:6:14",
                  "type": ""
                },
                {
                  "name": "end",
                  "nodeType": "YulTypedName",
                  "src": "45:3:14",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "value",
                  "nodeType": "YulTypedName",
                  "src": "53:5:14",
                  "type": ""
                }
              ],
              "src": "7:139:14"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "218:196:14",
                "statements": [
                  {
                    "body": {
                      "nodeType": "YulBlock",
                      "src": "264:16:14",
                      "statements": [
                        {
                          "expression": {
                            "arguments": [
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "273:1:14",
                                "type": "",
                                "value": "0"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "276:1:14",
                                "type": "",
                                "value": "0"
                              }
                            ],
                            "functionName": {
                              "name": "revert",
                              "nodeType": "YulIdentifier",
                              "src": "266:6:14"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "266:12:14"
                          },
                          "nodeType": "YulExpressionStatement",
                          "src": "266:12:14"
                        }
                      ]
                    },
                    "condition": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "dataEnd",
                              "nodeType": "YulIdentifier",
                              "src": "239:7:14"
                            },
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "248:9:14"
                            }
                          ],
                          "functionName": {
                            "name": "sub",
                            "nodeType": "YulIdentifier",
                            "src": "235:3:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "235:23:14"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "260:2:14",
                          "type": "",
                          "value": "32"
                        }
                      ],
                      "functionName": {
                        "name": "slt",
                        "nodeType": "YulIdentifier",
                        "src": "231:3:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "231:32:14"
                    },
                    "nodeType": "YulIf",
                    "src": "228:2:14"
                  },
                  {
                    "nodeType": "YulBlock",
                    "src": "290:117:14",
                    "statements": [
                      {
                        "nodeType": "YulVariableDeclaration",
                        "src": "305:15:14",
                        "value": {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "319:1:14",
                          "type": "",
                          "value": "0"
                        },
                        "variables": [
                          {
                            "name": "offset",
                            "nodeType": "YulTypedName",
                            "src": "309:6:14",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "334:63:14",
                        "value": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "headStart",
                                  "nodeType": "YulIdentifier",
                                  "src": "369:9:14"
                                },
                                {
                                  "name": "offset",
                                  "nodeType": "YulIdentifier",
                                  "src": "380:6:14"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "365:3:14"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "365:22:14"
                            },
                            {
                              "name": "dataEnd",
                              "nodeType": "YulIdentifier",
                              "src": "389:7:14"
                            }
                          ],
                          "functionName": {
                            "name": "abi_decode_t_uint256",
                            "nodeType": "YulIdentifier",
                            "src": "344:20:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "344:53:14"
                        },
                        "variableNames": [
                          {
                            "name": "value0",
                            "nodeType": "YulIdentifier",
                            "src": "334:6:14"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              "name": "abi_decode_tuple_t_uint256",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "headStart",
                  "nodeType": "YulTypedName",
                  "src": "188:9:14",
                  "type": ""
                },
                {
                  "name": "dataEnd",
                  "nodeType": "YulTypedName",
                  "src": "199:7:14",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "value0",
                  "nodeType": "YulTypedName",
                  "src": "211:6:14",
                  "type": ""
                }
              ],
              "src": "152:262:14"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "503:324:14",
                "statements": [
                  {
                    "body": {
                      "nodeType": "YulBlock",
                      "src": "549:16:14",
                      "statements": [
                        {
                          "expression": {
                            "arguments": [
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "558:1:14",
                                "type": "",
                                "value": "0"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "561:1:14",
                                "type": "",
                                "value": "0"
                              }
                            ],
                            "functionName": {
                              "name": "revert",
                              "nodeType": "YulIdentifier",
                              "src": "551:6:14"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "551:12:14"
                          },
                          "nodeType": "YulExpressionStatement",
                          "src": "551:12:14"
                        }
                      ]
                    },
                    "condition": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "dataEnd",
                              "nodeType": "YulIdentifier",
                              "src": "524:7:14"
                            },
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "533:9:14"
                            }
                          ],
                          "functionName": {
                            "name": "sub",
                            "nodeType": "YulIdentifier",
                            "src": "520:3:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "520:23:14"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "545:2:14",
                          "type": "",
                          "value": "64"
                        }
                      ],
                      "functionName": {
                        "name": "slt",
                        "nodeType": "YulIdentifier",
                        "src": "516:3:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "516:32:14"
                    },
                    "nodeType": "YulIf",
                    "src": "513:2:14"
                  },
                  {
                    "nodeType": "YulBlock",
                    "src": "575:117:14",
                    "statements": [
                      {
                        "nodeType": "YulVariableDeclaration",
                        "src": "590:15:14",
                        "value": {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "604:1:14",
                          "type": "",
                          "value": "0"
                        },
                        "variables": [
                          {
                            "name": "offset",
                            "nodeType": "YulTypedName",
                            "src": "594:6:14",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "619:63:14",
                        "value": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "headStart",
                                  "nodeType": "YulIdentifier",
                                  "src": "654:9:14"
                                },
                                {
                                  "name": "offset",
                                  "nodeType": "YulIdentifier",
                                  "src": "665:6:14"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "650:3:14"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "650:22:14"
                            },
                            {
                              "name": "dataEnd",
                              "nodeType": "YulIdentifier",
                              "src": "674:7:14"
                            }
                          ],
                          "functionName": {
                            "name": "abi_decode_t_uint256",
                            "nodeType": "YulIdentifier",
                            "src": "629:20:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "629:53:14"
                        },
                        "variableNames": [
                          {
                            "name": "value0",
                            "nodeType": "YulIdentifier",
                            "src": "619:6:14"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "nodeType": "YulBlock",
                    "src": "702:118:14",
                    "statements": [
                      {
                        "nodeType": "YulVariableDeclaration",
                        "src": "717:16:14",
                        "value": {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "731:2:14",
                          "type": "",
                          "value": "32"
                        },
                        "variables": [
                          {
                            "name": "offset",
                            "nodeType": "YulTypedName",
                            "src": "721:6:14",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "747:63:14",
                        "value": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "headStart",
                                  "nodeType": "YulIdentifier",
                                  "src": "782:9:14"
                                },
                                {
                                  "name": "offset",
                                  "nodeType": "YulIdentifier",
                                  "src": "793:6:14"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "778:3:14"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "778:22:14"
                            },
                            {
                              "name": "dataEnd",
                              "nodeType": "YulIdentifier",
                              "src": "802:7:14"
                            }
                          ],
                          "functionName": {
                            "name": "abi_decode_t_uint256",
                            "nodeType": "YulIdentifier",
                            "src": "757:20:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "757:53:14"
                        },
                        "variableNames": [
                          {
                            "name": "value1",
                            "nodeType": "YulIdentifier",
                            "src": "747:6:14"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              "name": "abi_decode_tuple_t_uint256t_uint256",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "headStart",
                  "nodeType": "YulTypedName",
                  "src": "465:9:14",
                  "type": ""
                },
                {
                  "name": "dataEnd",
                  "nodeType": "YulTypedName",
                  "src": "476:7:14",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "value0",
                  "nodeType": "YulTypedName",
                  "src": "488:6:14",
                  "type": ""
                },
                {
                  "name": "value1",
                  "nodeType": "YulTypedName",
                  "src": "496:6:14",
                  "type": ""
                }
              ],
              "src": "420:407:14"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "898:53:14",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "915:3:14"
                        },
                        {
                          "arguments": [
                            {
                              "name": "value",
                              "nodeType": "YulIdentifier",
                              "src": "938:5:14"
                            }
                          ],
                          "functionName": {
                            "name": "cleanup_t_address",
                            "nodeType": "YulIdentifier",
                            "src": "920:17:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "920:24:14"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "908:6:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "908:37:14"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "908:37:14"
                  }
                ]
              },
              "name": "abi_encode_t_address_to_t_address_fromStack",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "value",
                  "nodeType": "YulTypedName",
                  "src": "886:5:14",
                  "type": ""
                },
                {
                  "name": "pos",
                  "nodeType": "YulTypedName",
                  "src": "893:3:14",
                  "type": ""
                }
              ],
              "src": "833:118:14"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "1016:50:14",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "1033:3:14"
                        },
                        {
                          "arguments": [
                            {
                              "name": "value",
                              "nodeType": "YulIdentifier",
                              "src": "1053:5:14"
                            }
                          ],
                          "functionName": {
                            "name": "cleanup_t_bool",
                            "nodeType": "YulIdentifier",
                            "src": "1038:14:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1038:21:14"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "1026:6:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "1026:34:14"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "1026:34:14"
                  }
                ]
              },
              "name": "abi_encode_t_bool_to_t_bool_fromStack",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "value",
                  "nodeType": "YulTypedName",
                  "src": "1004:5:14",
                  "type": ""
                },
                {
                  "name": "pos",
                  "nodeType": "YulTypedName",
                  "src": "1011:3:14",
                  "type": ""
                }
              ],
              "src": "957:109:14"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "1218:220:14",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "1228:74:14",
                    "value": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "1294:3:14"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "1299:2:14",
                          "type": "",
                          "value": "37"
                        }
                      ],
                      "functionName": {
                        "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                        "nodeType": "YulIdentifier",
                        "src": "1235:58:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "1235:67:14"
                    },
                    "variableNames": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "1228:3:14"
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "1400:3:14"
                        }
                      ],
                      "functionName": {
                        "name": "store_literal_in_memory_16b97efa5ec3944fa852fc932397160786ef9749352467e97d8246d2312e592f",
                        "nodeType": "YulIdentifier",
                        "src": "1311:88:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "1311:93:14"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "1311:93:14"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "1413:19:14",
                    "value": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "1424:3:14"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "1429:2:14",
                          "type": "",
                          "value": "64"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "1420:3:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "1420:12:14"
                    },
                    "variableNames": [
                      {
                        "name": "end",
                        "nodeType": "YulIdentifier",
                        "src": "1413:3:14"
                      }
                    ]
                  }
                ]
              },
              "name": "abi_encode_t_stringliteral_16b97efa5ec3944fa852fc932397160786ef9749352467e97d8246d2312e592f_to_t_string_memory_ptr_fromStack",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "pos",
                  "nodeType": "YulTypedName",
                  "src": "1206:3:14",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "end",
                  "nodeType": "YulTypedName",
                  "src": "1214:3:14",
                  "type": ""
                }
              ],
              "src": "1072:366:14"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "1590:220:14",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "1600:74:14",
                    "value": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "1666:3:14"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "1671:2:14",
                          "type": "",
                          "value": "37"
                        }
                      ],
                      "functionName": {
                        "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                        "nodeType": "YulIdentifier",
                        "src": "1607:58:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "1607:67:14"
                    },
                    "variableNames": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "1600:3:14"
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "1772:3:14"
                        }
                      ],
                      "functionName": {
                        "name": "store_literal_in_memory_1bb66d3337aef26bd0c5b237371183c3a5840fa7ad74fb356f513d19eec12261",
                        "nodeType": "YulIdentifier",
                        "src": "1683:88:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "1683:93:14"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "1683:93:14"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "1785:19:14",
                    "value": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "1796:3:14"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "1801:2:14",
                          "type": "",
                          "value": "64"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "1792:3:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "1792:12:14"
                    },
                    "variableNames": [
                      {
                        "name": "end",
                        "nodeType": "YulIdentifier",
                        "src": "1785:3:14"
                      }
                    ]
                  }
                ]
              },
              "name": "abi_encode_t_stringliteral_1bb66d3337aef26bd0c5b237371183c3a5840fa7ad74fb356f513d19eec12261_to_t_string_memory_ptr_fromStack",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "pos",
                  "nodeType": "YulTypedName",
                  "src": "1578:3:14",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "end",
                  "nodeType": "YulTypedName",
                  "src": "1586:3:14",
                  "type": ""
                }
              ],
              "src": "1444:366:14"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "1962:220:14",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "1972:74:14",
                    "value": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "2038:3:14"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "2043:2:14",
                          "type": "",
                          "value": "37"
                        }
                      ],
                      "functionName": {
                        "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                        "nodeType": "YulIdentifier",
                        "src": "1979:58:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "1979:67:14"
                    },
                    "variableNames": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "1972:3:14"
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "2144:3:14"
                        }
                      ],
                      "functionName": {
                        "name": "store_literal_in_memory_7f8f6b8a77b6466042d361ff338b4632d922afa369342ae06b5e960c826b374c",
                        "nodeType": "YulIdentifier",
                        "src": "2055:88:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "2055:93:14"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "2055:93:14"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "2157:19:14",
                    "value": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "2168:3:14"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "2173:2:14",
                          "type": "",
                          "value": "64"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "2164:3:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "2164:12:14"
                    },
                    "variableNames": [
                      {
                        "name": "end",
                        "nodeType": "YulIdentifier",
                        "src": "2157:3:14"
                      }
                    ]
                  }
                ]
              },
              "name": "abi_encode_t_stringliteral_7f8f6b8a77b6466042d361ff338b4632d922afa369342ae06b5e960c826b374c_to_t_string_memory_ptr_fromStack",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "pos",
                  "nodeType": "YulTypedName",
                  "src": "1950:3:14",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "end",
                  "nodeType": "YulTypedName",
                  "src": "1958:3:14",
                  "type": ""
                }
              ],
              "src": "1816:366:14"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "2334:220:14",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "2344:74:14",
                    "value": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "2410:3:14"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "2415:2:14",
                          "type": "",
                          "value": "34"
                        }
                      ],
                      "functionName": {
                        "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                        "nodeType": "YulIdentifier",
                        "src": "2351:58:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "2351:67:14"
                    },
                    "variableNames": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "2344:3:14"
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "2516:3:14"
                        }
                      ],
                      "functionName": {
                        "name": "store_literal_in_memory_8f5f9bc7d8e94e4b1f68ebce1509f5ccd65b60868e383ed727015d9809851638",
                        "nodeType": "YulIdentifier",
                        "src": "2427:88:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "2427:93:14"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "2427:93:14"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "2529:19:14",
                    "value": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "2540:3:14"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "2545:2:14",
                          "type": "",
                          "value": "64"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "2536:3:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "2536:12:14"
                    },
                    "variableNames": [
                      {
                        "name": "end",
                        "nodeType": "YulIdentifier",
                        "src": "2529:3:14"
                      }
                    ]
                  }
                ]
              },
              "name": "abi_encode_t_stringliteral_8f5f9bc7d8e94e4b1f68ebce1509f5ccd65b60868e383ed727015d9809851638_to_t_string_memory_ptr_fromStack",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "pos",
                  "nodeType": "YulTypedName",
                  "src": "2322:3:14",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "end",
                  "nodeType": "YulTypedName",
                  "src": "2330:3:14",
                  "type": ""
                }
              ],
              "src": "2188:366:14"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "2706:220:14",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "2716:74:14",
                    "value": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "2782:3:14"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "2787:2:14",
                          "type": "",
                          "value": "34"
                        }
                      ],
                      "functionName": {
                        "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                        "nodeType": "YulIdentifier",
                        "src": "2723:58:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "2723:67:14"
                    },
                    "variableNames": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "2716:3:14"
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "2888:3:14"
                        }
                      ],
                      "functionName": {
                        "name": "store_literal_in_memory_e1c1126e5c7fc0ceccbbc15646a05c877a789fc81bb4a683c5ae2f56969950a4",
                        "nodeType": "YulIdentifier",
                        "src": "2799:88:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "2799:93:14"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "2799:93:14"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "2901:19:14",
                    "value": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "2912:3:14"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "2917:2:14",
                          "type": "",
                          "value": "64"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "2908:3:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "2908:12:14"
                    },
                    "variableNames": [
                      {
                        "name": "end",
                        "nodeType": "YulIdentifier",
                        "src": "2901:3:14"
                      }
                    ]
                  }
                ]
              },
              "name": "abi_encode_t_stringliteral_e1c1126e5c7fc0ceccbbc15646a05c877a789fc81bb4a683c5ae2f56969950a4_to_t_string_memory_ptr_fromStack",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "pos",
                  "nodeType": "YulTypedName",
                  "src": "2694:3:14",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "end",
                  "nodeType": "YulTypedName",
                  "src": "2702:3:14",
                  "type": ""
                }
              ],
              "src": "2560:366:14"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "3078:220:14",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "3088:74:14",
                    "value": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "3154:3:14"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "3159:2:14",
                          "type": "",
                          "value": "20"
                        }
                      ],
                      "functionName": {
                        "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                        "nodeType": "YulIdentifier",
                        "src": "3095:58:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "3095:67:14"
                    },
                    "variableNames": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "3088:3:14"
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "3260:3:14"
                        }
                      ],
                      "functionName": {
                        "name": "store_literal_in_memory_ecfd3ca9627f908d395cf30606eaaa71e7ad9f8628919cf7498e36467c553379",
                        "nodeType": "YulIdentifier",
                        "src": "3171:88:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "3171:93:14"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "3171:93:14"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "3273:19:14",
                    "value": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "3284:3:14"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "3289:2:14",
                          "type": "",
                          "value": "32"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "3280:3:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "3280:12:14"
                    },
                    "variableNames": [
                      {
                        "name": "end",
                        "nodeType": "YulIdentifier",
                        "src": "3273:3:14"
                      }
                    ]
                  }
                ]
              },
              "name": "abi_encode_t_stringliteral_ecfd3ca9627f908d395cf30606eaaa71e7ad9f8628919cf7498e36467c553379_to_t_string_memory_ptr_fromStack",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "pos",
                  "nodeType": "YulTypedName",
                  "src": "3066:3:14",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "end",
                  "nodeType": "YulTypedName",
                  "src": "3074:3:14",
                  "type": ""
                }
              ],
              "src": "2932:366:14"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "3450:220:14",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "3460:74:14",
                    "value": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "3526:3:14"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "3531:2:14",
                          "type": "",
                          "value": "47"
                        }
                      ],
                      "functionName": {
                        "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                        "nodeType": "YulIdentifier",
                        "src": "3467:58:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "3467:67:14"
                    },
                    "variableNames": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "3460:3:14"
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "3632:3:14"
                        }
                      ],
                      "functionName": {
                        "name": "store_literal_in_memory_f33eb985b999dba3ee453a82d71ec5c3334152629286880cf4eafbc76abe88a8",
                        "nodeType": "YulIdentifier",
                        "src": "3543:88:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "3543:93:14"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "3543:93:14"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "3645:19:14",
                    "value": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "3656:3:14"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "3661:2:14",
                          "type": "",
                          "value": "64"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "3652:3:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "3652:12:14"
                    },
                    "variableNames": [
                      {
                        "name": "end",
                        "nodeType": "YulIdentifier",
                        "src": "3645:3:14"
                      }
                    ]
                  }
                ]
              },
              "name": "abi_encode_t_stringliteral_f33eb985b999dba3ee453a82d71ec5c3334152629286880cf4eafbc76abe88a8_to_t_string_memory_ptr_fromStack",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "pos",
                  "nodeType": "YulTypedName",
                  "src": "3438:3:14",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "end",
                  "nodeType": "YulTypedName",
                  "src": "3446:3:14",
                  "type": ""
                }
              ],
              "src": "3304:366:14"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "3822:220:14",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "3832:74:14",
                    "value": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "3898:3:14"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "3903:2:14",
                          "type": "",
                          "value": "43"
                        }
                      ],
                      "functionName": {
                        "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                        "nodeType": "YulIdentifier",
                        "src": "3839:58:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "3839:67:14"
                    },
                    "variableNames": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "3832:3:14"
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "4004:3:14"
                        }
                      ],
                      "functionName": {
                        "name": "store_literal_in_memory_f9ee9e7c49e557ffe8651318f112ec27248033e18930bbfb9b12687b1fc74103",
                        "nodeType": "YulIdentifier",
                        "src": "3915:88:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "3915:93:14"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "3915:93:14"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "4017:19:14",
                    "value": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "4028:3:14"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "4033:2:14",
                          "type": "",
                          "value": "64"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "4024:3:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "4024:12:14"
                    },
                    "variableNames": [
                      {
                        "name": "end",
                        "nodeType": "YulIdentifier",
                        "src": "4017:3:14"
                      }
                    ]
                  }
                ]
              },
              "name": "abi_encode_t_stringliteral_f9ee9e7c49e557ffe8651318f112ec27248033e18930bbfb9b12687b1fc74103_to_t_string_memory_ptr_fromStack",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "pos",
                  "nodeType": "YulTypedName",
                  "src": "3810:3:14",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "end",
                  "nodeType": "YulTypedName",
                  "src": "3818:3:14",
                  "type": ""
                }
              ],
              "src": "3676:366:14"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "4113:53:14",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "4130:3:14"
                        },
                        {
                          "arguments": [
                            {
                              "name": "value",
                              "nodeType": "YulIdentifier",
                              "src": "4153:5:14"
                            }
                          ],
                          "functionName": {
                            "name": "cleanup_t_uint256",
                            "nodeType": "YulIdentifier",
                            "src": "4135:17:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "4135:24:14"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "4123:6:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "4123:37:14"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "4123:37:14"
                  }
                ]
              },
              "name": "abi_encode_t_uint256_to_t_uint256_fromStack",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "value",
                  "nodeType": "YulTypedName",
                  "src": "4101:5:14",
                  "type": ""
                },
                {
                  "name": "pos",
                  "nodeType": "YulTypedName",
                  "src": "4108:3:14",
                  "type": ""
                }
              ],
              "src": "4048:118:14"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "4326:288:14",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "4336:26:14",
                    "value": {
                      "arguments": [
                        {
                          "name": "headStart",
                          "nodeType": "YulIdentifier",
                          "src": "4348:9:14"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "4359:2:14",
                          "type": "",
                          "value": "96"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "4344:3:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "4344:18:14"
                    },
                    "variableNames": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "4336:4:14"
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "value0",
                          "nodeType": "YulIdentifier",
                          "src": "4416:6:14"
                        },
                        {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "4429:9:14"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "4440:1:14",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "4425:3:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "4425:17:14"
                        }
                      ],
                      "functionName": {
                        "name": "abi_encode_t_address_to_t_address_fromStack",
                        "nodeType": "YulIdentifier",
                        "src": "4372:43:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "4372:71:14"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "4372:71:14"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "value1",
                          "nodeType": "YulIdentifier",
                          "src": "4497:6:14"
                        },
                        {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "4510:9:14"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "4521:2:14",
                              "type": "",
                              "value": "32"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "4506:3:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "4506:18:14"
                        }
                      ],
                      "functionName": {
                        "name": "abi_encode_t_address_to_t_address_fromStack",
                        "nodeType": "YulIdentifier",
                        "src": "4453:43:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "4453:72:14"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "4453:72:14"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "value2",
                          "nodeType": "YulIdentifier",
                          "src": "4579:6:14"
                        },
                        {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "4592:9:14"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "4603:2:14",
                              "type": "",
                              "value": "64"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "4588:3:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "4588:18:14"
                        }
                      ],
                      "functionName": {
                        "name": "abi_encode_t_uint256_to_t_uint256_fromStack",
                        "nodeType": "YulIdentifier",
                        "src": "4535:43:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "4535:72:14"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "4535:72:14"
                  }
                ]
              },
              "name": "abi_encode_tuple_t_address_t_address_t_uint256__to_t_address_t_address_t_uint256__fromStack_reversed",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "headStart",
                  "nodeType": "YulTypedName",
                  "src": "4282:9:14",
                  "type": ""
                },
                {
                  "name": "value2",
                  "nodeType": "YulTypedName",
                  "src": "4294:6:14",
                  "type": ""
                },
                {
                  "name": "value1",
                  "nodeType": "YulTypedName",
                  "src": "4302:6:14",
                  "type": ""
                },
                {
                  "name": "value0",
                  "nodeType": "YulTypedName",
                  "src": "4310:6:14",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "tail",
                  "nodeType": "YulTypedName",
                  "src": "4321:4:14",
                  "type": ""
                }
              ],
              "src": "4172:442:14"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "4791:248:14",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "4801:26:14",
                    "value": {
                      "arguments": [
                        {
                          "name": "headStart",
                          "nodeType": "YulIdentifier",
                          "src": "4813:9:14"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "4824:2:14",
                          "type": "",
                          "value": "32"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "4809:3:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "4809:18:14"
                    },
                    "variableNames": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "4801:4:14"
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "4848:9:14"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "4859:1:14",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "4844:3:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "4844:17:14"
                        },
                        {
                          "arguments": [
                            {
                              "name": "tail",
                              "nodeType": "YulIdentifier",
                              "src": "4867:4:14"
                            },
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "4873:9:14"
                            }
                          ],
                          "functionName": {
                            "name": "sub",
                            "nodeType": "YulIdentifier",
                            "src": "4863:3:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "4863:20:14"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "4837:6:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "4837:47:14"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "4837:47:14"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "4893:139:14",
                    "value": {
                      "arguments": [
                        {
                          "name": "tail",
                          "nodeType": "YulIdentifier",
                          "src": "5027:4:14"
                        }
                      ],
                      "functionName": {
                        "name": "abi_encode_t_stringliteral_16b97efa5ec3944fa852fc932397160786ef9749352467e97d8246d2312e592f_to_t_string_memory_ptr_fromStack",
                        "nodeType": "YulIdentifier",
                        "src": "4901:124:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "4901:131:14"
                    },
                    "variableNames": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "4893:4:14"
                      }
                    ]
                  }
                ]
              },
              "name": "abi_encode_tuple_t_stringliteral_16b97efa5ec3944fa852fc932397160786ef9749352467e97d8246d2312e592f__to_t_string_memory_ptr__fromStack_reversed",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "headStart",
                  "nodeType": "YulTypedName",
                  "src": "4771:9:14",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "tail",
                  "nodeType": "YulTypedName",
                  "src": "4786:4:14",
                  "type": ""
                }
              ],
              "src": "4620:419:14"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "5216:248:14",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "5226:26:14",
                    "value": {
                      "arguments": [
                        {
                          "name": "headStart",
                          "nodeType": "YulIdentifier",
                          "src": "5238:9:14"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "5249:2:14",
                          "type": "",
                          "value": "32"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "5234:3:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "5234:18:14"
                    },
                    "variableNames": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "5226:4:14"
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "5273:9:14"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "5284:1:14",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "5269:3:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "5269:17:14"
                        },
                        {
                          "arguments": [
                            {
                              "name": "tail",
                              "nodeType": "YulIdentifier",
                              "src": "5292:4:14"
                            },
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "5298:9:14"
                            }
                          ],
                          "functionName": {
                            "name": "sub",
                            "nodeType": "YulIdentifier",
                            "src": "5288:3:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "5288:20:14"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "5262:6:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "5262:47:14"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "5262:47:14"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "5318:139:14",
                    "value": {
                      "arguments": [
                        {
                          "name": "tail",
                          "nodeType": "YulIdentifier",
                          "src": "5452:4:14"
                        }
                      ],
                      "functionName": {
                        "name": "abi_encode_t_stringliteral_1bb66d3337aef26bd0c5b237371183c3a5840fa7ad74fb356f513d19eec12261_to_t_string_memory_ptr_fromStack",
                        "nodeType": "YulIdentifier",
                        "src": "5326:124:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "5326:131:14"
                    },
                    "variableNames": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "5318:4:14"
                      }
                    ]
                  }
                ]
              },
              "name": "abi_encode_tuple_t_stringliteral_1bb66d3337aef26bd0c5b237371183c3a5840fa7ad74fb356f513d19eec12261__to_t_string_memory_ptr__fromStack_reversed",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "headStart",
                  "nodeType": "YulTypedName",
                  "src": "5196:9:14",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "tail",
                  "nodeType": "YulTypedName",
                  "src": "5211:4:14",
                  "type": ""
                }
              ],
              "src": "5045:419:14"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "5641:248:14",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "5651:26:14",
                    "value": {
                      "arguments": [
                        {
                          "name": "headStart",
                          "nodeType": "YulIdentifier",
                          "src": "5663:9:14"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "5674:2:14",
                          "type": "",
                          "value": "32"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "5659:3:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "5659:18:14"
                    },
                    "variableNames": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "5651:4:14"
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "5698:9:14"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "5709:1:14",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "5694:3:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "5694:17:14"
                        },
                        {
                          "arguments": [
                            {
                              "name": "tail",
                              "nodeType": "YulIdentifier",
                              "src": "5717:4:14"
                            },
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "5723:9:14"
                            }
                          ],
                          "functionName": {
                            "name": "sub",
                            "nodeType": "YulIdentifier",
                            "src": "5713:3:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "5713:20:14"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "5687:6:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "5687:47:14"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "5687:47:14"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "5743:139:14",
                    "value": {
                      "arguments": [
                        {
                          "name": "tail",
                          "nodeType": "YulIdentifier",
                          "src": "5877:4:14"
                        }
                      ],
                      "functionName": {
                        "name": "abi_encode_t_stringliteral_7f8f6b8a77b6466042d361ff338b4632d922afa369342ae06b5e960c826b374c_to_t_string_memory_ptr_fromStack",
                        "nodeType": "YulIdentifier",
                        "src": "5751:124:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "5751:131:14"
                    },
                    "variableNames": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "5743:4:14"
                      }
                    ]
                  }
                ]
              },
              "name": "abi_encode_tuple_t_stringliteral_7f8f6b8a77b6466042d361ff338b4632d922afa369342ae06b5e960c826b374c__to_t_string_memory_ptr__fromStack_reversed",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "headStart",
                  "nodeType": "YulTypedName",
                  "src": "5621:9:14",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "tail",
                  "nodeType": "YulTypedName",
                  "src": "5636:4:14",
                  "type": ""
                }
              ],
              "src": "5470:419:14"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "6066:248:14",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "6076:26:14",
                    "value": {
                      "arguments": [
                        {
                          "name": "headStart",
                          "nodeType": "YulIdentifier",
                          "src": "6088:9:14"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "6099:2:14",
                          "type": "",
                          "value": "32"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "6084:3:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "6084:18:14"
                    },
                    "variableNames": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "6076:4:14"
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "6123:9:14"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "6134:1:14",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "6119:3:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "6119:17:14"
                        },
                        {
                          "arguments": [
                            {
                              "name": "tail",
                              "nodeType": "YulIdentifier",
                              "src": "6142:4:14"
                            },
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "6148:9:14"
                            }
                          ],
                          "functionName": {
                            "name": "sub",
                            "nodeType": "YulIdentifier",
                            "src": "6138:3:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "6138:20:14"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "6112:6:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "6112:47:14"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "6112:47:14"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "6168:139:14",
                    "value": {
                      "arguments": [
                        {
                          "name": "tail",
                          "nodeType": "YulIdentifier",
                          "src": "6302:4:14"
                        }
                      ],
                      "functionName": {
                        "name": "abi_encode_t_stringliteral_8f5f9bc7d8e94e4b1f68ebce1509f5ccd65b60868e383ed727015d9809851638_to_t_string_memory_ptr_fromStack",
                        "nodeType": "YulIdentifier",
                        "src": "6176:124:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "6176:131:14"
                    },
                    "variableNames": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "6168:4:14"
                      }
                    ]
                  }
                ]
              },
              "name": "abi_encode_tuple_t_stringliteral_8f5f9bc7d8e94e4b1f68ebce1509f5ccd65b60868e383ed727015d9809851638__to_t_string_memory_ptr__fromStack_reversed",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "headStart",
                  "nodeType": "YulTypedName",
                  "src": "6046:9:14",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "tail",
                  "nodeType": "YulTypedName",
                  "src": "6061:4:14",
                  "type": ""
                }
              ],
              "src": "5895:419:14"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "6491:248:14",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "6501:26:14",
                    "value": {
                      "arguments": [
                        {
                          "name": "headStart",
                          "nodeType": "YulIdentifier",
                          "src": "6513:9:14"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "6524:2:14",
                          "type": "",
                          "value": "32"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "6509:3:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "6509:18:14"
                    },
                    "variableNames": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "6501:4:14"
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "6548:9:14"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "6559:1:14",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "6544:3:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "6544:17:14"
                        },
                        {
                          "arguments": [
                            {
                              "name": "tail",
                              "nodeType": "YulIdentifier",
                              "src": "6567:4:14"
                            },
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "6573:9:14"
                            }
                          ],
                          "functionName": {
                            "name": "sub",
                            "nodeType": "YulIdentifier",
                            "src": "6563:3:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "6563:20:14"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "6537:6:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "6537:47:14"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "6537:47:14"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "6593:139:14",
                    "value": {
                      "arguments": [
                        {
                          "name": "tail",
                          "nodeType": "YulIdentifier",
                          "src": "6727:4:14"
                        }
                      ],
                      "functionName": {
                        "name": "abi_encode_t_stringliteral_e1c1126e5c7fc0ceccbbc15646a05c877a789fc81bb4a683c5ae2f56969950a4_to_t_string_memory_ptr_fromStack",
                        "nodeType": "YulIdentifier",
                        "src": "6601:124:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "6601:131:14"
                    },
                    "variableNames": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "6593:4:14"
                      }
                    ]
                  }
                ]
              },
              "name": "abi_encode_tuple_t_stringliteral_e1c1126e5c7fc0ceccbbc15646a05c877a789fc81bb4a683c5ae2f56969950a4__to_t_string_memory_ptr__fromStack_reversed",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "headStart",
                  "nodeType": "YulTypedName",
                  "src": "6471:9:14",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "tail",
                  "nodeType": "YulTypedName",
                  "src": "6486:4:14",
                  "type": ""
                }
              ],
              "src": "6320:419:14"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "6916:248:14",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "6926:26:14",
                    "value": {
                      "arguments": [
                        {
                          "name": "headStart",
                          "nodeType": "YulIdentifier",
                          "src": "6938:9:14"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "6949:2:14",
                          "type": "",
                          "value": "32"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "6934:3:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "6934:18:14"
                    },
                    "variableNames": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "6926:4:14"
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "6973:9:14"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "6984:1:14",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "6969:3:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "6969:17:14"
                        },
                        {
                          "arguments": [
                            {
                              "name": "tail",
                              "nodeType": "YulIdentifier",
                              "src": "6992:4:14"
                            },
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "6998:9:14"
                            }
                          ],
                          "functionName": {
                            "name": "sub",
                            "nodeType": "YulIdentifier",
                            "src": "6988:3:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "6988:20:14"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "6962:6:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "6962:47:14"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "6962:47:14"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "7018:139:14",
                    "value": {
                      "arguments": [
                        {
                          "name": "tail",
                          "nodeType": "YulIdentifier",
                          "src": "7152:4:14"
                        }
                      ],
                      "functionName": {
                        "name": "abi_encode_t_stringliteral_ecfd3ca9627f908d395cf30606eaaa71e7ad9f8628919cf7498e36467c553379_to_t_string_memory_ptr_fromStack",
                        "nodeType": "YulIdentifier",
                        "src": "7026:124:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "7026:131:14"
                    },
                    "variableNames": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "7018:4:14"
                      }
                    ]
                  }
                ]
              },
              "name": "abi_encode_tuple_t_stringliteral_ecfd3ca9627f908d395cf30606eaaa71e7ad9f8628919cf7498e36467c553379__to_t_string_memory_ptr__fromStack_reversed",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "headStart",
                  "nodeType": "YulTypedName",
                  "src": "6896:9:14",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "tail",
                  "nodeType": "YulTypedName",
                  "src": "6911:4:14",
                  "type": ""
                }
              ],
              "src": "6745:419:14"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "7341:248:14",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "7351:26:14",
                    "value": {
                      "arguments": [
                        {
                          "name": "headStart",
                          "nodeType": "YulIdentifier",
                          "src": "7363:9:14"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "7374:2:14",
                          "type": "",
                          "value": "32"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "7359:3:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "7359:18:14"
                    },
                    "variableNames": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "7351:4:14"
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "7398:9:14"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "7409:1:14",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "7394:3:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "7394:17:14"
                        },
                        {
                          "arguments": [
                            {
                              "name": "tail",
                              "nodeType": "YulIdentifier",
                              "src": "7417:4:14"
                            },
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "7423:9:14"
                            }
                          ],
                          "functionName": {
                            "name": "sub",
                            "nodeType": "YulIdentifier",
                            "src": "7413:3:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "7413:20:14"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "7387:6:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "7387:47:14"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "7387:47:14"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "7443:139:14",
                    "value": {
                      "arguments": [
                        {
                          "name": "tail",
                          "nodeType": "YulIdentifier",
                          "src": "7577:4:14"
                        }
                      ],
                      "functionName": {
                        "name": "abi_encode_t_stringliteral_f33eb985b999dba3ee453a82d71ec5c3334152629286880cf4eafbc76abe88a8_to_t_string_memory_ptr_fromStack",
                        "nodeType": "YulIdentifier",
                        "src": "7451:124:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "7451:131:14"
                    },
                    "variableNames": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "7443:4:14"
                      }
                    ]
                  }
                ]
              },
              "name": "abi_encode_tuple_t_stringliteral_f33eb985b999dba3ee453a82d71ec5c3334152629286880cf4eafbc76abe88a8__to_t_string_memory_ptr__fromStack_reversed",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "headStart",
                  "nodeType": "YulTypedName",
                  "src": "7321:9:14",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "tail",
                  "nodeType": "YulTypedName",
                  "src": "7336:4:14",
                  "type": ""
                }
              ],
              "src": "7170:419:14"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "7766:248:14",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "7776:26:14",
                    "value": {
                      "arguments": [
                        {
                          "name": "headStart",
                          "nodeType": "YulIdentifier",
                          "src": "7788:9:14"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "7799:2:14",
                          "type": "",
                          "value": "32"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "7784:3:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "7784:18:14"
                    },
                    "variableNames": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "7776:4:14"
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "7823:9:14"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "7834:1:14",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "7819:3:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "7819:17:14"
                        },
                        {
                          "arguments": [
                            {
                              "name": "tail",
                              "nodeType": "YulIdentifier",
                              "src": "7842:4:14"
                            },
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "7848:9:14"
                            }
                          ],
                          "functionName": {
                            "name": "sub",
                            "nodeType": "YulIdentifier",
                            "src": "7838:3:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "7838:20:14"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "7812:6:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "7812:47:14"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "7812:47:14"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "7868:139:14",
                    "value": {
                      "arguments": [
                        {
                          "name": "tail",
                          "nodeType": "YulIdentifier",
                          "src": "8002:4:14"
                        }
                      ],
                      "functionName": {
                        "name": "abi_encode_t_stringliteral_f9ee9e7c49e557ffe8651318f112ec27248033e18930bbfb9b12687b1fc74103_to_t_string_memory_ptr_fromStack",
                        "nodeType": "YulIdentifier",
                        "src": "7876:124:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "7876:131:14"
                    },
                    "variableNames": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "7868:4:14"
                      }
                    ]
                  }
                ]
              },
              "name": "abi_encode_tuple_t_stringliteral_f9ee9e7c49e557ffe8651318f112ec27248033e18930bbfb9b12687b1fc74103__to_t_string_memory_ptr__fromStack_reversed",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "headStart",
                  "nodeType": "YulTypedName",
                  "src": "7746:9:14",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "tail",
                  "nodeType": "YulTypedName",
                  "src": "7761:4:14",
                  "type": ""
                }
              ],
              "src": "7595:419:14"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "8118:124:14",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "8128:26:14",
                    "value": {
                      "arguments": [
                        {
                          "name": "headStart",
                          "nodeType": "YulIdentifier",
                          "src": "8140:9:14"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "8151:2:14",
                          "type": "",
                          "value": "32"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "8136:3:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "8136:18:14"
                    },
                    "variableNames": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "8128:4:14"
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "value0",
                          "nodeType": "YulIdentifier",
                          "src": "8208:6:14"
                        },
                        {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "8221:9:14"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "8232:1:14",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "8217:3:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "8217:17:14"
                        }
                      ],
                      "functionName": {
                        "name": "abi_encode_t_uint256_to_t_uint256_fromStack",
                        "nodeType": "YulIdentifier",
                        "src": "8164:43:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "8164:71:14"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "8164:71:14"
                  }
                ]
              },
              "name": "abi_encode_tuple_t_uint256__to_t_uint256__fromStack_reversed",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "headStart",
                  "nodeType": "YulTypedName",
                  "src": "8090:9:14",
                  "type": ""
                },
                {
                  "name": "value0",
                  "nodeType": "YulTypedName",
                  "src": "8102:6:14",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "tail",
                  "nodeType": "YulTypedName",
                  "src": "8113:4:14",
                  "type": ""
                }
              ],
              "src": "8020:222:14"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "8402:288:14",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "8412:26:14",
                    "value": {
                      "arguments": [
                        {
                          "name": "headStart",
                          "nodeType": "YulIdentifier",
                          "src": "8424:9:14"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "8435:2:14",
                          "type": "",
                          "value": "96"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "8420:3:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "8420:18:14"
                    },
                    "variableNames": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "8412:4:14"
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "value0",
                          "nodeType": "YulIdentifier",
                          "src": "8492:6:14"
                        },
                        {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "8505:9:14"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "8516:1:14",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "8501:3:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "8501:17:14"
                        }
                      ],
                      "functionName": {
                        "name": "abi_encode_t_uint256_to_t_uint256_fromStack",
                        "nodeType": "YulIdentifier",
                        "src": "8448:43:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "8448:71:14"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "8448:71:14"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "value1",
                          "nodeType": "YulIdentifier",
                          "src": "8573:6:14"
                        },
                        {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "8586:9:14"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "8597:2:14",
                              "type": "",
                              "value": "32"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "8582:3:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "8582:18:14"
                        }
                      ],
                      "functionName": {
                        "name": "abi_encode_t_uint256_to_t_uint256_fromStack",
                        "nodeType": "YulIdentifier",
                        "src": "8529:43:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "8529:72:14"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "8529:72:14"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "value2",
                          "nodeType": "YulIdentifier",
                          "src": "8655:6:14"
                        },
                        {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "8668:9:14"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "8679:2:14",
                              "type": "",
                              "value": "64"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "8664:3:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "8664:18:14"
                        }
                      ],
                      "functionName": {
                        "name": "abi_encode_t_address_to_t_address_fromStack",
                        "nodeType": "YulIdentifier",
                        "src": "8611:43:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "8611:72:14"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "8611:72:14"
                  }
                ]
              },
              "name": "abi_encode_tuple_t_uint256_t_uint256_t_address__to_t_uint256_t_uint256_t_address__fromStack_reversed",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "headStart",
                  "nodeType": "YulTypedName",
                  "src": "8358:9:14",
                  "type": ""
                },
                {
                  "name": "value2",
                  "nodeType": "YulTypedName",
                  "src": "8370:6:14",
                  "type": ""
                },
                {
                  "name": "value1",
                  "nodeType": "YulTypedName",
                  "src": "8378:6:14",
                  "type": ""
                },
                {
                  "name": "value0",
                  "nodeType": "YulTypedName",
                  "src": "8386:6:14",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "tail",
                  "nodeType": "YulTypedName",
                  "src": "8397:4:14",
                  "type": ""
                }
              ],
              "src": "8248:442:14"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "8922:525:14",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "8932:27:14",
                    "value": {
                      "arguments": [
                        {
                          "name": "headStart",
                          "nodeType": "YulIdentifier",
                          "src": "8944:9:14"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "8955:3:14",
                          "type": "",
                          "value": "192"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "8940:3:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "8940:19:14"
                    },
                    "variableNames": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "8932:4:14"
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "value0",
                          "nodeType": "YulIdentifier",
                          "src": "9013:6:14"
                        },
                        {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "9026:9:14"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "9037:1:14",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "9022:3:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "9022:17:14"
                        }
                      ],
                      "functionName": {
                        "name": "abi_encode_t_uint256_to_t_uint256_fromStack",
                        "nodeType": "YulIdentifier",
                        "src": "8969:43:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "8969:71:14"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "8969:71:14"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "value1",
                          "nodeType": "YulIdentifier",
                          "src": "9094:6:14"
                        },
                        {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "9107:9:14"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "9118:2:14",
                              "type": "",
                              "value": "32"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "9103:3:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "9103:18:14"
                        }
                      ],
                      "functionName": {
                        "name": "abi_encode_t_uint256_to_t_uint256_fromStack",
                        "nodeType": "YulIdentifier",
                        "src": "9050:43:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "9050:72:14"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "9050:72:14"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "value2",
                          "nodeType": "YulIdentifier",
                          "src": "9176:6:14"
                        },
                        {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "9189:9:14"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "9200:2:14",
                              "type": "",
                              "value": "64"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "9185:3:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "9185:18:14"
                        }
                      ],
                      "functionName": {
                        "name": "abi_encode_t_address_to_t_address_fromStack",
                        "nodeType": "YulIdentifier",
                        "src": "9132:43:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "9132:72:14"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "9132:72:14"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "value3",
                          "nodeType": "YulIdentifier",
                          "src": "9258:6:14"
                        },
                        {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "9271:9:14"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "9282:2:14",
                              "type": "",
                              "value": "96"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "9267:3:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "9267:18:14"
                        }
                      ],
                      "functionName": {
                        "name": "abi_encode_t_uint256_to_t_uint256_fromStack",
                        "nodeType": "YulIdentifier",
                        "src": "9214:43:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "9214:72:14"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "9214:72:14"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "value4",
                          "nodeType": "YulIdentifier",
                          "src": "9334:6:14"
                        },
                        {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "9347:9:14"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "9358:3:14",
                              "type": "",
                              "value": "128"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "9343:3:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "9343:19:14"
                        }
                      ],
                      "functionName": {
                        "name": "abi_encode_t_bool_to_t_bool_fromStack",
                        "nodeType": "YulIdentifier",
                        "src": "9296:37:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "9296:67:14"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "9296:67:14"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "value5",
                          "nodeType": "YulIdentifier",
                          "src": "9411:6:14"
                        },
                        {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "9424:9:14"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "9435:3:14",
                              "type": "",
                              "value": "160"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "9420:3:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "9420:19:14"
                        }
                      ],
                      "functionName": {
                        "name": "abi_encode_t_bool_to_t_bool_fromStack",
                        "nodeType": "YulIdentifier",
                        "src": "9373:37:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "9373:67:14"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "9373:67:14"
                  }
                ]
              },
              "name": "abi_encode_tuple_t_uint256_t_uint256_t_address_t_uint256_t_bool_t_bool__to_t_uint256_t_uint256_t_address_t_uint256_t_bool_t_bool__fromStack_reversed",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "headStart",
                  "nodeType": "YulTypedName",
                  "src": "8854:9:14",
                  "type": ""
                },
                {
                  "name": "value5",
                  "nodeType": "YulTypedName",
                  "src": "8866:6:14",
                  "type": ""
                },
                {
                  "name": "value4",
                  "nodeType": "YulTypedName",
                  "src": "8874:6:14",
                  "type": ""
                },
                {
                  "name": "value3",
                  "nodeType": "YulTypedName",
                  "src": "8882:6:14",
                  "type": ""
                },
                {
                  "name": "value2",
                  "nodeType": "YulTypedName",
                  "src": "8890:6:14",
                  "type": ""
                },
                {
                  "name": "value1",
                  "nodeType": "YulTypedName",
                  "src": "8898:6:14",
                  "type": ""
                },
                {
                  "name": "value0",
                  "nodeType": "YulTypedName",
                  "src": "8906:6:14",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "tail",
                  "nodeType": "YulTypedName",
                  "src": "8917:4:14",
                  "type": ""
                }
              ],
              "src": "8696:751:14"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "9549:73:14",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "9566:3:14"
                        },
                        {
                          "name": "length",
                          "nodeType": "YulIdentifier",
                          "src": "9571:6:14"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "9559:6:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "9559:19:14"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "9559:19:14"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "9587:29:14",
                    "value": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "9606:3:14"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "9611:4:14",
                          "type": "",
                          "value": "0x20"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "9602:3:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "9602:14:14"
                    },
                    "variableNames": [
                      {
                        "name": "updated_pos",
                        "nodeType": "YulIdentifier",
                        "src": "9587:11:14"
                      }
                    ]
                  }
                ]
              },
              "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "pos",
                  "nodeType": "YulTypedName",
                  "src": "9521:3:14",
                  "type": ""
                },
                {
                  "name": "length",
                  "nodeType": "YulTypedName",
                  "src": "9526:6:14",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "updated_pos",
                  "nodeType": "YulTypedName",
                  "src": "9537:11:14",
                  "type": ""
                }
              ],
              "src": "9453:169:14"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "9673:51:14",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "9683:35:14",
                    "value": {
                      "arguments": [
                        {
                          "name": "value",
                          "nodeType": "YulIdentifier",
                          "src": "9712:5:14"
                        }
                      ],
                      "functionName": {
                        "name": "cleanup_t_uint160",
                        "nodeType": "YulIdentifier",
                        "src": "9694:17:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "9694:24:14"
                    },
                    "variableNames": [
                      {
                        "name": "cleaned",
                        "nodeType": "YulIdentifier",
                        "src": "9683:7:14"
                      }
                    ]
                  }
                ]
              },
              "name": "cleanup_t_address",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "value",
                  "nodeType": "YulTypedName",
                  "src": "9655:5:14",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "cleaned",
                  "nodeType": "YulTypedName",
                  "src": "9665:7:14",
                  "type": ""
                }
              ],
              "src": "9628:96:14"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "9772:48:14",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "9782:32:14",
                    "value": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "value",
                              "nodeType": "YulIdentifier",
                              "src": "9807:5:14"
                            }
                          ],
                          "functionName": {
                            "name": "iszero",
                            "nodeType": "YulIdentifier",
                            "src": "9800:6:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "9800:13:14"
                        }
                      ],
                      "functionName": {
                        "name": "iszero",
                        "nodeType": "YulIdentifier",
                        "src": "9793:6:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "9793:21:14"
                    },
                    "variableNames": [
                      {
                        "name": "cleaned",
                        "nodeType": "YulIdentifier",
                        "src": "9782:7:14"
                      }
                    ]
                  }
                ]
              },
              "name": "cleanup_t_bool",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "value",
                  "nodeType": "YulTypedName",
                  "src": "9754:5:14",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "cleaned",
                  "nodeType": "YulTypedName",
                  "src": "9764:7:14",
                  "type": ""
                }
              ],
              "src": "9730:90:14"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "9871:81:14",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "9881:65:14",
                    "value": {
                      "arguments": [
                        {
                          "name": "value",
                          "nodeType": "YulIdentifier",
                          "src": "9896:5:14"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "9903:42:14",
                          "type": "",
                          "value": "0xffffffffffffffffffffffffffffffffffffffff"
                        }
                      ],
                      "functionName": {
                        "name": "and",
                        "nodeType": "YulIdentifier",
                        "src": "9892:3:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "9892:54:14"
                    },
                    "variableNames": [
                      {
                        "name": "cleaned",
                        "nodeType": "YulIdentifier",
                        "src": "9881:7:14"
                      }
                    ]
                  }
                ]
              },
              "name": "cleanup_t_uint160",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "value",
                  "nodeType": "YulTypedName",
                  "src": "9853:5:14",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "cleaned",
                  "nodeType": "YulTypedName",
                  "src": "9863:7:14",
                  "type": ""
                }
              ],
              "src": "9826:126:14"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "10003:32:14",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "10013:16:14",
                    "value": {
                      "name": "value",
                      "nodeType": "YulIdentifier",
                      "src": "10024:5:14"
                    },
                    "variableNames": [
                      {
                        "name": "cleaned",
                        "nodeType": "YulIdentifier",
                        "src": "10013:7:14"
                      }
                    ]
                  }
                ]
              },
              "name": "cleanup_t_uint256",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "value",
                  "nodeType": "YulTypedName",
                  "src": "9985:5:14",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "cleaned",
                  "nodeType": "YulTypedName",
                  "src": "9995:7:14",
                  "type": ""
                }
              ],
              "src": "9958:77:14"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "10084:190:14",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "10094:33:14",
                    "value": {
                      "arguments": [
                        {
                          "name": "value",
                          "nodeType": "YulIdentifier",
                          "src": "10121:5:14"
                        }
                      ],
                      "functionName": {
                        "name": "cleanup_t_uint256",
                        "nodeType": "YulIdentifier",
                        "src": "10103:17:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "10103:24:14"
                    },
                    "variableNames": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "10094:5:14"
                      }
                    ]
                  },
                  {
                    "body": {
                      "nodeType": "YulBlock",
                      "src": "10217:22:14",
                      "statements": [
                        {
                          "expression": {
                            "arguments": [],
                            "functionName": {
                              "name": "panic_error_0x11",
                              "nodeType": "YulIdentifier",
                              "src": "10219:16:14"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "10219:18:14"
                          },
                          "nodeType": "YulExpressionStatement",
                          "src": "10219:18:14"
                        }
                      ]
                    },
                    "condition": {
                      "arguments": [
                        {
                          "name": "value",
                          "nodeType": "YulIdentifier",
                          "src": "10142:5:14"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "10149:66:14",
                          "type": "",
                          "value": "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"
                        }
                      ],
                      "functionName": {
                        "name": "eq",
                        "nodeType": "YulIdentifier",
                        "src": "10139:2:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "10139:77:14"
                    },
                    "nodeType": "YulIf",
                    "src": "10136:2:14"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "10248:20:14",
                    "value": {
                      "arguments": [
                        {
                          "name": "value",
                          "nodeType": "YulIdentifier",
                          "src": "10259:5:14"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "10266:1:14",
                          "type": "",
                          "value": "1"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "10255:3:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "10255:13:14"
                    },
                    "variableNames": [
                      {
                        "name": "ret",
                        "nodeType": "YulIdentifier",
                        "src": "10248:3:14"
                      }
                    ]
                  }
                ]
              },
              "name": "increment_t_uint256",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "value",
                  "nodeType": "YulTypedName",
                  "src": "10070:5:14",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "ret",
                  "nodeType": "YulTypedName",
                  "src": "10080:3:14",
                  "type": ""
                }
              ],
              "src": "10041:233:14"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "10308:152:14",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "10325:1:14",
                          "type": "",
                          "value": "0"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "10328:77:14",
                          "type": "",
                          "value": "35408467139433450592217433187231851964531694900788300625387963629091585785856"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "10318:6:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "10318:88:14"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "10318:88:14"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "10422:1:14",
                          "type": "",
                          "value": "4"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "10425:4:14",
                          "type": "",
                          "value": "0x11"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "10415:6:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "10415:15:14"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "10415:15:14"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "10446:1:14",
                          "type": "",
                          "value": "0"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "10449:4:14",
                          "type": "",
                          "value": "0x24"
                        }
                      ],
                      "functionName": {
                        "name": "revert",
                        "nodeType": "YulIdentifier",
                        "src": "10439:6:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "10439:15:14"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "10439:15:14"
                  }
                ]
              },
              "name": "panic_error_0x11",
              "nodeType": "YulFunctionDefinition",
              "src": "10280:180:14"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "10572:118:14",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "memPtr",
                              "nodeType": "YulIdentifier",
                              "src": "10594:6:14"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "10602:1:14",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "10590:3:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "10590:14:14"
                        },
                        {
                          "kind": "string",
                          "nodeType": "YulLiteral",
                          "src": "10606:34:14",
                          "type": "",
                          "value": "The owner of the offer cannot fi"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "10583:6:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "10583:58:14"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "10583:58:14"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "memPtr",
                              "nodeType": "YulIdentifier",
                              "src": "10662:6:14"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "10670:2:14",
                              "type": "",
                              "value": "32"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "10658:3:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "10658:15:14"
                        },
                        {
                          "kind": "string",
                          "nodeType": "YulLiteral",
                          "src": "10675:7:14",
                          "type": "",
                          "value": "ll it"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "10651:6:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "10651:32:14"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "10651:32:14"
                  }
                ]
              },
              "name": "store_literal_in_memory_16b97efa5ec3944fa852fc932397160786ef9749352467e97d8246d2312e592f",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "memPtr",
                  "nodeType": "YulTypedName",
                  "src": "10564:6:14",
                  "type": ""
                }
              ],
              "src": "10466:224:14"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "10802:118:14",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "memPtr",
                              "nodeType": "YulIdentifier",
                              "src": "10824:6:14"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "10832:1:14",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "10820:3:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "10820:14:14"
                        },
                        {
                          "kind": "string",
                          "nodeType": "YulLiteral",
                          "src": "10836:34:14",
                          "type": "",
                          "value": "A cancelled offer cannot be fulf"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "10813:6:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "10813:58:14"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "10813:58:14"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "memPtr",
                              "nodeType": "YulIdentifier",
                              "src": "10892:6:14"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "10900:2:14",
                              "type": "",
                              "value": "32"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "10888:3:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "10888:15:14"
                        },
                        {
                          "kind": "string",
                          "nodeType": "YulLiteral",
                          "src": "10905:7:14",
                          "type": "",
                          "value": "illed"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "10881:6:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "10881:32:14"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "10881:32:14"
                  }
                ]
              },
              "name": "store_literal_in_memory_1bb66d3337aef26bd0c5b237371183c3a5840fa7ad74fb356f513d19eec12261",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "memPtr",
                  "nodeType": "YulTypedName",
                  "src": "10794:6:14",
                  "type": ""
                }
              ],
              "src": "10696:224:14"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "11032:118:14",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "memPtr",
                              "nodeType": "YulIdentifier",
                              "src": "11054:6:14"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "11062:1:14",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "11050:3:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "11050:14:14"
                        },
                        {
                          "kind": "string",
                          "nodeType": "YulLiteral",
                          "src": "11066:34:14",
                          "type": "",
                          "value": "A fulfilled offer cannot be canc"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "11043:6:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "11043:58:14"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "11043:58:14"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "memPtr",
                              "nodeType": "YulIdentifier",
                              "src": "11122:6:14"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "11130:2:14",
                              "type": "",
                              "value": "32"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "11118:3:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "11118:15:14"
                        },
                        {
                          "kind": "string",
                          "nodeType": "YulLiteral",
                          "src": "11135:7:14",
                          "type": "",
                          "value": "elled"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "11111:6:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "11111:32:14"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "11111:32:14"
                  }
                ]
              },
              "name": "store_literal_in_memory_7f8f6b8a77b6466042d361ff338b4632d922afa369342ae06b5e960c826b374c",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "memPtr",
                  "nodeType": "YulTypedName",
                  "src": "11024:6:14",
                  "type": ""
                }
              ],
              "src": "10926:224:14"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "11262:115:14",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "memPtr",
                              "nodeType": "YulIdentifier",
                              "src": "11284:6:14"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "11292:1:14",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "11280:3:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "11280:14:14"
                        },
                        {
                          "kind": "string",
                          "nodeType": "YulLiteral",
                          "src": "11296:34:14",
                          "type": "",
                          "value": "An offer cannot be fulfilled twi"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "11273:6:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "11273:58:14"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "11273:58:14"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "memPtr",
                              "nodeType": "YulIdentifier",
                              "src": "11352:6:14"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "11360:2:14",
                              "type": "",
                              "value": "32"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "11348:3:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "11348:15:14"
                        },
                        {
                          "kind": "string",
                          "nodeType": "YulLiteral",
                          "src": "11365:4:14",
                          "type": "",
                          "value": "ce"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "11341:6:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "11341:29:14"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "11341:29:14"
                  }
                ]
              },
              "name": "store_literal_in_memory_8f5f9bc7d8e94e4b1f68ebce1509f5ccd65b60868e383ed727015d9809851638",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "memPtr",
                  "nodeType": "YulTypedName",
                  "src": "11254:6:14",
                  "type": ""
                }
              ],
              "src": "11156:221:14"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "11489:115:14",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "memPtr",
                              "nodeType": "YulIdentifier",
                              "src": "11511:6:14"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "11519:1:14",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "11507:3:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "11507:14:14"
                        },
                        {
                          "kind": "string",
                          "nodeType": "YulLiteral",
                          "src": "11523:34:14",
                          "type": "",
                          "value": "An offer cannot be cancelled twi"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "11500:6:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "11500:58:14"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "11500:58:14"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "memPtr",
                              "nodeType": "YulIdentifier",
                              "src": "11579:6:14"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "11587:2:14",
                              "type": "",
                              "value": "32"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "11575:3:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "11575:15:14"
                        },
                        {
                          "kind": "string",
                          "nodeType": "YulLiteral",
                          "src": "11592:4:14",
                          "type": "",
                          "value": "ce"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "11568:6:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "11568:29:14"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "11568:29:14"
                  }
                ]
              },
              "name": "store_literal_in_memory_e1c1126e5c7fc0ceccbbc15646a05c877a789fc81bb4a683c5ae2f56969950a4",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "memPtr",
                  "nodeType": "YulTypedName",
                  "src": "11481:6:14",
                  "type": ""
                }
              ],
              "src": "11383:221:14"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "11716:64:14",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "memPtr",
                              "nodeType": "YulIdentifier",
                              "src": "11738:6:14"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "11746:1:14",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "11734:3:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "11734:14:14"
                        },
                        {
                          "kind": "string",
                          "nodeType": "YulLiteral",
                          "src": "11750:22:14",
                          "type": "",
                          "value": "The offer must exist"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "11727:6:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "11727:46:14"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "11727:46:14"
                  }
                ]
              },
              "name": "store_literal_in_memory_ecfd3ca9627f908d395cf30606eaaa71e7ad9f8628919cf7498e36467c553379",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "memPtr",
                  "nodeType": "YulTypedName",
                  "src": "11708:6:14",
                  "type": ""
                }
              ],
              "src": "11610:170:14"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "11892:128:14",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "memPtr",
                              "nodeType": "YulIdentifier",
                              "src": "11914:6:14"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "11922:1:14",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "11910:3:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "11910:14:14"
                        },
                        {
                          "kind": "string",
                          "nodeType": "YulLiteral",
                          "src": "11926:34:14",
                          "type": "",
                          "value": "The KLAY amount should match wit"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "11903:6:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "11903:58:14"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "11903:58:14"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "memPtr",
                              "nodeType": "YulIdentifier",
                              "src": "11982:6:14"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "11990:2:14",
                              "type": "",
                              "value": "32"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "11978:3:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "11978:15:14"
                        },
                        {
                          "kind": "string",
                          "nodeType": "YulLiteral",
                          "src": "11995:17:14",
                          "type": "",
                          "value": "h the NFT Price"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "11971:6:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "11971:42:14"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "11971:42:14"
                  }
                ]
              },
              "name": "store_literal_in_memory_f33eb985b999dba3ee453a82d71ec5c3334152629286880cf4eafbc76abe88a8",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "memPtr",
                  "nodeType": "YulTypedName",
                  "src": "11884:6:14",
                  "type": ""
                }
              ],
              "src": "11786:234:14"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "12132:124:14",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "memPtr",
                              "nodeType": "YulIdentifier",
                              "src": "12154:6:14"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "12162:1:14",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "12150:3:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "12150:14:14"
                        },
                        {
                          "kind": "string",
                          "nodeType": "YulLiteral",
                          "src": "12166:34:14",
                          "type": "",
                          "value": "The offer can only be canceled b"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "12143:6:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "12143:58:14"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "12143:58:14"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "memPtr",
                              "nodeType": "YulIdentifier",
                              "src": "12222:6:14"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "12230:2:14",
                              "type": "",
                              "value": "32"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "12218:3:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "12218:15:14"
                        },
                        {
                          "kind": "string",
                          "nodeType": "YulLiteral",
                          "src": "12235:13:14",
                          "type": "",
                          "value": "y the owner"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "12211:6:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "12211:38:14"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "12211:38:14"
                  }
                ]
              },
              "name": "store_literal_in_memory_f9ee9e7c49e557ffe8651318f112ec27248033e18930bbfb9b12687b1fc74103",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "memPtr",
                  "nodeType": "YulTypedName",
                  "src": "12124:6:14",
                  "type": ""
                }
              ],
              "src": "12026:230:14"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "12305:79:14",
                "statements": [
                  {
                    "body": {
                      "nodeType": "YulBlock",
                      "src": "12362:16:14",
                      "statements": [
                        {
                          "expression": {
                            "arguments": [
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "12371:1:14",
                                "type": "",
                                "value": "0"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "12374:1:14",
                                "type": "",
                                "value": "0"
                              }
                            ],
                            "functionName": {
                              "name": "revert",
                              "nodeType": "YulIdentifier",
                              "src": "12364:6:14"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "12364:12:14"
                          },
                          "nodeType": "YulExpressionStatement",
                          "src": "12364:12:14"
                        }
                      ]
                    },
                    "condition": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "value",
                              "nodeType": "YulIdentifier",
                              "src": "12328:5:14"
                            },
                            {
                              "arguments": [
                                {
                                  "name": "value",
                                  "nodeType": "YulIdentifier",
                                  "src": "12353:5:14"
                                }
                              ],
                              "functionName": {
                                "name": "cleanup_t_uint256",
                                "nodeType": "YulIdentifier",
                                "src": "12335:17:14"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "12335:24:14"
                            }
                          ],
                          "functionName": {
                            "name": "eq",
                            "nodeType": "YulIdentifier",
                            "src": "12325:2:14"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "12325:35:14"
                        }
                      ],
                      "functionName": {
                        "name": "iszero",
                        "nodeType": "YulIdentifier",
                        "src": "12318:6:14"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "12318:43:14"
                    },
                    "nodeType": "YulIf",
                    "src": "12315:2:14"
                  }
                ]
              },
              "name": "validator_revert_t_uint256",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "value",
                  "nodeType": "YulTypedName",
                  "src": "12298:5:14",
                  "type": ""
                }
              ],
              "src": "12262:122:14"
            }
          ]
        },
        "contents": "{\n\n    function abi_decode_t_uint256(offset, end) -> value {\n        value := calldataload(offset)\n        validator_revert_t_uint256(value)\n    }\n\n    function abi_decode_tuple_t_uint256(headStart, dataEnd) -> value0 {\n        if slt(sub(dataEnd, headStart), 32) { revert(0, 0) }\n\n        {\n\n            let offset := 0\n\n            value0 := abi_decode_t_uint256(add(headStart, offset), dataEnd)\n        }\n\n    }\n\n    function abi_decode_tuple_t_uint256t_uint256(headStart, dataEnd) -> value0, value1 {\n        if slt(sub(dataEnd, headStart), 64) { revert(0, 0) }\n\n        {\n\n            let offset := 0\n\n            value0 := abi_decode_t_uint256(add(headStart, offset), dataEnd)\n        }\n\n        {\n\n            let offset := 32\n\n            value1 := abi_decode_t_uint256(add(headStart, offset), dataEnd)\n        }\n\n    }\n\n    function abi_encode_t_address_to_t_address_fromStack(value, pos) {\n        mstore(pos, cleanup_t_address(value))\n    }\n\n    function abi_encode_t_bool_to_t_bool_fromStack(value, pos) {\n        mstore(pos, cleanup_t_bool(value))\n    }\n\n    function abi_encode_t_stringliteral_16b97efa5ec3944fa852fc932397160786ef9749352467e97d8246d2312e592f_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 37)\n        store_literal_in_memory_16b97efa5ec3944fa852fc932397160786ef9749352467e97d8246d2312e592f(pos)\n        end := add(pos, 64)\n    }\n\n    function abi_encode_t_stringliteral_1bb66d3337aef26bd0c5b237371183c3a5840fa7ad74fb356f513d19eec12261_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 37)\n        store_literal_in_memory_1bb66d3337aef26bd0c5b237371183c3a5840fa7ad74fb356f513d19eec12261(pos)\n        end := add(pos, 64)\n    }\n\n    function abi_encode_t_stringliteral_7f8f6b8a77b6466042d361ff338b4632d922afa369342ae06b5e960c826b374c_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 37)\n        store_literal_in_memory_7f8f6b8a77b6466042d361ff338b4632d922afa369342ae06b5e960c826b374c(pos)\n        end := add(pos, 64)\n    }\n\n    function abi_encode_t_stringliteral_8f5f9bc7d8e94e4b1f68ebce1509f5ccd65b60868e383ed727015d9809851638_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 34)\n        store_literal_in_memory_8f5f9bc7d8e94e4b1f68ebce1509f5ccd65b60868e383ed727015d9809851638(pos)\n        end := add(pos, 64)\n    }\n\n    function abi_encode_t_stringliteral_e1c1126e5c7fc0ceccbbc15646a05c877a789fc81bb4a683c5ae2f56969950a4_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 34)\n        store_literal_in_memory_e1c1126e5c7fc0ceccbbc15646a05c877a789fc81bb4a683c5ae2f56969950a4(pos)\n        end := add(pos, 64)\n    }\n\n    function abi_encode_t_stringliteral_ecfd3ca9627f908d395cf30606eaaa71e7ad9f8628919cf7498e36467c553379_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 20)\n        store_literal_in_memory_ecfd3ca9627f908d395cf30606eaaa71e7ad9f8628919cf7498e36467c553379(pos)\n        end := add(pos, 32)\n    }\n\n    function abi_encode_t_stringliteral_f33eb985b999dba3ee453a82d71ec5c3334152629286880cf4eafbc76abe88a8_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 47)\n        store_literal_in_memory_f33eb985b999dba3ee453a82d71ec5c3334152629286880cf4eafbc76abe88a8(pos)\n        end := add(pos, 64)\n    }\n\n    function abi_encode_t_stringliteral_f9ee9e7c49e557ffe8651318f112ec27248033e18930bbfb9b12687b1fc74103_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 43)\n        store_literal_in_memory_f9ee9e7c49e557ffe8651318f112ec27248033e18930bbfb9b12687b1fc74103(pos)\n        end := add(pos, 64)\n    }\n\n    function abi_encode_t_uint256_to_t_uint256_fromStack(value, pos) {\n        mstore(pos, cleanup_t_uint256(value))\n    }\n\n    function abi_encode_tuple_t_address_t_address_t_uint256__to_t_address_t_address_t_uint256__fromStack_reversed(headStart , value2, value1, value0) -> tail {\n        tail := add(headStart, 96)\n\n        abi_encode_t_address_to_t_address_fromStack(value0,  add(headStart, 0))\n\n        abi_encode_t_address_to_t_address_fromStack(value1,  add(headStart, 32))\n\n        abi_encode_t_uint256_to_t_uint256_fromStack(value2,  add(headStart, 64))\n\n    }\n\n    function abi_encode_tuple_t_stringliteral_16b97efa5ec3944fa852fc932397160786ef9749352467e97d8246d2312e592f__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_16b97efa5ec3944fa852fc932397160786ef9749352467e97d8246d2312e592f_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function abi_encode_tuple_t_stringliteral_1bb66d3337aef26bd0c5b237371183c3a5840fa7ad74fb356f513d19eec12261__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_1bb66d3337aef26bd0c5b237371183c3a5840fa7ad74fb356f513d19eec12261_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function abi_encode_tuple_t_stringliteral_7f8f6b8a77b6466042d361ff338b4632d922afa369342ae06b5e960c826b374c__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_7f8f6b8a77b6466042d361ff338b4632d922afa369342ae06b5e960c826b374c_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function abi_encode_tuple_t_stringliteral_8f5f9bc7d8e94e4b1f68ebce1509f5ccd65b60868e383ed727015d9809851638__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_8f5f9bc7d8e94e4b1f68ebce1509f5ccd65b60868e383ed727015d9809851638_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function abi_encode_tuple_t_stringliteral_e1c1126e5c7fc0ceccbbc15646a05c877a789fc81bb4a683c5ae2f56969950a4__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_e1c1126e5c7fc0ceccbbc15646a05c877a789fc81bb4a683c5ae2f56969950a4_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function abi_encode_tuple_t_stringliteral_ecfd3ca9627f908d395cf30606eaaa71e7ad9f8628919cf7498e36467c553379__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_ecfd3ca9627f908d395cf30606eaaa71e7ad9f8628919cf7498e36467c553379_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function abi_encode_tuple_t_stringliteral_f33eb985b999dba3ee453a82d71ec5c3334152629286880cf4eafbc76abe88a8__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_f33eb985b999dba3ee453a82d71ec5c3334152629286880cf4eafbc76abe88a8_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function abi_encode_tuple_t_stringliteral_f9ee9e7c49e557ffe8651318f112ec27248033e18930bbfb9b12687b1fc74103__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_f9ee9e7c49e557ffe8651318f112ec27248033e18930bbfb9b12687b1fc74103_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function abi_encode_tuple_t_uint256__to_t_uint256__fromStack_reversed(headStart , value0) -> tail {\n        tail := add(headStart, 32)\n\n        abi_encode_t_uint256_to_t_uint256_fromStack(value0,  add(headStart, 0))\n\n    }\n\n    function abi_encode_tuple_t_uint256_t_uint256_t_address__to_t_uint256_t_uint256_t_address__fromStack_reversed(headStart , value2, value1, value0) -> tail {\n        tail := add(headStart, 96)\n\n        abi_encode_t_uint256_to_t_uint256_fromStack(value0,  add(headStart, 0))\n\n        abi_encode_t_uint256_to_t_uint256_fromStack(value1,  add(headStart, 32))\n\n        abi_encode_t_address_to_t_address_fromStack(value2,  add(headStart, 64))\n\n    }\n\n    function abi_encode_tuple_t_uint256_t_uint256_t_address_t_uint256_t_bool_t_bool__to_t_uint256_t_uint256_t_address_t_uint256_t_bool_t_bool__fromStack_reversed(headStart , value5, value4, value3, value2, value1, value0) -> tail {\n        tail := add(headStart, 192)\n\n        abi_encode_t_uint256_to_t_uint256_fromStack(value0,  add(headStart, 0))\n\n        abi_encode_t_uint256_to_t_uint256_fromStack(value1,  add(headStart, 32))\n\n        abi_encode_t_address_to_t_address_fromStack(value2,  add(headStart, 64))\n\n        abi_encode_t_uint256_to_t_uint256_fromStack(value3,  add(headStart, 96))\n\n        abi_encode_t_bool_to_t_bool_fromStack(value4,  add(headStart, 128))\n\n        abi_encode_t_bool_to_t_bool_fromStack(value5,  add(headStart, 160))\n\n    }\n\n    function array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, length) -> updated_pos {\n        mstore(pos, length)\n        updated_pos := add(pos, 0x20)\n    }\n\n    function cleanup_t_address(value) -> cleaned {\n        cleaned := cleanup_t_uint160(value)\n    }\n\n    function cleanup_t_bool(value) -> cleaned {\n        cleaned := iszero(iszero(value))\n    }\n\n    function cleanup_t_uint160(value) -> cleaned {\n        cleaned := and(value, 0xffffffffffffffffffffffffffffffffffffffff)\n    }\n\n    function cleanup_t_uint256(value) -> cleaned {\n        cleaned := value\n    }\n\n    function increment_t_uint256(value) -> ret {\n        value := cleanup_t_uint256(value)\n        if eq(value, 0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff) { panic_error_0x11() }\n        ret := add(value, 1)\n    }\n\n    function panic_error_0x11() {\n        mstore(0, 35408467139433450592217433187231851964531694900788300625387963629091585785856)\n        mstore(4, 0x11)\n        revert(0, 0x24)\n    }\n\n    function store_literal_in_memory_16b97efa5ec3944fa852fc932397160786ef9749352467e97d8246d2312e592f(memPtr) {\n\n        mstore(add(memPtr, 0), \"The owner of the offer cannot fi\")\n\n        mstore(add(memPtr, 32), \"ll it\")\n\n    }\n\n    function store_literal_in_memory_1bb66d3337aef26bd0c5b237371183c3a5840fa7ad74fb356f513d19eec12261(memPtr) {\n\n        mstore(add(memPtr, 0), \"A cancelled offer cannot be fulf\")\n\n        mstore(add(memPtr, 32), \"illed\")\n\n    }\n\n    function store_literal_in_memory_7f8f6b8a77b6466042d361ff338b4632d922afa369342ae06b5e960c826b374c(memPtr) {\n\n        mstore(add(memPtr, 0), \"A fulfilled offer cannot be canc\")\n\n        mstore(add(memPtr, 32), \"elled\")\n\n    }\n\n    function store_literal_in_memory_8f5f9bc7d8e94e4b1f68ebce1509f5ccd65b60868e383ed727015d9809851638(memPtr) {\n\n        mstore(add(memPtr, 0), \"An offer cannot be fulfilled twi\")\n\n        mstore(add(memPtr, 32), \"ce\")\n\n    }\n\n    function store_literal_in_memory_e1c1126e5c7fc0ceccbbc15646a05c877a789fc81bb4a683c5ae2f56969950a4(memPtr) {\n\n        mstore(add(memPtr, 0), \"An offer cannot be cancelled twi\")\n\n        mstore(add(memPtr, 32), \"ce\")\n\n    }\n\n    function store_literal_in_memory_ecfd3ca9627f908d395cf30606eaaa71e7ad9f8628919cf7498e36467c553379(memPtr) {\n\n        mstore(add(memPtr, 0), \"The offer must exist\")\n\n    }\n\n    function store_literal_in_memory_f33eb985b999dba3ee453a82d71ec5c3334152629286880cf4eafbc76abe88a8(memPtr) {\n\n        mstore(add(memPtr, 0), \"The KLAY amount should match wit\")\n\n        mstore(add(memPtr, 32), \"h the NFT Price\")\n\n    }\n\n    function store_literal_in_memory_f9ee9e7c49e557ffe8651318f112ec27248033e18930bbfb9b12687b1fc74103(memPtr) {\n\n        mstore(add(memPtr, 0), \"The offer can only be canceled b\")\n\n        mstore(add(memPtr, 32), \"y the owner\")\n\n    }\n\n    function validator_revert_t_uint256(value) {\n        if iszero(eq(value, cleanup_t_uint256(value))) { revert(0, 0) }\n    }\n\n}\n",
        "id": 14,
        "language": "Yul",
        "name": "#utility.yul"
      }
    ],
    "sourceMap": "6886:2512:2:-:0;;;7501:94;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;7574:14;7544:13;;:45;;;;;;;;;;;;;;;;;;7501:94;6886:2512;;7:143:14;64:5;95:6;89:13;80:22;;111:33;138:5;111:33;:::i;:::-;70:80;;;;:::o;156:284::-;226:6;275:2;263:9;254:7;250:23;246:32;243:2;;;291:1;288;281:12;243:2;334:1;359:64;415:7;406:6;395:9;391:22;359:64;:::i;:::-;349:74;;305:128;233:207;;;;:::o;446:96::-;483:7;512:24;530:5;512:24;:::i;:::-;501:35;;491:51;;;:::o;548:126::-;585:7;625:42;618:5;614:54;603:65;;593:81;;;:::o;680:122::-;753:24;771:5;753:24;:::i;:::-;746:5;743:35;733:2;;792:1;789;782:12;733:2;723:79;:::o;6886:2512:2:-;;;;;;;",
    "deployedSourceMap": "6886:2512:2:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;9381:8;;;7672:293;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;6910:22;;;;;;;;;;;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;7971:712;;;:::i;:::-;;6937:21;;;;;;;;;;;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;6963:38;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;;;;;;:::i;:::-;;;;;;;;8689:583;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;7672:293;7728:13;;;;;;;;;;;:26;;;7755:10;7775:4;7782:3;7728:58;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;7793:10;;:13;;;;;;;;;:::i;:::-;;;;;;7834:57;;;;;;;;7841:10;;7834:57;;;;7853:3;7834:57;;;;7858:10;7834:57;;;;;;7870:6;7834:57;;;;7878:5;7834:57;;;;;;7885:5;7834:57;;;;;7813:6;:18;7820:10;;7813:18;;;;;;;;;;;:78;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;7903:56;7909:10;;7921:3;7926:10;7938:6;7946:5;7953;7903:56;;;;;;;;;;;:::i;:::-;;;;;;;;7672:293;;:::o;6910:22::-;;;;:::o;7971:712::-;8014:9;;:12;;;;;;;;;:::i;:::-;;;;;;8033:21;8057:6;:17;8064:9;;8057:17;;;;;;;;;;;8033:41;;8107:9;;8089:6;:14;;;:27;8081:60;;;;;;;;;;;;:::i;:::-;;;;;;;;;8171:10;8156:25;;:6;:11;;;;;;;;;;;;:25;;;;8148:75;;;;;;;;;;;;:::i;:::-;;;;;;;;;8239:6;:16;;;;;;;;;;;;8238:17;8230:64;;;;;;;;;;;;:::i;:::-;;;;;;;;;8310:6;:16;;;;;;;;;;;;8309:17;8301:67;;;;;;;;;;;;:::i;:::-;;;;;;;;;8396:6;:12;;;8383:9;:25;8375:85;;;;;;;;;;;;:::i;:::-;;;;;;;;;8486:4;8467:6;:16;;;:23;;;;;;;;;;;;;;;;;;8497:13;;;;;;;;;;;:26;;;8532:4;8539:10;8551:6;:15;;;8497:70;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8582:6;:11;;;;;;;;;;;;8574:29;;:40;8604:9;8574:40;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8626:51;8638:9;;8649:6;:15;;;8666:10;8626:51;;;;;;;;:::i;:::-;;;;;;;;7971:712;:::o;6937:21::-;;;;:::o;6963:38::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;8689:583::-;8739:21;8763:6;:16;8770:8;8763:16;;;;;;;;;;;8739:40;;8812:8;8794:6;:14;;;:26;8786:59;;;;;;;;;;;;:::i;:::-;;;;;;;;;8875:10;8860:25;;:6;:11;;;;;;;;;;;;:25;;;8852:81;;;;;;;;;;;;:::i;:::-;;;;;;;;;8968:5;8948:25;;:6;:16;;;;;;;;;;;;:25;;;8940:75;;;;;;;;;;;;:::i;:::-;;;;;;;;;9050:5;9030:25;;:6;:16;;;;;;;;;;;;:25;;;9022:72;;;;;;;;;;;;:::i;:::-;;;;;;;;;9101:13;;;;;;;;;;;:26;;;9136:4;9143:10;9155:6;:15;;;9101:70;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;9197:4;9178:6;:16;;;:23;;;;;;;;;;;;;;;;;;9213:53;9228:8;9238:6;:15;;;9255:10;9213:53;;;;;;;;:::i;:::-;;;;;;;;8689:583;;:::o;7:139:14:-;53:5;91:6;78:20;69:29;;107:33;134:5;107:33;:::i;:::-;59:87;;;;:::o;152:262::-;211:6;260:2;248:9;239:7;235:23;231:32;228:2;;;276:1;273;266:12;228:2;319:1;344:53;389:7;380:6;369:9;365:22;344:53;:::i;:::-;334:63;;290:117;218:196;;;;:::o;420:407::-;488:6;496;545:2;533:9;524:7;520:23;516:32;513:2;;;561:1;558;551:12;513:2;604:1;629:53;674:7;665:6;654:9;650:22;629:53;:::i;:::-;619:63;;575:117;731:2;757:53;802:7;793:6;782:9;778:22;757:53;:::i;:::-;747:63;;702:118;503:324;;;;;:::o;833:118::-;920:24;938:5;920:24;:::i;:::-;915:3;908:37;898:53;;:::o;957:109::-;1038:21;1053:5;1038:21;:::i;:::-;1033:3;1026:34;1016:50;;:::o;1072:366::-;1214:3;1235:67;1299:2;1294:3;1235:67;:::i;:::-;1228:74;;1311:93;1400:3;1311:93;:::i;:::-;1429:2;1424:3;1420:12;1413:19;;1218:220;;;:::o;1444:366::-;1586:3;1607:67;1671:2;1666:3;1607:67;:::i;:::-;1600:74;;1683:93;1772:3;1683:93;:::i;:::-;1801:2;1796:3;1792:12;1785:19;;1590:220;;;:::o;1816:366::-;1958:3;1979:67;2043:2;2038:3;1979:67;:::i;:::-;1972:74;;2055:93;2144:3;2055:93;:::i;:::-;2173:2;2168:3;2164:12;2157:19;;1962:220;;;:::o;2188:366::-;2330:3;2351:67;2415:2;2410:3;2351:67;:::i;:::-;2344:74;;2427:93;2516:3;2427:93;:::i;:::-;2545:2;2540:3;2536:12;2529:19;;2334:220;;;:::o;2560:366::-;2702:3;2723:67;2787:2;2782:3;2723:67;:::i;:::-;2716:74;;2799:93;2888:3;2799:93;:::i;:::-;2917:2;2912:3;2908:12;2901:19;;2706:220;;;:::o;2932:366::-;3074:3;3095:67;3159:2;3154:3;3095:67;:::i;:::-;3088:74;;3171:93;3260:3;3171:93;:::i;:::-;3289:2;3284:3;3280:12;3273:19;;3078:220;;;:::o;3304:366::-;3446:3;3467:67;3531:2;3526:3;3467:67;:::i;:::-;3460:74;;3543:93;3632:3;3543:93;:::i;:::-;3661:2;3656:3;3652:12;3645:19;;3450:220;;;:::o;3676:366::-;3818:3;3839:67;3903:2;3898:3;3839:67;:::i;:::-;3832:74;;3915:93;4004:3;3915:93;:::i;:::-;4033:2;4028:3;4024:12;4017:19;;3822:220;;;:::o;4048:118::-;4135:24;4153:5;4135:24;:::i;:::-;4130:3;4123:37;4113:53;;:::o;4172:442::-;4321:4;4359:2;4348:9;4344:18;4336:26;;4372:71;4440:1;4429:9;4425:17;4416:6;4372:71;:::i;:::-;4453:72;4521:2;4510:9;4506:18;4497:6;4453:72;:::i;:::-;4535;4603:2;4592:9;4588:18;4579:6;4535:72;:::i;:::-;4326:288;;;;;;:::o;4620:419::-;4786:4;4824:2;4813:9;4809:18;4801:26;;4873:9;4867:4;4863:20;4859:1;4848:9;4844:17;4837:47;4901:131;5027:4;4901:131;:::i;:::-;4893:139;;4791:248;;;:::o;5045:419::-;5211:4;5249:2;5238:9;5234:18;5226:26;;5298:9;5292:4;5288:20;5284:1;5273:9;5269:17;5262:47;5326:131;5452:4;5326:131;:::i;:::-;5318:139;;5216:248;;;:::o;5470:419::-;5636:4;5674:2;5663:9;5659:18;5651:26;;5723:9;5717:4;5713:20;5709:1;5698:9;5694:17;5687:47;5751:131;5877:4;5751:131;:::i;:::-;5743:139;;5641:248;;;:::o;5895:419::-;6061:4;6099:2;6088:9;6084:18;6076:26;;6148:9;6142:4;6138:20;6134:1;6123:9;6119:17;6112:47;6176:131;6302:4;6176:131;:::i;:::-;6168:139;;6066:248;;;:::o;6320:419::-;6486:4;6524:2;6513:9;6509:18;6501:26;;6573:9;6567:4;6563:20;6559:1;6548:9;6544:17;6537:47;6601:131;6727:4;6601:131;:::i;:::-;6593:139;;6491:248;;;:::o;6745:419::-;6911:4;6949:2;6938:9;6934:18;6926:26;;6998:9;6992:4;6988:20;6984:1;6973:9;6969:17;6962:47;7026:131;7152:4;7026:131;:::i;:::-;7018:139;;6916:248;;;:::o;7170:419::-;7336:4;7374:2;7363:9;7359:18;7351:26;;7423:9;7417:4;7413:20;7409:1;7398:9;7394:17;7387:47;7451:131;7577:4;7451:131;:::i;:::-;7443:139;;7341:248;;;:::o;7595:419::-;7761:4;7799:2;7788:9;7784:18;7776:26;;7848:9;7842:4;7838:20;7834:1;7823:9;7819:17;7812:47;7876:131;8002:4;7876:131;:::i;:::-;7868:139;;7766:248;;;:::o;8020:222::-;8113:4;8151:2;8140:9;8136:18;8128:26;;8164:71;8232:1;8221:9;8217:17;8208:6;8164:71;:::i;:::-;8118:124;;;;:::o;8248:442::-;8397:4;8435:2;8424:9;8420:18;8412:26;;8448:71;8516:1;8505:9;8501:17;8492:6;8448:71;:::i;:::-;8529:72;8597:2;8586:9;8582:18;8573:6;8529:72;:::i;:::-;8611;8679:2;8668:9;8664:18;8655:6;8611:72;:::i;:::-;8402:288;;;;;;:::o;8696:751::-;8917:4;8955:3;8944:9;8940:19;8932:27;;8969:71;9037:1;9026:9;9022:17;9013:6;8969:71;:::i;:::-;9050:72;9118:2;9107:9;9103:18;9094:6;9050:72;:::i;:::-;9132;9200:2;9189:9;9185:18;9176:6;9132:72;:::i;:::-;9214;9282:2;9271:9;9267:18;9258:6;9214:72;:::i;:::-;9296:67;9358:3;9347:9;9343:19;9334:6;9296:67;:::i;:::-;9373;9435:3;9424:9;9420:19;9411:6;9373:67;:::i;:::-;8922:525;;;;;;;;;:::o;9453:169::-;9537:11;9571:6;9566:3;9559:19;9611:4;9606:3;9602:14;9587:29;;9549:73;;;;:::o;9628:96::-;9665:7;9694:24;9712:5;9694:24;:::i;:::-;9683:35;;9673:51;;;:::o;9730:90::-;9764:7;9807:5;9800:13;9793:21;9782:32;;9772:48;;;:::o;9826:126::-;9863:7;9903:42;9896:5;9892:54;9881:65;;9871:81;;;:::o;9958:77::-;9995:7;10024:5;10013:16;;10003:32;;;:::o;10041:233::-;10080:3;10103:24;10121:5;10103:24;:::i;:::-;10094:33;;10149:66;10142:5;10139:77;10136:2;;;10219:18;;:::i;:::-;10136:2;10266:1;10259:5;10255:13;10248:20;;10084:190;;;:::o;10280:180::-;10328:77;10325:1;10318:88;10425:4;10422:1;10415:15;10449:4;10446:1;10439:15;10466:224;10606:34;10602:1;10594:6;10590:14;10583:58;10675:7;10670:2;10662:6;10658:15;10651:32;10572:118;:::o;10696:224::-;10836:34;10832:1;10824:6;10820:14;10813:58;10905:7;10900:2;10892:6;10888:15;10881:32;10802:118;:::o;10926:224::-;11066:34;11062:1;11054:6;11050:14;11043:58;11135:7;11130:2;11122:6;11118:15;11111:32;11032:118;:::o;11156:221::-;11296:34;11292:1;11284:6;11280:14;11273:58;11365:4;11360:2;11352:6;11348:15;11341:29;11262:115;:::o;11383:221::-;11523:34;11519:1;11511:6;11507:14;11500:58;11592:4;11587:2;11579:6;11575:15;11568:29;11489:115;:::o;11610:170::-;11750:22;11746:1;11738:6;11734:14;11727:46;11716:64;:::o;11786:234::-;11926:34;11922:1;11914:6;11910:14;11903:58;11995:17;11990:2;11982:6;11978:15;11971:42;11892:128;:::o;12026:230::-;12166:34;12162:1;12154:6;12150:14;12143:58;12235:13;12230:2;12222:6;12218:15;12211:38;12132:124;:::o;12262:122::-;12335:24;12353:5;12335:24;:::i;:::-;12328:5;12325:35;12315:2;;12374:1;12371;12364:12;12315:2;12305:79;:::o",
    "source": "// SPDX-License-Identifier: MIT\r\npragma solidity 0.8.4;\r\n\r\nimport \"./NFTCollection.sol\";\r\n\r\nlibrary safeMath {\r\n    /**\r\n     * @dev Returns the addition of two unsigned integers, with an overflow flag.\r\n     *\r\n     * _Available since v3.4._\r\n     */\r\n    function tryAdd(uint256 a, uint256 b) internal pure returns (bool, uint256) {\r\n        uint256 c = a + b;\r\n        if (c < a) return (false, 0);\r\n        return (true, c);\r\n    }\r\n\r\n    /**\r\n     * @dev Returns the substraction of two unsigned integers, with an overflow flag.\r\n     *\r\n     * _Available since v3.4._\r\n     */\r\n    function trySub(uint256 a, uint256 b) internal pure returns (bool, uint256) {\r\n        if (b > a) return (false, 0);\r\n        return (true, a - b);\r\n    }\r\n\r\n    /**\r\n     * @dev Returns the multiplication of two unsigned integers, with an overflow flag.\r\n     *\r\n     * _Available since v3.4._\r\n     */\r\n    function tryMul(uint256 a, uint256 b) internal pure returns (bool, uint256) {\r\n        // Gas optimization: this is cheaper than requiring 'a' not being zero, but the\r\n        // benefit is lost if 'b' is also tested.\r\n        // See: https://github.com/OpenZeppelin/openzeppelin-contracts/pull/522\r\n        if (a == 0) return (true, 0);\r\n        uint256 c = a * b;\r\n        if (c / a != b) return (false, 0);\r\n        return (true, c);\r\n    }\r\n\r\n    /**\r\n     * @dev Returns the division of two unsigned integers, with a division by zero flag.\r\n     *\r\n     * _Available since v3.4._\r\n     */\r\n    function tryDiv(uint256 a, uint256 b) internal pure returns (bool, uint256) {\r\n        if (b == 0) return (false, 0);\r\n        return (true, a / b);\r\n    }\r\n\r\n    /**\r\n     * @dev Returns the remainder of dividing two unsigned integers, with a division by zero flag.\r\n     *\r\n     * _Available since v3.4._\r\n     */\r\n    function tryMod(uint256 a, uint256 b) internal pure returns (bool, uint256) {\r\n        if (b == 0) return (false, 0);\r\n        return (true, a % b);\r\n    }\r\n\r\n    /**\r\n     * @dev Returns the addition of two unsigned integers, reverting on\r\n     * overflow.\r\n     *\r\n     * Counterpart to Solidity's `+` operator.\r\n     *\r\n     * Requirements:\r\n     *\r\n     * - Addition cannot overflow.\r\n     */\r\n    function add(uint256 a, uint256 b) internal pure returns (uint256) {\r\n        uint256 c = a + b;\r\n        require(c >= a, \"SafeMath: addition overflow\");\r\n        return c;\r\n    }\r\n\r\n    /**\r\n     * @dev Returns the subtraction of two unsigned integers, reverting on\r\n     * overflow (when the result is negative).\r\n     *\r\n     * Counterpart to Solidity's `-` operator.\r\n     *\r\n     * Requirements:\r\n     *\r\n     * - Subtraction cannot overflow.\r\n     */\r\n    function sub(uint256 a, uint256 b) internal pure returns (uint256) {\r\n        require(b <= a, \"SafeMath: subtraction overflow\");\r\n        return a - b;\r\n    }\r\n\r\n    /**\r\n     * @dev Returns the multiplication of two unsigned integers, reverting on\r\n     * overflow.\r\n     *\r\n     * Counterpart to Solidity's `*` operator.\r\n     *\r\n     * Requirements:\r\n     *\r\n     * - Multiplication cannot overflow.\r\n     */\r\n    function mul(uint256 a, uint256 b) internal pure returns (uint256) {\r\n        if (a == 0) return 0;\r\n        uint256 c = a * b;\r\n        require(c / a == b, \"SafeMath: multiplication overflow\");\r\n        return c;\r\n    }\r\n\r\n    /**\r\n     * @dev Returns the integer division of two unsigned integers, reverting on\r\n     * division by zero. The result is rounded towards zero.\r\n     *\r\n     * Counterpart to Solidity's `/` operator. Note: this function uses a\r\n     * `revert` opcode (which leaves remaining gas untouched) while Solidity\r\n     * uses an invalid opcode to revert (consuming all remaining gas).\r\n     *\r\n     * Requirements:\r\n     *\r\n     * - The divisor cannot be zero.\r\n     */\r\n    function div(uint256 a, uint256 b) internal pure returns (uint256) {\r\n        require(b > 0, \"SafeMath: division by zero\");\r\n        return a / b;\r\n    }\r\n\r\n    /**\r\n     * @dev Returns the remainder of dividing two unsigned integers. (unsigned integer modulo),\r\n     * reverting when dividing by zero.\r\n     *\r\n     * Counterpart to Solidity's `%` operator. This function uses a `revert`\r\n     * opcode (which leaves remaining gas untouched) while Solidity uses an\r\n     * invalid opcode to revert (consuming all remaining gas).\r\n     *\r\n     * Requirements:\r\n     *\r\n     * - The divisor cannot be zero.\r\n     */\r\n    function mod(uint256 a, uint256 b) internal pure returns (uint256) {\r\n        require(b > 0, \"SafeMath: modulo by zero\");\r\n        return a % b;\r\n    }\r\n\r\n    /**\r\n     * @dev Returns the subtraction of two unsigned integers, reverting with custom message on\r\n     * overflow (when the result is negative).\r\n     *\r\n     * CAUTION: This function is deprecated because it requires allocating memory for the error\r\n     * message unnecessarily. For custom revert reasons use {trySub}.\r\n     *\r\n     * Counterpart to Solidity's `-` operator.\r\n     *\r\n     * Requirements:\r\n     *\r\n     * - Subtraction cannot overflow.\r\n     */\r\n    function sub(uint256 a, uint256 b, string memory errorMessage) internal pure returns (uint256) {\r\n        require(b <= a, errorMessage);\r\n        return a - b;\r\n    }\r\n\r\n    /**\r\n     * @dev Returns the integer division of two unsigned integers, reverting with custom message on\r\n     * division by zero. The result is rounded towards zero.\r\n     *\r\n     * CAUTION: This function is deprecated because it requires allocating memory for the error\r\n     * message unnecessarily. For custom revert reasons use {tryDiv}.\r\n     *\r\n     * Counterpart to Solidity's `/` operator. Note: this function uses a\r\n     * `revert` opcode (which leaves remaining gas untouched) while Solidity\r\n     * uses an invalid opcode to revert (consuming all remaining gas).\r\n     *\r\n     * Requirements:\r\n     *\r\n     * - The divisor cannot be zero.\r\n     */\r\n    function div(uint256 a, uint256 b, string memory errorMessage) internal pure returns (uint256) {\r\n        require(b > 0, errorMessage);\r\n        return a / b;\r\n    }\r\n\r\n    /**\r\n     * @dev Returns the remainder of dividing two unsigned integers. (unsigned integer modulo),\r\n     * reverting with custom message when dividing by zero.\r\n     *\r\n     * CAUTION: This function is deprecated because it requires allocating memory for the error\r\n     * message unnecessarily. For custom revert reasons use {tryMod}.\r\n     *\r\n     * Counterpart to Solidity's `%` operator. This function uses a `revert`\r\n     * opcode (which leaves remaining gas untouched) while Solidity uses an\r\n     * invalid opcode to revert (consuming all remaining gas).\r\n     *\r\n     * Requirements:\r\n     *\r\n     * - The divisor cannot be zero.\r\n     */\r\n    function mod(uint256 a, uint256 b, string memory errorMessage) internal pure returns (uint256) {\r\n        require(b > 0, errorMessage);\r\n        return a % b;\r\n    }\r\n}\r\n\r\ncontract NFTMarket {\r\n  uint public offerCount;\r\n  uint public fillCount;\r\n  mapping (uint => _Offer) public offers;\r\n  NFTCollection nftCollection;\r\n  \r\n  struct _Offer {\r\n    uint offerId;\r\n    uint token_id;\r\n    address user;\r\n    uint price;\r\n    bool fulfilled;\r\n    bool cancelled;\r\n  }\r\n\r\n  event Offer(\r\n    uint offerId,\r\n    uint token_id,\r\n    address user,\r\n    uint price,\r\n    bool fulfilled,\r\n    bool cancelled\r\n  );\r\n\r\n  event OfferFilled(uint offerId, uint id, address newOwner);\r\n  event OfferCancelled(uint offerId, uint id, address owner);\r\n  event ClaimFunds(address user, uint amount);\r\n\r\n  constructor(address _nftCollection) {\r\n    nftCollection = NFTCollection(_nftCollection);\r\n  }\r\n  // id = TokenID\r\n  // makeOffer 판매설정 (토큰ID, 판매가격)\r\n  function makeOffer(uint _id, uint _price) public {\r\n    nftCollection.transferFrom(msg.sender, address(this), _id);\r\n    offerCount ++;\r\n    offers[offerCount] = _Offer(offerCount, _id, msg.sender, _price, false, false);\r\n    emit Offer(offerCount, _id, msg.sender, _price, false, false);\r\n  }\r\n\r\n  function fillOffer() public payable {\r\n    fillCount ++;\r\n    _Offer storage _offer = offers[fillCount];\r\n    require(_offer.offerId == fillCount, 'The offer must exist');\r\n    require(_offer.user != msg.sender, 'The owner of the offer cannot fill it');\r\n    require(!_offer.fulfilled, 'An offer cannot be fulfilled twice');\r\n    require(!_offer.cancelled, 'A cancelled offer cannot be fulfilled');\r\n    require(msg.value == _offer.price, 'The KLAY amount should match with the NFT Price');\r\n    _offer.fulfilled = true;\r\n    nftCollection.transferFrom(address(this), msg.sender, _offer.token_id);\r\n    payable(_offer.user).transfer(msg.value);\r\n    emit OfferFilled(fillCount, _offer.token_id, msg.sender);\r\n  }\r\n\r\n  function cancelOffer(uint _offerId) public {\r\n    _Offer storage _offer = offers[_offerId];\r\n    require(_offer.offerId == _offerId, 'The offer must exist');\r\n    require(_offer.user == msg.sender, 'The offer can only be canceled by the owner');\r\n    require(_offer.fulfilled == false, 'A fulfilled offer cannot be cancelled');\r\n    require(_offer.cancelled == false, 'An offer cannot be cancelled twice');\r\n    nftCollection.transferFrom(address(this), msg.sender, _offer.token_id);\r\n    _offer.cancelled = true;\r\n    emit OfferCancelled(_offerId, _offer.token_id, msg.sender);\r\n  }\r\n\r\n  // Fallback: reverts if Ether is sent to this smart-contract by mistake\r\n  fallback () external {\r\n    revert();\r\n  }\r\n}",
    "sourcePath": "C:/Users/dev04/Desktop/Project/Klaytn_Exchange/contracts/NFT_Exchange.sol",
    "ast": {
      "absolutePath": "/C/Users/dev04/Desktop/Project/Klaytn_Exchange/contracts/NFT_Exchange.sol",
      "exportedSymbols": {
        "Address": [
          2465
        ],
        "Context": [
          2487
        ],
        "ERC165": [
          2714
        ],
        "ERC721": [
          1638
        ],
        "ERC721Enumerable": [
          2110
        ],
        "IERC165": [
          2726
        ],
        "IERC721": [
          1754
        ],
        "IERC721Enumerable": [
          2141
        ],
        "IERC721Metadata": [
          2168
        ],
        "IERC721Receiver": [
          1772
        ],
        "NFTCollection": [
          160
        ],
        "NFTMarket": [
          807
        ],
        "Strings": [
          2690
        ],
        "safeMath": [
          515
        ]
      },
      "id": 808,
      "license": "MIT",
      "nodeType": "SourceUnit",
      "nodes": [
        {
          "id": 162,
          "literals": [
            "solidity",
            "0.8",
            ".4"
          ],
          "nodeType": "PragmaDirective",
          "src": "33:22:2"
        },
        {
          "absolutePath": "/C/Users/dev04/Desktop/Project/Klaytn_Exchange/contracts/NFTCollection.sol",
          "file": "./NFTCollection.sol",
          "id": 163,
          "nameLocation": "-1:-1:-1",
          "nodeType": "ImportDirective",
          "scope": 808,
          "sourceUnit": 161,
          "src": "59:29:2",
          "symbolAliases": [],
          "unitAlias": ""
        },
        {
          "abstract": false,
          "baseContracts": [],
          "contractDependencies": [],
          "contractKind": "library",
          "fullyImplemented": true,
          "id": 515,
          "linearizedBaseContracts": [
            515
          ],
          "name": "safeMath",
          "nameLocation": "100:8:2",
          "nodeType": "ContractDefinition",
          "nodes": [
            {
              "body": {
                "id": 193,
                "nodeType": "Block",
                "src": "333:102:2",
                "statements": [
                  {
                    "assignments": [
                      176
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 176,
                        "mutability": "mutable",
                        "name": "c",
                        "nameLocation": "352:1:2",
                        "nodeType": "VariableDeclaration",
                        "scope": 193,
                        "src": "344:9:2",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 175,
                          "name": "uint256",
                          "nodeType": "ElementaryTypeName",
                          "src": "344:7:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "visibility": "internal"
                      }
                    ],
                    "id": 180,
                    "initialValue": {
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 179,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "id": 177,
                        "name": "a",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 166,
                        "src": "356:1:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "+",
                      "rightExpression": {
                        "id": 178,
                        "name": "b",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 168,
                        "src": "360:1:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "356:5:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "VariableDeclarationStatement",
                    "src": "344:17:2"
                  },
                  {
                    "condition": {
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 183,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "id": 181,
                        "name": "c",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 176,
                        "src": "376:1:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "<",
                      "rightExpression": {
                        "id": 182,
                        "name": "a",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 166,
                        "src": "380:1:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "376:5:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "id": 188,
                    "nodeType": "IfStatement",
                    "src": "372:28:2",
                    "trueBody": {
                      "expression": {
                        "components": [
                          {
                            "hexValue": "66616c7365",
                            "id": 184,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "bool",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "391:5:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            },
                            "value": "false"
                          },
                          {
                            "hexValue": "30",
                            "id": 185,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "398:1:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_0_by_1",
                              "typeString": "int_const 0"
                            },
                            "value": "0"
                          }
                        ],
                        "id": 186,
                        "isConstant": false,
                        "isInlineArray": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "TupleExpression",
                        "src": "390:10:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_tuple$_t_bool_$_t_rational_0_by_1_$",
                          "typeString": "tuple(bool,int_const 0)"
                        }
                      },
                      "functionReturnParameters": 174,
                      "id": 187,
                      "nodeType": "Return",
                      "src": "383:17:2"
                    }
                  },
                  {
                    "expression": {
                      "components": [
                        {
                          "hexValue": "74727565",
                          "id": 189,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "bool",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "419:4:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          "value": "true"
                        },
                        {
                          "id": 190,
                          "name": "c",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 176,
                          "src": "425:1:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "id": 191,
                      "isConstant": false,
                      "isInlineArray": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "TupleExpression",
                      "src": "418:9:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$_t_bool_$_t_uint256_$",
                        "typeString": "tuple(bool,uint256)"
                      }
                    },
                    "functionReturnParameters": 174,
                    "id": 192,
                    "nodeType": "Return",
                    "src": "411:16:2"
                  }
                ]
              },
              "documentation": {
                "id": 164,
                "nodeType": "StructuredDocumentation",
                "src": "116:135:2",
                "text": " @dev Returns the addition of two unsigned integers, with an overflow flag.\n _Available since v3.4._"
              },
              "id": 194,
              "implemented": true,
              "kind": "function",
              "modifiers": [],
              "name": "tryAdd",
              "nameLocation": "266:6:2",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 169,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 166,
                    "mutability": "mutable",
                    "name": "a",
                    "nameLocation": "281:1:2",
                    "nodeType": "VariableDeclaration",
                    "scope": 194,
                    "src": "273:9:2",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 165,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "273:7:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 168,
                    "mutability": "mutable",
                    "name": "b",
                    "nameLocation": "292:1:2",
                    "nodeType": "VariableDeclaration",
                    "scope": 194,
                    "src": "284:9:2",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 167,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "284:7:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "272:22:2"
              },
              "returnParameters": {
                "id": 174,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 171,
                    "mutability": "mutable",
                    "name": "",
                    "nameLocation": "-1:-1:-1",
                    "nodeType": "VariableDeclaration",
                    "scope": 194,
                    "src": "318:4:2",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "typeName": {
                      "id": 170,
                      "name": "bool",
                      "nodeType": "ElementaryTypeName",
                      "src": "318:4:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 173,
                    "mutability": "mutable",
                    "name": "",
                    "nameLocation": "-1:-1:-1",
                    "nodeType": "VariableDeclaration",
                    "scope": 194,
                    "src": "324:7:2",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 172,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "324:7:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "317:15:2"
              },
              "scope": 515,
              "src": "257:178:2",
              "stateMutability": "pure",
              "virtual": false,
              "visibility": "internal"
            },
            {
              "body": {
                "id": 220,
                "nodeType": "Block",
                "src": "664:78:2",
                "statements": [
                  {
                    "condition": {
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 208,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "id": 206,
                        "name": "b",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 199,
                        "src": "679:1:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": ">",
                      "rightExpression": {
                        "id": 207,
                        "name": "a",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 197,
                        "src": "683:1:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "679:5:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "id": 213,
                    "nodeType": "IfStatement",
                    "src": "675:28:2",
                    "trueBody": {
                      "expression": {
                        "components": [
                          {
                            "hexValue": "66616c7365",
                            "id": 209,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "bool",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "694:5:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            },
                            "value": "false"
                          },
                          {
                            "hexValue": "30",
                            "id": 210,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "701:1:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_0_by_1",
                              "typeString": "int_const 0"
                            },
                            "value": "0"
                          }
                        ],
                        "id": 211,
                        "isConstant": false,
                        "isInlineArray": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "TupleExpression",
                        "src": "693:10:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_tuple$_t_bool_$_t_rational_0_by_1_$",
                          "typeString": "tuple(bool,int_const 0)"
                        }
                      },
                      "functionReturnParameters": 205,
                      "id": 212,
                      "nodeType": "Return",
                      "src": "686:17:2"
                    }
                  },
                  {
                    "expression": {
                      "components": [
                        {
                          "hexValue": "74727565",
                          "id": 214,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "bool",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "722:4:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          "value": "true"
                        },
                        {
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 217,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "id": 215,
                            "name": "a",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 197,
                            "src": "728:1:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "-",
                          "rightExpression": {
                            "id": 216,
                            "name": "b",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 199,
                            "src": "732:1:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "728:5:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "id": 218,
                      "isConstant": false,
                      "isInlineArray": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "TupleExpression",
                      "src": "721:13:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$_t_bool_$_t_uint256_$",
                        "typeString": "tuple(bool,uint256)"
                      }
                    },
                    "functionReturnParameters": 205,
                    "id": 219,
                    "nodeType": "Return",
                    "src": "714:20:2"
                  }
                ]
              },
              "documentation": {
                "id": 195,
                "nodeType": "StructuredDocumentation",
                "src": "443:139:2",
                "text": " @dev Returns the substraction of two unsigned integers, with an overflow flag.\n _Available since v3.4._"
              },
              "id": 221,
              "implemented": true,
              "kind": "function",
              "modifiers": [],
              "name": "trySub",
              "nameLocation": "597:6:2",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 200,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 197,
                    "mutability": "mutable",
                    "name": "a",
                    "nameLocation": "612:1:2",
                    "nodeType": "VariableDeclaration",
                    "scope": 221,
                    "src": "604:9:2",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 196,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "604:7:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 199,
                    "mutability": "mutable",
                    "name": "b",
                    "nameLocation": "623:1:2",
                    "nodeType": "VariableDeclaration",
                    "scope": 221,
                    "src": "615:9:2",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 198,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "615:7:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "603:22:2"
              },
              "returnParameters": {
                "id": 205,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 202,
                    "mutability": "mutable",
                    "name": "",
                    "nameLocation": "-1:-1:-1",
                    "nodeType": "VariableDeclaration",
                    "scope": 221,
                    "src": "649:4:2",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "typeName": {
                      "id": 201,
                      "name": "bool",
                      "nodeType": "ElementaryTypeName",
                      "src": "649:4:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 204,
                    "mutability": "mutable",
                    "name": "",
                    "nameLocation": "-1:-1:-1",
                    "nodeType": "VariableDeclaration",
                    "scope": 221,
                    "src": "655:7:2",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 203,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "655:7:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "648:15:2"
              },
              "scope": 515,
              "src": "588:154:2",
              "stateMutability": "pure",
              "virtual": false,
              "visibility": "internal"
            },
            {
              "body": {
                "id": 261,
                "nodeType": "Block",
                "src": "973:367:2",
                "statements": [
                  {
                    "condition": {
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 235,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "id": 233,
                        "name": "a",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 224,
                        "src": "1209:1:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "==",
                      "rightExpression": {
                        "hexValue": "30",
                        "id": 234,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "1214:1:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_0_by_1",
                          "typeString": "int_const 0"
                        },
                        "value": "0"
                      },
                      "src": "1209:6:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "id": 240,
                    "nodeType": "IfStatement",
                    "src": "1205:28:2",
                    "trueBody": {
                      "expression": {
                        "components": [
                          {
                            "hexValue": "74727565",
                            "id": 236,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "bool",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "1225:4:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            },
                            "value": "true"
                          },
                          {
                            "hexValue": "30",
                            "id": 237,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "1231:1:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_0_by_1",
                              "typeString": "int_const 0"
                            },
                            "value": "0"
                          }
                        ],
                        "id": 238,
                        "isConstant": false,
                        "isInlineArray": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "TupleExpression",
                        "src": "1224:9:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_tuple$_t_bool_$_t_rational_0_by_1_$",
                          "typeString": "tuple(bool,int_const 0)"
                        }
                      },
                      "functionReturnParameters": 232,
                      "id": 239,
                      "nodeType": "Return",
                      "src": "1217:16:2"
                    }
                  },
                  {
                    "assignments": [
                      242
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 242,
                        "mutability": "mutable",
                        "name": "c",
                        "nameLocation": "1252:1:2",
                        "nodeType": "VariableDeclaration",
                        "scope": 261,
                        "src": "1244:9:2",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 241,
                          "name": "uint256",
                          "nodeType": "ElementaryTypeName",
                          "src": "1244:7:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "visibility": "internal"
                      }
                    ],
                    "id": 246,
                    "initialValue": {
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 245,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "id": 243,
                        "name": "a",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 224,
                        "src": "1256:1:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "*",
                      "rightExpression": {
                        "id": 244,
                        "name": "b",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 226,
                        "src": "1260:1:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "1256:5:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "VariableDeclarationStatement",
                    "src": "1244:17:2"
                  },
                  {
                    "condition": {
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 251,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 249,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "id": 247,
                          "name": "c",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 242,
                          "src": "1276:1:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "/",
                        "rightExpression": {
                          "id": 248,
                          "name": "a",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 224,
                          "src": "1280:1:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "1276:5:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "!=",
                      "rightExpression": {
                        "id": 250,
                        "name": "b",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 226,
                        "src": "1285:1:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "1276:10:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "id": 256,
                    "nodeType": "IfStatement",
                    "src": "1272:33:2",
                    "trueBody": {
                      "expression": {
                        "components": [
                          {
                            "hexValue": "66616c7365",
                            "id": 252,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "bool",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "1296:5:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            },
                            "value": "false"
                          },
                          {
                            "hexValue": "30",
                            "id": 253,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "1303:1:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_0_by_1",
                              "typeString": "int_const 0"
                            },
                            "value": "0"
                          }
                        ],
                        "id": 254,
                        "isConstant": false,
                        "isInlineArray": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "TupleExpression",
                        "src": "1295:10:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_tuple$_t_bool_$_t_rational_0_by_1_$",
                          "typeString": "tuple(bool,int_const 0)"
                        }
                      },
                      "functionReturnParameters": 232,
                      "id": 255,
                      "nodeType": "Return",
                      "src": "1288:17:2"
                    }
                  },
                  {
                    "expression": {
                      "components": [
                        {
                          "hexValue": "74727565",
                          "id": 257,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "bool",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "1324:4:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          "value": "true"
                        },
                        {
                          "id": 258,
                          "name": "c",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 242,
                          "src": "1330:1:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "id": 259,
                      "isConstant": false,
                      "isInlineArray": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "TupleExpression",
                      "src": "1323:9:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$_t_bool_$_t_uint256_$",
                        "typeString": "tuple(bool,uint256)"
                      }
                    },
                    "functionReturnParameters": 232,
                    "id": 260,
                    "nodeType": "Return",
                    "src": "1316:16:2"
                  }
                ]
              },
              "documentation": {
                "id": 222,
                "nodeType": "StructuredDocumentation",
                "src": "750:141:2",
                "text": " @dev Returns the multiplication of two unsigned integers, with an overflow flag.\n _Available since v3.4._"
              },
              "id": 262,
              "implemented": true,
              "kind": "function",
              "modifiers": [],
              "name": "tryMul",
              "nameLocation": "906:6:2",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 227,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 224,
                    "mutability": "mutable",
                    "name": "a",
                    "nameLocation": "921:1:2",
                    "nodeType": "VariableDeclaration",
                    "scope": 262,
                    "src": "913:9:2",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 223,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "913:7:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 226,
                    "mutability": "mutable",
                    "name": "b",
                    "nameLocation": "932:1:2",
                    "nodeType": "VariableDeclaration",
                    "scope": 262,
                    "src": "924:9:2",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 225,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "924:7:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "912:22:2"
              },
              "returnParameters": {
                "id": 232,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 229,
                    "mutability": "mutable",
                    "name": "",
                    "nameLocation": "-1:-1:-1",
                    "nodeType": "VariableDeclaration",
                    "scope": 262,
                    "src": "958:4:2",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "typeName": {
                      "id": 228,
                      "name": "bool",
                      "nodeType": "ElementaryTypeName",
                      "src": "958:4:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 231,
                    "mutability": "mutable",
                    "name": "",
                    "nameLocation": "-1:-1:-1",
                    "nodeType": "VariableDeclaration",
                    "scope": 262,
                    "src": "964:7:2",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 230,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "964:7:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "957:15:2"
              },
              "scope": 515,
              "src": "897:443:2",
              "stateMutability": "pure",
              "virtual": false,
              "visibility": "internal"
            },
            {
              "body": {
                "id": 288,
                "nodeType": "Block",
                "src": "1572:79:2",
                "statements": [
                  {
                    "condition": {
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 276,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "id": 274,
                        "name": "b",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 267,
                        "src": "1587:1:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "==",
                      "rightExpression": {
                        "hexValue": "30",
                        "id": 275,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "1592:1:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_0_by_1",
                          "typeString": "int_const 0"
                        },
                        "value": "0"
                      },
                      "src": "1587:6:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "id": 281,
                    "nodeType": "IfStatement",
                    "src": "1583:29:2",
                    "trueBody": {
                      "expression": {
                        "components": [
                          {
                            "hexValue": "66616c7365",
                            "id": 277,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "bool",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "1603:5:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            },
                            "value": "false"
                          },
                          {
                            "hexValue": "30",
                            "id": 278,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "1610:1:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_0_by_1",
                              "typeString": "int_const 0"
                            },
                            "value": "0"
                          }
                        ],
                        "id": 279,
                        "isConstant": false,
                        "isInlineArray": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "TupleExpression",
                        "src": "1602:10:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_tuple$_t_bool_$_t_rational_0_by_1_$",
                          "typeString": "tuple(bool,int_const 0)"
                        }
                      },
                      "functionReturnParameters": 273,
                      "id": 280,
                      "nodeType": "Return",
                      "src": "1595:17:2"
                    }
                  },
                  {
                    "expression": {
                      "components": [
                        {
                          "hexValue": "74727565",
                          "id": 282,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "bool",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "1631:4:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          "value": "true"
                        },
                        {
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 285,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "id": 283,
                            "name": "a",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 265,
                            "src": "1637:1:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "/",
                          "rightExpression": {
                            "id": 284,
                            "name": "b",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 267,
                            "src": "1641:1:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "1637:5:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "id": 286,
                      "isConstant": false,
                      "isInlineArray": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "TupleExpression",
                      "src": "1630:13:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$_t_bool_$_t_uint256_$",
                        "typeString": "tuple(bool,uint256)"
                      }
                    },
                    "functionReturnParameters": 273,
                    "id": 287,
                    "nodeType": "Return",
                    "src": "1623:20:2"
                  }
                ]
              },
              "documentation": {
                "id": 263,
                "nodeType": "StructuredDocumentation",
                "src": "1348:142:2",
                "text": " @dev Returns the division of two unsigned integers, with a division by zero flag.\n _Available since v3.4._"
              },
              "id": 289,
              "implemented": true,
              "kind": "function",
              "modifiers": [],
              "name": "tryDiv",
              "nameLocation": "1505:6:2",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 268,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 265,
                    "mutability": "mutable",
                    "name": "a",
                    "nameLocation": "1520:1:2",
                    "nodeType": "VariableDeclaration",
                    "scope": 289,
                    "src": "1512:9:2",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 264,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "1512:7:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 267,
                    "mutability": "mutable",
                    "name": "b",
                    "nameLocation": "1531:1:2",
                    "nodeType": "VariableDeclaration",
                    "scope": 289,
                    "src": "1523:9:2",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 266,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "1523:7:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "1511:22:2"
              },
              "returnParameters": {
                "id": 273,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 270,
                    "mutability": "mutable",
                    "name": "",
                    "nameLocation": "-1:-1:-1",
                    "nodeType": "VariableDeclaration",
                    "scope": 289,
                    "src": "1557:4:2",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "typeName": {
                      "id": 269,
                      "name": "bool",
                      "nodeType": "ElementaryTypeName",
                      "src": "1557:4:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 272,
                    "mutability": "mutable",
                    "name": "",
                    "nameLocation": "-1:-1:-1",
                    "nodeType": "VariableDeclaration",
                    "scope": 289,
                    "src": "1563:7:2",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 271,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "1563:7:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "1556:15:2"
              },
              "scope": 515,
              "src": "1496:155:2",
              "stateMutability": "pure",
              "virtual": false,
              "visibility": "internal"
            },
            {
              "body": {
                "id": 315,
                "nodeType": "Block",
                "src": "1893:79:2",
                "statements": [
                  {
                    "condition": {
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 303,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "id": 301,
                        "name": "b",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 294,
                        "src": "1908:1:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "==",
                      "rightExpression": {
                        "hexValue": "30",
                        "id": 302,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "1913:1:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_0_by_1",
                          "typeString": "int_const 0"
                        },
                        "value": "0"
                      },
                      "src": "1908:6:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "id": 308,
                    "nodeType": "IfStatement",
                    "src": "1904:29:2",
                    "trueBody": {
                      "expression": {
                        "components": [
                          {
                            "hexValue": "66616c7365",
                            "id": 304,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "bool",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "1924:5:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            },
                            "value": "false"
                          },
                          {
                            "hexValue": "30",
                            "id": 305,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "1931:1:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_0_by_1",
                              "typeString": "int_const 0"
                            },
                            "value": "0"
                          }
                        ],
                        "id": 306,
                        "isConstant": false,
                        "isInlineArray": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "TupleExpression",
                        "src": "1923:10:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_tuple$_t_bool_$_t_rational_0_by_1_$",
                          "typeString": "tuple(bool,int_const 0)"
                        }
                      },
                      "functionReturnParameters": 300,
                      "id": 307,
                      "nodeType": "Return",
                      "src": "1916:17:2"
                    }
                  },
                  {
                    "expression": {
                      "components": [
                        {
                          "hexValue": "74727565",
                          "id": 309,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "bool",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "1952:4:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          "value": "true"
                        },
                        {
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 312,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "id": 310,
                            "name": "a",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 292,
                            "src": "1958:1:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "%",
                          "rightExpression": {
                            "id": 311,
                            "name": "b",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 294,
                            "src": "1962:1:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "1958:5:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "id": 313,
                      "isConstant": false,
                      "isInlineArray": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "TupleExpression",
                      "src": "1951:13:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$_t_bool_$_t_uint256_$",
                        "typeString": "tuple(bool,uint256)"
                      }
                    },
                    "functionReturnParameters": 300,
                    "id": 314,
                    "nodeType": "Return",
                    "src": "1944:20:2"
                  }
                ]
              },
              "documentation": {
                "id": 290,
                "nodeType": "StructuredDocumentation",
                "src": "1659:152:2",
                "text": " @dev Returns the remainder of dividing two unsigned integers, with a division by zero flag.\n _Available since v3.4._"
              },
              "id": 316,
              "implemented": true,
              "kind": "function",
              "modifiers": [],
              "name": "tryMod",
              "nameLocation": "1826:6:2",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 295,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 292,
                    "mutability": "mutable",
                    "name": "a",
                    "nameLocation": "1841:1:2",
                    "nodeType": "VariableDeclaration",
                    "scope": 316,
                    "src": "1833:9:2",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 291,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "1833:7:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 294,
                    "mutability": "mutable",
                    "name": "b",
                    "nameLocation": "1852:1:2",
                    "nodeType": "VariableDeclaration",
                    "scope": 316,
                    "src": "1844:9:2",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 293,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "1844:7:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "1832:22:2"
              },
              "returnParameters": {
                "id": 300,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 297,
                    "mutability": "mutable",
                    "name": "",
                    "nameLocation": "-1:-1:-1",
                    "nodeType": "VariableDeclaration",
                    "scope": 316,
                    "src": "1878:4:2",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "typeName": {
                      "id": 296,
                      "name": "bool",
                      "nodeType": "ElementaryTypeName",
                      "src": "1878:4:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 299,
                    "mutability": "mutable",
                    "name": "",
                    "nameLocation": "-1:-1:-1",
                    "nodeType": "VariableDeclaration",
                    "scope": 316,
                    "src": "1884:7:2",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 298,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "1884:7:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "1877:15:2"
              },
              "scope": 515,
              "src": "1817:155:2",
              "stateMutability": "pure",
              "virtual": false,
              "visibility": "internal"
            },
            {
              "body": {
                "id": 341,
                "nodeType": "Block",
                "src": "2286:112:2",
                "statements": [
                  {
                    "assignments": [
                      327
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 327,
                        "mutability": "mutable",
                        "name": "c",
                        "nameLocation": "2305:1:2",
                        "nodeType": "VariableDeclaration",
                        "scope": 341,
                        "src": "2297:9:2",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 326,
                          "name": "uint256",
                          "nodeType": "ElementaryTypeName",
                          "src": "2297:7:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "visibility": "internal"
                      }
                    ],
                    "id": 331,
                    "initialValue": {
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 330,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "id": 328,
                        "name": "a",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 319,
                        "src": "2309:1:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "+",
                      "rightExpression": {
                        "id": 329,
                        "name": "b",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 321,
                        "src": "2313:1:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "2309:5:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "VariableDeclarationStatement",
                    "src": "2297:17:2"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 335,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "id": 333,
                            "name": "c",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 327,
                            "src": "2333:1:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": ">=",
                          "rightExpression": {
                            "id": 334,
                            "name": "a",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 319,
                            "src": "2338:1:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "2333:6:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        {
                          "hexValue": "536166654d6174683a206164646974696f6e206f766572666c6f77",
                          "id": 336,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "string",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "2341:29:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_stringliteral_30cc447bcc13b3e22b45cef0dd9b0b514842d836dd9b6eb384e20dedfb47723a",
                            "typeString": "literal_string \"SafeMath: addition overflow\""
                          },
                          "value": "SafeMath: addition overflow"
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          {
                            "typeIdentifier": "t_stringliteral_30cc447bcc13b3e22b45cef0dd9b0b514842d836dd9b6eb384e20dedfb47723a",
                            "typeString": "literal_string \"SafeMath: addition overflow\""
                          }
                        ],
                        "id": 332,
                        "name": "require",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [
                          4294967278,
                          4294967278
                        ],
                        "referencedDeclaration": 4294967278,
                        "src": "2325:7:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                          "typeString": "function (bool,string memory) pure"
                        }
                      },
                      "id": 337,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "2325:46:2",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 338,
                    "nodeType": "ExpressionStatement",
                    "src": "2325:46:2"
                  },
                  {
                    "expression": {
                      "id": 339,
                      "name": "c",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 327,
                      "src": "2389:1:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "functionReturnParameters": 325,
                    "id": 340,
                    "nodeType": "Return",
                    "src": "2382:8:2"
                  }
                ]
              },
              "documentation": {
                "id": 317,
                "nodeType": "StructuredDocumentation",
                "src": "1980:233:2",
                "text": " @dev Returns the addition of two unsigned integers, reverting on\n overflow.\n Counterpart to Solidity's `+` operator.\n Requirements:\n - Addition cannot overflow."
              },
              "id": 342,
              "implemented": true,
              "kind": "function",
              "modifiers": [],
              "name": "add",
              "nameLocation": "2228:3:2",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 322,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 319,
                    "mutability": "mutable",
                    "name": "a",
                    "nameLocation": "2240:1:2",
                    "nodeType": "VariableDeclaration",
                    "scope": 342,
                    "src": "2232:9:2",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 318,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "2232:7:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 321,
                    "mutability": "mutable",
                    "name": "b",
                    "nameLocation": "2251:1:2",
                    "nodeType": "VariableDeclaration",
                    "scope": 342,
                    "src": "2243:9:2",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 320,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "2243:7:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "2231:22:2"
              },
              "returnParameters": {
                "id": 325,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 324,
                    "mutability": "mutable",
                    "name": "",
                    "nameLocation": "-1:-1:-1",
                    "nodeType": "VariableDeclaration",
                    "scope": 342,
                    "src": "2277:7:2",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 323,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "2277:7:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "2276:9:2"
              },
              "scope": 515,
              "src": "2219:179:2",
              "stateMutability": "pure",
              "virtual": false,
              "visibility": "internal"
            },
            {
              "body": {
                "id": 363,
                "nodeType": "Block",
                "src": "2748:91:2",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 355,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "id": 353,
                            "name": "b",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 347,
                            "src": "2767:1:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "<=",
                          "rightExpression": {
                            "id": 354,
                            "name": "a",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 345,
                            "src": "2772:1:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "2767:6:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        {
                          "hexValue": "536166654d6174683a207375627472616374696f6e206f766572666c6f77",
                          "id": 356,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "string",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "2775:32:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_stringliteral_50b058e9b5320e58880d88223c9801cd9eecdcf90323d5c2318bc1b6b916e862",
                            "typeString": "literal_string \"SafeMath: subtraction overflow\""
                          },
                          "value": "SafeMath: subtraction overflow"
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          {
                            "typeIdentifier": "t_stringliteral_50b058e9b5320e58880d88223c9801cd9eecdcf90323d5c2318bc1b6b916e862",
                            "typeString": "literal_string \"SafeMath: subtraction overflow\""
                          }
                        ],
                        "id": 352,
                        "name": "require",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [
                          4294967278,
                          4294967278
                        ],
                        "referencedDeclaration": 4294967278,
                        "src": "2759:7:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                          "typeString": "function (bool,string memory) pure"
                        }
                      },
                      "id": 357,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "2759:49:2",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 358,
                    "nodeType": "ExpressionStatement",
                    "src": "2759:49:2"
                  },
                  {
                    "expression": {
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 361,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "id": 359,
                        "name": "a",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 345,
                        "src": "2826:1:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "-",
                      "rightExpression": {
                        "id": 360,
                        "name": "b",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 347,
                        "src": "2830:1:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "2826:5:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "functionReturnParameters": 351,
                    "id": 362,
                    "nodeType": "Return",
                    "src": "2819:12:2"
                  }
                ]
              },
              "documentation": {
                "id": 343,
                "nodeType": "StructuredDocumentation",
                "src": "2406:269:2",
                "text": " @dev Returns the subtraction of two unsigned integers, reverting on\n overflow (when the result is negative).\n Counterpart to Solidity's `-` operator.\n Requirements:\n - Subtraction cannot overflow."
              },
              "id": 364,
              "implemented": true,
              "kind": "function",
              "modifiers": [],
              "name": "sub",
              "nameLocation": "2690:3:2",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 348,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 345,
                    "mutability": "mutable",
                    "name": "a",
                    "nameLocation": "2702:1:2",
                    "nodeType": "VariableDeclaration",
                    "scope": 364,
                    "src": "2694:9:2",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 344,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "2694:7:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 347,
                    "mutability": "mutable",
                    "name": "b",
                    "nameLocation": "2713:1:2",
                    "nodeType": "VariableDeclaration",
                    "scope": 364,
                    "src": "2705:9:2",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 346,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "2705:7:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "2693:22:2"
              },
              "returnParameters": {
                "id": 351,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 350,
                    "mutability": "mutable",
                    "name": "",
                    "nameLocation": "-1:-1:-1",
                    "nodeType": "VariableDeclaration",
                    "scope": 364,
                    "src": "2739:7:2",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 349,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "2739:7:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "2738:9:2"
              },
              "scope": 515,
              "src": "2681:158:2",
              "stateMutability": "pure",
              "virtual": false,
              "visibility": "internal"
            },
            {
              "body": {
                "id": 397,
                "nodeType": "Block",
                "src": "3165:153:2",
                "statements": [
                  {
                    "condition": {
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 376,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "id": 374,
                        "name": "a",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 367,
                        "src": "3180:1:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "==",
                      "rightExpression": {
                        "hexValue": "30",
                        "id": 375,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "3185:1:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_0_by_1",
                          "typeString": "int_const 0"
                        },
                        "value": "0"
                      },
                      "src": "3180:6:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "id": 379,
                    "nodeType": "IfStatement",
                    "src": "3176:20:2",
                    "trueBody": {
                      "expression": {
                        "hexValue": "30",
                        "id": 377,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "3195:1:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_0_by_1",
                          "typeString": "int_const 0"
                        },
                        "value": "0"
                      },
                      "functionReturnParameters": 373,
                      "id": 378,
                      "nodeType": "Return",
                      "src": "3188:8:2"
                    }
                  },
                  {
                    "assignments": [
                      381
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 381,
                        "mutability": "mutable",
                        "name": "c",
                        "nameLocation": "3215:1:2",
                        "nodeType": "VariableDeclaration",
                        "scope": 397,
                        "src": "3207:9:2",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 380,
                          "name": "uint256",
                          "nodeType": "ElementaryTypeName",
                          "src": "3207:7:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "visibility": "internal"
                      }
                    ],
                    "id": 385,
                    "initialValue": {
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 384,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "id": 382,
                        "name": "a",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 367,
                        "src": "3219:1:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "*",
                      "rightExpression": {
                        "id": 383,
                        "name": "b",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 369,
                        "src": "3223:1:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "3219:5:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "VariableDeclarationStatement",
                    "src": "3207:17:2"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 391,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "commonType": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            "id": 389,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "id": 387,
                              "name": "c",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 381,
                              "src": "3243:1:2",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "/",
                            "rightExpression": {
                              "id": 388,
                              "name": "a",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 367,
                              "src": "3247:1:2",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "src": "3243:5:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "==",
                          "rightExpression": {
                            "id": 390,
                            "name": "b",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 369,
                            "src": "3252:1:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "3243:10:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        {
                          "hexValue": "536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f77",
                          "id": 392,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "string",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "3255:35:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_stringliteral_9113bb53c2876a3805b2c9242029423fc540a728243ce887ab24c82cf119fba3",
                            "typeString": "literal_string \"SafeMath: multiplication overflow\""
                          },
                          "value": "SafeMath: multiplication overflow"
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          {
                            "typeIdentifier": "t_stringliteral_9113bb53c2876a3805b2c9242029423fc540a728243ce887ab24c82cf119fba3",
                            "typeString": "literal_string \"SafeMath: multiplication overflow\""
                          }
                        ],
                        "id": 386,
                        "name": "require",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [
                          4294967278,
                          4294967278
                        ],
                        "referencedDeclaration": 4294967278,
                        "src": "3235:7:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                          "typeString": "function (bool,string memory) pure"
                        }
                      },
                      "id": 393,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "3235:56:2",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 394,
                    "nodeType": "ExpressionStatement",
                    "src": "3235:56:2"
                  },
                  {
                    "expression": {
                      "id": 395,
                      "name": "c",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 381,
                      "src": "3309:1:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "functionReturnParameters": 373,
                    "id": 396,
                    "nodeType": "Return",
                    "src": "3302:8:2"
                  }
                ]
              },
              "documentation": {
                "id": 365,
                "nodeType": "StructuredDocumentation",
                "src": "2847:245:2",
                "text": " @dev Returns the multiplication of two unsigned integers, reverting on\n overflow.\n Counterpart to Solidity's `*` operator.\n Requirements:\n - Multiplication cannot overflow."
              },
              "id": 398,
              "implemented": true,
              "kind": "function",
              "modifiers": [],
              "name": "mul",
              "nameLocation": "3107:3:2",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 370,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 367,
                    "mutability": "mutable",
                    "name": "a",
                    "nameLocation": "3119:1:2",
                    "nodeType": "VariableDeclaration",
                    "scope": 398,
                    "src": "3111:9:2",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 366,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "3111:7:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 369,
                    "mutability": "mutable",
                    "name": "b",
                    "nameLocation": "3130:1:2",
                    "nodeType": "VariableDeclaration",
                    "scope": 398,
                    "src": "3122:9:2",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 368,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "3122:7:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "3110:22:2"
              },
              "returnParameters": {
                "id": 373,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 372,
                    "mutability": "mutable",
                    "name": "",
                    "nameLocation": "-1:-1:-1",
                    "nodeType": "VariableDeclaration",
                    "scope": 398,
                    "src": "3156:7:2",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 371,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "3156:7:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "3155:9:2"
              },
              "scope": 515,
              "src": "3098:220:2",
              "stateMutability": "pure",
              "virtual": false,
              "visibility": "internal"
            },
            {
              "body": {
                "id": 419,
                "nodeType": "Block",
                "src": "3863:86:2",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 411,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "id": 409,
                            "name": "b",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 403,
                            "src": "3882:1:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": ">",
                          "rightExpression": {
                            "hexValue": "30",
                            "id": 410,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "3886:1:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_0_by_1",
                              "typeString": "int_const 0"
                            },
                            "value": "0"
                          },
                          "src": "3882:5:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        {
                          "hexValue": "536166654d6174683a206469766973696f6e206279207a65726f",
                          "id": 412,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "string",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "3889:28:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_stringliteral_5b7cc70dda4dc2143e5adb63bd5d1f349504f461dbdfd9bc76fac1f8ca6d019f",
                            "typeString": "literal_string \"SafeMath: division by zero\""
                          },
                          "value": "SafeMath: division by zero"
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          {
                            "typeIdentifier": "t_stringliteral_5b7cc70dda4dc2143e5adb63bd5d1f349504f461dbdfd9bc76fac1f8ca6d019f",
                            "typeString": "literal_string \"SafeMath: division by zero\""
                          }
                        ],
                        "id": 408,
                        "name": "require",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [
                          4294967278,
                          4294967278
                        ],
                        "referencedDeclaration": 4294967278,
                        "src": "3874:7:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                          "typeString": "function (bool,string memory) pure"
                        }
                      },
                      "id": 413,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "3874:44:2",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 414,
                    "nodeType": "ExpressionStatement",
                    "src": "3874:44:2"
                  },
                  {
                    "expression": {
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 417,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "id": 415,
                        "name": "a",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 401,
                        "src": "3936:1:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "/",
                      "rightExpression": {
                        "id": 416,
                        "name": "b",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 403,
                        "src": "3940:1:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "3936:5:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "functionReturnParameters": 407,
                    "id": 418,
                    "nodeType": "Return",
                    "src": "3929:12:2"
                  }
                ]
              },
              "documentation": {
                "id": 399,
                "nodeType": "StructuredDocumentation",
                "src": "3326:464:2",
                "text": " @dev Returns the integer division of two unsigned integers, reverting on\n division by zero. The result is rounded towards zero.\n Counterpart to Solidity's `/` operator. Note: this function uses a\n `revert` opcode (which leaves remaining gas untouched) while Solidity\n uses an invalid opcode to revert (consuming all remaining gas).\n Requirements:\n - The divisor cannot be zero."
              },
              "id": 420,
              "implemented": true,
              "kind": "function",
              "modifiers": [],
              "name": "div",
              "nameLocation": "3805:3:2",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 404,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 401,
                    "mutability": "mutable",
                    "name": "a",
                    "nameLocation": "3817:1:2",
                    "nodeType": "VariableDeclaration",
                    "scope": 420,
                    "src": "3809:9:2",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 400,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "3809:7:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 403,
                    "mutability": "mutable",
                    "name": "b",
                    "nameLocation": "3828:1:2",
                    "nodeType": "VariableDeclaration",
                    "scope": 420,
                    "src": "3820:9:2",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 402,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "3820:7:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "3808:22:2"
              },
              "returnParameters": {
                "id": 407,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 406,
                    "mutability": "mutable",
                    "name": "",
                    "nameLocation": "-1:-1:-1",
                    "nodeType": "VariableDeclaration",
                    "scope": 420,
                    "src": "3854:7:2",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 405,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "3854:7:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "3853:9:2"
              },
              "scope": 515,
              "src": "3796:153:2",
              "stateMutability": "pure",
              "virtual": false,
              "visibility": "internal"
            },
            {
              "body": {
                "id": 441,
                "nodeType": "Block",
                "src": "4483:84:2",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 433,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "id": 431,
                            "name": "b",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 425,
                            "src": "4502:1:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": ">",
                          "rightExpression": {
                            "hexValue": "30",
                            "id": 432,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "4506:1:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_0_by_1",
                              "typeString": "int_const 0"
                            },
                            "value": "0"
                          },
                          "src": "4502:5:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        {
                          "hexValue": "536166654d6174683a206d6f64756c6f206279207a65726f",
                          "id": 434,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "string",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "4509:26:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_stringliteral_726e51f7b81fce0a68f5f214f445e275313b20b1633f08ce954ee39abf8d7832",
                            "typeString": "literal_string \"SafeMath: modulo by zero\""
                          },
                          "value": "SafeMath: modulo by zero"
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          {
                            "typeIdentifier": "t_stringliteral_726e51f7b81fce0a68f5f214f445e275313b20b1633f08ce954ee39abf8d7832",
                            "typeString": "literal_string \"SafeMath: modulo by zero\""
                          }
                        ],
                        "id": 430,
                        "name": "require",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [
                          4294967278,
                          4294967278
                        ],
                        "referencedDeclaration": 4294967278,
                        "src": "4494:7:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                          "typeString": "function (bool,string memory) pure"
                        }
                      },
                      "id": 435,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "4494:42:2",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 436,
                    "nodeType": "ExpressionStatement",
                    "src": "4494:42:2"
                  },
                  {
                    "expression": {
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 439,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "id": 437,
                        "name": "a",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 423,
                        "src": "4554:1:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "%",
                      "rightExpression": {
                        "id": 438,
                        "name": "b",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 425,
                        "src": "4558:1:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "4554:5:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "functionReturnParameters": 429,
                    "id": 440,
                    "nodeType": "Return",
                    "src": "4547:12:2"
                  }
                ]
              },
              "documentation": {
                "id": 421,
                "nodeType": "StructuredDocumentation",
                "src": "3957:453:2",
                "text": " @dev Returns the remainder of dividing two unsigned integers. (unsigned integer modulo),\n reverting when dividing by zero.\n Counterpart to Solidity's `%` operator. This function uses a `revert`\n opcode (which leaves remaining gas untouched) while Solidity uses an\n invalid opcode to revert (consuming all remaining gas).\n Requirements:\n - The divisor cannot be zero."
              },
              "id": 442,
              "implemented": true,
              "kind": "function",
              "modifiers": [],
              "name": "mod",
              "nameLocation": "4425:3:2",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 426,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 423,
                    "mutability": "mutable",
                    "name": "a",
                    "nameLocation": "4437:1:2",
                    "nodeType": "VariableDeclaration",
                    "scope": 442,
                    "src": "4429:9:2",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 422,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "4429:7:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 425,
                    "mutability": "mutable",
                    "name": "b",
                    "nameLocation": "4448:1:2",
                    "nodeType": "VariableDeclaration",
                    "scope": 442,
                    "src": "4440:9:2",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 424,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "4440:7:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "4428:22:2"
              },
              "returnParameters": {
                "id": 429,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 428,
                    "mutability": "mutable",
                    "name": "",
                    "nameLocation": "-1:-1:-1",
                    "nodeType": "VariableDeclaration",
                    "scope": 442,
                    "src": "4474:7:2",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 427,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "4474:7:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "4473:9:2"
              },
              "scope": 515,
              "src": "4416:151:2",
              "stateMutability": "pure",
              "virtual": false,
              "visibility": "internal"
            },
            {
              "body": {
                "id": 465,
                "nodeType": "Block",
                "src": "5141:71:2",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 457,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "id": 455,
                            "name": "b",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 447,
                            "src": "5160:1:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "<=",
                          "rightExpression": {
                            "id": 456,
                            "name": "a",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 445,
                            "src": "5165:1:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "5160:6:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        {
                          "id": 458,
                          "name": "errorMessage",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 449,
                          "src": "5168:12:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_string_memory_ptr",
                            "typeString": "string memory"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          {
                            "typeIdentifier": "t_string_memory_ptr",
                            "typeString": "string memory"
                          }
                        ],
                        "id": 454,
                        "name": "require",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [
                          4294967278,
                          4294967278
                        ],
                        "referencedDeclaration": 4294967278,
                        "src": "5152:7:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                          "typeString": "function (bool,string memory) pure"
                        }
                      },
                      "id": 459,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "5152:29:2",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 460,
                    "nodeType": "ExpressionStatement",
                    "src": "5152:29:2"
                  },
                  {
                    "expression": {
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 463,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "id": 461,
                        "name": "a",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 445,
                        "src": "5199:1:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "-",
                      "rightExpression": {
                        "id": 462,
                        "name": "b",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 447,
                        "src": "5203:1:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "5199:5:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "functionReturnParameters": 453,
                    "id": 464,
                    "nodeType": "Return",
                    "src": "5192:12:2"
                  }
                ]
              },
              "documentation": {
                "id": 443,
                "nodeType": "StructuredDocumentation",
                "src": "4575:465:2",
                "text": " @dev Returns the subtraction of two unsigned integers, reverting with custom message on\n overflow (when the result is negative).\n CAUTION: This function is deprecated because it requires allocating memory for the error\n message unnecessarily. For custom revert reasons use {trySub}.\n Counterpart to Solidity's `-` operator.\n Requirements:\n - Subtraction cannot overflow."
              },
              "id": 466,
              "implemented": true,
              "kind": "function",
              "modifiers": [],
              "name": "sub",
              "nameLocation": "5055:3:2",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 450,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 445,
                    "mutability": "mutable",
                    "name": "a",
                    "nameLocation": "5067:1:2",
                    "nodeType": "VariableDeclaration",
                    "scope": 466,
                    "src": "5059:9:2",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 444,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "5059:7:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 447,
                    "mutability": "mutable",
                    "name": "b",
                    "nameLocation": "5078:1:2",
                    "nodeType": "VariableDeclaration",
                    "scope": 466,
                    "src": "5070:9:2",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 446,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "5070:7:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 449,
                    "mutability": "mutable",
                    "name": "errorMessage",
                    "nameLocation": "5095:12:2",
                    "nodeType": "VariableDeclaration",
                    "scope": 466,
                    "src": "5081:26:2",
                    "stateVariable": false,
                    "storageLocation": "memory",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string"
                    },
                    "typeName": {
                      "id": 448,
                      "name": "string",
                      "nodeType": "ElementaryTypeName",
                      "src": "5081:6:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage_ptr",
                        "typeString": "string"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "5058:50:2"
              },
              "returnParameters": {
                "id": 453,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 452,
                    "mutability": "mutable",
                    "name": "",
                    "nameLocation": "-1:-1:-1",
                    "nodeType": "VariableDeclaration",
                    "scope": 466,
                    "src": "5132:7:2",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 451,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "5132:7:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "5131:9:2"
              },
              "scope": 515,
              "src": "5046:166:2",
              "stateMutability": "pure",
              "virtual": false,
              "visibility": "internal"
            },
            {
              "body": {
                "id": 489,
                "nodeType": "Block",
                "src": "5981:70:2",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 481,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "id": 479,
                            "name": "b",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 471,
                            "src": "6000:1:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": ">",
                          "rightExpression": {
                            "hexValue": "30",
                            "id": 480,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "6004:1:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_0_by_1",
                              "typeString": "int_const 0"
                            },
                            "value": "0"
                          },
                          "src": "6000:5:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        {
                          "id": 482,
                          "name": "errorMessage",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 473,
                          "src": "6007:12:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_string_memory_ptr",
                            "typeString": "string memory"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          {
                            "typeIdentifier": "t_string_memory_ptr",
                            "typeString": "string memory"
                          }
                        ],
                        "id": 478,
                        "name": "require",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [
                          4294967278,
                          4294967278
                        ],
                        "referencedDeclaration": 4294967278,
                        "src": "5992:7:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                          "typeString": "function (bool,string memory) pure"
                        }
                      },
                      "id": 483,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "5992:28:2",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 484,
                    "nodeType": "ExpressionStatement",
                    "src": "5992:28:2"
                  },
                  {
                    "expression": {
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 487,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "id": 485,
                        "name": "a",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 469,
                        "src": "6038:1:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "/",
                      "rightExpression": {
                        "id": 486,
                        "name": "b",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 471,
                        "src": "6042:1:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "6038:5:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "functionReturnParameters": 477,
                    "id": 488,
                    "nodeType": "Return",
                    "src": "6031:12:2"
                  }
                ]
              },
              "documentation": {
                "id": 467,
                "nodeType": "StructuredDocumentation",
                "src": "5220:660:2",
                "text": " @dev Returns the integer division of two unsigned integers, reverting with custom message on\n division by zero. The result is rounded towards zero.\n CAUTION: This function is deprecated because it requires allocating memory for the error\n message unnecessarily. For custom revert reasons use {tryDiv}.\n Counterpart to Solidity's `/` operator. Note: this function uses a\n `revert` opcode (which leaves remaining gas untouched) while Solidity\n uses an invalid opcode to revert (consuming all remaining gas).\n Requirements:\n - The divisor cannot be zero."
              },
              "id": 490,
              "implemented": true,
              "kind": "function",
              "modifiers": [],
              "name": "div",
              "nameLocation": "5895:3:2",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 474,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 469,
                    "mutability": "mutable",
                    "name": "a",
                    "nameLocation": "5907:1:2",
                    "nodeType": "VariableDeclaration",
                    "scope": 490,
                    "src": "5899:9:2",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 468,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "5899:7:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 471,
                    "mutability": "mutable",
                    "name": "b",
                    "nameLocation": "5918:1:2",
                    "nodeType": "VariableDeclaration",
                    "scope": 490,
                    "src": "5910:9:2",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 470,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "5910:7:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 473,
                    "mutability": "mutable",
                    "name": "errorMessage",
                    "nameLocation": "5935:12:2",
                    "nodeType": "VariableDeclaration",
                    "scope": 490,
                    "src": "5921:26:2",
                    "stateVariable": false,
                    "storageLocation": "memory",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string"
                    },
                    "typeName": {
                      "id": 472,
                      "name": "string",
                      "nodeType": "ElementaryTypeName",
                      "src": "5921:6:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage_ptr",
                        "typeString": "string"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "5898:50:2"
              },
              "returnParameters": {
                "id": 477,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 476,
                    "mutability": "mutable",
                    "name": "",
                    "nameLocation": "-1:-1:-1",
                    "nodeType": "VariableDeclaration",
                    "scope": 490,
                    "src": "5972:7:2",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 475,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "5972:7:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "5971:9:2"
              },
              "scope": 515,
              "src": "5886:165:2",
              "stateMutability": "pure",
              "virtual": false,
              "visibility": "internal"
            },
            {
              "body": {
                "id": 513,
                "nodeType": "Block",
                "src": "6809:70:2",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 505,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "id": 503,
                            "name": "b",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 495,
                            "src": "6828:1:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": ">",
                          "rightExpression": {
                            "hexValue": "30",
                            "id": 504,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "6832:1:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_0_by_1",
                              "typeString": "int_const 0"
                            },
                            "value": "0"
                          },
                          "src": "6828:5:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        {
                          "id": 506,
                          "name": "errorMessage",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 497,
                          "src": "6835:12:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_string_memory_ptr",
                            "typeString": "string memory"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          {
                            "typeIdentifier": "t_string_memory_ptr",
                            "typeString": "string memory"
                          }
                        ],
                        "id": 502,
                        "name": "require",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [
                          4294967278,
                          4294967278
                        ],
                        "referencedDeclaration": 4294967278,
                        "src": "6820:7:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                          "typeString": "function (bool,string memory) pure"
                        }
                      },
                      "id": 507,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "6820:28:2",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 508,
                    "nodeType": "ExpressionStatement",
                    "src": "6820:28:2"
                  },
                  {
                    "expression": {
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 511,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "id": 509,
                        "name": "a",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 493,
                        "src": "6866:1:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "%",
                      "rightExpression": {
                        "id": 510,
                        "name": "b",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 495,
                        "src": "6870:1:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "6866:5:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "functionReturnParameters": 501,
                    "id": 512,
                    "nodeType": "Return",
                    "src": "6859:12:2"
                  }
                ]
              },
              "documentation": {
                "id": 491,
                "nodeType": "StructuredDocumentation",
                "src": "6059:649:2",
                "text": " @dev Returns the remainder of dividing two unsigned integers. (unsigned integer modulo),\n reverting with custom message when dividing by zero.\n CAUTION: This function is deprecated because it requires allocating memory for the error\n message unnecessarily. For custom revert reasons use {tryMod}.\n Counterpart to Solidity's `%` operator. This function uses a `revert`\n opcode (which leaves remaining gas untouched) while Solidity uses an\n invalid opcode to revert (consuming all remaining gas).\n Requirements:\n - The divisor cannot be zero."
              },
              "id": 514,
              "implemented": true,
              "kind": "function",
              "modifiers": [],
              "name": "mod",
              "nameLocation": "6723:3:2",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 498,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 493,
                    "mutability": "mutable",
                    "name": "a",
                    "nameLocation": "6735:1:2",
                    "nodeType": "VariableDeclaration",
                    "scope": 514,
                    "src": "6727:9:2",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 492,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "6727:7:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 495,
                    "mutability": "mutable",
                    "name": "b",
                    "nameLocation": "6746:1:2",
                    "nodeType": "VariableDeclaration",
                    "scope": 514,
                    "src": "6738:9:2",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 494,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "6738:7:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 497,
                    "mutability": "mutable",
                    "name": "errorMessage",
                    "nameLocation": "6763:12:2",
                    "nodeType": "VariableDeclaration",
                    "scope": 514,
                    "src": "6749:26:2",
                    "stateVariable": false,
                    "storageLocation": "memory",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string"
                    },
                    "typeName": {
                      "id": 496,
                      "name": "string",
                      "nodeType": "ElementaryTypeName",
                      "src": "6749:6:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage_ptr",
                        "typeString": "string"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "6726:50:2"
              },
              "returnParameters": {
                "id": 501,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 500,
                    "mutability": "mutable",
                    "name": "",
                    "nameLocation": "-1:-1:-1",
                    "nodeType": "VariableDeclaration",
                    "scope": 514,
                    "src": "6800:7:2",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 499,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "6800:7:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "6799:9:2"
              },
              "scope": 515,
              "src": "6714:165:2",
              "stateMutability": "pure",
              "virtual": false,
              "visibility": "internal"
            }
          ],
          "scope": 808,
          "src": "92:6790:2",
          "usedErrors": []
        },
        {
          "abstract": false,
          "baseContracts": [],
          "contractDependencies": [],
          "contractKind": "contract",
          "fullyImplemented": true,
          "id": 807,
          "linearizedBaseContracts": [
            807
          ],
          "name": "NFTMarket",
          "nameLocation": "6895:9:2",
          "nodeType": "ContractDefinition",
          "nodes": [
            {
              "constant": false,
              "functionSelector": "1115c24d",
              "id": 517,
              "mutability": "mutable",
              "name": "offerCount",
              "nameLocation": "6922:10:2",
              "nodeType": "VariableDeclaration",
              "scope": 807,
              "src": "6910:22:2",
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              },
              "typeName": {
                "id": 516,
                "name": "uint",
                "nodeType": "ElementaryTypeName",
                "src": "6910:4:2",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              },
              "visibility": "public"
            },
            {
              "constant": false,
              "functionSelector": "6051e4dc",
              "id": 519,
              "mutability": "mutable",
              "name": "fillCount",
              "nameLocation": "6949:9:2",
              "nodeType": "VariableDeclaration",
              "scope": 807,
              "src": "6937:21:2",
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              },
              "typeName": {
                "id": 518,
                "name": "uint",
                "nodeType": "ElementaryTypeName",
                "src": "6937:4:2",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              },
              "visibility": "public"
            },
            {
              "constant": false,
              "functionSelector": "8a72ea6a",
              "id": 524,
              "mutability": "mutable",
              "name": "offers",
              "nameLocation": "6995:6:2",
              "nodeType": "VariableDeclaration",
              "scope": 807,
              "src": "6963:38:2",
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$__Offer_$540_storage_$",
                "typeString": "mapping(uint256 => struct NFTMarket._Offer)"
              },
              "typeName": {
                "id": 523,
                "keyType": {
                  "id": 520,
                  "name": "uint",
                  "nodeType": "ElementaryTypeName",
                  "src": "6972:4:2",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "nodeType": "Mapping",
                "src": "6963:24:2",
                "typeDescriptions": {
                  "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$__Offer_$540_storage_$",
                  "typeString": "mapping(uint256 => struct NFTMarket._Offer)"
                },
                "valueType": {
                  "id": 522,
                  "nodeType": "UserDefinedTypeName",
                  "pathNode": {
                    "id": 521,
                    "name": "_Offer",
                    "nodeType": "IdentifierPath",
                    "referencedDeclaration": 540,
                    "src": "6980:6:2"
                  },
                  "referencedDeclaration": 540,
                  "src": "6980:6:2",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$__Offer_$540_storage_ptr",
                    "typeString": "struct NFTMarket._Offer"
                  }
                }
              },
              "visibility": "public"
            },
            {
              "constant": false,
              "id": 527,
              "mutability": "mutable",
              "name": "nftCollection",
              "nameLocation": "7020:13:2",
              "nodeType": "VariableDeclaration",
              "scope": 807,
              "src": "7006:27:2",
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_NFTCollection_$160",
                "typeString": "contract NFTCollection"
              },
              "typeName": {
                "id": 526,
                "nodeType": "UserDefinedTypeName",
                "pathNode": {
                  "id": 525,
                  "name": "NFTCollection",
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 160,
                  "src": "7006:13:2"
                },
                "referencedDeclaration": 160,
                "src": "7006:13:2",
                "typeDescriptions": {
                  "typeIdentifier": "t_contract$_NFTCollection_$160",
                  "typeString": "contract NFTCollection"
                }
              },
              "visibility": "internal"
            },
            {
              "canonicalName": "NFTMarket._Offer",
              "id": 540,
              "members": [
                {
                  "constant": false,
                  "id": 529,
                  "mutability": "mutable",
                  "name": "offerId",
                  "nameLocation": "7068:7:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 540,
                  "src": "7063:12:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 528,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "7063:4:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 531,
                  "mutability": "mutable",
                  "name": "token_id",
                  "nameLocation": "7087:8:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 540,
                  "src": "7082:13:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 530,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "7082:4:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 533,
                  "mutability": "mutable",
                  "name": "user",
                  "nameLocation": "7110:4:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 540,
                  "src": "7102:12:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 532,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "7102:7:2",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 535,
                  "mutability": "mutable",
                  "name": "price",
                  "nameLocation": "7126:5:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 540,
                  "src": "7121:10:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 534,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "7121:4:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 537,
                  "mutability": "mutable",
                  "name": "fulfilled",
                  "nameLocation": "7143:9:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 540,
                  "src": "7138:14:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 536,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "7138:4:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 539,
                  "mutability": "mutable",
                  "name": "cancelled",
                  "nameLocation": "7164:9:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 540,
                  "src": "7159:14:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 538,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "7159:4:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "name": "_Offer",
              "nameLocation": "7049:6:2",
              "nodeType": "StructDefinition",
              "scope": 807,
              "src": "7042:137:2",
              "visibility": "public"
            },
            {
              "anonymous": false,
              "id": 554,
              "name": "Offer",
              "nameLocation": "7191:5:2",
              "nodeType": "EventDefinition",
              "parameters": {
                "id": 553,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 542,
                    "indexed": false,
                    "mutability": "mutable",
                    "name": "offerId",
                    "nameLocation": "7208:7:2",
                    "nodeType": "VariableDeclaration",
                    "scope": 554,
                    "src": "7203:12:2",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 541,
                      "name": "uint",
                      "nodeType": "ElementaryTypeName",
                      "src": "7203:4:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 544,
                    "indexed": false,
                    "mutability": "mutable",
                    "name": "token_id",
                    "nameLocation": "7227:8:2",
                    "nodeType": "VariableDeclaration",
                    "scope": 554,
                    "src": "7222:13:2",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 543,
                      "name": "uint",
                      "nodeType": "ElementaryTypeName",
                      "src": "7222:4:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 546,
                    "indexed": false,
                    "mutability": "mutable",
                    "name": "user",
                    "nameLocation": "7250:4:2",
                    "nodeType": "VariableDeclaration",
                    "scope": 554,
                    "src": "7242:12:2",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 545,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "7242:7:2",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 548,
                    "indexed": false,
                    "mutability": "mutable",
                    "name": "price",
                    "nameLocation": "7266:5:2",
                    "nodeType": "VariableDeclaration",
                    "scope": 554,
                    "src": "7261:10:2",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 547,
                      "name": "uint",
                      "nodeType": "ElementaryTypeName",
                      "src": "7261:4:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 550,
                    "indexed": false,
                    "mutability": "mutable",
                    "name": "fulfilled",
                    "nameLocation": "7283:9:2",
                    "nodeType": "VariableDeclaration",
                    "scope": 554,
                    "src": "7278:14:2",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "typeName": {
                      "id": 549,
                      "name": "bool",
                      "nodeType": "ElementaryTypeName",
                      "src": "7278:4:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 552,
                    "indexed": false,
                    "mutability": "mutable",
                    "name": "cancelled",
                    "nameLocation": "7304:9:2",
                    "nodeType": "VariableDeclaration",
                    "scope": 554,
                    "src": "7299:14:2",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "typeName": {
                      "id": 551,
                      "name": "bool",
                      "nodeType": "ElementaryTypeName",
                      "src": "7299:4:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "7196:122:2"
              },
              "src": "7185:134:2"
            },
            {
              "anonymous": false,
              "id": 562,
              "name": "OfferFilled",
              "nameLocation": "7331:11:2",
              "nodeType": "EventDefinition",
              "parameters": {
                "id": 561,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 556,
                    "indexed": false,
                    "mutability": "mutable",
                    "name": "offerId",
                    "nameLocation": "7348:7:2",
                    "nodeType": "VariableDeclaration",
                    "scope": 562,
                    "src": "7343:12:2",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 555,
                      "name": "uint",
                      "nodeType": "ElementaryTypeName",
                      "src": "7343:4:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 558,
                    "indexed": false,
                    "mutability": "mutable",
                    "name": "id",
                    "nameLocation": "7362:2:2",
                    "nodeType": "VariableDeclaration",
                    "scope": 562,
                    "src": "7357:7:2",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 557,
                      "name": "uint",
                      "nodeType": "ElementaryTypeName",
                      "src": "7357:4:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 560,
                    "indexed": false,
                    "mutability": "mutable",
                    "name": "newOwner",
                    "nameLocation": "7374:8:2",
                    "nodeType": "VariableDeclaration",
                    "scope": 562,
                    "src": "7366:16:2",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 559,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "7366:7:2",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "7342:41:2"
              },
              "src": "7325:59:2"
            },
            {
              "anonymous": false,
              "id": 570,
              "name": "OfferCancelled",
              "nameLocation": "7394:14:2",
              "nodeType": "EventDefinition",
              "parameters": {
                "id": 569,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 564,
                    "indexed": false,
                    "mutability": "mutable",
                    "name": "offerId",
                    "nameLocation": "7414:7:2",
                    "nodeType": "VariableDeclaration",
                    "scope": 570,
                    "src": "7409:12:2",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 563,
                      "name": "uint",
                      "nodeType": "ElementaryTypeName",
                      "src": "7409:4:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 566,
                    "indexed": false,
                    "mutability": "mutable",
                    "name": "id",
                    "nameLocation": "7428:2:2",
                    "nodeType": "VariableDeclaration",
                    "scope": 570,
                    "src": "7423:7:2",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 565,
                      "name": "uint",
                      "nodeType": "ElementaryTypeName",
                      "src": "7423:4:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 568,
                    "indexed": false,
                    "mutability": "mutable",
                    "name": "owner",
                    "nameLocation": "7440:5:2",
                    "nodeType": "VariableDeclaration",
                    "scope": 570,
                    "src": "7432:13:2",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 567,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "7432:7:2",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "7408:38:2"
              },
              "src": "7388:59:2"
            },
            {
              "anonymous": false,
              "id": 576,
              "name": "ClaimFunds",
              "nameLocation": "7457:10:2",
              "nodeType": "EventDefinition",
              "parameters": {
                "id": 575,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 572,
                    "indexed": false,
                    "mutability": "mutable",
                    "name": "user",
                    "nameLocation": "7476:4:2",
                    "nodeType": "VariableDeclaration",
                    "scope": 576,
                    "src": "7468:12:2",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 571,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "7468:7:2",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 574,
                    "indexed": false,
                    "mutability": "mutable",
                    "name": "amount",
                    "nameLocation": "7487:6:2",
                    "nodeType": "VariableDeclaration",
                    "scope": 576,
                    "src": "7482:11:2",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 573,
                      "name": "uint",
                      "nodeType": "ElementaryTypeName",
                      "src": "7482:4:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "7467:27:2"
              },
              "src": "7451:44:2"
            },
            {
              "body": {
                "id": 587,
                "nodeType": "Block",
                "src": "7537:58:2",
                "statements": [
                  {
                    "expression": {
                      "id": 585,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "id": 581,
                        "name": "nftCollection",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 527,
                        "src": "7544:13:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_NFTCollection_$160",
                          "typeString": "contract NFTCollection"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "arguments": [
                          {
                            "id": 583,
                            "name": "_nftCollection",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 578,
                            "src": "7574:14:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          ],
                          "id": 582,
                          "name": "NFTCollection",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 160,
                          "src": "7560:13:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_contract$_NFTCollection_$160_$",
                            "typeString": "type(contract NFTCollection)"
                          }
                        },
                        "id": 584,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "7560:29:2",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_NFTCollection_$160",
                          "typeString": "contract NFTCollection"
                        }
                      },
                      "src": "7544:45:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_NFTCollection_$160",
                        "typeString": "contract NFTCollection"
                      }
                    },
                    "id": 586,
                    "nodeType": "ExpressionStatement",
                    "src": "7544:45:2"
                  }
                ]
              },
              "id": 588,
              "implemented": true,
              "kind": "constructor",
              "modifiers": [],
              "name": "",
              "nameLocation": "-1:-1:-1",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 579,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 578,
                    "mutability": "mutable",
                    "name": "_nftCollection",
                    "nameLocation": "7521:14:2",
                    "nodeType": "VariableDeclaration",
                    "scope": 588,
                    "src": "7513:22:2",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 577,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "7513:7:2",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "7512:24:2"
              },
              "returnParameters": {
                "id": 580,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "7537:0:2"
              },
              "scope": 807,
              "src": "7501:94:2",
              "stateMutability": "nonpayable",
              "virtual": false,
              "visibility": "public"
            },
            {
              "body": {
                "id": 634,
                "nodeType": "Block",
                "src": "7721:244:2",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "expression": {
                            "id": 598,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 4294967281,
                            "src": "7755:3:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 599,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "src": "7755:10:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        {
                          "arguments": [
                            {
                              "id": 602,
                              "name": "this",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 4294967268,
                              "src": "7775:4:2",
                              "typeDescriptions": {
                                "typeIdentifier": "t_contract$_NFTMarket_$807",
                                "typeString": "contract NFTMarket"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_contract$_NFTMarket_$807",
                                "typeString": "contract NFTMarket"
                              }
                            ],
                            "id": 601,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "7767:7:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_address_$",
                              "typeString": "type(address)"
                            },
                            "typeName": {
                              "id": 600,
                              "name": "address",
                              "nodeType": "ElementaryTypeName",
                              "src": "7767:7:2",
                              "typeDescriptions": {}
                            }
                          },
                          "id": 603,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "7767:13:2",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        {
                          "id": 604,
                          "name": "_id",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 590,
                          "src": "7782:3:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          },
                          {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          },
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        ],
                        "expression": {
                          "id": 595,
                          "name": "nftCollection",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 527,
                          "src": "7728:13:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_contract$_NFTCollection_$160",
                            "typeString": "contract NFTCollection"
                          }
                        },
                        "id": 597,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "transferFrom",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 1150,
                        "src": "7728:26:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$",
                          "typeString": "function (address,address,uint256) external"
                        }
                      },
                      "id": 605,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "7728:58:2",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 606,
                    "nodeType": "ExpressionStatement",
                    "src": "7728:58:2"
                  },
                  {
                    "expression": {
                      "id": 608,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "UnaryOperation",
                      "operator": "++",
                      "prefix": false,
                      "src": "7793:13:2",
                      "subExpression": {
                        "id": 607,
                        "name": "offerCount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 517,
                        "src": "7793:10:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 609,
                    "nodeType": "ExpressionStatement",
                    "src": "7793:13:2"
                  },
                  {
                    "expression": {
                      "id": 622,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "baseExpression": {
                          "id": 610,
                          "name": "offers",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 524,
                          "src": "7813:6:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$__Offer_$540_storage_$",
                            "typeString": "mapping(uint256 => struct NFTMarket._Offer storage ref)"
                          }
                        },
                        "id": 612,
                        "indexExpression": {
                          "id": 611,
                          "name": "offerCount",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 517,
                          "src": "7820:10:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": true,
                        "nodeType": "IndexAccess",
                        "src": "7813:18:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$__Offer_$540_storage",
                          "typeString": "struct NFTMarket._Offer storage ref"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "arguments": [
                          {
                            "id": 614,
                            "name": "offerCount",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 517,
                            "src": "7841:10:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          {
                            "id": 615,
                            "name": "_id",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 590,
                            "src": "7853:3:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          {
                            "expression": {
                              "id": 616,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 4294967281,
                              "src": "7858:3:2",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 617,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "sender",
                            "nodeType": "MemberAccess",
                            "src": "7858:10:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          {
                            "id": 618,
                            "name": "_price",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 592,
                            "src": "7870:6:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          {
                            "hexValue": "66616c7365",
                            "id": 619,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "bool",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "7878:5:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            },
                            "value": "false"
                          },
                          {
                            "hexValue": "66616c7365",
                            "id": 620,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "bool",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "7885:5:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            },
                            "value": "false"
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            },
                            {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            },
                            {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          ],
                          "id": 613,
                          "name": "_Offer",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 540,
                          "src": "7834:6:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_struct$__Offer_$540_storage_ptr_$",
                            "typeString": "type(struct NFTMarket._Offer storage pointer)"
                          }
                        },
                        "id": 621,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "structConstructorCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "7834:57:2",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$__Offer_$540_memory_ptr",
                          "typeString": "struct NFTMarket._Offer memory"
                        }
                      },
                      "src": "7813:78:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$__Offer_$540_storage",
                        "typeString": "struct NFTMarket._Offer storage ref"
                      }
                    },
                    "id": 623,
                    "nodeType": "ExpressionStatement",
                    "src": "7813:78:2"
                  },
                  {
                    "eventCall": {
                      "arguments": [
                        {
                          "id": 625,
                          "name": "offerCount",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 517,
                          "src": "7909:10:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "id": 626,
                          "name": "_id",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 590,
                          "src": "7921:3:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "expression": {
                            "id": 627,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 4294967281,
                            "src": "7926:3:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 628,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "src": "7926:10:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        {
                          "id": 629,
                          "name": "_price",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 592,
                          "src": "7938:6:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "hexValue": "66616c7365",
                          "id": 630,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "bool",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "7946:5:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          "value": "false"
                        },
                        {
                          "hexValue": "66616c7365",
                          "id": 631,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "bool",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "7953:5:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          "value": "false"
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          },
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        ],
                        "id": 624,
                        "name": "Offer",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 554,
                        "src": "7903:5:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_event_nonpayable$_t_uint256_$_t_uint256_$_t_address_$_t_uint256_$_t_bool_$_t_bool_$returns$__$",
                          "typeString": "function (uint256,uint256,address,uint256,bool,bool)"
                        }
                      },
                      "id": 632,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "7903:56:2",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 633,
                    "nodeType": "EmitStatement",
                    "src": "7898:61:2"
                  }
                ]
              },
              "functionSelector": "05b7cdd3",
              "id": 635,
              "implemented": true,
              "kind": "function",
              "modifiers": [],
              "name": "makeOffer",
              "nameLocation": "7681:9:2",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 593,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 590,
                    "mutability": "mutable",
                    "name": "_id",
                    "nameLocation": "7696:3:2",
                    "nodeType": "VariableDeclaration",
                    "scope": 635,
                    "src": "7691:8:2",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 589,
                      "name": "uint",
                      "nodeType": "ElementaryTypeName",
                      "src": "7691:4:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 592,
                    "mutability": "mutable",
                    "name": "_price",
                    "nameLocation": "7706:6:2",
                    "nodeType": "VariableDeclaration",
                    "scope": 635,
                    "src": "7701:11:2",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 591,
                      "name": "uint",
                      "nodeType": "ElementaryTypeName",
                      "src": "7701:4:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "7690:23:2"
              },
              "returnParameters": {
                "id": 594,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "7721:0:2"
              },
              "scope": 807,
              "src": "7672:293:2",
              "stateMutability": "nonpayable",
              "virtual": false,
              "visibility": "public"
            },
            {
              "body": {
                "id": 725,
                "nodeType": "Block",
                "src": "8007:676:2",
                "statements": [
                  {
                    "expression": {
                      "id": 639,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "UnaryOperation",
                      "operator": "++",
                      "prefix": false,
                      "src": "8014:12:2",
                      "subExpression": {
                        "id": 638,
                        "name": "fillCount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 519,
                        "src": "8014:9:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 640,
                    "nodeType": "ExpressionStatement",
                    "src": "8014:12:2"
                  },
                  {
                    "assignments": [
                      643
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 643,
                        "mutability": "mutable",
                        "name": "_offer",
                        "nameLocation": "8048:6:2",
                        "nodeType": "VariableDeclaration",
                        "scope": 725,
                        "src": "8033:21:2",
                        "stateVariable": false,
                        "storageLocation": "storage",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$__Offer_$540_storage_ptr",
                          "typeString": "struct NFTMarket._Offer"
                        },
                        "typeName": {
                          "id": 642,
                          "nodeType": "UserDefinedTypeName",
                          "pathNode": {
                            "id": 641,
                            "name": "_Offer",
                            "nodeType": "IdentifierPath",
                            "referencedDeclaration": 540,
                            "src": "8033:6:2"
                          },
                          "referencedDeclaration": 540,
                          "src": "8033:6:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$__Offer_$540_storage_ptr",
                            "typeString": "struct NFTMarket._Offer"
                          }
                        },
                        "visibility": "internal"
                      }
                    ],
                    "id": 647,
                    "initialValue": {
                      "baseExpression": {
                        "id": 644,
                        "name": "offers",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 524,
                        "src": "8057:6:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$__Offer_$540_storage_$",
                          "typeString": "mapping(uint256 => struct NFTMarket._Offer storage ref)"
                        }
                      },
                      "id": 646,
                      "indexExpression": {
                        "id": 645,
                        "name": "fillCount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 519,
                        "src": "8064:9:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "IndexAccess",
                      "src": "8057:17:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$__Offer_$540_storage",
                        "typeString": "struct NFTMarket._Offer storage ref"
                      }
                    },
                    "nodeType": "VariableDeclarationStatement",
                    "src": "8033:41:2"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 652,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "expression": {
                              "id": 649,
                              "name": "_offer",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 643,
                              "src": "8089:6:2",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$__Offer_$540_storage_ptr",
                                "typeString": "struct NFTMarket._Offer storage pointer"
                              }
                            },
                            "id": 650,
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "offerId",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 529,
                            "src": "8089:14:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "==",
                          "rightExpression": {
                            "id": 651,
                            "name": "fillCount",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 519,
                            "src": "8107:9:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "8089:27:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        {
                          "hexValue": "546865206f66666572206d757374206578697374",
                          "id": 653,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "string",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "8118:22:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_stringliteral_ecfd3ca9627f908d395cf30606eaaa71e7ad9f8628919cf7498e36467c553379",
                            "typeString": "literal_string \"The offer must exist\""
                          },
                          "value": "The offer must exist"
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          {
                            "typeIdentifier": "t_stringliteral_ecfd3ca9627f908d395cf30606eaaa71e7ad9f8628919cf7498e36467c553379",
                            "typeString": "literal_string \"The offer must exist\""
                          }
                        ],
                        "id": 648,
                        "name": "require",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [
                          4294967278,
                          4294967278
                        ],
                        "referencedDeclaration": 4294967278,
                        "src": "8081:7:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                          "typeString": "function (bool,string memory) pure"
                        }
                      },
                      "id": 654,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "8081:60:2",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 655,
                    "nodeType": "ExpressionStatement",
                    "src": "8081:60:2"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "commonType": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          },
                          "id": 661,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "expression": {
                              "id": 657,
                              "name": "_offer",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 643,
                              "src": "8156:6:2",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$__Offer_$540_storage_ptr",
                                "typeString": "struct NFTMarket._Offer storage pointer"
                              }
                            },
                            "id": 658,
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "user",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 533,
                            "src": "8156:11:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "!=",
                          "rightExpression": {
                            "expression": {
                              "id": 659,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 4294967281,
                              "src": "8171:3:2",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 660,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "sender",
                            "nodeType": "MemberAccess",
                            "src": "8171:10:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "src": "8156:25:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        {
                          "hexValue": "546865206f776e6572206f6620746865206f666665722063616e6e6f742066696c6c206974",
                          "id": 662,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "string",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "8183:39:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_stringliteral_16b97efa5ec3944fa852fc932397160786ef9749352467e97d8246d2312e592f",
                            "typeString": "literal_string \"The owner of the offer cannot fill it\""
                          },
                          "value": "The owner of the offer cannot fill it"
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          {
                            "typeIdentifier": "t_stringliteral_16b97efa5ec3944fa852fc932397160786ef9749352467e97d8246d2312e592f",
                            "typeString": "literal_string \"The owner of the offer cannot fill it\""
                          }
                        ],
                        "id": 656,
                        "name": "require",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [
                          4294967278,
                          4294967278
                        ],
                        "referencedDeclaration": 4294967278,
                        "src": "8148:7:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                          "typeString": "function (bool,string memory) pure"
                        }
                      },
                      "id": 663,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "8148:75:2",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 664,
                    "nodeType": "ExpressionStatement",
                    "src": "8148:75:2"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "id": 668,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "UnaryOperation",
                          "operator": "!",
                          "prefix": true,
                          "src": "8238:17:2",
                          "subExpression": {
                            "expression": {
                              "id": 666,
                              "name": "_offer",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 643,
                              "src": "8239:6:2",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$__Offer_$540_storage_ptr",
                                "typeString": "struct NFTMarket._Offer storage pointer"
                              }
                            },
                            "id": 667,
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "fulfilled",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 537,
                            "src": "8239:16:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          },
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        {
                          "hexValue": "416e206f666665722063616e6e6f742062652066756c66696c6c6564207477696365",
                          "id": 669,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "string",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "8257:36:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_stringliteral_8f5f9bc7d8e94e4b1f68ebce1509f5ccd65b60868e383ed727015d9809851638",
                            "typeString": "literal_string \"An offer cannot be fulfilled twice\""
                          },
                          "value": "An offer cannot be fulfilled twice"
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          {
                            "typeIdentifier": "t_stringliteral_8f5f9bc7d8e94e4b1f68ebce1509f5ccd65b60868e383ed727015d9809851638",
                            "typeString": "literal_string \"An offer cannot be fulfilled twice\""
                          }
                        ],
                        "id": 665,
                        "name": "require",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [
                          4294967278,
                          4294967278
                        ],
                        "referencedDeclaration": 4294967278,
                        "src": "8230:7:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                          "typeString": "function (bool,string memory) pure"
                        }
                      },
                      "id": 670,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "8230:64:2",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 671,
                    "nodeType": "ExpressionStatement",
                    "src": "8230:64:2"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "id": 675,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "UnaryOperation",
                          "operator": "!",
                          "prefix": true,
                          "src": "8309:17:2",
                          "subExpression": {
                            "expression": {
                              "id": 673,
                              "name": "_offer",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 643,
                              "src": "8310:6:2",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$__Offer_$540_storage_ptr",
                                "typeString": "struct NFTMarket._Offer storage pointer"
                              }
                            },
                            "id": 674,
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "cancelled",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 539,
                            "src": "8310:16:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          },
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        {
                          "hexValue": "412063616e63656c6c6564206f666665722063616e6e6f742062652066756c66696c6c6564",
                          "id": 676,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "string",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "8328:39:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_stringliteral_1bb66d3337aef26bd0c5b237371183c3a5840fa7ad74fb356f513d19eec12261",
                            "typeString": "literal_string \"A cancelled offer cannot be fulfilled\""
                          },
                          "value": "A cancelled offer cannot be fulfilled"
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          {
                            "typeIdentifier": "t_stringliteral_1bb66d3337aef26bd0c5b237371183c3a5840fa7ad74fb356f513d19eec12261",
                            "typeString": "literal_string \"A cancelled offer cannot be fulfilled\""
                          }
                        ],
                        "id": 672,
                        "name": "require",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [
                          4294967278,
                          4294967278
                        ],
                        "referencedDeclaration": 4294967278,
                        "src": "8301:7:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                          "typeString": "function (bool,string memory) pure"
                        }
                      },
                      "id": 677,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "8301:67:2",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 678,
                    "nodeType": "ExpressionStatement",
                    "src": "8301:67:2"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 684,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "expression": {
                              "id": 680,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 4294967281,
                              "src": "8383:3:2",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 681,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "value",
                            "nodeType": "MemberAccess",
                            "src": "8383:9:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "==",
                          "rightExpression": {
                            "expression": {
                              "id": 682,
                              "name": "_offer",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 643,
                              "src": "8396:6:2",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$__Offer_$540_storage_ptr",
                                "typeString": "struct NFTMarket._Offer storage pointer"
                              }
                            },
                            "id": 683,
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "price",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 535,
                            "src": "8396:12:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "8383:25:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        {
                          "hexValue": "546865204b4c415920616d6f756e742073686f756c64206d61746368207769746820746865204e4654205072696365",
                          "id": 685,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "string",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "8410:49:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_stringliteral_f33eb985b999dba3ee453a82d71ec5c3334152629286880cf4eafbc76abe88a8",
                            "typeString": "literal_string \"The KLAY amount should match with the NFT Price\""
                          },
                          "value": "The KLAY amount should match with the NFT Price"
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          {
                            "typeIdentifier": "t_stringliteral_f33eb985b999dba3ee453a82d71ec5c3334152629286880cf4eafbc76abe88a8",
                            "typeString": "literal_string \"The KLAY amount should match with the NFT Price\""
                          }
                        ],
                        "id": 679,
                        "name": "require",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [
                          4294967278,
                          4294967278
                        ],
                        "referencedDeclaration": 4294967278,
                        "src": "8375:7:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                          "typeString": "function (bool,string memory) pure"
                        }
                      },
                      "id": 686,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "8375:85:2",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 687,
                    "nodeType": "ExpressionStatement",
                    "src": "8375:85:2"
                  },
                  {
                    "expression": {
                      "id": 692,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "expression": {
                          "id": 688,
                          "name": "_offer",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 643,
                          "src": "8467:6:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$__Offer_$540_storage_ptr",
                            "typeString": "struct NFTMarket._Offer storage pointer"
                          }
                        },
                        "id": 690,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": true,
                        "memberName": "fulfilled",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 537,
                        "src": "8467:16:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "hexValue": "74727565",
                        "id": 691,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "bool",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "8486:4:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        "value": "true"
                      },
                      "src": "8467:23:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "id": 693,
                    "nodeType": "ExpressionStatement",
                    "src": "8467:23:2"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "id": 699,
                              "name": "this",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 4294967268,
                              "src": "8532:4:2",
                              "typeDescriptions": {
                                "typeIdentifier": "t_contract$_NFTMarket_$807",
                                "typeString": "contract NFTMarket"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_contract$_NFTMarket_$807",
                                "typeString": "contract NFTMarket"
                              }
                            ],
                            "id": 698,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "8524:7:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_address_$",
                              "typeString": "type(address)"
                            },
                            "typeName": {
                              "id": 697,
                              "name": "address",
                              "nodeType": "ElementaryTypeName",
                              "src": "8524:7:2",
                              "typeDescriptions": {}
                            }
                          },
                          "id": 700,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "8524:13:2",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        {
                          "expression": {
                            "id": 701,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 4294967281,
                            "src": "8539:3:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 702,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "src": "8539:10:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        {
                          "expression": {
                            "id": 703,
                            "name": "_offer",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 643,
                            "src": "8551:6:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$__Offer_$540_storage_ptr",
                              "typeString": "struct NFTMarket._Offer storage pointer"
                            }
                          },
                          "id": 704,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "token_id",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 531,
                          "src": "8551:15:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          },
                          {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          },
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        ],
                        "expression": {
                          "id": 694,
                          "name": "nftCollection",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 527,
                          "src": "8497:13:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_contract$_NFTCollection_$160",
                            "typeString": "contract NFTCollection"
                          }
                        },
                        "id": 696,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "transferFrom",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 1150,
                        "src": "8497:26:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$",
                          "typeString": "function (address,address,uint256) external"
                        }
                      },
                      "id": 705,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "8497:70:2",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 706,
                    "nodeType": "ExpressionStatement",
                    "src": "8497:70:2"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "expression": {
                            "id": 713,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 4294967281,
                            "src": "8604:3:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 714,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "value",
                          "nodeType": "MemberAccess",
                          "src": "8604:9:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        ],
                        "expression": {
                          "arguments": [
                            {
                              "expression": {
                                "id": 709,
                                "name": "_offer",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 643,
                                "src": "8582:6:2",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_struct$__Offer_$540_storage_ptr",
                                  "typeString": "struct NFTMarket._Offer storage pointer"
                                }
                              },
                              "id": 710,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "user",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 533,
                              "src": "8582:11:2",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            ],
                            "id": 708,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "8574:8:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_address_payable_$",
                              "typeString": "type(address payable)"
                            },
                            "typeName": {
                              "id": 707,
                              "name": "address",
                              "nodeType": "ElementaryTypeName",
                              "src": "8574:8:2",
                              "stateMutability": "payable",
                              "typeDescriptions": {}
                            }
                          },
                          "id": 711,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "8574:20:2",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_address_payable",
                            "typeString": "address payable"
                          }
                        },
                        "id": 712,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "transfer",
                        "nodeType": "MemberAccess",
                        "src": "8574:29:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_transfer_nonpayable$_t_uint256_$returns$__$",
                          "typeString": "function (uint256)"
                        }
                      },
                      "id": 715,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "8574:40:2",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 716,
                    "nodeType": "ExpressionStatement",
                    "src": "8574:40:2"
                  },
                  {
                    "eventCall": {
                      "arguments": [
                        {
                          "id": 718,
                          "name": "fillCount",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 519,
                          "src": "8638:9:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "expression": {
                            "id": 719,
                            "name": "_offer",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 643,
                            "src": "8649:6:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$__Offer_$540_storage_ptr",
                              "typeString": "struct NFTMarket._Offer storage pointer"
                            }
                          },
                          "id": 720,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "token_id",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 531,
                          "src": "8649:15:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "expression": {
                            "id": 721,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 4294967281,
                            "src": "8666:3:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 722,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "src": "8666:10:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        ],
                        "id": 717,
                        "name": "OfferFilled",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 562,
                        "src": "8626:11:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_event_nonpayable$_t_uint256_$_t_uint256_$_t_address_$returns$__$",
                          "typeString": "function (uint256,uint256,address)"
                        }
                      },
                      "id": 723,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "8626:51:2",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 724,
                    "nodeType": "EmitStatement",
                    "src": "8621:56:2"
                  }
                ]
              },
              "functionSelector": "4abe6a1d",
              "id": 726,
              "implemented": true,
              "kind": "function",
              "modifiers": [],
              "name": "fillOffer",
              "nameLocation": "7980:9:2",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 636,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "7989:2:2"
              },
              "returnParameters": {
                "id": 637,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "8007:0:2"
              },
              "scope": 807,
              "src": "7971:712:2",
              "stateMutability": "payable",
              "virtual": false,
              "visibility": "public"
            },
            {
              "body": {
                "id": 798,
                "nodeType": "Block",
                "src": "8732:540:2",
                "statements": [
                  {
                    "assignments": [
                      733
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 733,
                        "mutability": "mutable",
                        "name": "_offer",
                        "nameLocation": "8754:6:2",
                        "nodeType": "VariableDeclaration",
                        "scope": 798,
                        "src": "8739:21:2",
                        "stateVariable": false,
                        "storageLocation": "storage",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$__Offer_$540_storage_ptr",
                          "typeString": "struct NFTMarket._Offer"
                        },
                        "typeName": {
                          "id": 732,
                          "nodeType": "UserDefinedTypeName",
                          "pathNode": {
                            "id": 731,
                            "name": "_Offer",
                            "nodeType": "IdentifierPath",
                            "referencedDeclaration": 540,
                            "src": "8739:6:2"
                          },
                          "referencedDeclaration": 540,
                          "src": "8739:6:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$__Offer_$540_storage_ptr",
                            "typeString": "struct NFTMarket._Offer"
                          }
                        },
                        "visibility": "internal"
                      }
                    ],
                    "id": 737,
                    "initialValue": {
                      "baseExpression": {
                        "id": 734,
                        "name": "offers",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 524,
                        "src": "8763:6:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$__Offer_$540_storage_$",
                          "typeString": "mapping(uint256 => struct NFTMarket._Offer storage ref)"
                        }
                      },
                      "id": 736,
                      "indexExpression": {
                        "id": 735,
                        "name": "_offerId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 728,
                        "src": "8770:8:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "IndexAccess",
                      "src": "8763:16:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$__Offer_$540_storage",
                        "typeString": "struct NFTMarket._Offer storage ref"
                      }
                    },
                    "nodeType": "VariableDeclarationStatement",
                    "src": "8739:40:2"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 742,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "expression": {
                              "id": 739,
                              "name": "_offer",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 733,
                              "src": "8794:6:2",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$__Offer_$540_storage_ptr",
                                "typeString": "struct NFTMarket._Offer storage pointer"
                              }
                            },
                            "id": 740,
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "offerId",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 529,
                            "src": "8794:14:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "==",
                          "rightExpression": {
                            "id": 741,
                            "name": "_offerId",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 728,
                            "src": "8812:8:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "8794:26:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        {
                          "hexValue": "546865206f66666572206d757374206578697374",
                          "id": 743,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "string",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "8822:22:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_stringliteral_ecfd3ca9627f908d395cf30606eaaa71e7ad9f8628919cf7498e36467c553379",
                            "typeString": "literal_string \"The offer must exist\""
                          },
                          "value": "The offer must exist"
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          {
                            "typeIdentifier": "t_stringliteral_ecfd3ca9627f908d395cf30606eaaa71e7ad9f8628919cf7498e36467c553379",
                            "typeString": "literal_string \"The offer must exist\""
                          }
                        ],
                        "id": 738,
                        "name": "require",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [
                          4294967278,
                          4294967278
                        ],
                        "referencedDeclaration": 4294967278,
                        "src": "8786:7:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                          "typeString": "function (bool,string memory) pure"
                        }
                      },
                      "id": 744,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "8786:59:2",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 745,
                    "nodeType": "ExpressionStatement",
                    "src": "8786:59:2"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "commonType": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          },
                          "id": 751,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "expression": {
                              "id": 747,
                              "name": "_offer",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 733,
                              "src": "8860:6:2",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$__Offer_$540_storage_ptr",
                                "typeString": "struct NFTMarket._Offer storage pointer"
                              }
                            },
                            "id": 748,
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "user",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 533,
                            "src": "8860:11:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "==",
                          "rightExpression": {
                            "expression": {
                              "id": 749,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 4294967281,
                              "src": "8875:3:2",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 750,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "sender",
                            "nodeType": "MemberAccess",
                            "src": "8875:10:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "src": "8860:25:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        {
                          "hexValue": "546865206f666665722063616e206f6e6c792062652063616e63656c656420627920746865206f776e6572",
                          "id": 752,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "string",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "8887:45:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_stringliteral_f9ee9e7c49e557ffe8651318f112ec27248033e18930bbfb9b12687b1fc74103",
                            "typeString": "literal_string \"The offer can only be canceled by the owner\""
                          },
                          "value": "The offer can only be canceled by the owner"
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          {
                            "typeIdentifier": "t_stringliteral_f9ee9e7c49e557ffe8651318f112ec27248033e18930bbfb9b12687b1fc74103",
                            "typeString": "literal_string \"The offer can only be canceled by the owner\""
                          }
                        ],
                        "id": 746,
                        "name": "require",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [
                          4294967278,
                          4294967278
                        ],
                        "referencedDeclaration": 4294967278,
                        "src": "8852:7:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                          "typeString": "function (bool,string memory) pure"
                        }
                      },
                      "id": 753,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "8852:81:2",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 754,
                    "nodeType": "ExpressionStatement",
                    "src": "8852:81:2"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "commonType": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          "id": 759,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "expression": {
                              "id": 756,
                              "name": "_offer",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 733,
                              "src": "8948:6:2",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$__Offer_$540_storage_ptr",
                                "typeString": "struct NFTMarket._Offer storage pointer"
                              }
                            },
                            "id": 757,
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "fulfilled",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 537,
                            "src": "8948:16:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "==",
                          "rightExpression": {
                            "hexValue": "66616c7365",
                            "id": 758,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "bool",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "8968:5:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            },
                            "value": "false"
                          },
                          "src": "8948:25:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        {
                          "hexValue": "412066756c66696c6c6564206f666665722063616e6e6f742062652063616e63656c6c6564",
                          "id": 760,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "string",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "8975:39:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_stringliteral_7f8f6b8a77b6466042d361ff338b4632d922afa369342ae06b5e960c826b374c",
                            "typeString": "literal_string \"A fulfilled offer cannot be cancelled\""
                          },
                          "value": "A fulfilled offer cannot be cancelled"
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          {
                            "typeIdentifier": "t_stringliteral_7f8f6b8a77b6466042d361ff338b4632d922afa369342ae06b5e960c826b374c",
                            "typeString": "literal_string \"A fulfilled offer cannot be cancelled\""
                          }
                        ],
                        "id": 755,
                        "name": "require",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [
                          4294967278,
                          4294967278
                        ],
                        "referencedDeclaration": 4294967278,
                        "src": "8940:7:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                          "typeString": "function (bool,string memory) pure"
                        }
                      },
                      "id": 761,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "8940:75:2",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 762,
                    "nodeType": "ExpressionStatement",
                    "src": "8940:75:2"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "commonType": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          "id": 767,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "expression": {
                              "id": 764,
                              "name": "_offer",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 733,
                              "src": "9030:6:2",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$__Offer_$540_storage_ptr",
                                "typeString": "struct NFTMarket._Offer storage pointer"
                              }
                            },
                            "id": 765,
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "cancelled",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 539,
                            "src": "9030:16:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "==",
                          "rightExpression": {
                            "hexValue": "66616c7365",
                            "id": 766,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "bool",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "9050:5:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            },
                            "value": "false"
                          },
                          "src": "9030:25:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        {
                          "hexValue": "416e206f666665722063616e6e6f742062652063616e63656c6c6564207477696365",
                          "id": 768,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "string",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "9057:36:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_stringliteral_e1c1126e5c7fc0ceccbbc15646a05c877a789fc81bb4a683c5ae2f56969950a4",
                            "typeString": "literal_string \"An offer cannot be cancelled twice\""
                          },
                          "value": "An offer cannot be cancelled twice"
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          {
                            "typeIdentifier": "t_stringliteral_e1c1126e5c7fc0ceccbbc15646a05c877a789fc81bb4a683c5ae2f56969950a4",
                            "typeString": "literal_string \"An offer cannot be cancelled twice\""
                          }
                        ],
                        "id": 763,
                        "name": "require",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [
                          4294967278,
                          4294967278
                        ],
                        "referencedDeclaration": 4294967278,
                        "src": "9022:7:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                          "typeString": "function (bool,string memory) pure"
                        }
                      },
                      "id": 769,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "9022:72:2",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 770,
                    "nodeType": "ExpressionStatement",
                    "src": "9022:72:2"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "id": 776,
                              "name": "this",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 4294967268,
                              "src": "9136:4:2",
                              "typeDescriptions": {
                                "typeIdentifier": "t_contract$_NFTMarket_$807",
                                "typeString": "contract NFTMarket"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_contract$_NFTMarket_$807",
                                "typeString": "contract NFTMarket"
                              }
                            ],
                            "id": 775,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "9128:7:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_address_$",
                              "typeString": "type(address)"
                            },
                            "typeName": {
                              "id": 774,
                              "name": "address",
                              "nodeType": "ElementaryTypeName",
                              "src": "9128:7:2",
                              "typeDescriptions": {}
                            }
                          },
                          "id": 777,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "9128:13:2",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        {
                          "expression": {
                            "id": 778,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 4294967281,
                            "src": "9143:3:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 779,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "src": "9143:10:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        {
                          "expression": {
                            "id": 780,
                            "name": "_offer",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 733,
                            "src": "9155:6:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$__Offer_$540_storage_ptr",
                              "typeString": "struct NFTMarket._Offer storage pointer"
                            }
                          },
                          "id": 781,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "token_id",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 531,
                          "src": "9155:15:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          },
                          {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          },
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        ],
                        "expression": {
                          "id": 771,
                          "name": "nftCollection",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 527,
                          "src": "9101:13:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_contract$_NFTCollection_$160",
                            "typeString": "contract NFTCollection"
                          }
                        },
                        "id": 773,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "transferFrom",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 1150,
                        "src": "9101:26:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$",
                          "typeString": "function (address,address,uint256) external"
                        }
                      },
                      "id": 782,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "9101:70:2",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 783,
                    "nodeType": "ExpressionStatement",
                    "src": "9101:70:2"
                  },
                  {
                    "expression": {
                      "id": 788,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "expression": {
                          "id": 784,
                          "name": "_offer",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 733,
                          "src": "9178:6:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$__Offer_$540_storage_ptr",
                            "typeString": "struct NFTMarket._Offer storage pointer"
                          }
                        },
                        "id": 786,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": true,
                        "memberName": "cancelled",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 539,
                        "src": "9178:16:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "hexValue": "74727565",
                        "id": 787,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "bool",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "9197:4:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        "value": "true"
                      },
                      "src": "9178:23:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "id": 789,
                    "nodeType": "ExpressionStatement",
                    "src": "9178:23:2"
                  },
                  {
                    "eventCall": {
                      "arguments": [
                        {
                          "id": 791,
                          "name": "_offerId",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 728,
                          "src": "9228:8:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "expression": {
                            "id": 792,
                            "name": "_offer",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 733,
                            "src": "9238:6:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$__Offer_$540_storage_ptr",
                              "typeString": "struct NFTMarket._Offer storage pointer"
                            }
                          },
                          "id": 793,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "token_id",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 531,
                          "src": "9238:15:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "expression": {
                            "id": 794,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 4294967281,
                            "src": "9255:3:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 795,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "src": "9255:10:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        ],
                        "id": 790,
                        "name": "OfferCancelled",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 570,
                        "src": "9213:14:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_event_nonpayable$_t_uint256_$_t_uint256_$_t_address_$returns$__$",
                          "typeString": "function (uint256,uint256,address)"
                        }
                      },
                      "id": 796,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "9213:53:2",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 797,
                    "nodeType": "EmitStatement",
                    "src": "9208:58:2"
                  }
                ]
              },
              "functionSelector": "ef706adf",
              "id": 799,
              "implemented": true,
              "kind": "function",
              "modifiers": [],
              "name": "cancelOffer",
              "nameLocation": "8698:11:2",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 729,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 728,
                    "mutability": "mutable",
                    "name": "_offerId",
                    "nameLocation": "8715:8:2",
                    "nodeType": "VariableDeclaration",
                    "scope": 799,
                    "src": "8710:13:2",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 727,
                      "name": "uint",
                      "nodeType": "ElementaryTypeName",
                      "src": "8710:4:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "8709:15:2"
              },
              "returnParameters": {
                "id": 730,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "8732:0:2"
              },
              "scope": 807,
              "src": "8689:583:2",
              "stateMutability": "nonpayable",
              "virtual": false,
              "visibility": "public"
            },
            {
              "body": {
                "id": 805,
                "nodeType": "Block",
                "src": "9374:21:2",
                "statements": [
                  {
                    "expression": {
                      "arguments": [],
                      "expression": {
                        "argumentTypes": [],
                        "id": 802,
                        "name": "revert",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [
                          4294967277,
                          4294967277
                        ],
                        "referencedDeclaration": 4294967277,
                        "src": "9381:6:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_revert_pure$__$returns$__$",
                          "typeString": "function () pure"
                        }
                      },
                      "id": 803,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "9381:8:2",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 804,
                    "nodeType": "ExpressionStatement",
                    "src": "9381:8:2"
                  }
                ]
              },
              "id": 806,
              "implemented": true,
              "kind": "fallback",
              "modifiers": [],
              "name": "",
              "nameLocation": "-1:-1:-1",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 800,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "9362:2:2"
              },
              "returnParameters": {
                "id": 801,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "9374:0:2"
              },
              "scope": 807,
              "src": "9353:42:2",
              "stateMutability": "nonpayable",
              "virtual": false,
              "visibility": "external"
            }
          ],
          "scope": 808,
          "src": "6886:2512:2",
          "usedErrors": []
        }
      ],
      "src": "33:9365:2"
    },
    "legacyAST": {
      "absolutePath": "/C/Users/dev04/Desktop/Project/Klaytn_Exchange/contracts/NFT_Exchange.sol",
      "exportedSymbols": {
        "Address": [
          2465
        ],
        "Context": [
          2487
        ],
        "ERC165": [
          2714
        ],
        "ERC721": [
          1638
        ],
        "ERC721Enumerable": [
          2110
        ],
        "IERC165": [
          2726
        ],
        "IERC721": [
          1754
        ],
        "IERC721Enumerable": [
          2141
        ],
        "IERC721Metadata": [
          2168
        ],
        "IERC721Receiver": [
          1772
        ],
        "NFTCollection": [
          160
        ],
        "NFTMarket": [
          807
        ],
        "Strings": [
          2690
        ],
        "safeMath": [
          515
        ]
      },
      "id": 808,
      "license": "MIT",
      "nodeType": "SourceUnit",
      "nodes": [
        {
          "id": 162,
          "literals": [
            "solidity",
            "0.8",
            ".4"
          ],
          "nodeType": "PragmaDirective",
          "src": "33:22:2"
        },
        {
          "absolutePath": "/C/Users/dev04/Desktop/Project/Klaytn_Exchange/contracts/NFTCollection.sol",
          "file": "./NFTCollection.sol",
          "id": 163,
          "nameLocation": "-1:-1:-1",
          "nodeType": "ImportDirective",
          "scope": 808,
          "sourceUnit": 161,
          "src": "59:29:2",
          "symbolAliases": [],
          "unitAlias": ""
        },
        {
          "abstract": false,
          "baseContracts": [],
          "contractDependencies": [],
          "contractKind": "library",
          "fullyImplemented": true,
          "id": 515,
          "linearizedBaseContracts": [
            515
          ],
          "name": "safeMath",
          "nameLocation": "100:8:2",
          "nodeType": "ContractDefinition",
          "nodes": [
            {
              "body": {
                "id": 193,
                "nodeType": "Block",
                "src": "333:102:2",
                "statements": [
                  {
                    "assignments": [
                      176
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 176,
                        "mutability": "mutable",
                        "name": "c",
                        "nameLocation": "352:1:2",
                        "nodeType": "VariableDeclaration",
                        "scope": 193,
                        "src": "344:9:2",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 175,
                          "name": "uint256",
                          "nodeType": "ElementaryTypeName",
                          "src": "344:7:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "visibility": "internal"
                      }
                    ],
                    "id": 180,
                    "initialValue": {
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 179,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "id": 177,
                        "name": "a",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 166,
                        "src": "356:1:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "+",
                      "rightExpression": {
                        "id": 178,
                        "name": "b",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 168,
                        "src": "360:1:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "356:5:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "VariableDeclarationStatement",
                    "src": "344:17:2"
                  },
                  {
                    "condition": {
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 183,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "id": 181,
                        "name": "c",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 176,
                        "src": "376:1:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "<",
                      "rightExpression": {
                        "id": 182,
                        "name": "a",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 166,
                        "src": "380:1:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "376:5:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "id": 188,
                    "nodeType": "IfStatement",
                    "src": "372:28:2",
                    "trueBody": {
                      "expression": {
                        "components": [
                          {
                            "hexValue": "66616c7365",
                            "id": 184,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "bool",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "391:5:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            },
                            "value": "false"
                          },
                          {
                            "hexValue": "30",
                            "id": 185,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "398:1:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_0_by_1",
                              "typeString": "int_const 0"
                            },
                            "value": "0"
                          }
                        ],
                        "id": 186,
                        "isConstant": false,
                        "isInlineArray": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "TupleExpression",
                        "src": "390:10:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_tuple$_t_bool_$_t_rational_0_by_1_$",
                          "typeString": "tuple(bool,int_const 0)"
                        }
                      },
                      "functionReturnParameters": 174,
                      "id": 187,
                      "nodeType": "Return",
                      "src": "383:17:2"
                    }
                  },
                  {
                    "expression": {
                      "components": [
                        {
                          "hexValue": "74727565",
                          "id": 189,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "bool",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "419:4:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          "value": "true"
                        },
                        {
                          "id": 190,
                          "name": "c",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 176,
                          "src": "425:1:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "id": 191,
                      "isConstant": false,
                      "isInlineArray": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "TupleExpression",
                      "src": "418:9:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$_t_bool_$_t_uint256_$",
                        "typeString": "tuple(bool,uint256)"
                      }
                    },
                    "functionReturnParameters": 174,
                    "id": 192,
                    "nodeType": "Return",
                    "src": "411:16:2"
                  }
                ]
              },
              "documentation": {
                "id": 164,
                "nodeType": "StructuredDocumentation",
                "src": "116:135:2",
                "text": " @dev Returns the addition of two unsigned integers, with an overflow flag.\n _Available since v3.4._"
              },
              "id": 194,
              "implemented": true,
              "kind": "function",
              "modifiers": [],
              "name": "tryAdd",
              "nameLocation": "266:6:2",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 169,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 166,
                    "mutability": "mutable",
                    "name": "a",
                    "nameLocation": "281:1:2",
                    "nodeType": "VariableDeclaration",
                    "scope": 194,
                    "src": "273:9:2",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 165,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "273:7:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 168,
                    "mutability": "mutable",
                    "name": "b",
                    "nameLocation": "292:1:2",
                    "nodeType": "VariableDeclaration",
                    "scope": 194,
                    "src": "284:9:2",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 167,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "284:7:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "272:22:2"
              },
              "returnParameters": {
                "id": 174,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 171,
                    "mutability": "mutable",
                    "name": "",
                    "nameLocation": "-1:-1:-1",
                    "nodeType": "VariableDeclaration",
                    "scope": 194,
                    "src": "318:4:2",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "typeName": {
                      "id": 170,
                      "name": "bool",
                      "nodeType": "ElementaryTypeName",
                      "src": "318:4:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 173,
                    "mutability": "mutable",
                    "name": "",
                    "nameLocation": "-1:-1:-1",
                    "nodeType": "VariableDeclaration",
                    "scope": 194,
                    "src": "324:7:2",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 172,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "324:7:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "317:15:2"
              },
              "scope": 515,
              "src": "257:178:2",
              "stateMutability": "pure",
              "virtual": false,
              "visibility": "internal"
            },
            {
              "body": {
                "id": 220,
                "nodeType": "Block",
                "src": "664:78:2",
                "statements": [
                  {
                    "condition": {
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 208,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "id": 206,
                        "name": "b",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 199,
                        "src": "679:1:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": ">",
                      "rightExpression": {
                        "id": 207,
                        "name": "a",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 197,
                        "src": "683:1:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "679:5:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "id": 213,
                    "nodeType": "IfStatement",
                    "src": "675:28:2",
                    "trueBody": {
                      "expression": {
                        "components": [
                          {
                            "hexValue": "66616c7365",
                            "id": 209,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "bool",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "694:5:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            },
                            "value": "false"
                          },
                          {
                            "hexValue": "30",
                            "id": 210,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "701:1:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_0_by_1",
                              "typeString": "int_const 0"
                            },
                            "value": "0"
                          }
                        ],
                        "id": 211,
                        "isConstant": false,
                        "isInlineArray": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "TupleExpression",
                        "src": "693:10:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_tuple$_t_bool_$_t_rational_0_by_1_$",
                          "typeString": "tuple(bool,int_const 0)"
                        }
                      },
                      "functionReturnParameters": 205,
                      "id": 212,
                      "nodeType": "Return",
                      "src": "686:17:2"
                    }
                  },
                  {
                    "expression": {
                      "components": [
                        {
                          "hexValue": "74727565",
                          "id": 214,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "bool",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "722:4:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          "value": "true"
                        },
                        {
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 217,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "id": 215,
                            "name": "a",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 197,
                            "src": "728:1:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "-",
                          "rightExpression": {
                            "id": 216,
                            "name": "b",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 199,
                            "src": "732:1:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "728:5:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "id": 218,
                      "isConstant": false,
                      "isInlineArray": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "TupleExpression",
                      "src": "721:13:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$_t_bool_$_t_uint256_$",
                        "typeString": "tuple(bool,uint256)"
                      }
                    },
                    "functionReturnParameters": 205,
                    "id": 219,
                    "nodeType": "Return",
                    "src": "714:20:2"
                  }
                ]
              },
              "documentation": {
                "id": 195,
                "nodeType": "StructuredDocumentation",
                "src": "443:139:2",
                "text": " @dev Returns the substraction of two unsigned integers, with an overflow flag.\n _Available since v3.4._"
              },
              "id": 221,
              "implemented": true,
              "kind": "function",
              "modifiers": [],
              "name": "trySub",
              "nameLocation": "597:6:2",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 200,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 197,
                    "mutability": "mutable",
                    "name": "a",
                    "nameLocation": "612:1:2",
                    "nodeType": "VariableDeclaration",
                    "scope": 221,
                    "src": "604:9:2",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 196,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "604:7:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 199,
                    "mutability": "mutable",
                    "name": "b",
                    "nameLocation": "623:1:2",
                    "nodeType": "VariableDeclaration",
                    "scope": 221,
                    "src": "615:9:2",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 198,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "615:7:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "603:22:2"
              },
              "returnParameters": {
                "id": 205,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 202,
                    "mutability": "mutable",
                    "name": "",
                    "nameLocation": "-1:-1:-1",
                    "nodeType": "VariableDeclaration",
                    "scope": 221,
                    "src": "649:4:2",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "typeName": {
                      "id": 201,
                      "name": "bool",
                      "nodeType": "ElementaryTypeName",
                      "src": "649:4:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 204,
                    "mutability": "mutable",
                    "name": "",
                    "nameLocation": "-1:-1:-1",
                    "nodeType": "VariableDeclaration",
                    "scope": 221,
                    "src": "655:7:2",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 203,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "655:7:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "648:15:2"
              },
              "scope": 515,
              "src": "588:154:2",
              "stateMutability": "pure",
              "virtual": false,
              "visibility": "internal"
            },
            {
              "body": {
                "id": 261,
                "nodeType": "Block",
                "src": "973:367:2",
                "statements": [
                  {
                    "condition": {
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 235,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "id": 233,
                        "name": "a",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 224,
                        "src": "1209:1:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "==",
                      "rightExpression": {
                        "hexValue": "30",
                        "id": 234,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "1214:1:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_0_by_1",
                          "typeString": "int_const 0"
                        },
                        "value": "0"
                      },
                      "src": "1209:6:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "id": 240,
                    "nodeType": "IfStatement",
                    "src": "1205:28:2",
                    "trueBody": {
                      "expression": {
                        "components": [
                          {
                            "hexValue": "74727565",
                            "id": 236,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "bool",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "1225:4:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            },
                            "value": "true"
                          },
                          {
                            "hexValue": "30",
                            "id": 237,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "1231:1:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_0_by_1",
                              "typeString": "int_const 0"
                            },
                            "value": "0"
                          }
                        ],
                        "id": 238,
                        "isConstant": false,
                        "isInlineArray": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "TupleExpression",
                        "src": "1224:9:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_tuple$_t_bool_$_t_rational_0_by_1_$",
                          "typeString": "tuple(bool,int_const 0)"
                        }
                      },
                      "functionReturnParameters": 232,
                      "id": 239,
                      "nodeType": "Return",
                      "src": "1217:16:2"
                    }
                  },
                  {
                    "assignments": [
                      242
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 242,
                        "mutability": "mutable",
                        "name": "c",
                        "nameLocation": "1252:1:2",
                        "nodeType": "VariableDeclaration",
                        "scope": 261,
                        "src": "1244:9:2",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 241,
                          "name": "uint256",
                          "nodeType": "ElementaryTypeName",
                          "src": "1244:7:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "visibility": "internal"
                      }
                    ],
                    "id": 246,
                    "initialValue": {
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 245,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "id": 243,
                        "name": "a",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 224,
                        "src": "1256:1:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "*",
                      "rightExpression": {
                        "id": 244,
                        "name": "b",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 226,
                        "src": "1260:1:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "1256:5:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "VariableDeclarationStatement",
                    "src": "1244:17:2"
                  },
                  {
                    "condition": {
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 251,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 249,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "id": 247,
                          "name": "c",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 242,
                          "src": "1276:1:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "/",
                        "rightExpression": {
                          "id": 248,
                          "name": "a",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 224,
                          "src": "1280:1:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "1276:5:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "!=",
                      "rightExpression": {
                        "id": 250,
                        "name": "b",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 226,
                        "src": "1285:1:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "1276:10:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "id": 256,
                    "nodeType": "IfStatement",
                    "src": "1272:33:2",
                    "trueBody": {
                      "expression": {
                        "components": [
                          {
                            "hexValue": "66616c7365",
                            "id": 252,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "bool",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "1296:5:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            },
                            "value": "false"
                          },
                          {
                            "hexValue": "30",
                            "id": 253,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "1303:1:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_0_by_1",
                              "typeString": "int_const 0"
                            },
                            "value": "0"
                          }
                        ],
                        "id": 254,
                        "isConstant": false,
                        "isInlineArray": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "TupleExpression",
                        "src": "1295:10:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_tuple$_t_bool_$_t_rational_0_by_1_$",
                          "typeString": "tuple(bool,int_const 0)"
                        }
                      },
                      "functionReturnParameters": 232,
                      "id": 255,
                      "nodeType": "Return",
                      "src": "1288:17:2"
                    }
                  },
                  {
                    "expression": {
                      "components": [
                        {
                          "hexValue": "74727565",
                          "id": 257,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "bool",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "1324:4:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          "value": "true"
                        },
                        {
                          "id": 258,
                          "name": "c",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 242,
                          "src": "1330:1:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "id": 259,
                      "isConstant": false,
                      "isInlineArray": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "TupleExpression",
                      "src": "1323:9:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$_t_bool_$_t_uint256_$",
                        "typeString": "tuple(bool,uint256)"
                      }
                    },
                    "functionReturnParameters": 232,
                    "id": 260,
                    "nodeType": "Return",
                    "src": "1316:16:2"
                  }
                ]
              },
              "documentation": {
                "id": 222,
                "nodeType": "StructuredDocumentation",
                "src": "750:141:2",
                "text": " @dev Returns the multiplication of two unsigned integers, with an overflow flag.\n _Available since v3.4._"
              },
              "id": 262,
              "implemented": true,
              "kind": "function",
              "modifiers": [],
              "name": "tryMul",
              "nameLocation": "906:6:2",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 227,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 224,
                    "mutability": "mutable",
                    "name": "a",
                    "nameLocation": "921:1:2",
                    "nodeType": "VariableDeclaration",
                    "scope": 262,
                    "src": "913:9:2",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 223,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "913:7:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 226,
                    "mutability": "mutable",
                    "name": "b",
                    "nameLocation": "932:1:2",
                    "nodeType": "VariableDeclaration",
                    "scope": 262,
                    "src": "924:9:2",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 225,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "924:7:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "912:22:2"
              },
              "returnParameters": {
                "id": 232,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 229,
                    "mutability": "mutable",
                    "name": "",
                    "nameLocation": "-1:-1:-1",
                    "nodeType": "VariableDeclaration",
                    "scope": 262,
                    "src": "958:4:2",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "typeName": {
                      "id": 228,
                      "name": "bool",
                      "nodeType": "ElementaryTypeName",
                      "src": "958:4:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 231,
                    "mutability": "mutable",
                    "name": "",
                    "nameLocation": "-1:-1:-1",
                    "nodeType": "VariableDeclaration",
                    "scope": 262,
                    "src": "964:7:2",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 230,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "964:7:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "957:15:2"
              },
              "scope": 515,
              "src": "897:443:2",
              "stateMutability": "pure",
              "virtual": false,
              "visibility": "internal"
            },
            {
              "body": {
                "id": 288,
                "nodeType": "Block",
                "src": "1572:79:2",
                "statements": [
                  {
                    "condition": {
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 276,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "id": 274,
                        "name": "b",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 267,
                        "src": "1587:1:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "==",
                      "rightExpression": {
                        "hexValue": "30",
                        "id": 275,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "1592:1:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_0_by_1",
                          "typeString": "int_const 0"
                        },
                        "value": "0"
                      },
                      "src": "1587:6:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "id": 281,
                    "nodeType": "IfStatement",
                    "src": "1583:29:2",
                    "trueBody": {
                      "expression": {
                        "components": [
                          {
                            "hexValue": "66616c7365",
                            "id": 277,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "bool",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "1603:5:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            },
                            "value": "false"
                          },
                          {
                            "hexValue": "30",
                            "id": 278,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "1610:1:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_0_by_1",
                              "typeString": "int_const 0"
                            },
                            "value": "0"
                          }
                        ],
                        "id": 279,
                        "isConstant": false,
                        "isInlineArray": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "TupleExpression",
                        "src": "1602:10:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_tuple$_t_bool_$_t_rational_0_by_1_$",
                          "typeString": "tuple(bool,int_const 0)"
                        }
                      },
                      "functionReturnParameters": 273,
                      "id": 280,
                      "nodeType": "Return",
                      "src": "1595:17:2"
                    }
                  },
                  {
                    "expression": {
                      "components": [
                        {
                          "hexValue": "74727565",
                          "id": 282,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "bool",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "1631:4:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          "value": "true"
                        },
                        {
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 285,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "id": 283,
                            "name": "a",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 265,
                            "src": "1637:1:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "/",
                          "rightExpression": {
                            "id": 284,
                            "name": "b",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 267,
                            "src": "1641:1:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "1637:5:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "id": 286,
                      "isConstant": false,
                      "isInlineArray": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "TupleExpression",
                      "src": "1630:13:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$_t_bool_$_t_uint256_$",
                        "typeString": "tuple(bool,uint256)"
                      }
                    },
                    "functionReturnParameters": 273,
                    "id": 287,
                    "nodeType": "Return",
                    "src": "1623:20:2"
                  }
                ]
              },
              "documentation": {
                "id": 263,
                "nodeType": "StructuredDocumentation",
                "src": "1348:142:2",
                "text": " @dev Returns the division of two unsigned integers, with a division by zero flag.\n _Available since v3.4._"
              },
              "id": 289,
              "implemented": true,
              "kind": "function",
              "modifiers": [],
              "name": "tryDiv",
              "nameLocation": "1505:6:2",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 268,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 265,
                    "mutability": "mutable",
                    "name": "a",
                    "nameLocation": "1520:1:2",
                    "nodeType": "VariableDeclaration",
                    "scope": 289,
                    "src": "1512:9:2",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 264,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "1512:7:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 267,
                    "mutability": "mutable",
                    "name": "b",
                    "nameLocation": "1531:1:2",
                    "nodeType": "VariableDeclaration",
                    "scope": 289,
                    "src": "1523:9:2",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 266,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "1523:7:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "1511:22:2"
              },
              "returnParameters": {
                "id": 273,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 270,
                    "mutability": "mutable",
                    "name": "",
                    "nameLocation": "-1:-1:-1",
                    "nodeType": "VariableDeclaration",
                    "scope": 289,
                    "src": "1557:4:2",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "typeName": {
                      "id": 269,
                      "name": "bool",
                      "nodeType": "ElementaryTypeName",
                      "src": "1557:4:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 272,
                    "mutability": "mutable",
                    "name": "",
                    "nameLocation": "-1:-1:-1",
                    "nodeType": "VariableDeclaration",
                    "scope": 289,
                    "src": "1563:7:2",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 271,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "1563:7:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "1556:15:2"
              },
              "scope": 515,
              "src": "1496:155:2",
              "stateMutability": "pure",
              "virtual": false,
              "visibility": "internal"
            },
            {
              "body": {
                "id": 315,
                "nodeType": "Block",
                "src": "1893:79:2",
                "statements": [
                  {
                    "condition": {
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 303,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "id": 301,
                        "name": "b",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 294,
                        "src": "1908:1:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "==",
                      "rightExpression": {
                        "hexValue": "30",
                        "id": 302,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "1913:1:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_0_by_1",
                          "typeString": "int_const 0"
                        },
                        "value": "0"
                      },
                      "src": "1908:6:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "id": 308,
                    "nodeType": "IfStatement",
                    "src": "1904:29:2",
                    "trueBody": {
                      "expression": {
                        "components": [
                          {
                            "hexValue": "66616c7365",
                            "id": 304,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "bool",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "1924:5:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            },
                            "value": "false"
                          },
                          {
                            "hexValue": "30",
                            "id": 305,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "1931:1:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_0_by_1",
                              "typeString": "int_const 0"
                            },
                            "value": "0"
                          }
                        ],
                        "id": 306,
                        "isConstant": false,
                        "isInlineArray": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "TupleExpression",
                        "src": "1923:10:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_tuple$_t_bool_$_t_rational_0_by_1_$",
                          "typeString": "tuple(bool,int_const 0)"
                        }
                      },
                      "functionReturnParameters": 300,
                      "id": 307,
                      "nodeType": "Return",
                      "src": "1916:17:2"
                    }
                  },
                  {
                    "expression": {
                      "components": [
                        {
                          "hexValue": "74727565",
                          "id": 309,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "bool",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "1952:4:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          "value": "true"
                        },
                        {
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 312,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "id": 310,
                            "name": "a",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 292,
                            "src": "1958:1:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "%",
                          "rightExpression": {
                            "id": 311,
                            "name": "b",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 294,
                            "src": "1962:1:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "1958:5:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "id": 313,
                      "isConstant": false,
                      "isInlineArray": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "TupleExpression",
                      "src": "1951:13:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$_t_bool_$_t_uint256_$",
                        "typeString": "tuple(bool,uint256)"
                      }
                    },
                    "functionReturnParameters": 300,
                    "id": 314,
                    "nodeType": "Return",
                    "src": "1944:20:2"
                  }
                ]
              },
              "documentation": {
                "id": 290,
                "nodeType": "StructuredDocumentation",
                "src": "1659:152:2",
                "text": " @dev Returns the remainder of dividing two unsigned integers, with a division by zero flag.\n _Available since v3.4._"
              },
              "id": 316,
              "implemented": true,
              "kind": "function",
              "modifiers": [],
              "name": "tryMod",
              "nameLocation": "1826:6:2",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 295,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 292,
                    "mutability": "mutable",
                    "name": "a",
                    "nameLocation": "1841:1:2",
                    "nodeType": "VariableDeclaration",
                    "scope": 316,
                    "src": "1833:9:2",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 291,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "1833:7:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 294,
                    "mutability": "mutable",
                    "name": "b",
                    "nameLocation": "1852:1:2",
                    "nodeType": "VariableDeclaration",
                    "scope": 316,
                    "src": "1844:9:2",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 293,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "1844:7:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "1832:22:2"
              },
              "returnParameters": {
                "id": 300,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 297,
                    "mutability": "mutable",
                    "name": "",
                    "nameLocation": "-1:-1:-1",
                    "nodeType": "VariableDeclaration",
                    "scope": 316,
                    "src": "1878:4:2",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "typeName": {
                      "id": 296,
                      "name": "bool",
                      "nodeType": "ElementaryTypeName",
                      "src": "1878:4:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 299,
                    "mutability": "mutable",
                    "name": "",
                    "nameLocation": "-1:-1:-1",
                    "nodeType": "VariableDeclaration",
                    "scope": 316,
                    "src": "1884:7:2",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 298,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "1884:7:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "1877:15:2"
              },
              "scope": 515,
              "src": "1817:155:2",
              "stateMutability": "pure",
              "virtual": false,
              "visibility": "internal"
            },
            {
              "body": {
                "id": 341,
                "nodeType": "Block",
                "src": "2286:112:2",
                "statements": [
                  {
                    "assignments": [
                      327
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 327,
                        "mutability": "mutable",
                        "name": "c",
                        "nameLocation": "2305:1:2",
                        "nodeType": "VariableDeclaration",
                        "scope": 341,
                        "src": "2297:9:2",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 326,
                          "name": "uint256",
                          "nodeType": "ElementaryTypeName",
                          "src": "2297:7:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "visibility": "internal"
                      }
                    ],
                    "id": 331,
                    "initialValue": {
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 330,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "id": 328,
                        "name": "a",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 319,
                        "src": "2309:1:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "+",
                      "rightExpression": {
                        "id": 329,
                        "name": "b",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 321,
                        "src": "2313:1:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "2309:5:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "VariableDeclarationStatement",
                    "src": "2297:17:2"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 335,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "id": 333,
                            "name": "c",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 327,
                            "src": "2333:1:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": ">=",
                          "rightExpression": {
                            "id": 334,
                            "name": "a",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 319,
                            "src": "2338:1:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "2333:6:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        {
                          "hexValue": "536166654d6174683a206164646974696f6e206f766572666c6f77",
                          "id": 336,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "string",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "2341:29:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_stringliteral_30cc447bcc13b3e22b45cef0dd9b0b514842d836dd9b6eb384e20dedfb47723a",
                            "typeString": "literal_string \"SafeMath: addition overflow\""
                          },
                          "value": "SafeMath: addition overflow"
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          {
                            "typeIdentifier": "t_stringliteral_30cc447bcc13b3e22b45cef0dd9b0b514842d836dd9b6eb384e20dedfb47723a",
                            "typeString": "literal_string \"SafeMath: addition overflow\""
                          }
                        ],
                        "id": 332,
                        "name": "require",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [
                          4294967278,
                          4294967278
                        ],
                        "referencedDeclaration": 4294967278,
                        "src": "2325:7:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                          "typeString": "function (bool,string memory) pure"
                        }
                      },
                      "id": 337,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "2325:46:2",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 338,
                    "nodeType": "ExpressionStatement",
                    "src": "2325:46:2"
                  },
                  {
                    "expression": {
                      "id": 339,
                      "name": "c",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 327,
                      "src": "2389:1:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "functionReturnParameters": 325,
                    "id": 340,
                    "nodeType": "Return",
                    "src": "2382:8:2"
                  }
                ]
              },
              "documentation": {
                "id": 317,
                "nodeType": "StructuredDocumentation",
                "src": "1980:233:2",
                "text": " @dev Returns the addition of two unsigned integers, reverting on\n overflow.\n Counterpart to Solidity's `+` operator.\n Requirements:\n - Addition cannot overflow."
              },
              "id": 342,
              "implemented": true,
              "kind": "function",
              "modifiers": [],
              "name": "add",
              "nameLocation": "2228:3:2",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 322,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 319,
                    "mutability": "mutable",
                    "name": "a",
                    "nameLocation": "2240:1:2",
                    "nodeType": "VariableDeclaration",
                    "scope": 342,
                    "src": "2232:9:2",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 318,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "2232:7:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 321,
                    "mutability": "mutable",
                    "name": "b",
                    "nameLocation": "2251:1:2",
                    "nodeType": "VariableDeclaration",
                    "scope": 342,
                    "src": "2243:9:2",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 320,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "2243:7:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "2231:22:2"
              },
              "returnParameters": {
                "id": 325,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 324,
                    "mutability": "mutable",
                    "name": "",
                    "nameLocation": "-1:-1:-1",
                    "nodeType": "VariableDeclaration",
                    "scope": 342,
                    "src": "2277:7:2",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 323,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "2277:7:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "2276:9:2"
              },
              "scope": 515,
              "src": "2219:179:2",
              "stateMutability": "pure",
              "virtual": false,
              "visibility": "internal"
            },
            {
              "body": {
                "id": 363,
                "nodeType": "Block",
                "src": "2748:91:2",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 355,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "id": 353,
                            "name": "b",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 347,
                            "src": "2767:1:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "<=",
                          "rightExpression": {
                            "id": 354,
                            "name": "a",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 345,
                            "src": "2772:1:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "2767:6:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        {
                          "hexValue": "536166654d6174683a207375627472616374696f6e206f766572666c6f77",
                          "id": 356,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "string",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "2775:32:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_stringliteral_50b058e9b5320e58880d88223c9801cd9eecdcf90323d5c2318bc1b6b916e862",
                            "typeString": "literal_string \"SafeMath: subtraction overflow\""
                          },
                          "value": "SafeMath: subtraction overflow"
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          {
                            "typeIdentifier": "t_stringliteral_50b058e9b5320e58880d88223c9801cd9eecdcf90323d5c2318bc1b6b916e862",
                            "typeString": "literal_string \"SafeMath: subtraction overflow\""
                          }
                        ],
                        "id": 352,
                        "name": "require",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [
                          4294967278,
                          4294967278
                        ],
                        "referencedDeclaration": 4294967278,
                        "src": "2759:7:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                          "typeString": "function (bool,string memory) pure"
                        }
                      },
                      "id": 357,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "2759:49:2",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 358,
                    "nodeType": "ExpressionStatement",
                    "src": "2759:49:2"
                  },
                  {
                    "expression": {
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 361,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "id": 359,
                        "name": "a",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 345,
                        "src": "2826:1:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "-",
                      "rightExpression": {
                        "id": 360,
                        "name": "b",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 347,
                        "src": "2830:1:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "2826:5:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "functionReturnParameters": 351,
                    "id": 362,
                    "nodeType": "Return",
                    "src": "2819:12:2"
                  }
                ]
              },
              "documentation": {
                "id": 343,
                "nodeType": "StructuredDocumentation",
                "src": "2406:269:2",
                "text": " @dev Returns the subtraction of two unsigned integers, reverting on\n overflow (when the result is negative).\n Counterpart to Solidity's `-` operator.\n Requirements:\n - Subtraction cannot overflow."
              },
              "id": 364,
              "implemented": true,
              "kind": "function",
              "modifiers": [],
              "name": "sub",
              "nameLocation": "2690:3:2",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 348,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 345,
                    "mutability": "mutable",
                    "name": "a",
                    "nameLocation": "2702:1:2",
                    "nodeType": "VariableDeclaration",
                    "scope": 364,
                    "src": "2694:9:2",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 344,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "2694:7:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 347,
                    "mutability": "mutable",
                    "name": "b",
                    "nameLocation": "2713:1:2",
                    "nodeType": "VariableDeclaration",
                    "scope": 364,
                    "src": "2705:9:2",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 346,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "2705:7:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "2693:22:2"
              },
              "returnParameters": {
                "id": 351,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 350,
                    "mutability": "mutable",
                    "name": "",
                    "nameLocation": "-1:-1:-1",
                    "nodeType": "VariableDeclaration",
                    "scope": 364,
                    "src": "2739:7:2",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 349,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "2739:7:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "2738:9:2"
              },
              "scope": 515,
              "src": "2681:158:2",
              "stateMutability": "pure",
              "virtual": false,
              "visibility": "internal"
            },
            {
              "body": {
                "id": 397,
                "nodeType": "Block",
                "src": "3165:153:2",
                "statements": [
                  {
                    "condition": {
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 376,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "id": 374,
                        "name": "a",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 367,
                        "src": "3180:1:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "==",
                      "rightExpression": {
                        "hexValue": "30",
                        "id": 375,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "3185:1:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_0_by_1",
                          "typeString": "int_const 0"
                        },
                        "value": "0"
                      },
                      "src": "3180:6:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "id": 379,
                    "nodeType": "IfStatement",
                    "src": "3176:20:2",
                    "trueBody": {
                      "expression": {
                        "hexValue": "30",
                        "id": 377,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "3195:1:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_0_by_1",
                          "typeString": "int_const 0"
                        },
                        "value": "0"
                      },
                      "functionReturnParameters": 373,
                      "id": 378,
                      "nodeType": "Return",
                      "src": "3188:8:2"
                    }
                  },
                  {
                    "assignments": [
                      381
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 381,
                        "mutability": "mutable",
                        "name": "c",
                        "nameLocation": "3215:1:2",
                        "nodeType": "VariableDeclaration",
                        "scope": 397,
                        "src": "3207:9:2",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 380,
                          "name": "uint256",
                          "nodeType": "ElementaryTypeName",
                          "src": "3207:7:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "visibility": "internal"
                      }
                    ],
                    "id": 385,
                    "initialValue": {
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 384,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "id": 382,
                        "name": "a",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 367,
                        "src": "3219:1:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "*",
                      "rightExpression": {
                        "id": 383,
                        "name": "b",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 369,
                        "src": "3223:1:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "3219:5:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "VariableDeclarationStatement",
                    "src": "3207:17:2"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 391,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "commonType": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            "id": 389,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "id": 387,
                              "name": "c",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 381,
                              "src": "3243:1:2",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "/",
                            "rightExpression": {
                              "id": 388,
                              "name": "a",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 367,
                              "src": "3247:1:2",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "src": "3243:5:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "==",
                          "rightExpression": {
                            "id": 390,
                            "name": "b",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 369,
                            "src": "3252:1:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "3243:10:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        {
                          "hexValue": "536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f77",
                          "id": 392,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "string",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "3255:35:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_stringliteral_9113bb53c2876a3805b2c9242029423fc540a728243ce887ab24c82cf119fba3",
                            "typeString": "literal_string \"SafeMath: multiplication overflow\""
                          },
                          "value": "SafeMath: multiplication overflow"
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          {
                            "typeIdentifier": "t_stringliteral_9113bb53c2876a3805b2c9242029423fc540a728243ce887ab24c82cf119fba3",
                            "typeString": "literal_string \"SafeMath: multiplication overflow\""
                          }
                        ],
                        "id": 386,
                        "name": "require",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [
                          4294967278,
                          4294967278
                        ],
                        "referencedDeclaration": 4294967278,
                        "src": "3235:7:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                          "typeString": "function (bool,string memory) pure"
                        }
                      },
                      "id": 393,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "3235:56:2",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 394,
                    "nodeType": "ExpressionStatement",
                    "src": "3235:56:2"
                  },
                  {
                    "expression": {
                      "id": 395,
                      "name": "c",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 381,
                      "src": "3309:1:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "functionReturnParameters": 373,
                    "id": 396,
                    "nodeType": "Return",
                    "src": "3302:8:2"
                  }
                ]
              },
              "documentation": {
                "id": 365,
                "nodeType": "StructuredDocumentation",
                "src": "2847:245:2",
                "text": " @dev Returns the multiplication of two unsigned integers, reverting on\n overflow.\n Counterpart to Solidity's `*` operator.\n Requirements:\n - Multiplication cannot overflow."
              },
              "id": 398,
              "implemented": true,
              "kind": "function",
              "modifiers": [],
              "name": "mul",
              "nameLocation": "3107:3:2",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 370,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 367,
                    "mutability": "mutable",
                    "name": "a",
                    "nameLocation": "3119:1:2",
                    "nodeType": "VariableDeclaration",
                    "scope": 398,
                    "src": "3111:9:2",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 366,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "3111:7:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 369,
                    "mutability": "mutable",
                    "name": "b",
                    "nameLocation": "3130:1:2",
                    "nodeType": "VariableDeclaration",
                    "scope": 398,
                    "src": "3122:9:2",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 368,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "3122:7:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "3110:22:2"
              },
              "returnParameters": {
                "id": 373,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 372,
                    "mutability": "mutable",
                    "name": "",
                    "nameLocation": "-1:-1:-1",
                    "nodeType": "VariableDeclaration",
                    "scope": 398,
                    "src": "3156:7:2",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 371,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "3156:7:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "3155:9:2"
              },
              "scope": 515,
              "src": "3098:220:2",
              "stateMutability": "pure",
              "virtual": false,
              "visibility": "internal"
            },
            {
              "body": {
                "id": 419,
                "nodeType": "Block",
                "src": "3863:86:2",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 411,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "id": 409,
                            "name": "b",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 403,
                            "src": "3882:1:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": ">",
                          "rightExpression": {
                            "hexValue": "30",
                            "id": 410,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "3886:1:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_0_by_1",
                              "typeString": "int_const 0"
                            },
                            "value": "0"
                          },
                          "src": "3882:5:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        {
                          "hexValue": "536166654d6174683a206469766973696f6e206279207a65726f",
                          "id": 412,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "string",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "3889:28:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_stringliteral_5b7cc70dda4dc2143e5adb63bd5d1f349504f461dbdfd9bc76fac1f8ca6d019f",
                            "typeString": "literal_string \"SafeMath: division by zero\""
                          },
                          "value": "SafeMath: division by zero"
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          {
                            "typeIdentifier": "t_stringliteral_5b7cc70dda4dc2143e5adb63bd5d1f349504f461dbdfd9bc76fac1f8ca6d019f",
                            "typeString": "literal_string \"SafeMath: division by zero\""
                          }
                        ],
                        "id": 408,
                        "name": "require",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [
                          4294967278,
                          4294967278
                        ],
                        "referencedDeclaration": 4294967278,
                        "src": "3874:7:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                          "typeString": "function (bool,string memory) pure"
                        }
                      },
                      "id": 413,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "3874:44:2",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 414,
                    "nodeType": "ExpressionStatement",
                    "src": "3874:44:2"
                  },
                  {
                    "expression": {
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 417,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "id": 415,
                        "name": "a",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 401,
                        "src": "3936:1:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "/",
                      "rightExpression": {
                        "id": 416,
                        "name": "b",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 403,
                        "src": "3940:1:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "3936:5:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "functionReturnParameters": 407,
                    "id": 418,
                    "nodeType": "Return",
                    "src": "3929:12:2"
                  }
                ]
              },
              "documentation": {
                "id": 399,
                "nodeType": "StructuredDocumentation",
                "src": "3326:464:2",
                "text": " @dev Returns the integer division of two unsigned integers, reverting on\n division by zero. The result is rounded towards zero.\n Counterpart to Solidity's `/` operator. Note: this function uses a\n `revert` opcode (which leaves remaining gas untouched) while Solidity\n uses an invalid opcode to revert (consuming all remaining gas).\n Requirements:\n - The divisor cannot be zero."
              },
              "id": 420,
              "implemented": true,
              "kind": "function",
              "modifiers": [],
              "name": "div",
              "nameLocation": "3805:3:2",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 404,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 401,
                    "mutability": "mutable",
                    "name": "a",
                    "nameLocation": "3817:1:2",
                    "nodeType": "VariableDeclaration",
                    "scope": 420,
                    "src": "3809:9:2",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 400,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "3809:7:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 403,
                    "mutability": "mutable",
                    "name": "b",
                    "nameLocation": "3828:1:2",
                    "nodeType": "VariableDeclaration",
                    "scope": 420,
                    "src": "3820:9:2",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 402,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "3820:7:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "3808:22:2"
              },
              "returnParameters": {
                "id": 407,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 406,
                    "mutability": "mutable",
                    "name": "",
                    "nameLocation": "-1:-1:-1",
                    "nodeType": "VariableDeclaration",
                    "scope": 420,
                    "src": "3854:7:2",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 405,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "3854:7:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "3853:9:2"
              },
              "scope": 515,
              "src": "3796:153:2",
              "stateMutability": "pure",
              "virtual": false,
              "visibility": "internal"
            },
            {
              "body": {
                "id": 441,
                "nodeType": "Block",
                "src": "4483:84:2",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 433,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "id": 431,
                            "name": "b",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 425,
                            "src": "4502:1:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": ">",
                          "rightExpression": {
                            "hexValue": "30",
                            "id": 432,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "4506:1:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_0_by_1",
                              "typeString": "int_const 0"
                            },
                            "value": "0"
                          },
                          "src": "4502:5:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        {
                          "hexValue": "536166654d6174683a206d6f64756c6f206279207a65726f",
                          "id": 434,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "string",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "4509:26:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_stringliteral_726e51f7b81fce0a68f5f214f445e275313b20b1633f08ce954ee39abf8d7832",
                            "typeString": "literal_string \"SafeMath: modulo by zero\""
                          },
                          "value": "SafeMath: modulo by zero"
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          {
                            "typeIdentifier": "t_stringliteral_726e51f7b81fce0a68f5f214f445e275313b20b1633f08ce954ee39abf8d7832",
                            "typeString": "literal_string \"SafeMath: modulo by zero\""
                          }
                        ],
                        "id": 430,
                        "name": "require",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [
                          4294967278,
                          4294967278
                        ],
                        "referencedDeclaration": 4294967278,
                        "src": "4494:7:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                          "typeString": "function (bool,string memory) pure"
                        }
                      },
                      "id": 435,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "4494:42:2",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 436,
                    "nodeType": "ExpressionStatement",
                    "src": "4494:42:2"
                  },
                  {
                    "expression": {
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 439,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "id": 437,
                        "name": "a",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 423,
                        "src": "4554:1:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "%",
                      "rightExpression": {
                        "id": 438,
                        "name": "b",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 425,
                        "src": "4558:1:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "4554:5:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "functionReturnParameters": 429,
                    "id": 440,
                    "nodeType": "Return",
                    "src": "4547:12:2"
                  }
                ]
              },
              "documentation": {
                "id": 421,
                "nodeType": "StructuredDocumentation",
                "src": "3957:453:2",
                "text": " @dev Returns the remainder of dividing two unsigned integers. (unsigned integer modulo),\n reverting when dividing by zero.\n Counterpart to Solidity's `%` operator. This function uses a `revert`\n opcode (which leaves remaining gas untouched) while Solidity uses an\n invalid opcode to revert (consuming all remaining gas).\n Requirements:\n - The divisor cannot be zero."
              },
              "id": 442,
              "implemented": true,
              "kind": "function",
              "modifiers": [],
              "name": "mod",
              "nameLocation": "4425:3:2",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 426,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 423,
                    "mutability": "mutable",
                    "name": "a",
                    "nameLocation": "4437:1:2",
                    "nodeType": "VariableDeclaration",
                    "scope": 442,
                    "src": "4429:9:2",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 422,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "4429:7:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 425,
                    "mutability": "mutable",
                    "name": "b",
                    "nameLocation": "4448:1:2",
                    "nodeType": "VariableDeclaration",
                    "scope": 442,
                    "src": "4440:9:2",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 424,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "4440:7:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "4428:22:2"
              },
              "returnParameters": {
                "id": 429,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 428,
                    "mutability": "mutable",
                    "name": "",
                    "nameLocation": "-1:-1:-1",
                    "nodeType": "VariableDeclaration",
                    "scope": 442,
                    "src": "4474:7:2",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 427,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "4474:7:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "4473:9:2"
              },
              "scope": 515,
              "src": "4416:151:2",
              "stateMutability": "pure",
              "virtual": false,
              "visibility": "internal"
            },
            {
              "body": {
                "id": 465,
                "nodeType": "Block",
                "src": "5141:71:2",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 457,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "id": 455,
                            "name": "b",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 447,
                            "src": "5160:1:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "<=",
                          "rightExpression": {
                            "id": 456,
                            "name": "a",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 445,
                            "src": "5165:1:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "5160:6:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        {
                          "id": 458,
                          "name": "errorMessage",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 449,
                          "src": "5168:12:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_string_memory_ptr",
                            "typeString": "string memory"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          {
                            "typeIdentifier": "t_string_memory_ptr",
                            "typeString": "string memory"
                          }
                        ],
                        "id": 454,
                        "name": "require",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [
                          4294967278,
                          4294967278
                        ],
                        "referencedDeclaration": 4294967278,
                        "src": "5152:7:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                          "typeString": "function (bool,string memory) pure"
                        }
                      },
                      "id": 459,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "5152:29:2",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 460,
                    "nodeType": "ExpressionStatement",
                    "src": "5152:29:2"
                  },
                  {
                    "expression": {
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 463,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "id": 461,
                        "name": "a",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 445,
                        "src": "5199:1:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "-",
                      "rightExpression": {
                        "id": 462,
                        "name": "b",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 447,
                        "src": "5203:1:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "5199:5:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "functionReturnParameters": 453,
                    "id": 464,
                    "nodeType": "Return",
                    "src": "5192:12:2"
                  }
                ]
              },
              "documentation": {
                "id": 443,
                "nodeType": "StructuredDocumentation",
                "src": "4575:465:2",
                "text": " @dev Returns the subtraction of two unsigned integers, reverting with custom message on\n overflow (when the result is negative).\n CAUTION: This function is deprecated because it requires allocating memory for the error\n message unnecessarily. For custom revert reasons use {trySub}.\n Counterpart to Solidity's `-` operator.\n Requirements:\n - Subtraction cannot overflow."
              },
              "id": 466,
              "implemented": true,
              "kind": "function",
              "modifiers": [],
              "name": "sub",
              "nameLocation": "5055:3:2",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 450,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 445,
                    "mutability": "mutable",
                    "name": "a",
                    "nameLocation": "5067:1:2",
                    "nodeType": "VariableDeclaration",
                    "scope": 466,
                    "src": "5059:9:2",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 444,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "5059:7:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 447,
                    "mutability": "mutable",
                    "name": "b",
                    "nameLocation": "5078:1:2",
                    "nodeType": "VariableDeclaration",
                    "scope": 466,
                    "src": "5070:9:2",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 446,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "5070:7:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 449,
                    "mutability": "mutable",
                    "name": "errorMessage",
                    "nameLocation": "5095:12:2",
                    "nodeType": "VariableDeclaration",
                    "scope": 466,
                    "src": "5081:26:2",
                    "stateVariable": false,
                    "storageLocation": "memory",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string"
                    },
                    "typeName": {
                      "id": 448,
                      "name": "string",
                      "nodeType": "ElementaryTypeName",
                      "src": "5081:6:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage_ptr",
                        "typeString": "string"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "5058:50:2"
              },
              "returnParameters": {
                "id": 453,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 452,
                    "mutability": "mutable",
                    "name": "",
                    "nameLocation": "-1:-1:-1",
                    "nodeType": "VariableDeclaration",
                    "scope": 466,
                    "src": "5132:7:2",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 451,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "5132:7:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "5131:9:2"
              },
              "scope": 515,
              "src": "5046:166:2",
              "stateMutability": "pure",
              "virtual": false,
              "visibility": "internal"
            },
            {
              "body": {
                "id": 489,
                "nodeType": "Block",
                "src": "5981:70:2",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 481,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "id": 479,
                            "name": "b",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 471,
                            "src": "6000:1:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": ">",
                          "rightExpression": {
                            "hexValue": "30",
                            "id": 480,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "6004:1:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_0_by_1",
                              "typeString": "int_const 0"
                            },
                            "value": "0"
                          },
                          "src": "6000:5:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        {
                          "id": 482,
                          "name": "errorMessage",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 473,
                          "src": "6007:12:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_string_memory_ptr",
                            "typeString": "string memory"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          {
                            "typeIdentifier": "t_string_memory_ptr",
                            "typeString": "string memory"
                          }
                        ],
                        "id": 478,
                        "name": "require",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [
                          4294967278,
                          4294967278
                        ],
                        "referencedDeclaration": 4294967278,
                        "src": "5992:7:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                          "typeString": "function (bool,string memory) pure"
                        }
                      },
                      "id": 483,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "5992:28:2",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 484,
                    "nodeType": "ExpressionStatement",
                    "src": "5992:28:2"
                  },
                  {
                    "expression": {
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 487,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "id": 485,
                        "name": "a",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 469,
                        "src": "6038:1:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "/",
                      "rightExpression": {
                        "id": 486,
                        "name": "b",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 471,
                        "src": "6042:1:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "6038:5:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "functionReturnParameters": 477,
                    "id": 488,
                    "nodeType": "Return",
                    "src": "6031:12:2"
                  }
                ]
              },
              "documentation": {
                "id": 467,
                "nodeType": "StructuredDocumentation",
                "src": "5220:660:2",
                "text": " @dev Returns the integer division of two unsigned integers, reverting with custom message on\n division by zero. The result is rounded towards zero.\n CAUTION: This function is deprecated because it requires allocating memory for the error\n message unnecessarily. For custom revert reasons use {tryDiv}.\n Counterpart to Solidity's `/` operator. Note: this function uses a\n `revert` opcode (which leaves remaining gas untouched) while Solidity\n uses an invalid opcode to revert (consuming all remaining gas).\n Requirements:\n - The divisor cannot be zero."
              },
              "id": 490,
              "implemented": true,
              "kind": "function",
              "modifiers": [],
              "name": "div",
              "nameLocation": "5895:3:2",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 474,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 469,
                    "mutability": "mutable",
                    "name": "a",
                    "nameLocation": "5907:1:2",
                    "nodeType": "VariableDeclaration",
                    "scope": 490,
                    "src": "5899:9:2",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 468,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "5899:7:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 471,
                    "mutability": "mutable",
                    "name": "b",
                    "nameLocation": "5918:1:2",
                    "nodeType": "VariableDeclaration",
                    "scope": 490,
                    "src": "5910:9:2",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 470,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "5910:7:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 473,
                    "mutability": "mutable",
                    "name": "errorMessage",
                    "nameLocation": "5935:12:2",
                    "nodeType": "VariableDeclaration",
                    "scope": 490,
                    "src": "5921:26:2",
                    "stateVariable": false,
                    "storageLocation": "memory",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string"
                    },
                    "typeName": {
                      "id": 472,
                      "name": "string",
                      "nodeType": "ElementaryTypeName",
                      "src": "5921:6:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage_ptr",
                        "typeString": "string"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "5898:50:2"
              },
              "returnParameters": {
                "id": 477,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 476,
                    "mutability": "mutable",
                    "name": "",
                    "nameLocation": "-1:-1:-1",
                    "nodeType": "VariableDeclaration",
                    "scope": 490,
                    "src": "5972:7:2",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 475,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "5972:7:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "5971:9:2"
              },
              "scope": 515,
              "src": "5886:165:2",
              "stateMutability": "pure",
              "virtual": false,
              "visibility": "internal"
            },
            {
              "body": {
                "id": 513,
                "nodeType": "Block",
                "src": "6809:70:2",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 505,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "id": 503,
                            "name": "b",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 495,
                            "src": "6828:1:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": ">",
                          "rightExpression": {
                            "hexValue": "30",
                            "id": 504,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "6832:1:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_0_by_1",
                              "typeString": "int_const 0"
                            },
                            "value": "0"
                          },
                          "src": "6828:5:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        {
                          "id": 506,
                          "name": "errorMessage",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 497,
                          "src": "6835:12:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_string_memory_ptr",
                            "typeString": "string memory"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          {
                            "typeIdentifier": "t_string_memory_ptr",
                            "typeString": "string memory"
                          }
                        ],
                        "id": 502,
                        "name": "require",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [
                          4294967278,
                          4294967278
                        ],
                        "referencedDeclaration": 4294967278,
                        "src": "6820:7:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                          "typeString": "function (bool,string memory) pure"
                        }
                      },
                      "id": 507,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "6820:28:2",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 508,
                    "nodeType": "ExpressionStatement",
                    "src": "6820:28:2"
                  },
                  {
                    "expression": {
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 511,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "id": 509,
                        "name": "a",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 493,
                        "src": "6866:1:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "%",
                      "rightExpression": {
                        "id": 510,
                        "name": "b",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 495,
                        "src": "6870:1:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "6866:5:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "functionReturnParameters": 501,
                    "id": 512,
                    "nodeType": "Return",
                    "src": "6859:12:2"
                  }
                ]
              },
              "documentation": {
                "id": 491,
                "nodeType": "StructuredDocumentation",
                "src": "6059:649:2",
                "text": " @dev Returns the remainder of dividing two unsigned integers. (unsigned integer modulo),\n reverting with custom message when dividing by zero.\n CAUTION: This function is deprecated because it requires allocating memory for the error\n message unnecessarily. For custom revert reasons use {tryMod}.\n Counterpart to Solidity's `%` operator. This function uses a `revert`\n opcode (which leaves remaining gas untouched) while Solidity uses an\n invalid opcode to revert (consuming all remaining gas).\n Requirements:\n - The divisor cannot be zero."
              },
              "id": 514,
              "implemented": true,
              "kind": "function",
              "modifiers": [],
              "name": "mod",
              "nameLocation": "6723:3:2",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 498,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 493,
                    "mutability": "mutable",
                    "name": "a",
                    "nameLocation": "6735:1:2",
                    "nodeType": "VariableDeclaration",
                    "scope": 514,
                    "src": "6727:9:2",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 492,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "6727:7:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 495,
                    "mutability": "mutable",
                    "name": "b",
                    "nameLocation": "6746:1:2",
                    "nodeType": "VariableDeclaration",
                    "scope": 514,
                    "src": "6738:9:2",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 494,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "6738:7:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 497,
                    "mutability": "mutable",
                    "name": "errorMessage",
                    "nameLocation": "6763:12:2",
                    "nodeType": "VariableDeclaration",
                    "scope": 514,
                    "src": "6749:26:2",
                    "stateVariable": false,
                    "storageLocation": "memory",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string"
                    },
                    "typeName": {
                      "id": 496,
                      "name": "string",
                      "nodeType": "ElementaryTypeName",
                      "src": "6749:6:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage_ptr",
                        "typeString": "string"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "6726:50:2"
              },
              "returnParameters": {
                "id": 501,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 500,
                    "mutability": "mutable",
                    "name": "",
                    "nameLocation": "-1:-1:-1",
                    "nodeType": "VariableDeclaration",
                    "scope": 514,
                    "src": "6800:7:2",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 499,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "6800:7:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "6799:9:2"
              },
              "scope": 515,
              "src": "6714:165:2",
              "stateMutability": "pure",
              "virtual": false,
              "visibility": "internal"
            }
          ],
          "scope": 808,
          "src": "92:6790:2",
          "usedErrors": []
        },
        {
          "abstract": false,
          "baseContracts": [],
          "contractDependencies": [],
          "contractKind": "contract",
          "fullyImplemented": true,
          "id": 807,
          "linearizedBaseContracts": [
            807
          ],
          "name": "NFTMarket",
          "nameLocation": "6895:9:2",
          "nodeType": "ContractDefinition",
          "nodes": [
            {
              "constant": false,
              "functionSelector": "1115c24d",
              "id": 517,
              "mutability": "mutable",
              "name": "offerCount",
              "nameLocation": "6922:10:2",
              "nodeType": "VariableDeclaration",
              "scope": 807,
              "src": "6910:22:2",
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              },
              "typeName": {
                "id": 516,
                "name": "uint",
                "nodeType": "ElementaryTypeName",
                "src": "6910:4:2",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              },
              "visibility": "public"
            },
            {
              "constant": false,
              "functionSelector": "6051e4dc",
              "id": 519,
              "mutability": "mutable",
              "name": "fillCount",
              "nameLocation": "6949:9:2",
              "nodeType": "VariableDeclaration",
              "scope": 807,
              "src": "6937:21:2",
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              },
              "typeName": {
                "id": 518,
                "name": "uint",
                "nodeType": "ElementaryTypeName",
                "src": "6937:4:2",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              },
              "visibility": "public"
            },
            {
              "constant": false,
              "functionSelector": "8a72ea6a",
              "id": 524,
              "mutability": "mutable",
              "name": "offers",
              "nameLocation": "6995:6:2",
              "nodeType": "VariableDeclaration",
              "scope": 807,
              "src": "6963:38:2",
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$__Offer_$540_storage_$",
                "typeString": "mapping(uint256 => struct NFTMarket._Offer)"
              },
              "typeName": {
                "id": 523,
                "keyType": {
                  "id": 520,
                  "name": "uint",
                  "nodeType": "ElementaryTypeName",
                  "src": "6972:4:2",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "nodeType": "Mapping",
                "src": "6963:24:2",
                "typeDescriptions": {
                  "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$__Offer_$540_storage_$",
                  "typeString": "mapping(uint256 => struct NFTMarket._Offer)"
                },
                "valueType": {
                  "id": 522,
                  "nodeType": "UserDefinedTypeName",
                  "pathNode": {
                    "id": 521,
                    "name": "_Offer",
                    "nodeType": "IdentifierPath",
                    "referencedDeclaration": 540,
                    "src": "6980:6:2"
                  },
                  "referencedDeclaration": 540,
                  "src": "6980:6:2",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$__Offer_$540_storage_ptr",
                    "typeString": "struct NFTMarket._Offer"
                  }
                }
              },
              "visibility": "public"
            },
            {
              "constant": false,
              "id": 527,
              "mutability": "mutable",
              "name": "nftCollection",
              "nameLocation": "7020:13:2",
              "nodeType": "VariableDeclaration",
              "scope": 807,
              "src": "7006:27:2",
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_NFTCollection_$160",
                "typeString": "contract NFTCollection"
              },
              "typeName": {
                "id": 526,
                "nodeType": "UserDefinedTypeName",
                "pathNode": {
                  "id": 525,
                  "name": "NFTCollection",
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 160,
                  "src": "7006:13:2"
                },
                "referencedDeclaration": 160,
                "src": "7006:13:2",
                "typeDescriptions": {
                  "typeIdentifier": "t_contract$_NFTCollection_$160",
                  "typeString": "contract NFTCollection"
                }
              },
              "visibility": "internal"
            },
            {
              "canonicalName": "NFTMarket._Offer",
              "id": 540,
              "members": [
                {
                  "constant": false,
                  "id": 529,
                  "mutability": "mutable",
                  "name": "offerId",
                  "nameLocation": "7068:7:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 540,
                  "src": "7063:12:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 528,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "7063:4:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 531,
                  "mutability": "mutable",
                  "name": "token_id",
                  "nameLocation": "7087:8:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 540,
                  "src": "7082:13:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 530,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "7082:4:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 533,
                  "mutability": "mutable",
                  "name": "user",
                  "nameLocation": "7110:4:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 540,
                  "src": "7102:12:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 532,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "7102:7:2",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 535,
                  "mutability": "mutable",
                  "name": "price",
                  "nameLocation": "7126:5:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 540,
                  "src": "7121:10:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 534,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "7121:4:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 537,
                  "mutability": "mutable",
                  "name": "fulfilled",
                  "nameLocation": "7143:9:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 540,
                  "src": "7138:14:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 536,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "7138:4:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 539,
                  "mutability": "mutable",
                  "name": "cancelled",
                  "nameLocation": "7164:9:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 540,
                  "src": "7159:14:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 538,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "7159:4:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "name": "_Offer",
              "nameLocation": "7049:6:2",
              "nodeType": "StructDefinition",
              "scope": 807,
              "src": "7042:137:2",
              "visibility": "public"
            },
            {
              "anonymous": false,
              "id": 554,
              "name": "Offer",
              "nameLocation": "7191:5:2",
              "nodeType": "EventDefinition",
              "parameters": {
                "id": 553,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 542,
                    "indexed": false,
                    "mutability": "mutable",
                    "name": "offerId",
                    "nameLocation": "7208:7:2",
                    "nodeType": "VariableDeclaration",
                    "scope": 554,
                    "src": "7203:12:2",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 541,
                      "name": "uint",
                      "nodeType": "ElementaryTypeName",
                      "src": "7203:4:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 544,
                    "indexed": false,
                    "mutability": "mutable",
                    "name": "token_id",
                    "nameLocation": "7227:8:2",
                    "nodeType": "VariableDeclaration",
                    "scope": 554,
                    "src": "7222:13:2",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 543,
                      "name": "uint",
                      "nodeType": "ElementaryTypeName",
                      "src": "7222:4:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 546,
                    "indexed": false,
                    "mutability": "mutable",
                    "name": "user",
                    "nameLocation": "7250:4:2",
                    "nodeType": "VariableDeclaration",
                    "scope": 554,
                    "src": "7242:12:2",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 545,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "7242:7:2",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 548,
                    "indexed": false,
                    "mutability": "mutable",
                    "name": "price",
                    "nameLocation": "7266:5:2",
                    "nodeType": "VariableDeclaration",
                    "scope": 554,
                    "src": "7261:10:2",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 547,
                      "name": "uint",
                      "nodeType": "ElementaryTypeName",
                      "src": "7261:4:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 550,
                    "indexed": false,
                    "mutability": "mutable",
                    "name": "fulfilled",
                    "nameLocation": "7283:9:2",
                    "nodeType": "VariableDeclaration",
                    "scope": 554,
                    "src": "7278:14:2",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "typeName": {
                      "id": 549,
                      "name": "bool",
                      "nodeType": "ElementaryTypeName",
                      "src": "7278:4:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 552,
                    "indexed": false,
                    "mutability": "mutable",
                    "name": "cancelled",
                    "nameLocation": "7304:9:2",
                    "nodeType": "VariableDeclaration",
                    "scope": 554,
                    "src": "7299:14:2",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "typeName": {
                      "id": 551,
                      "name": "bool",
                      "nodeType": "ElementaryTypeName",
                      "src": "7299:4:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "7196:122:2"
              },
              "src": "7185:134:2"
            },
            {
              "anonymous": false,
              "id": 562,
              "name": "OfferFilled",
              "nameLocation": "7331:11:2",
              "nodeType": "EventDefinition",
              "parameters": {
                "id": 561,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 556,
                    "indexed": false,
                    "mutability": "mutable",
                    "name": "offerId",
                    "nameLocation": "7348:7:2",
                    "nodeType": "VariableDeclaration",
                    "scope": 562,
                    "src": "7343:12:2",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 555,
                      "name": "uint",
                      "nodeType": "ElementaryTypeName",
                      "src": "7343:4:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 558,
                    "indexed": false,
                    "mutability": "mutable",
                    "name": "id",
                    "nameLocation": "7362:2:2",
                    "nodeType": "VariableDeclaration",
                    "scope": 562,
                    "src": "7357:7:2",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 557,
                      "name": "uint",
                      "nodeType": "ElementaryTypeName",
                      "src": "7357:4:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 560,
                    "indexed": false,
                    "mutability": "mutable",
                    "name": "newOwner",
                    "nameLocation": "7374:8:2",
                    "nodeType": "VariableDeclaration",
                    "scope": 562,
                    "src": "7366:16:2",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 559,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "7366:7:2",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "7342:41:2"
              },
              "src": "7325:59:2"
            },
            {
              "anonymous": false,
              "id": 570,
              "name": "OfferCancelled",
              "nameLocation": "7394:14:2",
              "nodeType": "EventDefinition",
              "parameters": {
                "id": 569,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 564,
                    "indexed": false,
                    "mutability": "mutable",
                    "name": "offerId",
                    "nameLocation": "7414:7:2",
                    "nodeType": "VariableDeclaration",
                    "scope": 570,
                    "src": "7409:12:2",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 563,
                      "name": "uint",
                      "nodeType": "ElementaryTypeName",
                      "src": "7409:4:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 566,
                    "indexed": false,
                    "mutability": "mutable",
                    "name": "id",
                    "nameLocation": "7428:2:2",
                    "nodeType": "VariableDeclaration",
                    "scope": 570,
                    "src": "7423:7:2",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 565,
                      "name": "uint",
                      "nodeType": "ElementaryTypeName",
                      "src": "7423:4:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 568,
                    "indexed": false,
                    "mutability": "mutable",
                    "name": "owner",
                    "nameLocation": "7440:5:2",
                    "nodeType": "VariableDeclaration",
                    "scope": 570,
                    "src": "7432:13:2",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 567,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "7432:7:2",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "7408:38:2"
              },
              "src": "7388:59:2"
            },
            {
              "anonymous": false,
              "id": 576,
              "name": "ClaimFunds",
              "nameLocation": "7457:10:2",
              "nodeType": "EventDefinition",
              "parameters": {
                "id": 575,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 572,
                    "indexed": false,
                    "mutability": "mutable",
                    "name": "user",
                    "nameLocation": "7476:4:2",
                    "nodeType": "VariableDeclaration",
                    "scope": 576,
                    "src": "7468:12:2",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 571,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "7468:7:2",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 574,
                    "indexed": false,
                    "mutability": "mutable",
                    "name": "amount",
                    "nameLocation": "7487:6:2",
                    "nodeType": "VariableDeclaration",
                    "scope": 576,
                    "src": "7482:11:2",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 573,
                      "name": "uint",
                      "nodeType": "ElementaryTypeName",
                      "src": "7482:4:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "7467:27:2"
              },
              "src": "7451:44:2"
            },
            {
              "body": {
                "id": 587,
                "nodeType": "Block",
                "src": "7537:58:2",
                "statements": [
                  {
                    "expression": {
                      "id": 585,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "id": 581,
                        "name": "nftCollection",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 527,
                        "src": "7544:13:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_NFTCollection_$160",
                          "typeString": "contract NFTCollection"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "arguments": [
                          {
                            "id": 583,
                            "name": "_nftCollection",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 578,
                            "src": "7574:14:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          ],
                          "id": 582,
                          "name": "NFTCollection",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 160,
                          "src": "7560:13:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_contract$_NFTCollection_$160_$",
                            "typeString": "type(contract NFTCollection)"
                          }
                        },
                        "id": 584,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "7560:29:2",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_NFTCollection_$160",
                          "typeString": "contract NFTCollection"
                        }
                      },
                      "src": "7544:45:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_NFTCollection_$160",
                        "typeString": "contract NFTCollection"
                      }
                    },
                    "id": 586,
                    "nodeType": "ExpressionStatement",
                    "src": "7544:45:2"
                  }
                ]
              },
              "id": 588,
              "implemented": true,
              "kind": "constructor",
              "modifiers": [],
              "name": "",
              "nameLocation": "-1:-1:-1",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 579,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 578,
                    "mutability": "mutable",
                    "name": "_nftCollection",
                    "nameLocation": "7521:14:2",
                    "nodeType": "VariableDeclaration",
                    "scope": 588,
                    "src": "7513:22:2",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 577,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "7513:7:2",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "7512:24:2"
              },
              "returnParameters": {
                "id": 580,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "7537:0:2"
              },
              "scope": 807,
              "src": "7501:94:2",
              "stateMutability": "nonpayable",
              "virtual": false,
              "visibility": "public"
            },
            {
              "body": {
                "id": 634,
                "nodeType": "Block",
                "src": "7721:244:2",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "expression": {
                            "id": 598,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 4294967281,
                            "src": "7755:3:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 599,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "src": "7755:10:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        {
                          "arguments": [
                            {
                              "id": 602,
                              "name": "this",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 4294967268,
                              "src": "7775:4:2",
                              "typeDescriptions": {
                                "typeIdentifier": "t_contract$_NFTMarket_$807",
                                "typeString": "contract NFTMarket"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_contract$_NFTMarket_$807",
                                "typeString": "contract NFTMarket"
                              }
                            ],
                            "id": 601,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "7767:7:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_address_$",
                              "typeString": "type(address)"
                            },
                            "typeName": {
                              "id": 600,
                              "name": "address",
                              "nodeType": "ElementaryTypeName",
                              "src": "7767:7:2",
                              "typeDescriptions": {}
                            }
                          },
                          "id": 603,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "7767:13:2",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        {
                          "id": 604,
                          "name": "_id",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 590,
                          "src": "7782:3:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          },
                          {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          },
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        ],
                        "expression": {
                          "id": 595,
                          "name": "nftCollection",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 527,
                          "src": "7728:13:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_contract$_NFTCollection_$160",
                            "typeString": "contract NFTCollection"
                          }
                        },
                        "id": 597,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "transferFrom",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 1150,
                        "src": "7728:26:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$",
                          "typeString": "function (address,address,uint256) external"
                        }
                      },
                      "id": 605,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "7728:58:2",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 606,
                    "nodeType": "ExpressionStatement",
                    "src": "7728:58:2"
                  },
                  {
                    "expression": {
                      "id": 608,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "UnaryOperation",
                      "operator": "++",
                      "prefix": false,
                      "src": "7793:13:2",
                      "subExpression": {
                        "id": 607,
                        "name": "offerCount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 517,
                        "src": "7793:10:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 609,
                    "nodeType": "ExpressionStatement",
                    "src": "7793:13:2"
                  },
                  {
                    "expression": {
                      "id": 622,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "baseExpression": {
                          "id": 610,
                          "name": "offers",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 524,
                          "src": "7813:6:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$__Offer_$540_storage_$",
                            "typeString": "mapping(uint256 => struct NFTMarket._Offer storage ref)"
                          }
                        },
                        "id": 612,
                        "indexExpression": {
                          "id": 611,
                          "name": "offerCount",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 517,
                          "src": "7820:10:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": true,
                        "nodeType": "IndexAccess",
                        "src": "7813:18:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$__Offer_$540_storage",
                          "typeString": "struct NFTMarket._Offer storage ref"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "arguments": [
                          {
                            "id": 614,
                            "name": "offerCount",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 517,
                            "src": "7841:10:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          {
                            "id": 615,
                            "name": "_id",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 590,
                            "src": "7853:3:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          {
                            "expression": {
                              "id": 616,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 4294967281,
                              "src": "7858:3:2",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 617,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "sender",
                            "nodeType": "MemberAccess",
                            "src": "7858:10:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          {
                            "id": 618,
                            "name": "_price",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 592,
                            "src": "7870:6:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          {
                            "hexValue": "66616c7365",
                            "id": 619,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "bool",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "7878:5:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            },
                            "value": "false"
                          },
                          {
                            "hexValue": "66616c7365",
                            "id": 620,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "bool",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "7885:5:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            },
                            "value": "false"
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            },
                            {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            },
                            {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          ],
                          "id": 613,
                          "name": "_Offer",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 540,
                          "src": "7834:6:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_struct$__Offer_$540_storage_ptr_$",
                            "typeString": "type(struct NFTMarket._Offer storage pointer)"
                          }
                        },
                        "id": 621,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "structConstructorCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "7834:57:2",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$__Offer_$540_memory_ptr",
                          "typeString": "struct NFTMarket._Offer memory"
                        }
                      },
                      "src": "7813:78:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$__Offer_$540_storage",
                        "typeString": "struct NFTMarket._Offer storage ref"
                      }
                    },
                    "id": 623,
                    "nodeType": "ExpressionStatement",
                    "src": "7813:78:2"
                  },
                  {
                    "eventCall": {
                      "arguments": [
                        {
                          "id": 625,
                          "name": "offerCount",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 517,
                          "src": "7909:10:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "id": 626,
                          "name": "_id",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 590,
                          "src": "7921:3:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "expression": {
                            "id": 627,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 4294967281,
                            "src": "7926:3:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 628,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "src": "7926:10:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        {
                          "id": 629,
                          "name": "_price",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 592,
                          "src": "7938:6:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "hexValue": "66616c7365",
                          "id": 630,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "bool",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "7946:5:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          "value": "false"
                        },
                        {
                          "hexValue": "66616c7365",
                          "id": 631,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "bool",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "7953:5:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          "value": "false"
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          },
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        ],
                        "id": 624,
                        "name": "Offer",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 554,
                        "src": "7903:5:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_event_nonpayable$_t_uint256_$_t_uint256_$_t_address_$_t_uint256_$_t_bool_$_t_bool_$returns$__$",
                          "typeString": "function (uint256,uint256,address,uint256,bool,bool)"
                        }
                      },
                      "id": 632,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "7903:56:2",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 633,
                    "nodeType": "EmitStatement",
                    "src": "7898:61:2"
                  }
                ]
              },
              "functionSelector": "05b7cdd3",
              "id": 635,
              "implemented": true,
              "kind": "function",
              "modifiers": [],
              "name": "makeOffer",
              "nameLocation": "7681:9:2",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 593,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 590,
                    "mutability": "mutable",
                    "name": "_id",
                    "nameLocation": "7696:3:2",
                    "nodeType": "VariableDeclaration",
                    "scope": 635,
                    "src": "7691:8:2",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 589,
                      "name": "uint",
                      "nodeType": "ElementaryTypeName",
                      "src": "7691:4:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 592,
                    "mutability": "mutable",
                    "name": "_price",
                    "nameLocation": "7706:6:2",
                    "nodeType": "VariableDeclaration",
                    "scope": 635,
                    "src": "7701:11:2",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 591,
                      "name": "uint",
                      "nodeType": "ElementaryTypeName",
                      "src": "7701:4:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "7690:23:2"
              },
              "returnParameters": {
                "id": 594,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "7721:0:2"
              },
              "scope": 807,
              "src": "7672:293:2",
              "stateMutability": "nonpayable",
              "virtual": false,
              "visibility": "public"
            },
            {
              "body": {
                "id": 725,
                "nodeType": "Block",
                "src": "8007:676:2",
                "statements": [
                  {
                    "expression": {
                      "id": 639,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "UnaryOperation",
                      "operator": "++",
                      "prefix": false,
                      "src": "8014:12:2",
                      "subExpression": {
                        "id": 638,
                        "name": "fillCount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 519,
                        "src": "8014:9:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 640,
                    "nodeType": "ExpressionStatement",
                    "src": "8014:12:2"
                  },
                  {
                    "assignments": [
                      643
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 643,
                        "mutability": "mutable",
                        "name": "_offer",
                        "nameLocation": "8048:6:2",
                        "nodeType": "VariableDeclaration",
                        "scope": 725,
                        "src": "8033:21:2",
                        "stateVariable": false,
                        "storageLocation": "storage",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$__Offer_$540_storage_ptr",
                          "typeString": "struct NFTMarket._Offer"
                        },
                        "typeName": {
                          "id": 642,
                          "nodeType": "UserDefinedTypeName",
                          "pathNode": {
                            "id": 641,
                            "name": "_Offer",
                            "nodeType": "IdentifierPath",
                            "referencedDeclaration": 540,
                            "src": "8033:6:2"
                          },
                          "referencedDeclaration": 540,
                          "src": "8033:6:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$__Offer_$540_storage_ptr",
                            "typeString": "struct NFTMarket._Offer"
                          }
                        },
                        "visibility": "internal"
                      }
                    ],
                    "id": 647,
                    "initialValue": {
                      "baseExpression": {
                        "id": 644,
                        "name": "offers",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 524,
                        "src": "8057:6:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$__Offer_$540_storage_$",
                          "typeString": "mapping(uint256 => struct NFTMarket._Offer storage ref)"
                        }
                      },
                      "id": 646,
                      "indexExpression": {
                        "id": 645,
                        "name": "fillCount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 519,
                        "src": "8064:9:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "IndexAccess",
                      "src": "8057:17:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$__Offer_$540_storage",
                        "typeString": "struct NFTMarket._Offer storage ref"
                      }
                    },
                    "nodeType": "VariableDeclarationStatement",
                    "src": "8033:41:2"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 652,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "expression": {
                              "id": 649,
                              "name": "_offer",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 643,
                              "src": "8089:6:2",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$__Offer_$540_storage_ptr",
                                "typeString": "struct NFTMarket._Offer storage pointer"
                              }
                            },
                            "id": 650,
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "offerId",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 529,
                            "src": "8089:14:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "==",
                          "rightExpression": {
                            "id": 651,
                            "name": "fillCount",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 519,
                            "src": "8107:9:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "8089:27:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        {
                          "hexValue": "546865206f66666572206d757374206578697374",
                          "id": 653,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "string",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "8118:22:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_stringliteral_ecfd3ca9627f908d395cf30606eaaa71e7ad9f8628919cf7498e36467c553379",
                            "typeString": "literal_string \"The offer must exist\""
                          },
                          "value": "The offer must exist"
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          {
                            "typeIdentifier": "t_stringliteral_ecfd3ca9627f908d395cf30606eaaa71e7ad9f8628919cf7498e36467c553379",
                            "typeString": "literal_string \"The offer must exist\""
                          }
                        ],
                        "id": 648,
                        "name": "require",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [
                          4294967278,
                          4294967278
                        ],
                        "referencedDeclaration": 4294967278,
                        "src": "8081:7:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                          "typeString": "function (bool,string memory) pure"
                        }
                      },
                      "id": 654,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "8081:60:2",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 655,
                    "nodeType": "ExpressionStatement",
                    "src": "8081:60:2"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "commonType": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          },
                          "id": 661,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "expression": {
                              "id": 657,
                              "name": "_offer",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 643,
                              "src": "8156:6:2",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$__Offer_$540_storage_ptr",
                                "typeString": "struct NFTMarket._Offer storage pointer"
                              }
                            },
                            "id": 658,
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "user",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 533,
                            "src": "8156:11:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "!=",
                          "rightExpression": {
                            "expression": {
                              "id": 659,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 4294967281,
                              "src": "8171:3:2",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 660,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "sender",
                            "nodeType": "MemberAccess",
                            "src": "8171:10:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "src": "8156:25:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        {
                          "hexValue": "546865206f776e6572206f6620746865206f666665722063616e6e6f742066696c6c206974",
                          "id": 662,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "string",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "8183:39:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_stringliteral_16b97efa5ec3944fa852fc932397160786ef9749352467e97d8246d2312e592f",
                            "typeString": "literal_string \"The owner of the offer cannot fill it\""
                          },
                          "value": "The owner of the offer cannot fill it"
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          {
                            "typeIdentifier": "t_stringliteral_16b97efa5ec3944fa852fc932397160786ef9749352467e97d8246d2312e592f",
                            "typeString": "literal_string \"The owner of the offer cannot fill it\""
                          }
                        ],
                        "id": 656,
                        "name": "require",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [
                          4294967278,
                          4294967278
                        ],
                        "referencedDeclaration": 4294967278,
                        "src": "8148:7:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                          "typeString": "function (bool,string memory) pure"
                        }
                      },
                      "id": 663,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "8148:75:2",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 664,
                    "nodeType": "ExpressionStatement",
                    "src": "8148:75:2"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "id": 668,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "UnaryOperation",
                          "operator": "!",
                          "prefix": true,
                          "src": "8238:17:2",
                          "subExpression": {
                            "expression": {
                              "id": 666,
                              "name": "_offer",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 643,
                              "src": "8239:6:2",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$__Offer_$540_storage_ptr",
                                "typeString": "struct NFTMarket._Offer storage pointer"
                              }
                            },
                            "id": 667,
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "fulfilled",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 537,
                            "src": "8239:16:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          },
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        {
                          "hexValue": "416e206f666665722063616e6e6f742062652066756c66696c6c6564207477696365",
                          "id": 669,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "string",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "8257:36:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_stringliteral_8f5f9bc7d8e94e4b1f68ebce1509f5ccd65b60868e383ed727015d9809851638",
                            "typeString": "literal_string \"An offer cannot be fulfilled twice\""
                          },
                          "value": "An offer cannot be fulfilled twice"
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          {
                            "typeIdentifier": "t_stringliteral_8f5f9bc7d8e94e4b1f68ebce1509f5ccd65b60868e383ed727015d9809851638",
                            "typeString": "literal_string \"An offer cannot be fulfilled twice\""
                          }
                        ],
                        "id": 665,
                        "name": "require",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [
                          4294967278,
                          4294967278
                        ],
                        "referencedDeclaration": 4294967278,
                        "src": "8230:7:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                          "typeString": "function (bool,string memory) pure"
                        }
                      },
                      "id": 670,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "8230:64:2",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 671,
                    "nodeType": "ExpressionStatement",
                    "src": "8230:64:2"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "id": 675,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "UnaryOperation",
                          "operator": "!",
                          "prefix": true,
                          "src": "8309:17:2",
                          "subExpression": {
                            "expression": {
                              "id": 673,
                              "name": "_offer",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 643,
                              "src": "8310:6:2",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$__Offer_$540_storage_ptr",
                                "typeString": "struct NFTMarket._Offer storage pointer"
                              }
                            },
                            "id": 674,
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "cancelled",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 539,
                            "src": "8310:16:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          },
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        {
                          "hexValue": "412063616e63656c6c6564206f666665722063616e6e6f742062652066756c66696c6c6564",
                          "id": 676,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "string",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "8328:39:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_stringliteral_1bb66d3337aef26bd0c5b237371183c3a5840fa7ad74fb356f513d19eec12261",
                            "typeString": "literal_string \"A cancelled offer cannot be fulfilled\""
                          },
                          "value": "A cancelled offer cannot be fulfilled"
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          {
                            "typeIdentifier": "t_stringliteral_1bb66d3337aef26bd0c5b237371183c3a5840fa7ad74fb356f513d19eec12261",
                            "typeString": "literal_string \"A cancelled offer cannot be fulfilled\""
                          }
                        ],
                        "id": 672,
                        "name": "require",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [
                          4294967278,
                          4294967278
                        ],
                        "referencedDeclaration": 4294967278,
                        "src": "8301:7:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                          "typeString": "function (bool,string memory) pure"
                        }
                      },
                      "id": 677,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "8301:67:2",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 678,
                    "nodeType": "ExpressionStatement",
                    "src": "8301:67:2"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 684,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "expression": {
                              "id": 680,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 4294967281,
                              "src": "8383:3:2",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 681,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "value",
                            "nodeType": "MemberAccess",
                            "src": "8383:9:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "==",
                          "rightExpression": {
                            "expression": {
                              "id": 682,
                              "name": "_offer",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 643,
                              "src": "8396:6:2",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$__Offer_$540_storage_ptr",
                                "typeString": "struct NFTMarket._Offer storage pointer"
                              }
                            },
                            "id": 683,
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "price",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 535,
                            "src": "8396:12:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "8383:25:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        {
                          "hexValue": "546865204b4c415920616d6f756e742073686f756c64206d61746368207769746820746865204e4654205072696365",
                          "id": 685,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "string",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "8410:49:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_stringliteral_f33eb985b999dba3ee453a82d71ec5c3334152629286880cf4eafbc76abe88a8",
                            "typeString": "literal_string \"The KLAY amount should match with the NFT Price\""
                          },
                          "value": "The KLAY amount should match with the NFT Price"
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          {
                            "typeIdentifier": "t_stringliteral_f33eb985b999dba3ee453a82d71ec5c3334152629286880cf4eafbc76abe88a8",
                            "typeString": "literal_string \"The KLAY amount should match with the NFT Price\""
                          }
                        ],
                        "id": 679,
                        "name": "require",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [
                          4294967278,
                          4294967278
                        ],
                        "referencedDeclaration": 4294967278,
                        "src": "8375:7:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                          "typeString": "function (bool,string memory) pure"
                        }
                      },
                      "id": 686,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "8375:85:2",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 687,
                    "nodeType": "ExpressionStatement",
                    "src": "8375:85:2"
                  },
                  {
                    "expression": {
                      "id": 692,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "expression": {
                          "id": 688,
                          "name": "_offer",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 643,
                          "src": "8467:6:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$__Offer_$540_storage_ptr",
                            "typeString": "struct NFTMarket._Offer storage pointer"
                          }
                        },
                        "id": 690,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": true,
                        "memberName": "fulfilled",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 537,
                        "src": "8467:16:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "hexValue": "74727565",
                        "id": 691,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "bool",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "8486:4:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        "value": "true"
                      },
                      "src": "8467:23:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "id": 693,
                    "nodeType": "ExpressionStatement",
                    "src": "8467:23:2"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "id": 699,
                              "name": "this",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 4294967268,
                              "src": "8532:4:2",
                              "typeDescriptions": {
                                "typeIdentifier": "t_contract$_NFTMarket_$807",
                                "typeString": "contract NFTMarket"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_contract$_NFTMarket_$807",
                                "typeString": "contract NFTMarket"
                              }
                            ],
                            "id": 698,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "8524:7:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_address_$",
                              "typeString": "type(address)"
                            },
                            "typeName": {
                              "id": 697,
                              "name": "address",
                              "nodeType": "ElementaryTypeName",
                              "src": "8524:7:2",
                              "typeDescriptions": {}
                            }
                          },
                          "id": 700,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "8524:13:2",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        {
                          "expression": {
                            "id": 701,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 4294967281,
                            "src": "8539:3:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 702,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "src": "8539:10:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        {
                          "expression": {
                            "id": 703,
                            "name": "_offer",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 643,
                            "src": "8551:6:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$__Offer_$540_storage_ptr",
                              "typeString": "struct NFTMarket._Offer storage pointer"
                            }
                          },
                          "id": 704,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "token_id",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 531,
                          "src": "8551:15:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          },
                          {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          },
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        ],
                        "expression": {
                          "id": 694,
                          "name": "nftCollection",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 527,
                          "src": "8497:13:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_contract$_NFTCollection_$160",
                            "typeString": "contract NFTCollection"
                          }
                        },
                        "id": 696,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "transferFrom",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 1150,
                        "src": "8497:26:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$",
                          "typeString": "function (address,address,uint256) external"
                        }
                      },
                      "id": 705,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "8497:70:2",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 706,
                    "nodeType": "ExpressionStatement",
                    "src": "8497:70:2"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "expression": {
                            "id": 713,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 4294967281,
                            "src": "8604:3:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 714,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "value",
                          "nodeType": "MemberAccess",
                          "src": "8604:9:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        ],
                        "expression": {
                          "arguments": [
                            {
                              "expression": {
                                "id": 709,
                                "name": "_offer",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 643,
                                "src": "8582:6:2",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_struct$__Offer_$540_storage_ptr",
                                  "typeString": "struct NFTMarket._Offer storage pointer"
                                }
                              },
                              "id": 710,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "user",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 533,
                              "src": "8582:11:2",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            ],
                            "id": 708,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "8574:8:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_address_payable_$",
                              "typeString": "type(address payable)"
                            },
                            "typeName": {
                              "id": 707,
                              "name": "address",
                              "nodeType": "ElementaryTypeName",
                              "src": "8574:8:2",
                              "stateMutability": "payable",
                              "typeDescriptions": {}
                            }
                          },
                          "id": 711,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "8574:20:2",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_address_payable",
                            "typeString": "address payable"
                          }
                        },
                        "id": 712,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "transfer",
                        "nodeType": "MemberAccess",
                        "src": "8574:29:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_transfer_nonpayable$_t_uint256_$returns$__$",
                          "typeString": "function (uint256)"
                        }
                      },
                      "id": 715,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "8574:40:2",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 716,
                    "nodeType": "ExpressionStatement",
                    "src": "8574:40:2"
                  },
                  {
                    "eventCall": {
                      "arguments": [
                        {
                          "id": 718,
                          "name": "fillCount",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 519,
                          "src": "8638:9:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "expression": {
                            "id": 719,
                            "name": "_offer",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 643,
                            "src": "8649:6:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$__Offer_$540_storage_ptr",
                              "typeString": "struct NFTMarket._Offer storage pointer"
                            }
                          },
                          "id": 720,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "token_id",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 531,
                          "src": "8649:15:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "expression": {
                            "id": 721,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 4294967281,
                            "src": "8666:3:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 722,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "src": "8666:10:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        ],
                        "id": 717,
                        "name": "OfferFilled",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 562,
                        "src": "8626:11:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_event_nonpayable$_t_uint256_$_t_uint256_$_t_address_$returns$__$",
                          "typeString": "function (uint256,uint256,address)"
                        }
                      },
                      "id": 723,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "8626:51:2",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 724,
                    "nodeType": "EmitStatement",
                    "src": "8621:56:2"
                  }
                ]
              },
              "functionSelector": "4abe6a1d",
              "id": 726,
              "implemented": true,
              "kind": "function",
              "modifiers": [],
              "name": "fillOffer",
              "nameLocation": "7980:9:2",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 636,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "7989:2:2"
              },
              "returnParameters": {
                "id": 637,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "8007:0:2"
              },
              "scope": 807,
              "src": "7971:712:2",
              "stateMutability": "payable",
              "virtual": false,
              "visibility": "public"
            },
            {
              "body": {
                "id": 798,
                "nodeType": "Block",
                "src": "8732:540:2",
                "statements": [
                  {
                    "assignments": [
                      733
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 733,
                        "mutability": "mutable",
                        "name": "_offer",
                        "nameLocation": "8754:6:2",
                        "nodeType": "VariableDeclaration",
                        "scope": 798,
                        "src": "8739:21:2",
                        "stateVariable": false,
                        "storageLocation": "storage",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$__Offer_$540_storage_ptr",
                          "typeString": "struct NFTMarket._Offer"
                        },
                        "typeName": {
                          "id": 732,
                          "nodeType": "UserDefinedTypeName",
                          "pathNode": {
                            "id": 731,
                            "name": "_Offer",
                            "nodeType": "IdentifierPath",
                            "referencedDeclaration": 540,
                            "src": "8739:6:2"
                          },
                          "referencedDeclaration": 540,
                          "src": "8739:6:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$__Offer_$540_storage_ptr",
                            "typeString": "struct NFTMarket._Offer"
                          }
                        },
                        "visibility": "internal"
                      }
                    ],
                    "id": 737,
                    "initialValue": {
                      "baseExpression": {
                        "id": 734,
                        "name": "offers",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 524,
                        "src": "8763:6:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$__Offer_$540_storage_$",
                          "typeString": "mapping(uint256 => struct NFTMarket._Offer storage ref)"
                        }
                      },
                      "id": 736,
                      "indexExpression": {
                        "id": 735,
                        "name": "_offerId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 728,
                        "src": "8770:8:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "IndexAccess",
                      "src": "8763:16:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$__Offer_$540_storage",
                        "typeString": "struct NFTMarket._Offer storage ref"
                      }
                    },
                    "nodeType": "VariableDeclarationStatement",
                    "src": "8739:40:2"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 742,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "expression": {
                              "id": 739,
                              "name": "_offer",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 733,
                              "src": "8794:6:2",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$__Offer_$540_storage_ptr",
                                "typeString": "struct NFTMarket._Offer storage pointer"
                              }
                            },
                            "id": 740,
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "offerId",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 529,
                            "src": "8794:14:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "==",
                          "rightExpression": {
                            "id": 741,
                            "name": "_offerId",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 728,
                            "src": "8812:8:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "8794:26:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        {
                          "hexValue": "546865206f66666572206d757374206578697374",
                          "id": 743,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "string",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "8822:22:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_stringliteral_ecfd3ca9627f908d395cf30606eaaa71e7ad9f8628919cf7498e36467c553379",
                            "typeString": "literal_string \"The offer must exist\""
                          },
                          "value": "The offer must exist"
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          {
                            "typeIdentifier": "t_stringliteral_ecfd3ca9627f908d395cf30606eaaa71e7ad9f8628919cf7498e36467c553379",
                            "typeString": "literal_string \"The offer must exist\""
                          }
                        ],
                        "id": 738,
                        "name": "require",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [
                          4294967278,
                          4294967278
                        ],
                        "referencedDeclaration": 4294967278,
                        "src": "8786:7:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                          "typeString": "function (bool,string memory) pure"
                        }
                      },
                      "id": 744,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "8786:59:2",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 745,
                    "nodeType": "ExpressionStatement",
                    "src": "8786:59:2"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "commonType": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          },
                          "id": 751,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "expression": {
                              "id": 747,
                              "name": "_offer",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 733,
                              "src": "8860:6:2",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$__Offer_$540_storage_ptr",
                                "typeString": "struct NFTMarket._Offer storage pointer"
                              }
                            },
                            "id": 748,
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "user",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 533,
                            "src": "8860:11:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "==",
                          "rightExpression": {
                            "expression": {
                              "id": 749,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 4294967281,
                              "src": "8875:3:2",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 750,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "sender",
                            "nodeType": "MemberAccess",
                            "src": "8875:10:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "src": "8860:25:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        {
                          "hexValue": "546865206f666665722063616e206f6e6c792062652063616e63656c656420627920746865206f776e6572",
                          "id": 752,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "string",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "8887:45:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_stringliteral_f9ee9e7c49e557ffe8651318f112ec27248033e18930bbfb9b12687b1fc74103",
                            "typeString": "literal_string \"The offer can only be canceled by the owner\""
                          },
                          "value": "The offer can only be canceled by the owner"
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          {
                            "typeIdentifier": "t_stringliteral_f9ee9e7c49e557ffe8651318f112ec27248033e18930bbfb9b12687b1fc74103",
                            "typeString": "literal_string \"The offer can only be canceled by the owner\""
                          }
                        ],
                        "id": 746,
                        "name": "require",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [
                          4294967278,
                          4294967278
                        ],
                        "referencedDeclaration": 4294967278,
                        "src": "8852:7:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                          "typeString": "function (bool,string memory) pure"
                        }
                      },
                      "id": 753,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "8852:81:2",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 754,
                    "nodeType": "ExpressionStatement",
                    "src": "8852:81:2"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "commonType": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          "id": 759,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "expression": {
                              "id": 756,
                              "name": "_offer",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 733,
                              "src": "8948:6:2",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$__Offer_$540_storage_ptr",
                                "typeString": "struct NFTMarket._Offer storage pointer"
                              }
                            },
                            "id": 757,
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "fulfilled",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 537,
                            "src": "8948:16:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "==",
                          "rightExpression": {
                            "hexValue": "66616c7365",
                            "id": 758,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "bool",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "8968:5:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            },
                            "value": "false"
                          },
                          "src": "8948:25:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        {
                          "hexValue": "412066756c66696c6c6564206f666665722063616e6e6f742062652063616e63656c6c6564",
                          "id": 760,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "string",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "8975:39:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_stringliteral_7f8f6b8a77b6466042d361ff338b4632d922afa369342ae06b5e960c826b374c",
                            "typeString": "literal_string \"A fulfilled offer cannot be cancelled\""
                          },
                          "value": "A fulfilled offer cannot be cancelled"
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          {
                            "typeIdentifier": "t_stringliteral_7f8f6b8a77b6466042d361ff338b4632d922afa369342ae06b5e960c826b374c",
                            "typeString": "literal_string \"A fulfilled offer cannot be cancelled\""
                          }
                        ],
                        "id": 755,
                        "name": "require",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [
                          4294967278,
                          4294967278
                        ],
                        "referencedDeclaration": 4294967278,
                        "src": "8940:7:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                          "typeString": "function (bool,string memory) pure"
                        }
                      },
                      "id": 761,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "8940:75:2",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 762,
                    "nodeType": "ExpressionStatement",
                    "src": "8940:75:2"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "commonType": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          "id": 767,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "expression": {
                              "id": 764,
                              "name": "_offer",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 733,
                              "src": "9030:6:2",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$__Offer_$540_storage_ptr",
                                "typeString": "struct NFTMarket._Offer storage pointer"
                              }
                            },
                            "id": 765,
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "cancelled",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 539,
                            "src": "9030:16:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "==",
                          "rightExpression": {
                            "hexValue": "66616c7365",
                            "id": 766,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "bool",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "9050:5:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            },
                            "value": "false"
                          },
                          "src": "9030:25:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        {
                          "hexValue": "416e206f666665722063616e6e6f742062652063616e63656c6c6564207477696365",
                          "id": 768,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "string",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "9057:36:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_stringliteral_e1c1126e5c7fc0ceccbbc15646a05c877a789fc81bb4a683c5ae2f56969950a4",
                            "typeString": "literal_string \"An offer cannot be cancelled twice\""
                          },
                          "value": "An offer cannot be cancelled twice"
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          {
                            "typeIdentifier": "t_stringliteral_e1c1126e5c7fc0ceccbbc15646a05c877a789fc81bb4a683c5ae2f56969950a4",
                            "typeString": "literal_string \"An offer cannot be cancelled twice\""
                          }
                        ],
                        "id": 763,
                        "name": "require",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [
                          4294967278,
                          4294967278
                        ],
                        "referencedDeclaration": 4294967278,
                        "src": "9022:7:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                          "typeString": "function (bool,string memory) pure"
                        }
                      },
                      "id": 769,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "9022:72:2",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 770,
                    "nodeType": "ExpressionStatement",
                    "src": "9022:72:2"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "id": 776,
                              "name": "this",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 4294967268,
                              "src": "9136:4:2",
                              "typeDescriptions": {
                                "typeIdentifier": "t_contract$_NFTMarket_$807",
                                "typeString": "contract NFTMarket"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_contract$_NFTMarket_$807",
                                "typeString": "contract NFTMarket"
                              }
                            ],
                            "id": 775,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "9128:7:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_address_$",
                              "typeString": "type(address)"
                            },
                            "typeName": {
                              "id": 774,
                              "name": "address",
                              "nodeType": "ElementaryTypeName",
                              "src": "9128:7:2",
                              "typeDescriptions": {}
                            }
                          },
                          "id": 777,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "9128:13:2",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        {
                          "expression": {
                            "id": 778,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 4294967281,
                            "src": "9143:3:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 779,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "src": "9143:10:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        {
                          "expression": {
                            "id": 780,
                            "name": "_offer",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 733,
                            "src": "9155:6:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$__Offer_$540_storage_ptr",
                              "typeString": "struct NFTMarket._Offer storage pointer"
                            }
                          },
                          "id": 781,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "token_id",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 531,
                          "src": "9155:15:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          },
                          {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          },
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        ],
                        "expression": {
                          "id": 771,
                          "name": "nftCollection",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 527,
                          "src": "9101:13:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_contract$_NFTCollection_$160",
                            "typeString": "contract NFTCollection"
                          }
                        },
                        "id": 773,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "transferFrom",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 1150,
                        "src": "9101:26:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$",
                          "typeString": "function (address,address,uint256) external"
                        }
                      },
                      "id": 782,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "9101:70:2",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 783,
                    "nodeType": "ExpressionStatement",
                    "src": "9101:70:2"
                  },
                  {
                    "expression": {
                      "id": 788,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "expression": {
                          "id": 784,
                          "name": "_offer",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 733,
                          "src": "9178:6:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$__Offer_$540_storage_ptr",
                            "typeString": "struct NFTMarket._Offer storage pointer"
                          }
                        },
                        "id": 786,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": true,
                        "memberName": "cancelled",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 539,
                        "src": "9178:16:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "hexValue": "74727565",
                        "id": 787,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "bool",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "9197:4:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        "value": "true"
                      },
                      "src": "9178:23:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "id": 789,
                    "nodeType": "ExpressionStatement",
                    "src": "9178:23:2"
                  },
                  {
                    "eventCall": {
                      "arguments": [
                        {
                          "id": 791,
                          "name": "_offerId",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 728,
                          "src": "9228:8:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "expression": {
                            "id": 792,
                            "name": "_offer",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 733,
                            "src": "9238:6:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$__Offer_$540_storage_ptr",
                              "typeString": "struct NFTMarket._Offer storage pointer"
                            }
                          },
                          "id": 793,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "token_id",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 531,
                          "src": "9238:15:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "expression": {
                            "id": 794,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 4294967281,
                            "src": "9255:3:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 795,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "src": "9255:10:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        ],
                        "id": 790,
                        "name": "OfferCancelled",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 570,
                        "src": "9213:14:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_event_nonpayable$_t_uint256_$_t_uint256_$_t_address_$returns$__$",
                          "typeString": "function (uint256,uint256,address)"
                        }
                      },
                      "id": 796,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "9213:53:2",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 797,
                    "nodeType": "EmitStatement",
                    "src": "9208:58:2"
                  }
                ]
              },
              "functionSelector": "ef706adf",
              "id": 799,
              "implemented": true,
              "kind": "function",
              "modifiers": [],
              "name": "cancelOffer",
              "nameLocation": "8698:11:2",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 729,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 728,
                    "mutability": "mutable",
                    "name": "_offerId",
                    "nameLocation": "8715:8:2",
                    "nodeType": "VariableDeclaration",
                    "scope": 799,
                    "src": "8710:13:2",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 727,
                      "name": "uint",
                      "nodeType": "ElementaryTypeName",
                      "src": "8710:4:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "8709:15:2"
              },
              "returnParameters": {
                "id": 730,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "8732:0:2"
              },
              "scope": 807,
              "src": "8689:583:2",
              "stateMutability": "nonpayable",
              "virtual": false,
              "visibility": "public"
            },
            {
              "body": {
                "id": 805,
                "nodeType": "Block",
                "src": "9374:21:2",
                "statements": [
                  {
                    "expression": {
                      "arguments": [],
                      "expression": {
                        "argumentTypes": [],
                        "id": 802,
                        "name": "revert",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [
                          4294967277,
                          4294967277
                        ],
                        "referencedDeclaration": 4294967277,
                        "src": "9381:6:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_revert_pure$__$returns$__$",
                          "typeString": "function () pure"
                        }
                      },
                      "id": 803,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "9381:8:2",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 804,
                    "nodeType": "ExpressionStatement",
                    "src": "9381:8:2"
                  }
                ]
              },
              "id": 806,
              "implemented": true,
              "kind": "fallback",
              "modifiers": [],
              "name": "",
              "nameLocation": "-1:-1:-1",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 800,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "9362:2:2"
              },
              "returnParameters": {
                "id": 801,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "9374:0:2"
              },
              "scope": 807,
              "src": "9353:42:2",
              "stateMutability": "nonpayable",
              "virtual": false,
              "visibility": "external"
            }
          ],
          "scope": 808,
          "src": "6886:2512:2",
          "usedErrors": []
        }
      ],
      "src": "33:9365:2"
    },
    "compiler": {
      "name": "solc",
      "version": "0.8.4+commit.c7e474f2.Emscripten.clang"
    },
    "networks": {
      "1001": {
        "events": {
          "0x4f0554190111f93f8c2ccef2cc41473f187d7f29ff5a5c308ca41f9dfe4e989a": {
            "anonymous": false,
            "inputs": [
              {
                "indexed": false,
                "internalType": "address",
                "name": "user",
                "type": "address"
              },
              {
                "indexed": false,
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
              }
            ],
            "name": "ClaimFunds",
            "type": "event"
          },
          "0x93e711896d4ef527d199d7e101922e20f918cbb248a0fb0977c52fda24aa1f1d": {
            "anonymous": false,
            "inputs": [
              {
                "indexed": false,
                "internalType": "uint256",
                "name": "offerId",
                "type": "uint256"
              },
              {
                "indexed": false,
                "internalType": "uint256",
                "name": "token_id",
                "type": "uint256"
              },
              {
                "indexed": false,
                "internalType": "address",
                "name": "user",
                "type": "address"
              },
              {
                "indexed": false,
                "internalType": "uint256",
                "name": "price",
                "type": "uint256"
              },
              {
                "indexed": false,
                "internalType": "bool",
                "name": "fulfilled",
                "type": "bool"
              },
              {
                "indexed": false,
                "internalType": "bool",
                "name": "cancelled",
                "type": "bool"
              }
            ],
            "name": "Offer",
            "type": "event"
          },
          "0x5b166b4d0498ff8c4719999cb6154c5d197e6f020f9fbfcf9d347f84576cfab7": {
            "anonymous": false,
            "inputs": [
              {
                "indexed": false,
                "internalType": "uint256",
                "name": "offerId",
                "type": "uint256"
              },
              {
                "indexed": false,
                "internalType": "uint256",
                "name": "id",
                "type": "uint256"
              },
              {
                "indexed": false,
                "internalType": "address",
                "name": "owner",
                "type": "address"
              }
            ],
            "name": "OfferCancelled",
            "type": "event"
          },
          "0xd9157c065213ada613694e84b1e27fe2efd62d85c6b82bd6c842a4999491e72a": {
            "anonymous": false,
            "inputs": [
              {
                "indexed": false,
                "internalType": "uint256",
                "name": "offerId",
                "type": "uint256"
              },
              {
                "indexed": false,
                "internalType": "uint256",
                "name": "id",
                "type": "uint256"
              },
              {
                "indexed": false,
                "internalType": "address",
                "name": "newOwner",
                "type": "address"
              }
            ],
            "name": "OfferFilled",
            "type": "event"
          }
        },
        "links": {},
        "address": "0xa82dEbb67E429b5Fe2FBB37129f81f293C3A5893",
        "transactionHash": "0x7444cd8992b5b10af98644f49e14e0a603642ed6b18caf7638b069ad67066230"
      }
    },
    "schemaVersion": "3.3.3",
    "updatedAt": "2021-12-29T05:17:34.330Z",
    "networkType": "ethereum",
    "devdoc": {
      "kind": "dev",
      "methods": {},
      "version": 1
    },
    "userdoc": {
      "kind": "user",
      "methods": {},
      "version": 1
    }
  }
]