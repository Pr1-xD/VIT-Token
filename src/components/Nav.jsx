import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Nav(props) {
    const navigate = useNavigate();

    const address = sessionStorage.getItem("walletAddress")

    const [balance,setBalance] = useState(0)

    if(address)
    {
      try{
        axios.get('http://localhost:4000/api/balance/'+address)
        .then(res=>{
            console.log(res.status)
            console.log(res.data)
            setBalance(res.data.balance)
            
        })
    }
    catch(err){
        console.log(err)
    }  
    }

    function logoutHandler()
    {
        sessionStorage.clear()
        navigate('/login')
    }
    

    return (
        <div>
            <div class=" w-full ">
    <div x-data="{ open: false }" class="flex flex-col max-w-screen-xl p-5 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8">
        <div class="flex flex-row items-center justify-between lg:justify-start">
            <a href="./index.html" class="text-lg font-bold tracking-tighter text-blue-600 transition duration-500 ease-in-out transform tracking-relaxed lg:pr-8"> VIT Pay </a>
            <button class="rounded-lg md:hidden focus:outline-none focus:shadow-outline" >
  
            </button>
        </div>

        <nav  class="flex-col items-center flex-grow hidden pb-4 border-blue-600 md:pb-0 md:flex md:justify-end md:flex-row lg:border-l-2 lg:pl-2">
            <a class="px-4 py-2 mt-2 text-sm text-gray-500 md:mt-0 hover:text-blue-600 focus:outline-none focus:shadow-outline" href="#">Balance</a>
            <a class="px-4 py-2 mt-2 text-sm text-gray-500 md:mt-0 hover:text-blue-600 focus:outline-none focus:shadow-outline" href="#">Contact</a>
            

            <div class="inline-flex items-center gap-2 list-none lg:ml-auto">
                <button class="items-center block px-10 py-2.5 text-base font-medium text-center text-blue-600 transition duration-500 ease-in-out transform border-2 border-white rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">Balance: {balance}</button>
                <button onClick={logoutHandler} class="items-center block px-10 py-3 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-blue-600 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">Logout</button>
            </div>
        </nav>
    </div>
</div>
        </div>
    );
}

export default Nav;