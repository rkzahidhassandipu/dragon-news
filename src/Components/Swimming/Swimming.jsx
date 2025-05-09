import React from 'react'
import swimming from "./../../assets/swimming.png"
import classic from "./../../assets/class.png"
import playground from "./../../assets/playground.png"

const Swimming = () => {
  return (
    <div className='my-10 p-5 bg-base-200'>
      <h1 className='font-bold text-3xl mb-3'>Q-Zone</h1>
      <div>
        <img src={swimming} alt="" />
        <img className='mt-4' src={classic} alt="" />
        <img className='mt-4' src={playground} alt="" />
      </div>
    </div>
  )
}

export default Swimming
