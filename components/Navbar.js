import React from 'react'
import Image from 'next/image'

const Navbar = () => {
  return (
    <nav className='bg-slate-950 text-white flex justify-around items-center p-4'>
        <div><Image src="/logo.png" alt="Logo" width={40} height={40} className='rounded-full' /></div>
        <ul className='flex gap-3 md:gap-5 text-sm md:text-base flex-wrap'>
            <li className='hover:cursor-pointer px-3 p-1 text-blue-400 transition-colors  bg-slate-900 hover:border hover:border-none hover:rounded-md'>Home</li>
            <li className='hover:cursor-pointer px-3 p-1 hover:text-blue-400 transition-colors hover:bg-slate-900 hover:border hover:border-none hover:rounded-md'>About</li>
            <li className='hover:cursor-pointer px-3 p-1 hover:text-blue-400 transition-colors hover:bg-slate-900 hover:border hover:border-none hover:rounded-md'>Sign Up</li>
            <li className='hover:cursor-pointer px-3 p-1 hover:text-blue-400 transition-colors hover:bg-slate-900 hover:border hover:border-none hover:rounded-md'>Login</li>
        </ul>
    </nav>
  )
}

export default Navbar