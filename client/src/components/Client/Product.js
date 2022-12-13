import React from 'react'
import Repas from '../Repas/Repas'

export default function Product() {
  return (
    <div className="overflow-x-auto relative shadow-md sm:rounded-lg w-full h-screen">
        <div className="flex justify-between items-center py-4 bg-white dark:bg-gray-800">
            <div className="ml-2">
                <h1>fffgffff</h1>
            </div>
            <label htmlFor="table-search" className="sr-only">
                Search
            </label>
            <div className="relative mr-4">
                <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none"></div>
                <input
                type="text"
                id="table-search-users"
                className="block p-2 pl-8 w-40 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search For user"
                />
            </div>
        </div>
        <div>
            <Repas />
        </div>
    </div>
  )
}
