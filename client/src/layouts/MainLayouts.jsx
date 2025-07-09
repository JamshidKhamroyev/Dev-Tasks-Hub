import React from 'react'
import { Outlet } from 'react-router'

function MainLayouts() {
    return (
        <>
            <header></header>
            <main className='max-w-[1440px] w-full mx-auto'>
                <Outlet />
            </main>
            <footer></footer>
        </>
    )
}

export default MainLayouts