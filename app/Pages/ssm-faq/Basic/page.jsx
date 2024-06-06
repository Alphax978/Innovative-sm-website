"use client"

import IsmHeader from '@/app/Components/Header/Header';
import Footer from "@/app/Components/footer/Footer"
import React, { useState } from 'react';
import {basicFaq} from "../SSMFaq"

const Page = () => {
    const [openAccordion, setOpenAccordion] = useState(null);

    const toggleAccordion = (index) => {
        setOpenAccordion(openAccordion === index ? null : index);
    };

    return (
        <>
            <IsmHeader />
            <div className='px-16 py-8'>
                <section className="py-24">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="mb-16">
                            <h2
                            className="lg:text-[35px] md:text-[35px] text-[50px] font-black  text-center text-gray-700"
                            >
                                Frequently asked questions
                            </h2>
                        </div>
                        <div className="accordion-group" data-accordion="default-accordion">
                            {basicFaq.map((item, index) => (
                                <div
                                    key={index}
                                    className={`accordion border border-solid border-gray-300 p-4 rounded-xl transition duration-500 mb-8 lg:p-4 ${openAccordion === index ? 'accordion-active:bg-7 accordion-active:border-7 text-7    ' : ''}`}
                                >
                                    <button
                                        className={`accordion-toggle group inline-flex items-center justify-between text-left text-lg font-normal leading-8 text-gray-900 w-full transition duration-500 hover:text-7 ${openAccordion === index ? 'accordion-active:font-medium accordion-active:text-7' : ''}`}
                                        aria-controls={`basic-collapse-${index}`}
                                        onClick={() => toggleAccordion(index)}
                                    >
                                        <h3>{item.title}</h3>
                                        <svg
                                            className={`w-6 h-6 text-gray-900 transition duration-500 ${openAccordion === index ? 'hidden' : 'block'} group-hover:text-7 origin-center`}
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M6 12H18M12 18V6"
                                                stroke="currentColor"
                                                strokeWidth="1.6"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            ></path>
                                        </svg>
                                        <svg
                                            className={`w-6 h-6 text-gray-900 transition duration-500 ${openAccordion === index ? 'block' : 'hidden'} group-hover:text-5`}
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M6 12H18"
                                                stroke="currentColor"
                                                strokeWidth="1.6"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            ></path>
                                        </svg>
                                    </button>
                                    <div
                                        id={`basic-collapse-${index}`}
                                        className="accordion-content w-full overflow-hidden pr-4 transition-max-height duration-500 ease-in-out"
                                        aria-labelledby={`basic-heading-${index}`}
                                        style={{ maxHeight: openAccordion === index ? '300px' : '0' }}
                                    >
                                        <p className="text-gray-900  leading-6 pt-6 text-[18px] ">
                                            {item.content}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </div>
            <Footer/>
        </>
    );
}

export default Page;

