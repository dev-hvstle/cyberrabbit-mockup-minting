import React, {useState} from 'react'
import Web3 from 'web3';

const Minting = () => {
    const web3 = new Web3(window.ethereum);

    const [userAddress, setUserAddress] = useState();

    const connectWallet = async() =>{
        if(typeof window.ethereum != 'undefined'){
            const accounts = await window.ethereum.request({method: 'eth_requestAccounts'});
            const tempUserAddress = web3.utils.toChecksumAddress(accounts[0]);
            setUserAddress(tempUserAddress);
        }
    }
  return (
    <>
        <p>User Address: {userAddress}</p>
        <button onClick={connectWallet}>Connect Wallet</button>
    </>
  )
}

export default Minting