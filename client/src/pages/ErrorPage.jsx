import React from 'react'
import { Link, useRouteError } from 'react-router-dom'

function ErrorPage() {
    const error = useRouteError()
    const is404 = error?.status === 404

    return (
        <div className='min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4 text-center'>
            <h1 className="text-6xl font-extrabold text-red-600 mb-6">
                {is404 ? '404' : 'Xatolik'}
            </h1>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                {is404 ? 'Sahifa topilmadi' : 'Nomaʼlum xatolik yuz berdi'}
            </h2>

            <p className="text-gray-600 mb-6 max-w-md">
                {is404
                    ? 'Kechirasiz, siz izlagan sahifa mavjud emas yoki ko‘chirilgan.'
                    : "Nimadadir xatolik yuz berdi. Iltimos, keyinroq qayta urinib ko‘ring."
                }
            </p>

            <Link
                to='/'
                className='inline-block px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition duration-300'
            >
                Bosh sahifaga qaytish
            </Link>
        </div>
    )
}

export default ErrorPage
