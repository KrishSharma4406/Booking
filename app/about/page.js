import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const About = () => {
  return (
    <div className="min-h-screen text-white">
      {/* Hero Section */}
      <div className="container mx-auto px-6 md:px-10 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
            About Get Me a Chai
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Empowering creators to turn their passion into sustainable income through the support of their community.
          </p>
        </div>

        {/* Mission Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Get Me a Chai is a crowdfunding platform designed specifically for creators who want to build a sustainable income from their work. We believe that every creator deserves the opportunity to do what they love while being supported by their community.
            </p>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Whether you&apos;re a developer, artist, writer, musician, or any kind of creator, our platform makes it easy for your fans to show their appreciation through small, meaningful contributions.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Just like buying someone a chai (tea) is a gesture of friendship and support in many cultures, our platform enables your fans to support you in a simple, accessible way.
            </p>
          </div>
          <div className="relative h-80 rounded-lg overflow-hidden bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center">
            <Image
              src="/tea.gif"
              alt="Tea Cup"
              width={200}
              height={200}
              className="invertImg"
            />
          </div>
        </div>

        {/* How It Works */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-900 rounded-lg p-8 border border-gray-800 hover:border-purple-500 transition">
              <div className="text-5xl mb-4">🎨</div>
              <h3 className="text-xl font-bold mb-3">1. Create Your Page</h3>
              <p className="text-gray-300">
                Sign up and create your personalized creator page. Share your story, showcase your work, and connect with your audience.
              </p>
            </div>
            <div className="bg-slate-900 rounded-lg p-8 border border-gray-800 hover:border-purple-500 transition">
              <div className="text-5xl mb-4">📢</div>
              <h3 className="text-xl font-bold mb-3">2. Share With Fans</h3>
              <p className="text-gray-300">
                Share your Get Me a Chai link on social media, your website, or wherever your fans are. Let them know how they can support you.
              </p>
            </div>
            <div className="bg-slate-900 rounded-lg p-8 border border-gray-800 hover:border-purple-500 transition">
              <div className="text-5xl mb-4">💰</div>
              <h3 className="text-xl font-bold mb-3">3. Receive Support</h3>
              <p className="text-gray-300">
                Your fans can buy you a chai (make contributions) to show their support. Watch your earnings grow as your community rallies behind you.
              </p>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6 border-2 border-gray-800 rounded-lg hover:border-purple-500 transition hover:scale-105">
              <div className="text-4xl mb-3">⚡</div>
              <h3 className="font-bold mb-2">Easy Setup</h3>
              <p className="text-gray-400 text-sm">Get started in minutes with our simple registration process</p>
            </div>
            <div className="text-center p-6 border-2 border-gray-800 rounded-lg hover:border-purple-500 transition hover:scale-105">
              <div className="text-4xl mb-3">🔒</div>
              <h3 className="font-bold mb-2">Secure Payments</h3>
              <p className="text-gray-400 text-sm">Safe and secure payment processing for peace of mind</p>
            </div>
            <div className="text-center p-6 border-2 border-gray-800 rounded-lg hover:border-purple-500 transition hover:scale-105">
              <div className="text-4xl mb-3">📊</div>
              <h3 className="font-bold mb-2">Track Progress</h3>
              <p className="text-gray-400 text-sm">Monitor your earnings and supporter activity in real-time</p>
            </div>
            <div className="text-center p-6 border-2 border-gray-800 rounded-lg hover:border-purple-500 transition hover:scale-105">
              <div className="text-4xl mb-3">🎯</div>
              <h3 className="font-bold mb-2">No Hidden Fees</h3>
              <p className="text-gray-400 text-sm">Transparent pricing with no surprise charges</p>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-purple-900 to-blue-900 rounded-lg p-12 mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Our Impact</h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold text-blue-400 mb-2">10K+</div>
              <p className="text-gray-300">Active Creators</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-purple-400 mb-2">$2M+</div>
              <p className="text-gray-300">Funds Raised</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-green-400 mb-2">50K+</div>
              <p className="text-gray-300">Happy Supporters</p>
            </div>
          </div>
        </div>

        {/* Who Can Use */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Who Can Use Get Me a Chai?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: "💻", title: "Developers", desc: "Share your open-source projects and coding tutorials" },
              { icon: "🎨", title: "Artists", desc: "Showcase your artwork and creative process" },
              { icon: "✍️", title: "Writers", desc: "Share your stories, articles, and creative writing" },
              { icon: "🎵", title: "Musicians", desc: "Share your music and behind-the-scenes content" },
              { icon: "📸", title: "Photographers", desc: "Display your photography portfolio and tips" },
              { icon: "🎓", title: "Educators", desc: "Create educational content and online courses" },
            ].map((item, index) => (
              <div key={index} className="bg-slate-900 rounded-lg p-6 border border-gray-800 hover:border-purple-500 transition hover:scale-105">
                <div className="text-4xl mb-3">{item.icon}</div>
                <h3 className="font-bold mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg p-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 text-gray-100">
            Join thousands of creators who are already building sustainable income through their passion.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/Login">
              <button className="bg-white text-purple-600 font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition text-lg">
                Start Now
              </button>
            </Link>
            <Link href="/">
              <button className="bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-lg hover:bg-white hover:text-purple-600 transition text-lg">
                Learn More
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
