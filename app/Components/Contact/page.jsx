"use client";

import React, { useState } from 'react'

const Contact = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")

    const handleSubmit = () => {
        e.preventDefault()
        console.log("Name:", name);
        console.log("Email:", email);
        console.log("Message:", message);
        // Clear the form fields after submission
        setName("");
        setEmail("");
        setMessage("");
    }

    return (
        <section id="contact" class="py-32">
            <div class="mx-16 max-w-7xl px-4 sm:px-6 lg:px-8">
                <div class="grid lg:grid-cols-2 grid-cols-1 gap-x-24">
                    <div class="flex items-center lg:mb-0 mb-10">
                        <div class="">
                            <h4 class="text-6 text-[20px]  mb-4 lg:text-left text-center">Contact Us</h4>
                            <h2 class="text-gray-900 font-manrope text-4xl font-semibold leading-10 mb-9 lg:text-left text-center">Reach Out To Us</h2>
                            <form onSubmit={handleSubmit}>
                                <input type="text"
                                    class="w-full h-14 shadow-sm text-gray-600 placeholder-text-400 text-lg font-normal leading-7 rounded-full border border-gray-200 focus:outline-none py-2 px-4 mb-8"
                                    placeholder="Name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                                <input type="email"
                                    class="w-full h-14 shadow-sm text-gray-600 placeholder-text-400 text-lg font-normal leading-7 rounded-full border border-gray-200 focus:outline-none py-2 px-4 mb-8"
                                    placeholder="Email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                <textarea name="" id="text"
                                    class="w-full h-48 shadow-sm resize-none text-gray-600 placeholder-text-400 text-lg font-normal leading-7 rounded-2xl border border-gray-200 focus:outline-none px-4 py-4 mb-8"
                                    placeholder="message"
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                >

                                </textarea>
                                <button class="w-full h-12 text-center text-white text-base font-semibold leading-6 rounded-full bg-6 shadow transition-all duration-700 hover:bg-indigo-800">Submit</button>
                            </form>
                        </div>
                    </div>
                    <div class="lg:max-w-xl w-full h-[600px] flex items-center justify-center ">
                    </div>
                </div>
            </div>

        </section>

    )
}

export default Contact

