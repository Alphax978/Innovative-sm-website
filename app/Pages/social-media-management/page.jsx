"use client"

import IsmHeader from '@/app/Components/Header/Header';
import React, {useState} from 'react'
import Footer from "../../Components/footer/Footer"
import Link from 'next/link';
import SSMModal from '@/app/Components/ssmmodelquota/SSMModal';


const SSM = () => {

  const [openModalBasic, setOpenModalBasic] = useState(false)
  const [openModalStandard, setOpenModalStandard] = useState(false)
  const [openModalPremium, setOpenModalPremium] = useState(false)

  // functions to close the modal, state passed
  const closeModalBasic = ({ closeorder }) => {
    setOpenModalBasic(closeorder)
  }
  const closeModalStandard = ({ closeorder }) => {
    setOpenModalStandard(closeorder)
  }
  const closeModalPremium = ({ closeorder }) => {
    setOpenModalPremium(closeorder)
  }

  const ssmcontent = [
    {
      openModelweb: openModalBasic, // ---> state is assigned
      closeModelweb: closeModalBasic, //---> function is assigned
      packagetype: "Basic" //----. variable is assigned
    },
    {
      openModelweb: openModalStandard,
      closeModelweb: closeModalStandard,
      packagetype: "Standard"
    },
    {
      openModelweb: openModalPremium,
      closeModelweb: closeModalPremium,
      packagetype: "Premium"

    }
  ]

  return (
    <div>
      <IsmHeader />
      <div className='px-16 py-8'>
        <div class="bg-white dark:bg-gray-800 pt-20 " id="pricing">
          <div class="relative mx-auto max-w-7xl px-6 text-center lg:px-8 mb-10">
            <div class="mx-auto max-w-2xl lg:max-w-4xl">
              <h2 class="text-lg font-semibold leading-8 text-teal-600 dark:text-teal-400">Social Media Management</h2>
              <p class="mt-2 text-[30px] font-bold tracking-tight text-gray-900 dark:text-gray-200">Choose Your Package</p>
            </div>
          </div>
          <div class="mx-auto max-w-7xl px-6 lg:px-8 mb-6">
          </div>

          {ssmcontent.map((items, index) => {
            return (
              <div key={index}>
                <SSMModal
                  openModalOrder={items.openModelweb}
                  closeModalOrder={items.closeModelweb}
                  packagetypes={items.packagetype}
                />
              </div>
            );
          })}


          <div class="">
            <div class="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
              <div class="mx-auto grid max-w-md grid-cols-1 gap-8 lg:max-w-7xl lg:grid-cols-3 lg:gap-8">
                <div class="flex flex-col rounded-3xl bg-white dark:bg-gray-900 shadow-xl ring-1 ring-black/10">
                  <div class="p-8 sm:p-10">
                    <div class="flex">
                      <h3 class="text-[30px] font-semibold leading-8 tracking-tight text-teal-600 dark:text-teal-400" id="tier-basic">Basic </h3>
                      <div class="items-center ml-2"></div>
                    </div>
                    {/* <div class="mt-4 flex items-baseline text-5xl tracking-tight text-gray-900 dark:text-gray-200 font-semibold">
                      $0<span class="text-lg font-semibold leading-8 tracking-normal text-gray-500 dark:text-gray-400"></span></div> */}
                    <p class="mt-6 text-base leading-7 text-gray-600 dark:text-gray-300">Great for getting started. Basic SSM management Included.</p>
                  </div>
                  <div class="flex flex-1 flex-col p-2">
                    <div class="flex flex-1 flex-col justify-between rounded-2xl bg-gray-50 dark:bg-gray-700 p-6 sm:p-8">
                      <ul role="list" class="space-y-6">
                        <li class="flex items-start">
                          <div class="flex-shrink-0">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                              stroke="currentColor" aria-hidden="true" class="h-6 w-6 text-teal-600 dark:text-teal-400">
                              <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"></path>
                            </svg>
                          </div>
                          <p class="ml-3 text-sm leading-6 text-gray-600 dark:text-gray-300">1 document</p>
                        </li>
                        <li class="flex items-start">
                          <div class="flex-shrink-0">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                              stroke="currentColor" aria-hidden="true" class="h-6 w-6 text-teal-600 dark:text-teal-400">
                              <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"></path>
                            </svg>
                          </div>
                          <p class="ml-3 text-sm leading-6 text-gray-600 dark:text-gray-300">10 signees / document</p>
                        </li>
                        <li class="flex items-start">
                          <div class="flex-shrink-0">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                              stroke="currentColor" aria-hidden="true" class="h-6 w-6 text-teal-600 dark:text-teal-400">
                              <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"></path>
                            </svg>
                          </div>
                          <p class="ml-3 text-sm leading-6 text-gray-600 dark:text-gray-300">Customize signatory name and role</p>
                        </li>
                        <li class="flex items-start">
                          <div class="flex-shrink-0">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                              stroke="currentColor" aria-hidden="true" class="h-6 w-6 text-teal-600 dark:text-teal-400">
                              <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"></path>
                            </svg>
                          </div>
                          <p class="ml-3 text-sm leading-6 text-gray-600 dark:text-gray-300">No credit card required</p>
                        </li>
                        <li class="flex items-start">
                          <div class="flex-shrink-0">
                            <svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth="1.5" aria-hidden="true" >
                              <path d="M6 12H18M18 12L13 7M18 12L13 17" stroke="#000000"  stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                          </div>
                          <Link href="ssm-faq/Basic">
                            <p class="ml-3 text[17px] leading-6 text-6 dark:text-gray-300 ">Know More</p>
                          </Link>
                            
                        </li>
                      </ul>
                      <div class="mt-8">
                        <button className='w-full' onClick={() => setOpenModalBasic(true)}>
                          <p
                          class="inline-block w-full rounded-lg bg-teal-600 dark:bg-teal-400 px-4 py-2.5 text-center text-sm font-semibold leading-5 text-white shadow-md hover:bg-teal-700 dark:hover:bg-teal-500 cursor-pointer"
                          aria-describedby="tier-basic">Get your quota today</p>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="flex flex-col rounded-3xl bg-white dark:bg-gray-900 shadow-xl ring-1 ring-black/10">
                  <div class="p-8 sm:p-10">
                    <div class="flex">
                      <h3 class="text-[30px] font-semibold leading-8 tracking-tight text-teal-600 dark:text-teal-400" id="tier-plus">Standard
                      </h3>
                      <div class="items-center ml-2">
                        <p class="rounded-full text-white bg-teal-600 dark:bg-teal-400/10 px-2.5 py-1 text-xs font-semibold leading-5 text-teal-600 dark:text-teal-400">45% OFF
                        </p>
                      </div>
                    </div>
                    {/* <div class="mt-4 flex items-baseline text-5xl tracking-tight text-gray-900 dark:text-gray-200 font-semibold">
                      $5<span class="text-lg font-semibold leading-8 tracking-normal text-gray-500 dark:text-gray-400">/month</span></div> */}
                    <p class="mt-6 text-base leading-7 text-gray-600 dark:text-gray-300">Recommended for businesses that want to show their social media presence.
                    </p>
                  </div>
                  <div class="flex flex-1 flex-col p-2">
                    <div class="flex flex-1 flex-col justify-between rounded-2xl bg-gray-50 dark:bg-gray-700 p-6 sm:p-8">
                      <ul role="list" class="space-y-6">
                        <li class="flex items-start">
                          <div class="flex-shrink-0">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                              stroke="currentColor" aria-hidden="true" class="h-6 w-6 text-teal-600 dark:text-teal-400">
                              <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"></path>
                            </svg>
                          </div>
                          <p class="ml-3 text-sm leading-6 text-gray-600 dark:text-gray-300">10 documents</p>
                        </li>
                        <li class="flex items-start">
                          <div class="flex-shrink-0">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                              stroke="currentColor" aria-hidden="true" class="h-6 w-6 text-teal-600 dark:text-teal-400">
                              <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"></path>
                            </svg>
                          </div>
                          <p class="ml-3 text-sm leading-6 text-gray-600 dark:text-gray-300">100 signees / document</p>
                        </li>
                        <li class="flex items-start">
                          <div class="flex-shrink-0">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                              stroke="currentColor" aria-hidden="true" class="h-6 w-6 text-teal-600 dark:text-teal-400">
                              <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"></path>
                            </svg>
                          </div>
                          <p class="ml-3 text-sm leading-6 text-gray-600 dark:text-gray-300">Export your signed documents</p>
                        </li>
                        <li class="flex items-start">
                          <div class="flex-shrink-0">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                              stroke="currentColor" aria-hidden="true" class="h-6 w-6 text-teal-600 dark:text-teal-400">
                              <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"></path>
                            </svg>
                          </div>
                          <p class="ml-3 text-sm leading-6 text-gray-600 dark:text-gray-300">Shared team accounts</p>
                        </li>
                        <li class="flex items-start">
                          <div class="flex-shrink-0">
                            <svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth="1.5" aria-hidden="true" >
                              <path d="M6 12H18M18 12L13 7M18 12L13 17" stroke="#000000"  stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                          </div>
                          <Link href="ssm-faq/Standard">
                            <p class="ml-3 text[17px] leading-6 text-6 dark:text-gray-300 ">Know More</p>
                          </Link>
                            
                        </li>
                      </ul>
                      <div class="mt-8">
                        <button className='w-full' onClick={() => setOpenModalStandard(true)}>
                          <p
                          class="inline-block w-full rounded-lg bg-teal-600 dark:bg-teal-400 px-4 py-2.5 text-center text-sm font-semibold leading-5 text-white shadow-md hover:bg-teal-700 dark:hover:bg-teal-500 cursor-pointer"
                          aria-describedby="tier-plus">Get your quota today</p>
                        </button>
                        </div>
                    </div>
                  </div>
                </div>
                <div class="flex flex-col rounded-3xl bg-white dark:bg-gray-900 shadow-xl ring-1 ring-black/10">
                  <div class="p-8 sm:p-10">
                    <div class="flex">
                      <h3 class="text-[30px] font-semibold leading-8 tracking-tight text-teal-600 dark:text-teal-400" id="tier-custom">Premium</h3>
                      <div class="items-center ml-2"></div>
                    </div>
                    {/* <div class="mt-4 flex items-baseline text-5xl tracking-tight text-gray-900 dark:text-gray-200 font-semibold">Contact
                      us<span class="text-lg font-semibold leading-8 tracking-normal text-gray-500 dark:text-gray-400"></span></div> */}
                    <p class="mt-6 text-base leading-7 text-gray-600 dark:text-gray-300">Best for businesses wanting to grow in social media and gain some traffic.</p>
                  </div>
                  <div class="flex flex-1 flex-col p-2">
                    <div class="flex flex-1 flex-col justify-between rounded-2xl bg-gray-50 dark:bg-gray-700 p-6 sm:p-8">
                      <ul role="list" class="space-y-6">
                        <li class="flex items-start">
                          <div class="flex-shrink-0">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                              stroke="currentColor" aria-hidden="true" class="h-6 w-6 text-teal-600 dark:text-teal-400">
                              <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"></path>
                            </svg>
                          </div>
                          <p class="ml-3 text-sm leading-6 text-gray-600 dark:text-gray-300">Custom usage quotas</p>
                        </li>
                        <li class="flex items-start">
                          <div class="flex-shrink-0">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                              stroke="currentColor" aria-hidden="true" class="h-6 w-6 text-teal-600 dark:text-teal-400">
                              <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"></path>
                            </svg>
                          </div>
                          <p class="ml-3 text-sm leading-6 text-gray-600 dark:text-gray-300">Customized document signing workflows</p>
                        </li>
                        <li class="flex items-start">
                          <div class="flex-shrink-0">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                              stroke="currentColor" aria-hidden="true" class="h-6 w-6 text-teal-600 dark:text-teal-400">
                              <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"></path>
                            </svg>
                          </div>
                          <p class="ml-3 text-sm leading-6 text-gray-600 dark:text-gray-300">Integration with third-party document</p>
                        </li>
                        <li class="flex items-start">
                          <div class="flex-shrink-0">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                              stroke="currentColor" aria-hidden="true" class="h-6 w-6 text-teal-600 dark:text-teal-400">
                              <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"></path>
                            </svg>
                          </div>
                          <p class="ml-3 text-sm leading-6 text-gray-600 dark:text-gray-300">Dedicated account manager</p>
                        </li>
                        <li class="flex items-start">
                          <div class="flex-shrink-0">
                            <svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth="1.5" aria-hidden="true" >
                              <path d="M6 12H18M18 12L13 7M18 12L13 17" stroke="#000000"  stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                          </div>
                          <Link href="ssm-faq/Premium">
                            <p class="ml-3 text[17px] leading-6 text-6 dark:text-gray-300 ">Know More</p>
                          </Link>
                            
                        </li>
                      </ul>
                      <div class="mt-8">
                        <button className="w-full" onClick={() => setOpenModalPremium(true)}>
                          <p
                          class="inline-block w-full rounded-lg bg-teal-600 dark:bg-teal-400 px-4 py-2.5 text-center text-sm font-semibold leading-5 text-white shadow-md hover:bg-teal-700 dark:hover:bg-teal-500 cursor-pointer"
                          aria-describedby="tier-custom">Get your quota today</p>
                        </button>
                        </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
      <Footer />
    </div>
  )
}

export default SSM;
