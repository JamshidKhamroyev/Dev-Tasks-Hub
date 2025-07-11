import React from 'react'

function Buttton({ title, ColorType, BtnType = 'button' }) {
    let buttonClass = '';

    switch (ColorType) {
        case "dark":
            buttonClass = 'bg-darkColor text-white hover:bg-black/80 active:bg-black';
            break;
        case "light":
            buttonClass = 'bg-white text-darkColor hover:bg-white/80 active:bg-white';
            break;
    }
    return (
        <button className={`py-1.5 sm:py-2.5 px-4 sm:px-6 font-Inter font-medium text-sm sm:text-lg rounded-lg hover:-translate-y-1 duration-300 cursor-pointer ${buttonClass}`}>
            {title}
        </button>
    )
}

export default Buttton