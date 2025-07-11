import React from "react"
import DevImage from "../../public/images/benefit.png" // Rasm yo‘lini to‘g‘rilang
import { IoChevronForward, IoChevronDown } from "react-icons/io5"
import { benefits } from "../constants"

const FrontendBenefits = () => {
  return (
    <section className="w-full mx-auto px-6 md:px-12 lg:px-28 py-16 flex flex-col md:flex-row items-center gap-12">
      
      <div className="md:w-1/2 flex justify-center">
        <img
          src={DevImage}
          alt="Developer working"
          className="rounded-lg object-cover max-w-full h-auto"
        />
      </div>
      
      <div className="md:w-1/2">
        <h2 className="text-4xl font-bold mb-10 font-Playfair">
          Nima uchun bu platforma foydali?
        </h2>
        
        <ul className="space-y-4 max-w-xl">
            {benefits.map(({ id, icon: Icon, text, description }) => (
                <li
                key={id}
                className="border border-gray-300 rounded-lg p-4 bg-white shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                <details className="group">
                    <summary className="flex items-center justify-between cursor-pointer list-none select-none">
                    <div className="flex items-center gap-3">
                        <Icon className="text-purple-600 md:text-2xl text-xl flex-shrink-0 transition-transform duration-300 group-open:scale-105" />
                        <span className="text-lg font-semibold">{text}</span>
                    </div>
                    <span className="ml-4 text-purple-600">
                        <IoChevronForward className="text-2xl transition-transform duration-300 group-open:rotate-90" />
                    </span>
                    </summary>
                    <p className="mt-3 text-gray-700 pl-[42px]">{description}</p>
                </details>
                </li>
            ))}
            </ul>
      </div>
    </section>
  )
}

export default FrontendBenefits