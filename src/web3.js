import Web3 from 'web3';

window.ethereum.request({ method: "eth_requestAccounts" });

const web3 = new Web3(window.ethereum);

//export out the configuration of web3 that is comign from the injected web3 of metamask
//so that files in the project can refer to this web3.
export default web3;