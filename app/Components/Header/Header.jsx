"use client";


import React from 'react'
import { Navbar, Button } from "flowbite-react"
import Image from "next/image"
import logo from "../../Images/Ism_logo.png"
import Link from 'next/link';

const IsmHeader = () => {
    return (
        <div>   
            <header >
                {/* <input type="checkbox" name="hbr" id="hbr" class="hbr peer" hidden aria-hidden="true" /> */}
                    <nav class="fixed z-20 w-full bg-white/90 dark:bg-gray-900/80 backdrop-blur navbar shadow-2xl shadow-gray-600/5 border-b border-gray-100 dark:border-gray-800 peer-checked:navbar-active dark:shadow-none">
                        <div class="xl:container m-auto px-6 md:px-12 lg:px-6">
                            <div class="flex flex-wrap items-center justify-between gap-6 md:py-3 md:gap-0 lg:py-5">
                                <div class="w-full items-center flex justify-between lg:w-auto">
                                    <Link class="relative z-10" href="/" aria-label="logo">
                                        <Image src={logo} className="xl:ml-16 2xl:ml-16 lg:ml-16 mr-1 h-14  w-14 sm:h-5 sm:w-5 lg:h-14 lg:w-14  " alt="Flowbite React Logo" />
                                    </Link>
                                    <label for="hbr" class="peer-checked:hamburger block relative z-20 p-6 -mr-6 cursor-pointer lg:hidden">
                                        <div aria-hidden="true" class="m-auto h-0.5 w-5 rounded bg-gray-900 dark:bg-gray-300 transition duration-300"></div>
                                        <div aria-hidden="true" class="m-auto mt-2 h-0.5 w-5 rounded bg-gray-900 dark:bg-gray-300 transition duration-300"></div>
                                    </label>
                                </div>
                                <div class="xl:mr-16 navmenu hidden w-full flex-wrap justify-end items-center mb-16 space-y-8 p-6 border border-gray-100 rounded-3xl shadow-2xl shadow-gray-300/20 bg-white dark:bg-gray-800 lg:space-y-0 lg:p-0 lg:m-0 lg:flex md:flex-nowrap lg:bg-transparent lg:w-7/12 lg:shadow-none dark:shadow-none dark:border-gray-700 lg:border-0">
                                    <div class="text-gray-600 dark:text-gray-300 lg:pr-4">
                                        <ul class="space-y-6 tracking-wide font-medium text-base lg:text-sm lg:flex lg:space-y-0">
                                            <li>
                                                <Link href="/" class="block md:px-4 text-2 font-semibold ">
                                                        <span>Home</span>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#about" class="block md:px-4 text-2 font-semibold">
                                                        <span>About</span>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#portfolio" class="block md:px-4 text-2 font-semibold">
                                                        <span>Portfolio</span> 
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#service" class="block md:px-4 text-2 font-semibold">
                                                        <span>Services</span> 
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>

                                    <div class="w-full space-y-2 border-primary/10 dark:border-gray-700 flex flex-col -ml-1 sm:flex-row lg:space-y-0 md:w-max lg:border-l">
                                        <a href="#" class="relative flex h-9 ml-auto items-center justify-center sm:px-6 ">
                                            <span class="relative text-sm font-semibold text-primary text-2">Career</span>
                                        </a>
                                        <Link href="#contact" class="relative flex h-9 ml-auto items-center justify-center sm:px-6 before:absolute before:inset-0 before:rounded-full before:bg-2 dark:before:bg-1 before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95">
                                            <span class="relative text-sm font-semibold text-white dark:text-gray-900">Contact</span>
                                        </Link>
                                    </div>
                                </div>  
                            </div>
                        </div>
                    </nav>
            </header>
        </div>


    )
}

export default IsmHeader
        // <div>
        //     <Navbar fluid className=' h-[90px] border-b backdrop-blur-sm border-n-6 '>
        //         <Navbar.Brand href="#">
        //             <Image src={logo} className="mr-1 h-20 w-20 sm:h-10 sm:w-10  lg:h-16 lg:w-16 lg:ml-40 " alt="Flowbite React Logo" />
        //             {/* <span className="self-center whitespace-nowrap text-base font-semibold dark:text-white">ISM</span> */}
        //         </Navbar.Brand>     
        //         <div className="flex md:order-2 mr-[150px]">
        //             <Button >Contact Us</Button>
        //             <Navbar.Toggle />
        //         </div>
        //         <Navbar.Collapse className='py-7'>
        //             <Navbar.Link href="#" className='font-code uppercase  mr-5 hover:border-b-2 border-blue-500 transition-colors duration-300' >
        //                 Home
        //             </Navbar.Link>
        //             <Navbar.Link href="#" className='font-code uppercase text-extrabold hover:border-b-2 border-blue-500 mr-5 transition-colors duration-300 ' >About</Navbar.Link>
        //             <Navbar.Link href="#" className='font-code uppercase text-extrabold hover:border-b-2 border-blue-500 mr-5 transition-colors duration-300' >Services</Navbar.Link>
        //             <Navbar.Link href="#" className='font-code uppercase text-extrabold hover:border-b-2 border-blue-500 mr-5 transition-colors duration-300' >Portfolio</Navbar.Link>
        //             <Navbar.Link href="#" className='font-code uppercase text-extrabold hover:border-b-2 border-blue-500 mr-5 transition-colors duration-300' >Contact</Navbar.Link>
        //         </Navbar.Collapse>
        //     </Navbar>
        // </div>
