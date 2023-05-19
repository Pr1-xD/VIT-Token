import './Offers.css';
import React, { useState } from 'react';
import {ethers} from 'ethers';
import Token from '../artifacts/contracts/Token.sol/Token.json';
import axios from "axios";

const TOKEN_ADDRESS = "0x5fbdb2315678afecb367f032d93f642f64180aa3";

const Balance = () =>{

  const checkoutHandler = async (amount) => {

    const { data: { key } } = await axios.get("http://www.localhost:4000/api/getkey")

    const { data: { order } } = await axios.post("http://localhost:4000/api/checkout", {
        amount
    })

    const options = {
        key,
        amount: order.amount,
        currency: "INR",
        name: "6 Pack Programmer",
        description: "Tutorial of RazorPay",
        image: "https://avatars.githubusercontent.com/u/25058652?v=4",
        order_id: order.id,
        callback_url: "http://localhost:4000/api/paymentverification",
        prefill: {
            name: "Gaurav Kumar",
            email: "gaurav.kumar@example.com",
            contact: "9999999999"
        },
        notes: {
            "address": "Razorpay Corporate Office"
        },
        theme: {
            "color": "#121212"
        }
    };
    const razor = new window.Razorpay(options);
    razor.open();
}

  const [balance, updateBalance] = useState(0);

  async function fetchBalance() {
    if (typeof window.ethereum !== "undefined") {
      await requestAccount();
      
      //ethereum is usable get reference to the contract
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const accounts = await provider.send("eth_requestAccounts", []);
      const contract = new ethers.Contract(TOKEN_ADDRESS, Token.abi, provider);
      console.log(accounts)
      //try to get the greeting in the contract
      try {
          let data = await contract.balanceOf(accounts[0]);
          data=parseInt(data)
          console.log(data)
          updateBalance(data)
          // this.setState({balance: data});
          console.log("Data: ", data);
      } catch (e) {
          console.log("Err: ", e)
      }
    }
}
fetchBalance()

async function setBalance(newBalance) {
  if (newBalance>0 && typeof window.ethereum !== "undefined") {
      await requestAccount();
      const provider = new ethers.providers.Web3Provider(window.ethereum);

      //signer needed for transaction that changes state
      const signer = provider.getSigner();
      console.log(signer)
      const contract = new ethers.Contract(TOKEN_ADDRESS, Token.abi, signer);

      //preform transaction
      const transaction = await contract._mint(signer.getAddress(),newBalance);
      await transaction.wait();
      fetchBalance();
  }
}

async function requestAccount() {
  console.log('req')
    await window.ethereum.request({method: 'eth_requestAccounts'});
}


  return (
    <div className="container bg-white">
  <div className="row">
    <div className="mb-3">
      <div className="balance status m-10 w-full h-auto p-4 text-5xl text-center border border-voilet-900">
        <h5 className='mb-10'>Balance</h5>
        <h2>
          Rs <span id="current-balance" className='mb-10'>{balance}</span>
        </h2>
      </div>
      <div className="submit-area border-20 m-10 w-full h-auto p-4 rounded-sm border border-voilet-900 focus-within:text-violet-900 focus-within:border-violet-900">
        <h4 className="w-full h-auto p-4 text-5xl text-center">Deposit Amount</h4>
        <input
          id="deposit-amount"
          type="text"
          className="w-full h-20 focus:outline-none text-2xl text-center form-control"
          placeholder="Enter deposit amount"
        />
        <br />
        <button id="deposit-btn" className="btn btn-success gradient-bg-welcome h-16 w-full rounded-sm bg-indigo-600 tracking-wide font-semibold text-white hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-600" onClick={() => {
                const newBalance = document.getElementById("deposit-amount").value;
                checkoutHandler(newBalance);
            }}>
          Deposit
        </button>
      </div>
    </div>
  </div>
</div>

  );
}

export default Balance;