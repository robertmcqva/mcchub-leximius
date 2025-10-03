import React from 'react'

export const AboutPage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">About Us</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          We're building the future of professional web applications with cutting-edge technology and user-centric design.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
          <p className="text-gray-600 mb-6">
            To empower developers and businesses with the tools they need to build exceptional web applications 
            that scale, perform, and delight users around the world.
          </p>
          <p className="text-gray-600">
            Founded in 2023, we've helped thousands of companies transform their digital presence and 
            accelerate their growth through innovative technology solutions.
          </p>
        </div>
        <div className="bg-gray-100 h-96 rounded-lg flex items-center justify-center">
          <span className="text-gray-500">Team Photo Placeholder</span>
        </div>
      </div>
    </div>
  )
}