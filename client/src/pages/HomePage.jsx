import React, { useEffect, useState } from 'react'
// components
import Loader from '../components/Loader'
// pages
import HeroPage from './HeroPage'
import HowItWorks from './HowItWorks'
import FaqPage from './FaqPage'
import FrontendBenefits from './BenefitsPage'

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