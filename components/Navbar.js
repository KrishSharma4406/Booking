"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useSession, signOut } from "next-auth/react"

const Navbar = () => {
  const { data: session, status } = useSession()

  return (
    <nav className='bg-slate-950 text-white flex justify-between items-center p-4 px-8'>
      <Link href="/">
        <Image src="/logo.png" alt="Logo" width={40} height={40} className='rounded-full cursor-pointer' />
      </Link>

      <ul className='flex gap-3 md:gap-5 text-sm md:text-base flex-wrap items-center'>
        {status === 'loading' ? (
          <li className="text-gray-400">Loading...</li>
        ) : session ? (
          <>
            <li className="text-gray-300">
              Welcome, <span className="font-semibold text-blue-400">{session.user?.name || session.user?.email}</span>
            </li>
            {session.user?.image && (
              <li>
                <Image
                  src={session.user.image}
                  alt="Profile"
                  width={32}
                  height={32}
                  className="rounded-full"
                />
              </li>
            )}
            <li>
              <button
                onClick={() => signOut({ callbackUrl: '/' })}
                className="text-white bg-gradient-to-br from-red-600 to-red-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Sign Out
              </button>
            </li>
          </>
        ) : (
          <li>
            <Link href="/Login">
              <button
                type="button"
                className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Login
              </button>
            </Link>
          </li>
        )}
      </ul>
    </nav>
  )
}

export default Navbar