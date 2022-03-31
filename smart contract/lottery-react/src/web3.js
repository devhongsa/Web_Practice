import Web3 from "web3";
window.ethereum.request({ method: "eth_requestAccounts" });     //웹에서 메타마스크 연결 

const web3 = new Web3(window.ethereum);                 //연결한 지갑으로 web3 객체 생성.

export default web3;
