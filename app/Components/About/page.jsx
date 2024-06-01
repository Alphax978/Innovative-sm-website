"use client";

import React from 'react'
// import "./About.css"
import Image from "next/image"
import logos from "../../Images/Ism_logo.png"
import test from "../../Images/test.jpg"
import { Button, Timeline } from "flowbite-react";
import { HiArrowNarrowRight, HiCalendar } from "react-icons/hi";
import realestate from "../../Images/realestate.png"
import krishnapauroti from "../../Images/krishnapauroti.png"
import whitehat from "../../Images/whitehat.png"
import southwestern from "../../Images/southwestern.png"
import sunshine from "../../Images/sunshine.png"
import citizen from "../../Images/citizen.png"

const About = () => {
    return (
        <div className='pr-16 pl-16 pt-8' id='about'>


                <div className='text-center font-black  text-gray-700  pt-24 pb-14 text-[40px]'>
                    <h1>Our Journey</h1>
                </div>

                <Timeline horizontal className='pl-[25px] pr-[25px]'>
                    <Timeline.Item>
                        <Timeline.Point icon={HiCalendar} />
                        <Timeline.Content>
                            <Timeline.Time className='font-arimo text-[17px]'>2018</Timeline.Time>
                            <Timeline.Title>ISM Entered Nepal Tech Market.</Timeline.Title>
                            <Timeline.Body>
                                A Group of likeminded individuals decided to eastablish a company that specialized in provding web solutions.
                            </Timeline.Body>

                        </Timeline.Content>
                    </Timeline.Item>
                    <Timeline.Item>
                        <Timeline.Point icon={HiCalendar} />
                        <Timeline.Content>
                            <Timeline.Time className='font-arimo text-[17px]'>2022</Timeline.Time>
                            <Timeline.Title className='font-arimo'>Full Scale Projects Initiation.</Timeline.Title>
                            <Timeline.Body>
                                 The solutions provided by ISM generated peak satisfaction among the clients. ISM started working in International Projects.
                            </Timeline.Body>
                        
                        </Timeline.Content>
                    </Timeline.Item>
                    <Timeline.Item>
                        <Timeline.Point icon={HiCalendar} />
                        <Timeline.Content >
                            <Timeline.Time className='font-arimo text-[17px]'>2024</Timeline.Time>
                            <Timeline.Title>Tech Industry Domination Phase.</Timeline.Title>
                            <Timeline.Body >
                                Till date, ISM has been providing affordable web solutions with peak satisfaction amongst the clients.
                            </Timeline.Body>
                            
                        </Timeline.Content>
                    </Timeline.Item>
                </Timeline>




                <div className='text-center font-black pt-[40px] text-gray-700 text-[40px]'>
                    <h1>Projects</h1>
                </div>
                
            


                <div class="container my-16 mx-auto md:px-6">
                    <section>
                    

                        <div class="grid gap-7 lg:grid-cols-3">
                            <div
                                class="zoom relative overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20 bg-[50%]"
                                data-te-ripple-init data-te-ripple-color="dark">
                                <Image src={krishnapauroti}
                                    class="w-full h-60 align-middle transition duration-300 ease-linear" alt='krishna pauroti' />
                                <a href="#!">
                                    <div
                                        class="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed ">
                                        <div class="flex h-full items-end justify-start">
                                            <h1 class="m-6 text-[15px] font-bold text-white">
                                                Krishna Pauroti
                                            </h1>
                                        </div>
                                    </div>
                                    <div>
                                        <div
                                            class="mask absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,99.2%,0.15)]">
                                        </div>
                                    </div>
                                </a>
                            </div>

                            <div
                                class="zoom relative overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20 bg-[50%]"
                                data-te-ripple-init data-te-ripple-color="dark">
                                <Image src={whitehat}
                                    class="w-full h-60 align-middle transition duration-300 ease-linear" alt='whitehat' />
                                <a href="#!">
                                    <div
                                        class="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed ">
                                        <div class="flex h-full items-end justify-start">
                                            <h1 class="m-6 text-[15px] font-bold text-white">Whitehat Logistics</h1>
                                        </div>
                                    </div>
                                    <div>
                                        <div
                                            class="mask absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,99.2%,0.15)]">
                                        </div>
                                    </div>
                                </a>
                            </div>

                            <div
                                class="zoom relative overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20 bg-[50%]"
                                data-te-ripple-init data-te-ripple-color="dark">
                                <Image src={realestate}
                                    class="w-full h-60 align-middle transition duration-300 ease-linear" alt='real estate' />
                                <a href="#!">
                                    <div
                                        class="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed ">
                                        <div class="flex h-full items-end justify-start">
                                            <h1 class="m-6 text-[15px] font-bold text-white">Mero Real Esate</h1>
                                        </div>
                                    </div>
                                    <div>
                                        <div
                                            class="mask absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100">
                                        </div>
                                    </div>
                                </a>
                            </div>

                            <div
                                class="zoom relative overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20 bg-[50%]"
                                data-te-ripple-init data-te-ripple-color="dark">
                                <Image src={southwestern}
                                    class="w-full h-60 align-middle transition duration-300 ease-linear" alt='southwestern' />
                                <a href="#!">
                                    <div
                                        class="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed ">
                                        <div class="flex h-full items-end justify-start">
                                            <h1 class="m-4 text-[15px] font-bold text-white">SWS</h1>
                                        </div>
                                    </div>
                                    <div>
                                        <div
                                            class="mask absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 ">
                                        </div>
                                    </div>
                                </a>
                            </div>

                            <div
                                class="zoom relative overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20 bg-[50%]"
                                data-te-ripple-init data-te-ripple-color="dark">
                                <Image src={sunshine}
                                    class="w-full h-60 align-middle transition duration-300 ease-linear" alt='southwestern' />
                                <a href="#!">
                                    <div
                                        class="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed ">
                                        <div class="flex h-full items-end justify-start">
                                            <h1 class="mb-6 ml-10 text-[15px] font-bold text-white">Sunshine College</h1>
                                        </div>
                                    </div>
                                    <div>
                                        <div
                                            class="mask absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 ">
                                        </div>
                                    </div>
                                </a>
                            </div>

                            <div
                                class="zoom relative overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20 bg-[50%]"
                                data-te-ripple-init data-te-ripple-color="dark">
                                <Image src={citizen}
                                    class="w-full h-60 align-middle transition duration-300 ease-linear" alt='southwestern' />
                                <a href="#!">
                                    <div
                                        class="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed ">
                                        <div class="flex h-full items-end justify-start">
                                            <h1 class="m-4 text-[15px] font-bold text-white">citizen  College</h1>
                                        </div>
                                    </div>
                                    <div>
                                        <div
                                            class="mask absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 ">
                                        </div>
                                    </div>
                                </a>
                            </div>


                    
                        </div>
                    </section>
                </div>


            </div>































    )
}

export default About
