import React from 'react';
import TxRender from './TxRender';
import Nav from './Nav';

function Home(props) {
    return (
        <div>
            <Nav/>
            <section class="text-gray-600 body-font">
  <div class="container h-1/2 bg-white px-5 py-24 mx-auto flex flex-wrap">
    <div class="flex flex-wrap -mx-4 mt-auto mb-auto lg:w-1/2 sm:w-2/3 content-start sm:pr-10">
      <div class="w-full sm:p-4 px-4 mb-6">
        <h1 class="title-font font-medium text-xl mb-2 text-gray-900">Welcome to VIT Pay</h1>
        <div class="leading-relaxed">This portal can be used to make payments simplified. Transfer, add balance and view transactions with just a click.</div>
      </div>
      <div class="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
        <h2 class="title-font font-medium text-3xl text-gray-900">2.7K</h2>
        <p class="leading-relaxed">Users</p>
      </div>
      <div class="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
        <h2 class="title-font font-medium text-3xl text-gray-900">71.8K</h2>
        <p class="leading-relaxed">Supply</p>
      </div>
      <div class="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
        <h2 class="title-font font-medium text-3xl text-gray-900">35</h2>
        <p class="leading-relaxed">Nodes</p>
      </div>
      <div class="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
        <h2 class="title-font font-medium text-3xl text-gray-900">54</h2>
        <p class="leading-relaxed">Merchants</p>
      </div>
    </div>
    <div class="lg:w-1/2 sm:w-1/3 w-full rounded-lg overflow-hidden mt-6 sm:mt-0">
      <img class="object-cover object-center w-full h-full" src="https://img.collegedekhocdn.com/media/img/institute/logo/VIT_Chennai_logo.png" alt="stats"/>
    </div>
  </div>
  <div class="items-center relative mx-auto flex">
     <h1 class="items-center max-w-5xl mx-auto flex font-bold leading-none tracking-tighter text-neutral-600 md:text-5xl lg:text-3xl lg:max-w-7xl">
            Transaction History
          </h1>
  </div>
 
    <TxRender/>
</section>


        </div>
    );
}

export default Home;