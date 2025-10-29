'use client'
import React, { useEffect } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

const Dashboard = () => {
  const { data: session, status } = useSession()
  const router = useRouter()

  // Redirect to login if not authenticated
  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/Login')
    }
  }, [status, router])

  if (status === 'loading') {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-white text-xl">Loading...</div>
      </div>
    )
  }

  if (!session) {
    return null
  }

  return (
    <div className="min-h-screen p-6 md:p-10">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
            Welcome back, {session.user?.name || 'User'}! 👋
          </h1>
          <p className="text-gray-400">Here&apos;s what&apos;s happening with your bookings today.</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {/* Total Bookings */}
          <div className="bg-gradient-to-br from-purple-600 to-purple-800 rounded-lg p-6 shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <div className="text-purple-200 text-sm font-medium">Total Bookings</div>
              <div className="text-3xl">📅</div>
            </div>
            <div className="text-white text-3xl font-bold mb-1">24</div>
            <div className="text-purple-200 text-sm">+12% from last month</div>
          </div>

          {/* Active Bookings */}
          <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg p-6 shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <div className="text-blue-200 text-sm font-medium">Active Bookings</div>
              <div className="text-3xl">✅</div>
            </div>
            <div className="text-white text-3xl font-bold mb-1">8</div>
            <div className="text-blue-200 text-sm">Currently ongoing</div>
          </div>

          {/* Total Revenue */}
          <div className="bg-gradient-to-br from-green-600 to-green-800 rounded-lg p-6 shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <div className="text-green-200 text-sm font-medium">Total Revenue</div>
              <div className="text-3xl">💰</div>
            </div>
            <div className="text-white text-3xl font-bold mb-1">$2,450</div>
            <div className="text-green-200 text-sm">+8% from last month</div>
          </div>

          {/* Pending Requests */}
          <div className="bg-gradient-to-br from-orange-600 to-orange-800 rounded-lg p-6 shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <div className="text-orange-200 text-sm font-medium">Pending Requests</div>
              <div className="text-3xl">⏳</div>
            </div>
            <div className="text-white text-3xl font-bold mb-1">3</div>
            <div className="text-orange-200 text-sm">Awaiting approval</div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Recent Bookings */}
          <div className="lg:col-span-2 bg-slate-900 rounded-lg p-6 border border-gray-800">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-white">Recent Bookings</h2>
              <Link href="/bookings" className="text-blue-400 hover:text-blue-300 text-sm">
                View all →
              </Link>
            </div>
            <div className="space-y-4">
              {[
                { id: 1, client: 'John Doe', service: 'Premium Room', date: 'Oct 28, 2025', status: 'Confirmed', color: 'green' },
                { id: 2, client: 'Jane Smith', service: 'Meeting Room', date: 'Oct 29, 2025', status: 'Pending', color: 'yellow' },
                { id: 3, client: 'Mike Johnson', service: 'Conference Hall', date: 'Oct 30, 2025', status: 'Confirmed', color: 'green' },
                { id: 4, client: 'Sarah Williams', service: 'Deluxe Suite', date: 'Nov 1, 2025', status: 'Cancelled', color: 'red' },
              ].map((booking) => (
                <div key={booking.id} className="flex items-center justify-between p-4 bg-slate-800 rounded-lg hover:bg-slate-750 transition">
                  <div className="flex-1">
                    <div className="text-white font-medium">{booking.client}</div>
                    <div className="text-gray-400 text-sm">{booking.service}</div>
                  </div>
                  <div className="text-right mr-4">
                    <div className="text-gray-300 text-sm">{booking.date}</div>
                  </div>
                  <div>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      booking.color === 'green' ? 'bg-green-900 text-green-300' :
                      booking.color === 'yellow' ? 'bg-yellow-900 text-yellow-300' :
                      'bg-red-900 text-red-300'
                    }`}>
                      {booking.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="space-y-6">
            {/* Quick Actions Card */}
            <div className="bg-slate-900 rounded-lg p-6 border border-gray-800">
              <h2 className="text-xl font-semibold text-white mb-4">Quick Actions</h2>
              <div className="space-y-3">
                <button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-medium py-3 px-4 rounded-lg transition flex items-center justify-center gap-2 hover:cursor-pointer">
                  <span>➕</span> New Booking
                </button>
                <button className="w-full bg-slate-800 hover:bg-slate-700 text-white font-medium py-3 px-4 rounded-lg transition flex items-center justify-center gap-2 hover:cursor-pointer">
                  <span>👥</span> Manage Clients
                </button>
                <button className="w-full bg-slate-800 hover:bg-slate-700 text-white font-medium py-3 px-4 rounded-lg transition flex items-center justify-center gap-2 hover:cursor-pointer">
                  <span>📊</span> View Reports
                </button>
                <button className="w-full bg-slate-800 hover:bg-slate-700 text-white font-medium py-3 px-4 rounded-lg transition flex items-center justify-center gap-2 hover:cursor-pointer">
                  <span>⚙️</span> Settings
                </button>
              </div>
            </div>

            {/* Upcoming Events */}
            <div className="bg-slate-900 rounded-lg p-6 border border-gray-800">
              <h2 className="text-xl font-semibold text-white mb-4">Upcoming</h2>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="bg-blue-600 rounded p-2 text-white text-xs font-bold">
                    <div>OCT</div>
                    <div>29</div>
                  </div>
                  <div className="flex-1">
                    <div className="text-white text-sm font-medium">Meeting with Jane</div>
                    <div className="text-gray-400 text-xs">2:00 PM - Conference</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-purple-600 rounded p-2 text-white text-xs font-bold">
                    <div>OCT</div>
                    <div>30</div>
                  </div>
                  <div className="flex-1">
                    <div className="text-white text-sm font-medium">Premium Suite Booking</div>
                    <div className="text-gray-400 text-xs">Check-in: 3:00 PM</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-green-600 rounded p-2 text-white text-xs font-bold">
                    <div>NOV</div>
                    <div>01</div>
                  </div>
                  <div className="flex-1">
                    <div className="text-white text-sm font-medium">Corporate Event</div>
                    <div className="text-gray-400 text-xs">10:00 AM - Hall A</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard