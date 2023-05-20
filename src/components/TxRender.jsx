import React, { useEffect, useState } from 'react';
import Tx from './Tx'
import axios from 'axios'

function TxRender() {
const regNum = sessionStorage.getItem("regNum")
const [txData,setTxData] = useState()

useEffect(()=>{
if(!txData){
     try{
            axios.get('http://localhost:4000/api/gettransfers/'+regNum)
            .then(res=>{
                console.log(res.status)
                console.log(res.data)

                setTxData(res.data.txData)
            })
        }
        catch(err){
            console.log(err)
        }
}
},[txData])
console.log('tx')

       
    

function txPasser(item){
        return <div><Tx tx={item}/></div>
        
    }

    return (
        <div>
            {txData? txData.map(txPasser):<></>}
        </div>
    );
}

export default TxRender;