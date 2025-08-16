import React from 'react'

function Input({onChangeFunction}) {
  return (
    <>
        <input type="text" placeholder='search...' className=' border-2 p-2 outline-none rounded-md w-3/4' onChange={onChangeFunction} />
    </>
  )
}

export default Input