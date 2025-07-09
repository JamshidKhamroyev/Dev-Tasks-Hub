import React from 'react'

function Buttton({ title, ColorType = "dark" }) {
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
        <button className={`py-2.5 px-6 font-Inter font-medium text-lg rounded-lg ${buttonClass}`}>
            {title}
        </button>
    )
}

export default Buttton