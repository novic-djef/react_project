
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/no-redundant-roles */


import {
    UserIcon,
  } from '@heroicons/react/24/outline'


  
  const items = [
    {
      title: 'Numero Marchants',
      description: 'Another to-do system you’ll try but eventually give up on.',
      icon: UserIcon,
      background: 'bg-gray-300',
    },
    {
      title: 'Numero Marchants',
      description: 'Stay on top of your deadlines, or don’t — it’s up to you.',
      icon: UserIcon,
      background: 'bg-gray-300',
    },
    {
      title: 'Numero Marchants',
      description: 'Great for mood boards and inspiration.',
      icon: UserIcon,
      background: 'bg-gray-300',
    },
    {
      title: 'Numero Marchants',
      description: 'Track tasks in different stages of your project.',
      icon: UserIcon,
      background: 'bg-gray-300',
    },
    {
      title: 'Numero Marchants',
      description: 'Lots of numbers and things — good for nerds.',
      icon: UserIcon,
      background: 'bg-gray-300',
    },
    {
      title: 'Numero Marchants',
      description: 'Get a birds-eye-view of your procrastination.',
      icon: UserIcon,
      background: 'bg-gray-300',
    },
  ]
  
  function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
  }
  
  export default function Parametres() {
    return (
      <>
      <div className="px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
        <h2 className="text-lg font-medium text-gray-900">parametres</h2>
        <ul role="list" className="mt-6 grid grid-cols-1 gap-6  py-6 sm:grid-cols-1">
          {items.map((item, itemIdx) => (
            <li key={itemIdx} className="flow-root">
              <div className="relative -m-2 flex items-center space-x-4 rounded-2xl p-2 focus-within:ring-2 focus-within:ring-indigo-500 hover:bg-gray-50">
                <div
                  className={classNames(
                    item.background,
                    'flex-shrink-0 flex items-center justify-center h-16 w-16 rounded-3xl'
                  )}
                >
                  <item.icon className="h-8 w-8 border-rounded text-white" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-900">
                    <a href="#" className="focus:outline-none">
                      <span className="absolute inset-0" aria-hidden="true" />
                      <span>{item.title}</span>
                      <span aria-hidden="true"> &rarr;</span>
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{item.description}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
        </div>
        </div>
              </div>
      </>
    )
  }
  