import React from 'react'

function Button({clickHandle}) {
  return (
    <>
        <button className='text-white bg-slate-500  border-2 border-black p-2 rounded-md'onClick={clickHandle} >Search</button>
    </>
  )
}

export default Button