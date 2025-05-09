import React from 'react'
import { format } from 'date-fns';
import logo from './../../assets/logo.png'

const Header = () => {
    const date = new Date();
    const formattedDate = format(date, 'EEEE, MMMM d, yyyy');
  return (
    <div className='w-4/5 mx-auto text-center'>
      <img className='mx-auto mt-2' src={logo} alt="" />
      <h1 className='text-accent mt-5 text-xl'>Journalism Without Fear or Favour</h1>
      <h2 className='mt-3 text-xl'>{formattedDate}</h2>
    </div>
  )
}

export default Header
