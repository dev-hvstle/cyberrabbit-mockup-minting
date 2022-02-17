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
        <p>Number of Owned NFTs: </p>
        <p>IDs of Owned NFTs: </p>
        <p>Dutch Sale (Current) Price: </p>
        <p>Whitelist Sale Price: </p>
        <input type='text' placeholder='Number of mint'></input>
        <button>Dutch Sale Mint</button>
        <br></br><br></br>
        <input type='text' placeholder='Number of mint'></input>
        <button>Whitelist Sale Mint</button>
    </>
  )
}

export default Minting