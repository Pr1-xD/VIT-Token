import React from 'react';
import {useLocation} from 'react-router-dom';

function Onboarding(props) {
    const location = useLocation();
    return (
        <div>
            <section>
  <div class="px-4 py-12 mx-auto max-w-7xl sm:px-6 md:px-12 lg:px-24 lg:py-24">
    <div class="flex flex-wrap items-center mx-auto max-w-7xl">
      <div class="w-full lg:max-w-lg lg:w-1/2 rounded-xl">
        <div>
          <div class="relative w-full max-w-lg">
            <div class="absolute top-0 rounded-full bg-violet-300 -left-4 w-72 h-72 mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>

            <div class="absolute rounded-full bg-fuchsia-300 -bottom-24 right-20 w-72 h-72 mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
            <div class="relative">
              <img class="object-cover object-center mx-auto rounded-lg shadow-2xl" alt="hero" src="https://topflightapps.com/wp-content/uploads/2021/10/payment-gateway-for-cryptocurrency-development-concept.jpg"/>
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-col items-start mt-12 mb-16 text-left lg:flex-grow lg:w-1/2 lg:pl-6 xl:pl-24 md:mb-0 xl:mt-0">
        <span class="mb-8 text-xs font-bold tracking-widest text-blue-600 uppercase"> {location.state.regNum} </span>
        <h1 class="mb-8 text-4xl font-bold leading-none tracking-tighter text-neutral-600 md:text-7xl lg:text-5xl">Welcome to VIT Pay</h1>
        <p class="mb-8 text-base leading-relaxed text-left text-gray-500"> Use this private key to use your tokens through Metamask or any other crypto wallet.</p>
        <p class="mb-8 text-base leading-relaxed text-left text-gray-500"> Your Wallet Address: {location.state.address}</p>
        <p class="mb-8 text-base leading-relaxed text-left text-gray-500"> Private Key: {location.state.privateKey}</p>
        <p class="mb-8 text-base leading-relaxed text-left text-gray-500"> Mnemonic Phrase: {location.state.phrase}</p>
        <div class="mt-0 lg:mt-6 max-w-7xl sm:flex">
          <div class="mt-3 rounded-lg sm:mt-0">
            <button class="items-center block px-10 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-blue-600 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"><a href='/home'>Continue</a></button>
          </div>
          <div class="mt-3 rounded-lg sm:mt-0 sm:ml-3">
            <button class="items-center block px-10 py-3.5 text-base font-medium text-center text-blue-600 transition duration-500 ease-in-out transform border-2 border-white shadow-md rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">Learn Metamask</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
        </div>
    );
}

export default Onboarding;