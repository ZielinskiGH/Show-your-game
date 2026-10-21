import React from 'react';
import Logo from '../assets/Logo.png';

export default function Navbar() {
  return (
    <>
    <div className='flex justify-center items-center bg-zinc-950 h-[100px]'>
      <div>
        <img src={Logo} 
        alt='Logo show your game' className='h-24 w-auto object contain absolute left-0 top-0'></img>
      </div>
      <div className='p-2 text-white flex absolute right-10 border-4 border-purple-700 rounded-2xl gap-8 bg-cyber-violet cursor-pointer h-12'>
        <p>Sign In</p>
        <p>Create Profile</p>
      </div>
    </div>
    
    </>
  )
}
