import React, { useState } from 'react'
// import icons
import { IoMenuSharp, IoClose } from "react-icons/io5";
// Import Logo
import Logo from '../../public/images/Logo.svg'
// Import constants
import { headerMenu } from '../constants/index.js'

function HeaderPage() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toogleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    return (
        <header className="bg-white shadow-inner py-4 px-4 md:px-10 lg:px-28 font-Inter">
            <div className="w-full flex justify-between items-center gap-6 md:gap-10">

                {/* Logo */}
                <a href="/" className="shrink-0">
                    <img
                        src={Logo}
                        alt="Company Logo"
                        className="w-16 h-16 object-contain"
                    />
                </a>

                {/* desktop nav */}
                <>
                    {/* Navigation */}
                    <nav
                        className="hidden sm:block flex-1"
                        aria-label="Primary navigation"
                    >
                        <ul className="flex flex-wrap justify-center items-center gap-6 md:gap-10">
                            {headerMenu.map(({ id, title, link }) => (
                                <li key={id}>
                                    <a
                                        href={link}
                                        className="text-darkColor text-base font-normal hover:scale-105 transition-transform duration-300"
                                    >
                                        {title}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    {/* Login Button */}
                    <button className='hidden sm:block py-1.5 sm:py-2.5 px-4 sm:px-6 font-Inter font-medium text-sm sm:text-lg rounded-lg bg-darkColor text-white hover:bg-black/80 active:bg-black transition-colors duration-300 cursor-pointer'>
                        Login
                    </button>
                </>
                {/* mibile nav */}
                <>
                    <div className='flex items-center gap-4 sm:hidden'>
                        <button
                            className='block sm:hidden'
                            onClick={toogleMenu}
                        >
                            {
                                !isMenuOpen ? <IoMenuSharp className='text-4xl' />
                                    : <IoClose className='text-4xl' />
                            }
                        </button>
                            ()
                    </div>
                </>
            </div>
        </header >
    )
}

export default HeaderPage
