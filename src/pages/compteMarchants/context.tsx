/* eslint-disable jsx-a11y/anchor-is-valid */
import { PencilSquareIcon } from '@heroicons/react/20/solid';

import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'



const transaction = {
    NumeroCompte: 'ABPS0L',
    Mois: 'janvier',
    company: 'npny & Co.',
    date: '12-09-2022',
  }




export default function Context() {
  const [open, setOpen] = useState(true)

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 hidden bg-gray-500 bg-opacity-75 transition-opacity md:block" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-stretch justify-center text-center md:items-center md:px-2 lg:px-4">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 md:translate-y-0 md:scale-95"
              enterTo="opacity-100 translate-y-0 md:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 md:scale-100"
              leaveTo="opacity-0 translate-y-4 md:translate-y-0 md:scale-95"
            >
              <Dialog.Panel className="flex w-full transform text-left text-base transition md:my-8 md:max-w-2xl md:px-4 lg:max-w-4xl">
                <div className="relative flex w-full items-center overflow-hidden bg-white px-4 pt-14 pb-8 shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8">
                  <button
                    type="button"
                    className="absolute top-4 right-4 text-gray-400 hover:text-gray-500 sm:top-8 sm:right-6 md:top-6 md:right-6 lg:top-8 lg:right-8"
                    onClick={() => setOpen(false)}
                  >
                    <span className="sr-only">Close</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>

                  <div className="grid w-full grid-cols-1 items-start gap-y-8 gap-x-6 sm:grid-cols-12 lg:gap-x-8">
                 
                    <div className="sm:col-span-8 lg:col-span-7">
                    <h1  className="text-black font-black m-4 text-xl flex justify-center">Details Compte Marchants </h1>
                      <h2 className="text-2xl font-bold text-gray-900 "> <h3  className="text-gray-900 text-lg">Nom de la Company : </h3>{transaction.company}</h2>

                      <section aria-labelledby="information-heading" className="mt-3">
                        <h3 id="information-heading" className="sr-only">
                         
                        </h3>

                        <p className="text-2xl text-gray-900"><h3 id="information-heading" className="text-gray-900 text-lg">Numero De Compte marchants:  </h3> {transaction.NumeroCompte}</p>

                     

                        <div className="mt-6">
                          <h4 className="sr-only">date de creation compte</h4>

                          <p className="text-sm text-gray-700 font-bold"> <h2 className="text-gray-900 text-lg">date de creation compte :</h2> {transaction.date}</p>
                        </div>
                        <div className="mt-6">
                          <h4 className="sr-only">Mois de creation:</h4>

                          <p className="text-sm text-gray-700 font-bold"><h2 className="text-gray-900 text-lg">Mois de creation :</h2> {transaction.Mois}</p>
                        </div>
                      </section>

                      <section aria-labelledby="options-heading" className="mt-6">
                        <h3 id="options-heading" className="sr-only">
                          Product options
                        </h3>
                        <a href="#" className="text-indigo-600 hover:text-indigo-900 flex justify-end" >
                        <PencilSquareIcon className="h-6 w-6" aria-hidden="true" />
                        {  <span>Reactiver</span>? <span>Desactiver</span> : ""}
                        
                        <span className="sr-only">, {transaction.NumeroCompte}</span>
                        </a>
                      </section>
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
