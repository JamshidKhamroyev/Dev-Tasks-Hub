import React from 'react'
import { Outlet } from 'react-router'

function MainLayouts() {
    return (
        <>
            <header></header>
            <main className='w-full'>
                <Outlet />
            </main>
            <footer></footer>
        </>
    )
}

export default MainLayouts