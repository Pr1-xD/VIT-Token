import React, { useState } from 'react';
import axios from 'axios';
import {ethers} from 'ethers';
import { useNavigate } from 'react-router-dom';

export default function Signup() {

    const navigate = useNavigate();

    const [regNum,setRegNum] = useState("")
    const [secPin,setSecPin] = useState("")

    function handleSubmit(e)
    {   
        e.preventDefault()
        console.log(`Submitted + ${regNum} + ${secPin}` )

        const wallet = ethers.Wallet.createRandom()
        console.log('address:', wallet.address)
        console.log('mnemonic:', wallet.mnemonic.phrase)
        console.log('privateKey:', wallet.privateKey)

        try{
            axios.post('http://localhost:4000/api/signup',{registeration_number:regNum,security_pin:secPin,wallet_address: wallet.address, private_key:wallet.privateKey})
            .then(res=>{
                console.log(res.status)
                console.log(res.data)
                navigate('/onboarding',{state:{address: wallet.address, phrase:wallet.mnemonic.phrase, privateKey:wallet.privateKey}})
                
            })
        }
        catch(err){
            console.log(err)
        }
    }

    return (
        <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
            <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
                <h1 className="text-3xl font-semibold text-center text-purple-700 underline">
                   Sign up
                </h1>
                <form className="mt-6">
                    <div className="mb-2">
                        <label
                            for="text"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Registeration Number
                        </label>
                        <input
                            type="text"
                            value={regNum}
                            onChange={(e)=>{setRegNum(e.target.value)}}
                            className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    <div className="mb-2">
                        <label
                            for="password"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Password
                        </label>
                        <input
                            type="password"
                            value={secPin}
                            onChange={(e)=>{setSecPin(e.target.value)}}
                            className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    <a
                        href="#"
                        className="text-xs text-purple-600 hover:underline"
                    >
                        Forget Password?
                    </a>
                    <div className="mt-6">
                        <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600" onClick={(e)=>{handleSubmit(e)}}>
                            Sign Up
                        </button>
                    </div>
                </form>

                <p className="mt-8 text-xs font-light text-center text-gray-700">
                    {" "}
                    Already have an account?{" "}
                    <a
                        href="http://127.0.0.1:5173/"
                        className="font-medium text-purple-600 hover:underline"
                    >
                        Log In
                    </a>
                </p>
            </div>
        </div>
    );
}
