import React, { useState } from 'react'
import { IoMenuSharp, IoClose } from "react-icons/io5"
import Logo from '../../public/images/Logo.svg'
import { headerMenu } from '../constants/index.js'
import Buttton from '../components/Buttton.jsx'
import { useDispatch } from 'react-redux'
import { onOpenLogin } from '../reducers/modalReducer.js'

function HeaderPage() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const dispatch = useDispatch()
    const toggleMenu = () => setIsMenuOpen(prev => !prev)

    const MenuItem = ({ title, link, onClick }) => (
        <li>
            <a
                href={link}
                onClick={onClick}
                className="text-darkColor text-base font-normal hover:scale-105 transition-transform duration-300 block"
            >
                {title}
            </a>
        </li>
    )

    return (
        <header className="bg-white shadow-inner fixed w-full top-0 left-0 py-1.5 md:py-2 px-4 md:px-10 lg:px-28 font-Inter z-50">
            <div className="w-full flex justify-between items-center gap-6 md:gap-10">

                <a href="/" className="shrink-0">
                    <img src={Logo} alt="Company Logo" className="w-16 h-16 object-contain" />
                </a>

                <nav className="hidden sm:flex flex-1 justify-center items-center gap-6 md:gap-10" aria-label="Primary navigation">
                    <ul className="flex flex-wrap gap-6 md:gap-10">
                        {headerMenu.map(({ id, title, link }) => (
                            <MenuItem key={id} title={title} link={link} />
                        ))}
                    </ul>
                </nav>

                <div className="hidden sm:block">
                    <Buttton ColorType={"dark"} title={"Login"} onClick={() => dispatch(onOpenLogin())}/>
                </div>

                {/* Mobile Menu Toggle */}
                <div className="flex items-center gap-4 sm:hidden">
                    <button onClick={toggleMenu} aria-label="Toggle menu">
                        {isMenuOpen ? (
                            <IoClose className="text-4xl text-darkColor" />
                        ) : (
                            <IoMenuSharp className="text-4xl text-darkColor" />
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="sm:hidden absolute top-full left-0 w-full bg-white shadow-md px-6 py-4 transition-all duration-300">
                    <ul className="flex flex-col gap-4">
                        {headerMenu.map(({ id, title, link }) => (
                            <MenuItem key={id} title={title} link={link} onClick={() => setIsMenuOpen(false)} />
                        ))}
                        <li>
                            <button
                                className="w-full mt-2 py-2 px-4 text-white bg-darkColor rounded-lg text-sm font-medium hover:bg-black/80 transition duration-300"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Login
                            </button>
                        </li>
                    </ul>
                </div>
            )}
        </header>
    )
}

export default HeaderPage
