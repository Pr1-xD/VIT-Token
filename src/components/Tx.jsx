import React, { useState } from 'react';

function Tx(props) {

    let tx = props.tx
    let regNum = sessionStorage.getItem("regNum")

    




    return (
        <div>
             <div class="relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-24 max-w-7xl">
    <div class="grid grid-cols-1">
      <div class="w-full max-w-lg mx-auto my-4 bg-white shadow-xl rounded-xl">
        <div class="p-6 lg:text-center">
          
          <h4 class={tx.registeration_number == regNum?"mt-8 text-2xl font-semibold leading-none tracking-tighter text-red-600 lg:text-6xl":"mt-8 text-2xl font-semibold leading-none tracking-tighter text-green-600 lg:text-6xl"}>{tx.registeration_number == regNum?`-${tx.amount}`:tx.amount}</h4>
          <br/><span class="mb-8 text-xs font-semibold tracking-widest text-blue-600 uppercase"> -</span>
          <p class="mt-3 text-base leading-relaxed text-gray-500">{tx.registeration_number == regNum?tx.rec_registeration_number:tx.registeration_number}</p>
          
        </div>
      </div>
    </div>
  </div>
        </div>
    );
}

export default Tx;