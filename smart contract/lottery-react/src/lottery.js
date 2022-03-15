import web3 from './web3';

const address = '0xBf2deb794A1F6c2c634e54a22Ca3D303AD5Ab5f9';
const abi = [
  {
    inputs: [],
    stateMutability: 'nonpayable',
    type: 'constructor',
    constant: undefined,
    payable: undefined,
    signature: 'constructor'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'add',
        type: 'address'
      }
    ],
    name: 'getaddress',
    type: 'event',
    constant: undefined,
    payable: undefined,
    signature: '0xf54587489e22da141e93a971eeabe3e6ce2baa03cc1a8d31535d62d8909afca5'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint256',
        name: 'bal',
        type: 'uint256'
      }
    ],
    name: 'getbal',
    type: 'event',
    constant: undefined,
    payable: undefined,
    signature: '0x414c639751ebc1ea506ecc9c3d2170fc32730f9dcc683824d5443b9e26b064a5'
  },
  {
    inputs: [],
    name: 'enter',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
    constant: undefined,
    payable: true,
    signature: '0xe97dcb62'
  },
  {
    inputs: [],
    name: 'getPlayers',
    outputs: [
      {
        internalType: 'address payable[]',
        name: '',
        type: 'address[]'
      }
    ],
    stateMutability: 'view',
    type: 'function',
    constant: true,
    payable: undefined,
    signature: '0x8b5b9ccc'
  },
  {
    inputs: [],
    name: 'manager',
    outputs: [ { internalType: 'address', name: '', type: 'address' } ],
    stateMutability: 'view',
    type: 'function',
    constant: true,
    payable: undefined,
    signature: '0x481c6a75'
  },
  {
    inputs: [],
    name: 'pickWinner',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
    constant: undefined,
    payable: undefined,
    signature: '0x5d495aea'
  },
  {
    inputs: [ { internalType: 'uint256', name: '', type: 'uint256' } ],
    name: 'players',
    outputs: [ { internalType: 'address payable', name: '', type: 'address' } ],
    stateMutability: 'view',
    type: 'function',
    constant: true,
    payable: undefined,
    signature: '0xf71d96cb'
  },
  {
    inputs: [],
    name: 'treasury',
    outputs: [ { internalType: 'uint256', name: '', type: 'uint256' } ],
    stateMutability: 'view',
    type: 'function',
    constant: true,
    payable: undefined,
    signature: '0x61d027b3'
  }
];

export default new web3.eth.Contract(abi, address);
