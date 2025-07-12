import React from 'react'
import { RingLoader } from 'react-spinners'

function Loader() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <RingLoader color="#4A00E0" size={100} />
        </div>
    )
}

export default Loader
