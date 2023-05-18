import {ethers} from 'ethers';
import Token from '../artifacts/contracts/Token.sol/Token.json';

const TOKEN_ADDRESS = "0x5fbdb2315678afecb367f032d93f642f64180aa3";

const Transactions = () =>{
  async function setBalance(dest,amt) {
    if (amt>0 && typeof window.ethereum !== "undefined") {
        await requestAccount();
        const provider = new ethers.providers.Web3Provider(window.ethereum);
  
        //signer needed for transaction that changes state
        const signer = provider.getSigner();
        console.log(signer)
        const contract = new ethers.Contract(TOKEN_ADDRESS, Token.abi, signer);
  
        //preform transaction
        const transaction = await contract.transfer(dest,amt);
        await transaction.wait();
    }
  }
  
  async function requestAccount() {
    console.log('req')
      await window.ethereum.request({method: 'eth_requestAccounts'});
  }
  return(
    <div className="container bg-white content-around p-100 object-center ">
  <div className="w-100 h-auto p-4">
   
    <h1 className="mt-10 mb-10 w-full h-auto p-4 text-5xl text-center">Payment window</h1>
    <div className="mb-4 px-3 py-1 rounded-sm border border-20 border-voilet-900 focus-within:text-violet-900 focus-within:border-violet-900 " >
        <label
          htmlFor="cc-name"
          className="w-full h-20 text-2xl uppercase font-bold text-center"
        >
          Wallet Address
        </label>
        <input
          id="cc-name"
          type="text"
          name="cc-name"
          className="w-full h-20 focus:outline-none text-2xl text-center"
        />
      </div>
      <div className="border-20 mb-4 px-3 py-1 rounded-sm border border-voilet-900 focus-within:text-violet-900 focus-within:border-violet-900">
        <label
          htmlFor="cc-number"
          className="w-full h-20 text-2xl uppercase font-bold text-center"
        >
          amount
        </label>
        <input
          id="cc-number"
          type="text"
          name="cc-number"
          className="w-full h-20 focus:outline-none text-2xl text-center"
        />
      </div>
      <button className="gradient-bg-welcome h-16 w-full rounded-sm bg-indigo-600 tracking-wide font-semibold text-white hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-600"
      onClick={() => {
        const dest = document.getElementById("cc-name").value;
        const amt = document.getElementById("cc-number").value;
        setBalance(dest,amt);
    }}>
        pay now
      </button>
    
  </div>
</div>

  );
}

export default Transactions;