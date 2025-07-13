import React, { useEffect, useState } from 'react'
// components
import Loader from '../components/Loader'
// pages
import HeroPage from './HeroPage'
import HowItWorks from './HowItWorks'
import FaqPage from './FaqPage'
import FrontendBenefits from './BenefitsPage'
import LoginModal from '../components/modals/LoginModal'
import RegisterModal from '../components/modals/RegisterModal'

function HomePage() {
    const [isLoader, setIsLoader] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setIsLoader(false)
        }, 2000)
    }, [])

    return (
        <>
            {!isLoader ? (
                <>
                    <LoginModal />
                    <RegisterModal />
                    <HeroPage />
                    <HowItWorks />
                    <FaqPage />
                    <FrontendBenefits />
                </>
            ) : <Loader />}
        </>
    )
}

export default HomePage