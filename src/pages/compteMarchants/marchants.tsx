/* eslint-disable jsx-a11y/anchor-is-valid */

import { MagnifyingGlassIcon, PencilSquareIcon } from '@heroicons/react/20/solid';
import {  useState } from 'react';
import { Link } from 'react-router-dom';
// import Search from "components/ui/search/search"


const transactions = [
  {
    NumeroCompte: 'ABPS0L',
    Mois: 'janvier',
    company: 'npny & Co.',
    date: '12-09-2022',
  },
  {
    NumeroCompte: 'BAPS0L',
    Mois: 'janvier',
    company: 'fafa & Co.',
    date: '12-09-2022',
  },
  {
    NumeroCompte: 'AAHS0L',
    Mois: 'janvier',
    company: 'gogpy & Co.',
    date: '12-09-2022',
  },
  {
    NumeroCompte: 'AAIS0L',
    Mois: 'Fevrier',
    company: 'taro & Co.',
    date: '12-09-2022',
  },
  {
    NumeroCompte: 'AAPS7L',
    Mois: 'Fevrier',
    company: 'Chase & Co.',
    date: '12-09-2022',
  },
  {
    NumeroCompte: 'AA8S0L',
    Mois: 'Avril',
    company: 'Chase & Co.',
    date: '12-09-2022',
  },
  {
    NumeroCompte: 'ATPS0L',
    Mois: 'Avril',
    company: 'Chase & Co.',
    date: '12-09-2022',
  },
  {
    NumeroCompte: 'AAPS0K',
    Mois: 'Juin',
    company: 'Chase & Co.',
    date: '12-11-2022',
  },

  {
    NumeroCompte: 'AADS0L',
    Mois: 'juillet',
    company: 'Chase & Co.',
    date: '12-09-2022',
  },
  
  // More transactions...
]



export default function Marchants() {

  //const transactions = useContext(UserContext);

  const [query, setQuery] = useState("")

 
  return (
<>


     <div className="px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-xl font-semibold text-gray-900">Compte Marchants</h1>
          <p className="mt-2 text-sm text-gray-700">
           Compte marchants des differente entreprises
          </p>
        </div>
        
        <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
          >
            Export
          </button>
        </div>
      </div>
      {/* <Search /> */}
       <div className="flex flex-1 justify-center px-4">
              <div className="flex flex-1">
                <form className="flex w-full md:ml-0 p-2" action="#" method="GET">
                  <label htmlFor="search-field" className="sr-only">
                    Search
                  </label>
                  <div className="relative w-full text-gray-400 focus-within:text-gray-600">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center">
                      <MagnifyingGlassIcon className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <input
                      id="search-field"
                      className="block h-full w-full border border-transparent rounded-xl py-2 pl-8 pr-3 bg-gray-200 text-gray-900 placeholder-gray-500 focus:border-transparent focus:placeholder-gray-400 focus:outline-none focus:ring-0 sm:text-sm"
                      placeholder="Search Name  Company..."
                      type="search"
                      name="search"
                      onChange={(e) => setQuery(e.target.value)}
                   
                    />
                  </div>
                </form>

             

              </div>
             </div> 
   
      <div className="mt-8 flex flex-col">
        <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
              <table className="min-w-full divide-y divide-gray-300">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="whitespace-nowrap py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                    >
                      Numero Compte
                    </th>
                    <th
                      scope="col"
                      className="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Nom Entreprise
                    </th>
                    <th
                      scope="col"
                      className="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      date De Creation
                    </th>
                    <th
                      scope="col"
                      className="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Tous Les Mois
                    </th>
              
                    <th 
                    scope="col" className="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-gray-900">
                      Reception Paiement
                    </th>
                  </tr>
      

                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {transactions.filter(transaction=>transaction.company.toLowerCase().includes(query) || transaction.Mois.toLowerCase().includes(query) ).map((transaction) => (
                    <tr key={transaction.NumeroCompte}>
                      <Link to="/Context"> 
                      <td className="whitespace-nowrap py-2 pl-4 pr-3 text-sm text-gray-500 sm:pl-6">
                        {transaction.NumeroCompte}
                      </td>
                      </Link>
                      <td className="whitespace-nowrap px-2 py-2 text-sm font-medium text-gray-900">
                        {transaction.company}
                      </td>
                      <td className="whitespace-nowrap px-2 py-2 text-sm text-gray-900">{transaction.date}</td>
                      <td className="whitespace-nowrap px-2 py-2 text-sm text-gray-900">{transaction.Mois}</td>
                      
                      <td className="relative whitespace-nowrap py-2 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                        <a href="#" className="text-indigo-600 hover:text-indigo-900 flex" >
                        <PencilSquareIcon className="h-5 w-5" aria-hidden="true" />
                        {  <span>Reactiver</span>? <span>Desactiver</span> : ""}
                        
                        <span className="sr-only">, {transaction.NumeroCompte}</span>
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>  

    </>
  )
}
