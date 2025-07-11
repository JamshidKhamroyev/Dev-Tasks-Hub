import React from 'react'
import { Outlet } from 'react-router'
// Header and Footer Pages are imported to be used in the layout
import HeaderPage from '../pages/HeaderPage'
import FooterPage from '../pages/FooterPage'

function MainLayouts() {
    return (
        <div className='w-full mx-auto min-h-screen'>
            <HeaderPage />
            <main className='w-full mt-12'>
                <Outlet />
            </main>
            <FooterPage />
        </div>
    )
}

export default MainLayouts