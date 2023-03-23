import React from 'react'
import contactbg from '../assets/images/soju_contact1.jpg'

const Contact = () => {
  return (
    <div
        // style={{backgroundImage: `url(${contactbg})`
    
    //   }}
    //   className= 'bg-no-repeat h-96'
    >
    <div className=
    'flex flex-row justify-center items-start'
    // 'grid-cols-4' 
    >
    <div className='flex-wrap'>
        <h2 className= 'mt-4 p-4 text-6xl font-bold text-yellow-700'>Contact</h2>
        <p className='text-yellow-600 font-semibold md:text-md lg:text-3x1 px-4 md:w-4/5 lg:w-2/5 leading-loose tracking-wide'>Are you interested in contributing? Feel free to drop a line </p>
        <a href="#/about/"><button className='rounded border-2 border-yellow-900 p-3 m-4 hover:bg-yellow-900 hover:text-white'>Message</button></a>
    </div>
    <img src={contactbg} className="rounded"alt="" />
    </div>
    </div>
  )
}

export default Contact