import React from 'react'

export default function Button({buttonName, handleChange, type}) {
    return (
        <div>
            <button className={`bg-[#4279dd] px-6 py-2 rounded text-white border-black hover:bg-blue-400 ${type === "danger"? "bg-red-600 hover:bg-red-500 text-white" : ""}`} onClick={handleChange}>
                {buttonName}
            </button>
        </div>
    )
}
