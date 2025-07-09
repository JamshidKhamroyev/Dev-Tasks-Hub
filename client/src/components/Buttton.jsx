import React from 'react'

function Buttton({ title, ColorType, BtnType = 'button' }) {
    let buttonClass = '';

    switch (ColorType) {
        case "dark":
            buttonClass = 'bg-darkColor text-white';
            break;
        case "light":
            buttonClass = 'bg-white text-darkColor';
            break;
    }
    return (
        <button className={`py-1.5 sm:py-2.5 px-4 sm:px-6 font-Inter font-medium text-sm sm:text-lg rounded-lg ${buttonClass}`}>
            {title}
        </button>
    )
}

export default Buttton