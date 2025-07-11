import React from 'react'
import { Outlet } from 'react-router'
// Header and Footer Pages are imported to be used in the layout
import HeaderPage from '../pages/HeaderPage'
import FooterPage from '../pages/FooterPage'

function MainLayouts() {
    return (
        <div className='w-full max-w-[1400px] mx-auto min-h-screen'>
            <HeaderPage />
            <main className='w-full'>
                <Outlet />
            </main>
            <FooterPage />
        </div>
    )
}

export default MainLayouts