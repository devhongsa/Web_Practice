const Web3 = require("web3");
const web3Provider = new Web3.providers.HttpProvider("HTTP://127.0.0.1:8545");
const web3 = new Web3(web3Provider);

// async await을 써줘야함. 자바스크립트는 비동기 언어이기 때문에 accounts에 모든 지갑주소 값이 들어오기 전에 출력이 되기때문에
// await을 통해서 동기적으로 만들어줘야함. async를 안써주면 accounts 값에 Promise 객체인 pending이 뜨게됨.
const getAccounts = async () => {
  let accounts = await web3.eth.getAccounts();
  console.log(accounts);
};

//getAccounts();

const getBalance = async () => {
  let accounts = await web3.eth.getAccounts();
  let balance = await web3.eth.getBalance(accounts[0]);
  console.log(`account[0]: ${accounts[0]} balance: ${balance}`);
};

//getBalance();

const sendTransaction = async () => {
  let accounts = await web3.eth.getAccounts();

  let balance0 = await web3.eth.getBalance(accounts[0]);
  let balance1 = await web3.eth.getBalance(accounts[1]);

  console.log(`bal0 : ${balance0}`);
  console.log(`bal1 : ${balance1}`);

  await web3.eth.sendTransaction({
    from: accounts[0],
    to: accounts[1],
    value: web3.utils.toWei("1", "ether"),
  });

  balance0 = await web3.eth.getBalance(accounts[0]);
  balance1 = await web3.eth.getBalance(accounts[1]);

  console.log(`bal0 : ${balance0}`);
  console.log(`bal1 : ${balance1}`);
};

sendTransaction();
