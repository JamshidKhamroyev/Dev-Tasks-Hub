import React from 'react'
import { Outlet } from 'react-router'
// Header and Footer Pages are imported to be used in the layout
import HeaderPage from '../pages/HeaderPage'
import FooterPage from '../pages/FooterPage'

function MainLayouts() {
    return (
        <>
            <HeaderPage />
            <main className='w-full'>
                <Outlet />
            </main>
            <FooterPage />
        </>
    )
}

export default MainLayouts