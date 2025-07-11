import React from 'react'
// import logo footer
import LogoFooter from '../../public/images/Logo.svg'
// import footer menu
import { footerMenu, footerMedia } from '../constants'

function FooterPage() {
    return (
        <footer className="py-6 px-4 md:px-10 lg:px-28 font-Inter bg-white shadow-inner">
            <div className="max-w-[1400px] mx-auto w-full flex flex-col md:flex-row justify-between items-start md:items-center gap-4 sm:gap-6 md:gap-10">
                {/* Top Part: Logo & Menu */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 sm:gap-6 md:gap-10">
                    {/* Logo */}
                    <div className="shrink-0">
                        <img
                            src={LogoFooter}
                            alt="Company Logo"
                            className="size-16 object-contain"
                        />
                    </div>
                </div>
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
                    {/* Footer Menu */}
                    <ul className="flex flex-wrap justify-start gap-4 sm:gap-6">
                        {footerMenu.map(({ id, title, link }) => (
                            <li
                                key={id}
                                className="hover:scale-105 transition-transform duration-300"
                            >
                                <a
                                    href={link}
                                    className="text-sm sm:text-base text-darkColor hover:text-primary transition-colors duration-300"
                                >
                                    {title}
                                </a>
                            </li>
                        ))}
                    </ul>
                    {/* Bottom Part: Social Icons */}
                    <ul className="flex items-center gap-4">
                        {footerMedia.map(({ id, icon: Icon, link }) => (
                            <li
                                key={id}
                                className="hover:rotate-12 hover:scale-110 transition-all duration-300"
                            >
                                <a
                                    href={link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={`Link to ${id}`}
                                    className="text-darkColor hover:text-primary transition-colors duration-300"
                                >
                                    <Icon size={20} />
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default FooterPage
