import React from 'react'

export const Button = (props) => {
    return (
        <button 
        className={`p-2 my-2 ease-in-out duration-500 rounded-lg text-lg bg-teal-700 text-white  hover:bg-orange-600 ${props.className}`}
        
        type={props.type || "button"}
        
        >
            
            
            {props.children}</button>
    )


}