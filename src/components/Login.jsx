import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Login() {

    const navigate = useNavigate();
    const [regNum,setRegNum] = useState("")
    const [secPin,setSecPin] = useState("")

    function handleSubmit(e)
    {   
        e.preventDefault()
        console.log(`Submitted + ${regNum} + ${secPin}` )

        try{
            axios.post('http://localhost:4000/api/login',{registeration_number:regNum,security_pin:secPin})
            .then(res=>{
                console.log(res.status)
                console.log(res.data)
                sessionStorage.setItem("regNum",regNum)
                sessionStorage.setItem("walletAddress",res.data.userData.wallet_address)
                navigate('/home')
                //redirect to home page
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
                   Log in
                </h1>
                <form className="mt-6">
                    <div className="mb-2">
                        <label
                            for="text"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Registration Number
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
                    <div className="mt-6">
                        <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600" onClick={(e)=>{handleSubmit(e)}}>
                            Login
                        </button>
                    </div>
                </form>

                <p className="mt-8 text-xs font-light text-center text-gray-700">
                    {" "}
                    Don't have an account?{" "}
                    <a
                        href="http://127.0.0.1:5173/signup"
                        className="font-medium text-purple-600 hover:underline"
                    >
                        Sign up
                    </a>
                </p>
            </div>
        </div>
    );
}
