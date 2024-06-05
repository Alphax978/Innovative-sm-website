"use client";

import React from 'react'
import Image from "next/image"
import client1 from "../../Images/client_ps.jpg"
import client2 from "../../Images/client_ta.jpg"
import client3 from "../../Images/client_ss.jpg"

const Portfolio = () => {

    const testimonials = [
        {
            quote:
                '“I am very happy with the work of Innovative Ismartmandu. Social Media Management is quite economic and effective. ”',
            name: 'Bijay Maharjan (Founder)',
            role: 'Prism studio',
            avatar: client1,
        },
        {
            quote:
                '“Thread Arts Nepal created a big buzz in the market in the initial phase only. All thanks to the young and dynamic team of Ismartmandu.”',
            name: 'Rabindra Raut (CEO)',
            role: 'Thread and Arts',
            avatar: client2
        },
        {
            quote:
                '“Working with iSmartmandu made me into good choice. Not only as Digital Partner. The service they provide is immculate and perfect.”',
            name: 'South Western State College',
            role: 'PHD',
            avatar: client3
        },
    ];


    return (
        <div className='px-16 py-8' id='portfolio'>

            <section className="py-12 bg-gray-50 sm:py-16 lg:py-20">
                <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="flex flex-col items-center">
                        <div className="lg:text-[40px] md:text-[40px] text-[50px] font-black  text-center text-gray-700">
                            <h1>
                                Happy Clients
                            </h1>
                        </div>
                        <p className='pt-[30px] lg:text-[25px] xl:text-[25px] 2xl:text-[25px] sm:text-[12px] md:text-[24px] text-center'>
                               What our happy clients have to say about us
                            </p>

                        <div className="mt-8 text-center md:mt-16 md:order-3">
                            <a href="#" title="" className="pb-2 text-base font-bold leading-7 text-gray-900 transition-all duration-200 border-b-2 border-gray-900 hover:border-gray-600 font-pj focus:outline-none focus:ring-1 focus:ring-gray-900 focus:ring-offset-2 hover:text-gray-600">We offer perfection</a>
                        </div>



                        <div className="relative mt-10 md:mt-24 md:order-2">
                            <div className="absolute -inset-x-1 inset-y-16 md:-inset-x-2 md:-inset-y-6">
                                <div
                                    className="w-full h-full max-w-5xl mx-auto rounded-3xl opacity-30 blur-lg filter"
                                    
                                ></div>
                            </div>

                            <div className="relative grid max-w-lg grid-cols-1 gap-6 mx-auto md:max-w-none lg:gap-10 md:grid-cols-3 ">
                                {testimonials.map((testimonial, index) => (
                                    <div key={index} className="flex flex-col overflow-hidden shadow-xl shadow-md p-4 mb-4 bg-white ">
                                        <div className="flex flex-col justify-between flex-1 p-6 bg-white lg:py-8 lg:px-7">
                                            <div className="flex-1">
                                                <div className="flex items-center">
                                                    {Array.from({ length: 5 }).map((_, starIndex) => (
                                                        <svg
                                                            key={starIndex}
                                                            className="w-5 h-5 text-[#FDB241]"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 20 20"
                                                            fill="currentColor"
                                                        >
                                                            <path
                                                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                                            />
                                                        </svg>
                                                    ))}
                                                </div>

                                                <blockquote className="flex-1 mt-8">
                                                    <p className="text-lg leading-relaxed text-gray-900 font-pj ">
                                                        {testimonial.quote}
                                                    </p>
                                                </blockquote>
                                            </div>

                                            <div className="flex items-center mt-8">
                                                <Image
                                                    className="flex-shrink-0 object-cover rounded-full w-24 h-24"
                                                    src={testimonial.avatar}
                                                    alt={testimonial.name}
                                                    width={500}
                                                    height={500}

                                                />
                                                <div className="ml-4">
                                                    <p className="text-base font-bold text-gray-900 font-pj">
                                                        {testimonial.name}
                                                    </p>
                                                    <p className="mt-0.5 text-sm font-pj text-gray-600">
                                                        {testimonial.role}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </div>
    )
}

export default Portfolio
