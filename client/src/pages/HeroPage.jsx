import React from 'react'
import Buttton from '../components/Buttton'

function HeroPage() {
    return (
        <section
            className='py-24 font-Inter bg-[#D9D9D9]'
        // style={{
        //     background: 'linear-gradient(180deg, #BCBFFF 0%, #F6EAFF 100%)'
        // }}
        >
            {/* title box */}
            <div className='max-w-[730px] w-full mx-auto'>
                <h1 className='font-medium text-center text-7xl font-Playfair'>
                    The first <br />
                    truly intelligent <br />
                    Project Management
                </h1>
                <p className='font-normal text-xl text-center mt-7'>
                    Skyrocket your online store conversion rate and improve the customer journey with smart online visual merchandising.
                </p>
            </div>
            {/* button box */}
            <div className='w-[400px] mx-auto flex gap-4 mt-7'>
                <Buttton title="Request demo" ColorType="dark" />
                <Buttton title="Ask a question" ColorType='light' />
            </div>

            {/* Mask groub box */}
            <div className='mt-7'>
                <div className='w-[960px] h-[435px] rounded-2xl bg-[#525252] mx-auto'></div>
            </div>

            {/*  */}
            <div className='mt-10 mx-auto max-w-[920px] w-full'>
                <p className='font-Inter font-normal text-base text-center'>
                    No code needed, just a plug & play.
                </p>
                <div className='w-full flex gap-10 pt-4'>
                    <div className='w-[120px] h-9 bg-[#97989F]'></div>
                    <div className='w-[120px] h-9 bg-[#97989F]'></div>
                    <div className='w-[120px] h-9 bg-[#97989F]'></div>
                    <div className='w-[120px] h-9 bg-[#97989F]'></div>
                    <div className='w-[120px] h-9 bg-[#97989F]'></div>
                    <div className='w-[120px] h-9 bg-[#97989F]'></div>
                </div>
            </div>
        </section>
    )
}

export default HeroPage
