import { Bars3Icon } from "@heroicons/react/24/outline";

export const Dashboard = () => {
  return (
    <div className="flex min-w-0 flex-1 flex-col overflow-hidden">
      <div className="lg:hidden">
        <div className="flex items-center justify-between border-b border-gray-200 bg-gray-50 px-4 py-1.5">
          <div>
            <img
              className="h-8 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt="Your Company"
            />
          </div>
          <div>
            <button
              type="button"
              className="-mr-3 inline-flex h-12 w-12 items-center justify-center rounded-md text-gray-500 hover:text-gray-900"
              onClick={() => null}
            >
              <span className="sr-only">Open sidebar</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
      <div className="relative z-0 flex flex-1 overflow-hidden">
        <main className="relative z-0 flex-1 overflow-y-auto focus:outline-none xl:order-last">
          {/* Start main area*/}
          <div className="absolute inset-0 py-6 px-4 sm:px-6 lg:px-8">
            <div className="h-full rounded-lg border-2 border-dashed border-gray-200" >
          </div>
          </div>
          {/* End main area */}
        </main>
        <aside className="relative hidden w-96 flex-shrink-0 overflow-y-auto border-r border-gray-200 xl:order-first xl:flex xl:flex-col">
          {/* Start secondary column (hidden on smaller screens) */}
          <div className="absolute inset-0 py-6 px-4 sm:px-6 lg:px-8">
            <div className="h-full rounded-lg border-2 border-dashed border-gray-200" >
             
              </div>
          </div>
          {/* End secondary column */}
        </aside>
      </div>
    </div>
  );
};
