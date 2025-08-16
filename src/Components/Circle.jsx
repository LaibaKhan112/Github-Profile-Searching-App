import React from 'react'

function Circle({ value, paraText }) {
    return (
        <>
            <div className='flex flex-col justify-center items-center'>
                <div className='w-18 h-18 rounded-[100%] bg-slate-600 text-white text-2xl font-bold flex justify-center items-center'>{value}</div>
                <p className='text-xl font-bold'>{paraText}</p>
            </div>

        </>
    )
}

export default Circle