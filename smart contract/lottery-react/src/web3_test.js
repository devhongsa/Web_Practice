import Web3 from "web3";

const web3 = new Web3();

web3.eth.getPastLogs({fromBlock:'0x0',address:'0x9e3319636e2126e3c0bc9e3134AEC5e1508A46c7'})
.then(res => {
  res.forEach(rec => {
    console.log(rec.blockNumber, rec.transactionHash, rec.topics);
  });
}).catch(err => console.log("getPastLogs failed", err));