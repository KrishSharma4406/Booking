"use client"
import React, { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useSession, signOut } from "next-auth/react"

const Navbar = () => {
  const { data: session, status } = useSession()
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const dropdownRef = useRef(null)

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <nav className='bg-slate-950 text-white flex justify-between items-center p-4 px-8'>
      <Link href="/">
        <Image src="/logo.png" alt="Logo" width={40} height={40} className='rounded-full cursor-pointer' />
      </Link>

      <ul className='flex gap-3 md:gap-5 text-sm md:text-base flex-wrap items-center'>
        {status === 'loading' ? (
          <li className="text-gray-400">Loading...</li>
        ) : session ? (
          <li className="relative" ref={dropdownRef}>
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center gap-2 text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5"
            >
              {session.user?.image && (
                <Image
                  src={session.user.image}
                  alt="Profile"
                  width={28}
                  height={28}
                  className="rounded-full"
                />
              )}
              <span>{session.user?.name || session.user?.email}</span>
              <svg 
                className={`w-4 h-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-slate-900 rounded-lg shadow-lg border border-gray-700 z-50">
                <ul className="py-2">
                  <li>
                    <Link
                      href="/earnings"
                      onClick={() => setIsDropdownOpen(false)}
                      className="block px-4 py-2 text-sm text-gray-300 hover:bg-slate-800 hover:text-white"
                    >
                      💰 Earnings
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/dashboard"
                      onClick={() => setIsDropdownOpen(false)}
                      className="block px-4 py-2 text-sm text-gray-300 hover:bg-slate-800 hover:text-white"
                    >
                      📊 Dashboard
                    </Link>
                  </li>
                  <li className="border-t border-gray-700 mt-2 pt-2">
                    <button
                      onClick={() => {
                        setIsDropdownOpen(false)
                        signOut({ callbackUrl: '/' })
                      }}
                      className="w-full text-left px-4 py-2 text-sm text-red-400 hover:bg-slate-800 hover:text-red-300"
                    >
                      🚪 Sign Out
                    </button>
                  </li>
                </ul>
              </div>
            )}
          </li>
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