import React from 'react'
import Button from '../components/Buttton'

const HeroPage = () => {
    return (
        <section className="py-16 md:py-20 lg:px-28 md:px-8 px-1 font-Inter bg-gradient-to-b from-[#BCBFFF] to-[#F6EAFF]">
            <div className="max-w-[730px] w-full mx-auto px-4 text-center">
                <h1 className="font-Playfair font-medium text-3xl sm:text-5xl md:text-7xl leading-tight">
                    The first <br />
                    truly intelligent <br />
                    Project Management
                </h1>
                <p className="mt-7 text-base md:text-xl text-gray-700">
                    Skyrocket your online store conversion rate and improve the customer journey with smart online visual merchandising.
                </p>
            </div>

            {/* Buttons */}
            <div className="flex  gap-4 sm:justify-center items-center mt-6 md:mt-8 px-4">
                <Button title="Request demo" ColorType="dark" />
                <Button title="Ask a question" ColorType="light" />
            </div>

            <div className="mt-6 md:mt-8 px-4">
                <div className="w-full md:w-[960px] h-[240px] md:h-[435px] rounded-2xl bg-[#525252] mx-auto"></div>
            </div>

            {/* Logo Strip */}
            <div className="mt-8 md:mt-12 max-w-[920px] w-full mx-auto px-4 text-center">
                <p className="text-base text-gray-700">
                    No code needed, just a plug & play.
                </p>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mt-4 place-items-center">
                    {[...Array(6)].map((_, idx) => (
                        <div
                            key={idx}
                            className="w-[120px] h-9 bg-[#97989F] rounded-md"
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default HeroPage
