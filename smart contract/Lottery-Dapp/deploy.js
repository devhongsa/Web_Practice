const HDWalletProvider = require('@truffle/hdwallet-provider');
const Web3 = require('web3');
const { abi, evm } = require('./compile');
const util = require('util');

const provider = new HDWalletProvider(
  'deny extend thought blood debris bundle barely point business nut produce conduct',
  // remember to change this to your own phrase!
  'https://rinkeby.infura.io/v3/b1e030dae573453a89be502acb0b8785'
  // remember to change this to your own endpoint!
);

const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log('Attempting to deploy from account', accounts[0]);

  const result = await new web3.eth.Contract(abi)
    .deploy({ data: evm.bytecode.object })
    .send({ gas: '1000000', from: accounts[0] });

  console.log(util.inspect(abi,{depth:5}));
  //console.log(JSON.stringify(abi));
  console.log('Contract deployed to', result.options.address);
  provider.engine.stop();
};
deploy();
