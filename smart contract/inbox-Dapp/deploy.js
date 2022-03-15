const HDWalletProvider = require('@truffle/hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode } = require("./compile");

const provider = new HDWalletProvider(
  'deny extend thought blood debris bundle barely point business nut produce conduct',
  'https://rinkeby.infura.io/v3/def9b0ef220042c592f5d1a78c526be1'
)
const web3 = new Web3(provider);

const deploy = async()=>{
  const accounts = await web3.eth.getAccounts();
  console.log('Attempting to deploy from accout', accounts[0]);
  const result = await new web3.eth.Contract(JSON.parse(interface))
  .deploy({ data : bytecode, arguments : ['Hi there!']})
  .send({from : accounts[0], gas : 1000000});
  console.log('Contract deployed to', result.options.address);
  provider.engine.stop();

};
deploy();
