import React from 'react';
import Logo from '../assets/Logo.png';

export default function Navbar() {
  return (
    <>
    <div className='flex justify-center items-center bg-zinc-950 h-[100px] border-yellow-500 border-4'>
      <div>
        <img src={Logo} 
        alt='Logo show your game' className='h-20 w-auto object contain flex justify-center'></img>
      </div>
      <div className='p-2 m-2 text-white flex absolute right-10 border-4 border-purple-700 rounded-2xl gap-8 bg-cyber-violet cursor-pointer h-12'>
        <p>Sign In</p>
        <p>Create Profile</p>
      </div>
      <div className='p-2 m-2 text-white flex absolute left-10 border-4 border-purple-700 rounded-2xl gap-8 bg-cyber-violet cursor-pointer h-12'>
        <p>Discover</p>
        <p>Creators</p>
        <p>Community</p>
      </div>
    </div>
    
    </>
  )
}
