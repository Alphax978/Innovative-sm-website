"use client"

import React from 'react'
import Image from "next/image"
import { Button } from "flowbite-react";
import swslogo from "../../Images/sws.png"
import whitehat_logo from "../../Images/whitehat_lg.png"

const Hero = () => {
  return (
    <div id="hero" class="bg-white relative pt-40 pb-[20px] lg:pt-44 dark:bg-gray-900 w-full h-full">
      <div class="relative xl:container m-auto px-6 md:px-12 lg:px-16">
        <h1 class="sm:mx-auto sm:w-10/12 md:w-2/3 font-black text-blue-900 text-1 text-center sm:text-5xl md:text-4xl lg:w-auto lg:text-left xl:text-6xl ">Innovative ISmartMandu<br class="lg:block hidden" /><span class="relative  bg-clip-text text-7"> Growing Nepal Digitally. </span></h1>
        <div class="lg:flex">
          <div class="relative mt-8 md:mt-16 space-y-8 sm:w-10/12 md:w-2/3 lg:ml-0 sm:mx-auto text-center lg:text-left lg:mr-auto lg:w-7/12">
            <p class="sm:text-lg text-gray-700 dark:text-gray-300 lg:w-11/12">
              At Innovative Smartmandu we deliver cutting-edge web solutions like custom development, Ecommerce platforms, and data analytics. Empowering businesses with innovative technology.
            </p>
            <span class="block font-semibold text-gray-500 dark:text-gray-400">We Are Trusted By.</span>
            <div class="grid grid-cols-3 space-x-4 md:space-x-6 md:flex md:justify-center lg:justify-start">
              <a aria-label="add to slack" href="#" class="p-4 border border-gray-200 dark:bg-gray-800 dark:border-gray-700 rounded-full duration-300 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-600/20 dark:hover:border-cyan-300/30">
                <div class="flex justify-center space-x-4">
                  <Image class="w-6 h-6" src="" alt="prism studio logo" loading="lazy" width={128} height={128} />
                  <span class="hidden font-medium md:block dark:text-white">Prism Nepal</span>
                </div>
              </a>
              <a aria-label="add to chat" href="#" class="p-4 border border-gray-200 dark:bg-gray-800  dark:border-gray-700 rounded-full duration-300 hover:border-green-400 hover:shadow-lg hover:shadow-lime-600/20 dark:hover:border-green-300/30">
                <div class="flex justify-center space-x-4">
                  <Image class="w-7 h-7" src={whitehat_logo} alt="chat logo" loading="lazy" width={128} height={128} />
                  <span class="hidden font-medium md:block dark:text-white">White Hat Logistics</span>
                </div>
              </a>
              <a aria-label="add to zoom" href="#" class="p-4 border border-gray-200 dark:bg-gray-800  dark:border-gray-700 rounded-full duration-300 hover:border-blue-400 hover:shadow-lg hover:shadow-blue-600/20 dark:hover:border-blue-300/30">
                <div class="flex justify-center space-x-4">
                  <Image class="w-6 h-6" src="" alt="thread art nepal" loading="lazy" width={128} height={128} />
                  <span class="hidden font-medium md:block dark:text-white">Thread Art Nepal</span>
                </div>
              </a>
            </div>
           







          </div>
          <div class="mt-12 md:-mt-48 lg:w-[520px]">
            <div class="relative w-full">
              <div aria-hidden="true" class="absolute scale-75 md:scale-110 inset-0 m-auto w-full h-full md:w-96 md:h-96 rounded-full rotate-45 bg-gradient-to-r from-sky-500 to-cyan-300 blur-3xl"></div>
              <Image src="https://tailus.io/sources/blocks/tech-startup/preview/images/globalization-cuate.svg" class="relative w-full" alt="wath illustration" loading="lazy" width={320} height={280} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
