"use client";


import React from 'react'
import { Navbar, Button } from "flowbite-react"
import Image from "next/image"
import logo from "../Image/Ism_logo.png"

const IsmHeader = () => {
    return (
        <div>
            <Navbar fluid className=' h-[90px] border-b backdrop-blur-sm border-n-6 '>
                <Navbar.Brand href="#">
                    <Image src={logo} className="mr-1 h-20 w-20 sm:h-10 sm:w-10  lg:h-16 lg:w-16 lg:ml-40 " alt="Flowbite React Logo" />
                    {/* <span className="self-center whitespace-nowrap text-base font-semibold dark:text-white">ISM</span> */}
                </Navbar.Brand>
                <div className="flex md:order-2 mr-[40px]">
                    <Button >Contact Us</Button>
                    <Navbar.Toggle />
                </div>
                <Navbar.Collapse className='py-7'>
                    <Navbar.Link href="#" className='font-code uppercase  mr-5 hover:border-b-2 border-blue-500 transition-colors duration-300' >
                        Home
                    </Navbar.Link>
                    <Navbar.Link href="#" className='font-code uppercase hover:border-b-2 border-blue-500 mr-5 transition-colors duration-300 ' >About</Navbar.Link>
                    <Navbar.Link href="#" className='font-code uppercase hover:border-b-2 border-blue-500 mr-5 transition-colors duration-300' >Services</Navbar.Link>
                    <Navbar.Link href="#" className='font-code uppercase hover:border-b-2 border-blue-500 mr-5 transition-colors duration-300' >Portfolio</Navbar.Link>
                    <Navbar.Link href="#" className='font-code uppercase hover:border-b-2 border-blue-500 mr-5 transition-colors duration-300' >Contact</Navbar.Link>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default IsmHeader
