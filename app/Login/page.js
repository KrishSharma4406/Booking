'use client'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault()
    // Add your login logic here
  }

  return (
    <main className="w-full h-screen flex flex-col items-center justify-center px-4">
      <div className="max-w-sm w-full text-gray-400 space-y-8">
        <div className="text-center">
          <div className="mt-5 space-y-2">
            <h3 className="text-gray-300 text-2xl font-bold sm:text-3xl">
              Log in to your account
            </h3>
            <p className="">
              Don&apos;t have an account?{' '}
              <Link
                href="/SignUp"
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                Sign up
              </Link>
            </p>
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          <div>
            <label className="font-medium"> Email </label>
            <input
              type="email"
              required
              className="w-full mt-2 px-3 py-2 text-gray-400 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
            />
          </div>
          <button
            type="submit"
            className="w-full mt-4 px-4 py-2 text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150"
          >
            Sign in
          </button>
        </form>
        <div className="relative">
          <span className="block w-full h-px bg-gray-600"></span>
          <p className="inline-block w-fit text-sm bg-black px-2 absolute -top-2 inset-x-0 mx-auto">
            Or Continue with
          </p>
        </div>
        <div className="space-y-4 text-sm font-medium">
          {/* Google Button */}
          <button className="w-full flex items-center justify-center gap-x-3 py-2.5 border rounded-lg hover:bg-gray-300 duration-150 active:bg-gray-100">
            <Image
              src="https://raw.githubusercontent.com/sidiDev/remote-assets/7cd06bf1d8859c578c2efbfda2c68bd6bedc66d8/google-icon.svg"
              alt="Google"
              width={20}
              height={20}
              className="w-5 h-5"
            />
            Continue with Google
          </button>
          {/* Facebook Button */}
          <button className="w-full flex items-center justify-center gap-x-3 py-2.5 border rounded-lg hover:bg-gray-300 duration-150 active:bg-gray-100">
            <svg className="w-5 h-5" fill="#1877F2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
            Continue with Facebook
          </button>
          {/* Twitter Button */}
          <button className="w-full flex items-center justify-center gap-x-3 py-2.5 border rounded-lg hover:bg-gray-300 duration-150 active:bg-gray-100">
            <Image
              src="https://raw.githubusercontent.com/sidiDev/remote-assets/f7119b9bdd8c58864383802fb92c7fc3a25c0646/twitter-icon.svg"
              alt="Twitter"
              width={20}
              height={20}
              className="w-5 h-5"
            />
            Continue with Twitter
          </button>
          {/* Github Button */}
          <button className="w-full flex items-center justify-center gap-x-3 py-2.5 border rounded-lg hover:bg-gray-300 duration-150 active:bg-gray-100">
            <Image
              src="https://raw.githubusercontent.com/sidiDev/remote-assets/0d3b55a09c6bb8155ca19f43283dc6d88ff88bf5/github-icon.svg"
              alt="Github"
              width={20}
              height={20}
              className="w-5 h-5"
            />
            Continue with Github
          </button>
        </div>
        <div className="text-center">
          <Link
            href="#"
            className="text-indigo-600 hover:text-indigo-500"
          >
            Forgot password?
          </Link>
        </div>
      </div>
    </main>
  )
}

export default Login