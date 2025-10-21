import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className='bg-slate-950 text-white flex justify-around items-center p-4'>
        <div><Image src="/logo.png" alt="Logo" width={40} height={40} className='rounded-full' /></div>
        <ul className='flex gap-3 md:gap-5 text-sm md:text-base flex-wrap items-center'>

            <Link href="/SignUp">
              <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                Sign Up
              </button>
            </Link>

            <Link href="/Login">
              <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                Login
              </button>
            </Link>
        </ul>
    </nav>
  )
}

export default Navbar