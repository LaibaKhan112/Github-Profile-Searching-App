import React from 'react'
import profileImg from '../assets/images/profile-img.jpg'

function Card({img_link, name, username}) {
  console.log(img_link);
  
  return (
    <>
    <div className='w-2/4 rounded-md bg-slate-200 flex flex-col justify-center items-center p-5 m-7'>

    <img src={img_link} alt="" className='w-22 h-22 rounded-[100%]' />
    
    
    <h3 className='text-xl font-bold mt-3 mb-1'>{name}</h3>
    <p> @{username}</p>
    </div>
    
    </>
  )
}

export default Card