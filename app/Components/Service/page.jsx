"use client"

import React from 'react'
import Image from "next/image"
import socialmedia from "../../Images/content-management.png"
import webdesign from "../../Images/web-design.png"
import Link from 'next/link'
import { Button } from "flowbite-react";

const Service = () => {
    // hover: bg-5
    return (
        <div className='px-16 py-8'>
            <div id="service" className='w-full h-full pt-[60px]'>

                <div className="dark:bg-gray-900">
                    <section className="mx-auto container py-16 ">
                        <div className="flex justify-center items-center flex-col">
                            <div className="lg:text-[40px] md:text-[40px] text-[50px] font-black  text-center text-gray-700">
                                <h1>Services</h1>
                            </div>
                            <p className='pt-[30px] lg:text-[20px] xl:text-[20px] 2xl:text-[20px] sm:text-[12px] md:text-[24px] text-center'>
                                Ismartmandu provides you range of services starting from website Development.
                            </p>
                            <p className='pt-2 lg:text-[20px] xl:text-[20px] 2xl:text-[20px] sm:text-[6px] md:text-[18px] text-center'>
                                Here are some key services we provide and handle for you.
                            </p>

                            <div className="relative mx-auto max-w-7xl z-10 grid grid-cols-1 gap-10 pt-14 sm:grid-cols-2 lg:grid-cols-2">
                                <div className="rounded-md  p-8 text-center shadow border-b-2">
                                    <div
                                        className="button-text mx-auto flex h-12 w-12 items-center justify-center rounded-md "
                                    
                                    >
                                        <Image src={webdesign} alt='web design' width={50} height={50} />
                                    </div>
                                    <h3 className="mt-6 font-semibold text-[20px] ">Website Development</h3>
                                        <p className="my-4 mb-0 leading-relaxed tracking-wide text-balance ">
                                            Good looking and responsive website is your business digital identity. We curate and design full fledged professional websites
                                            for your business.
                                        </p>
                                        <div className='flex justify-center items-center pt-8 '>
                                            <Link href="/Pages/Webdevelopment">
                                                <Button pill size="md">
                                                        Learn more
                                                </Button>
                                            </Link>
                                        </div>
                                        
                                </div>

                                <div className="rounded-md border border-b-2   p-8 text-center shadow">
                                    <div
                                        className="button-text mx-auto flex h-12 w-12 items-center justify-center rounded-md"
                                     
                                    >
                                        <Image src={socialmedia} alt='social media' width={50} height={50} />
                                    </div>
                                    <h3 className="mt-6 font-semibold text-[20px]">Social Media Management</h3>
                                            <p className="my-4 mb-0 leading-relaxed tracking wide text-balance ">
                                                Promote and connect your business to target audience through social media. We offer full fledged management throughout 
                                                your social media.
                                            </p>
                                            <div className='flex justify-center items-center pt-8 '>
                                                <Link href="/Pages/social-media-management">
                                                    <Button pill size="md">
                                                            Learn more
                                                    </Button>
                                                </Link>
                                        </div>
                                </div>

            
                            </div>





                        </div>
                    </section>
                </div>
            </div>

        </div>


    )
}

export default Service
