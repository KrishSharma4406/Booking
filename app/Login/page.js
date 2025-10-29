'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')
    
    try {
      const result = await signIn('credentials', {
        redirect: false,
        email,
        password,
      })

      if (result?.error) {
        setError(result.error)
        setIsLoading(false)
      } else {
        router.push('/dashboard')
      }
    } catch (error) {
      console.error('Login error:', error)
      setError('An error occurred. Please try again.')
      setIsLoading(false)
    }
  }

  const handleSocialLogin = async (provider) => {
    try {
      await signIn(provider, { callbackUrl: '/dashboard' })
    } catch (error) {
      console.error(`${provider} login error:`, error)
      setError(`Failed to login with ${provider}. Please try again.`)
    }
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
              Choose your preferred login method
            </p>
          </div>
        </div>
        {error && (
          <div className="p-3 bg-red-100 border border-red-400 text-red-700 rounded-md text-sm">
            {error}
          </div>
        )}
        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <label className="font-medium text-gray-300"> Email </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full mt-2 px-3 py-2 text-white bg-slate-900 outline-none border-2 border-blue-800 focus:border-indigo-600 shadow-sm rounded-lg"
              />
            </div>
            <div>
              <label className="font-medium text-gray-300"> Password </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full mt-2 px-3 py-2 text-white bg-slate-900 outline-none border-2 border-blue-800 focus:border-indigo-600 shadow-sm rounded-lg"
              />
            </div>
            <button
              type="submit"
              disabled={isLoading}
              className="w-full mt-4 px-4 py-2 text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? 'Signing in...' : 'Sign in'}
            </button>
          </div>
        </form>
        <div className="relative">
          <span className="block w-full h-px bg-gray-600"></span>
          <p className="inline-block w-fit text-sm bg-black px-2 absolute -top-2 inset-x-0 mx-auto">
            Or Continue with
          </p>
        </div>
        <div className="space-y-4 text-sm font-medium">
          {/* Google Button */}
          <button
            onClick={() => handleSocialLogin('google')}
            className="w-full flex items-center justify-center gap-x-3 py-2.5 border border-gray-600 rounded-lg hover:bg-gray-800 duration-150 active:bg-gray-700"
          >
            <Image
              src="http://pluspng.com/img-png/google-logo-png-open-2000.png"
              alt="Google"
              width={20}
              height={20}
              className="w-5 h-5"
              unoptimized
            />
            Continue with Google
          </button>
          {/* Facebook Button */}
          <button 
            onClick={() => handleSocialLogin('facebook')}
            className="w-full flex items-center justify-center gap-x-3 py-2.5 border border-gray-600 rounded-lg hover:bg-gray-800 duration-150 active:bg-gray-700"
          >
            <svg className="w-5 h-5" fill="#1877F2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
            Continue with Facebook
          </button>
          {/* Twitter Button */}
          <button 
            onClick={() => handleSocialLogin('twitter')}
            className="w-full flex items-center justify-center gap-x-3 py-2.5 border border-gray-600 rounded-lg hover:bg-gray-800 duration-150 active:bg-gray-700"
          >
            <Image
              src="https://freepnglogo.com/images/all_img/logo-x-modern-2023-7cbd.png"
              alt="Twitter"
              width={20}
              height={20}
              className="w-5 h-5"
              unoptimized
            />
            Continue with X
          </button>
          {/* Github Button */}
          <button 
            onClick={() => handleSocialLogin('github')}
            className="w-full flex items-center justify-center gap-x-3 py-2.5 border border-gray-600 rounded-lg hover:bg-gray-800 duration-150 active:bg-gray-700"
          >
            <Image
              src="https://raw.githubusercontent.com/sidiDev/remote-assets/0d3b55a09c6bb8155ca19f43283dc6d88ff88bf5/github-icon.svg"
              alt="Github"
              width={20}
              height={20}
              className="w-5 h-5"
              unoptimized
            />
            Continue with Github
          </button>
        </div>
        <div className="text-center space-y-2">
          <Link
            href="/Forgotpwd"
            className="block text-indigo-600 hover:text-indigo-500"
          >
            Forgot password?
          </Link>
          <p className="text-gray-400">
            Don&apos;t have an account?{' '}
            <Link
              href="/SignUp"
              className="text-indigo-600 hover:text-indigo-500 font-medium"
            >
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </main>
  )
}

export default Login