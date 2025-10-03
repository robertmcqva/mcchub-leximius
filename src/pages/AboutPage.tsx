import React from 'react'
import { Users, Target, Heart, Award, Globe, Zap, Shield, Code2, Sparkles } from 'lucide-react'

export const AboutPage: React.FC = () => {
  const values = [
    {
      icon: <Heart className="text-error-600" size={32} />,
      title: "User-Centric",
      description: "Every decision we make is driven by creating exceptional user experiences that delight and inspire."
    },
    {
      icon: <Shield className="text-success-600" size={32} />,
      title: "Quality First",
      description: "We maintain the highest standards in code quality, testing, and reliability across all our products."
    },
    {
      icon: <Zap className="text-warning-600" size={32} />,
      title: "Innovation",
      description: "Pushing the boundaries of what's possible with cutting-edge technology and creative problem-solving."
    },
    {
      icon: <Globe className="text-brand-600" size={32} />,
      title: "Open Source",
      description: "Contributing to the developer community through open source projects and knowledge sharing."
    }
  ]

  const team = [
    {
      name: "Alex Johnson",
      role: "Founder & CEO",
      bio: "10+ years building scalable web applications and leading engineering teams.",
      gradient: "from-brand-500 to-purple-600"
    },
    {
      name: "Sarah Chen",
      role: "Head of Design",
      bio: "Award-winning designer with expertise in user experience and design systems.",
      gradient: "from-purple-500 to-pink-600"
    },
    {
      name: "Mike Rodriguez",
      role: "Lead Engineer",
      bio: "Full-stack developer passionate about performance and developer experience.",
      gradient: "from-green-500 to-teal-600"
    },
    {
      name: "Emily Davis",
      role: "Product Manager",
      bio: "Strategic product leader focused on building tools that developers love.",
      gradient: "from-orange-500 to-red-600"
    }
  ]

  const stats = [
    { label: "Years of Experience", value: "10+" },
    { label: "Happy Customers", value: "50,000+" },
    { label: "Components Built", value: "500+" },
    { label: "GitHub Stars", value: "25,000+" }
  ]

  return (
    <div className="bg-white overflow-hidden">
      {/* Modern Hero Section */}
      <div className="relative min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-gray-50 via-white to-brand-50">
        {/* Background decorations */}
        <div className="absolute inset-0 bg-mesh opacity-30"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-radial from-brand-400/20 to-transparent rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-radial from-purple-400/20 to-transparent rounded-full blur-3xl animate-pulse-slow" style={{animationDelay: '1s'}}></div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <div className="inline-flex items-center px-4 py-2 bg-brand-50 border border-brand-200 rounded-full text-brand-700 text-sm font-medium mb-8 animate-fade-in-up">
            <Sparkles className="w-4 h-4 mr-2" />
            About MccHub Leximius
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-8 animate-fade-in-up" style={{animationDelay: '0.1s'}}>
            <span className="text-gray-900 block mb-2">Building the</span>
            <span className="bg-gradient-to-r from-brand-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">Future of Web</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            We're a team of passionate developers and designers creating the next generation of 
            web development tools. Our mission is to empower creators with beautiful, 
            accessible, and performant components.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto animate-fade-in-up" style={{animationDelay: '0.3s'}}>
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in-up">
              <div className="inline-flex items-center px-4 py-2 bg-success-50 border border-success-200 rounded-full text-success-700 text-sm font-medium mb-6">
                <Target className="w-4 h-4 mr-2" />
                Our Mission
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Empowering developers to create 
                <span className="text-gradient"> extraordinary experiences</span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                We believe that great software is built by great tools. Our component library 
                is designed to eliminate the repetitive work of building UI components from scratch, 
                allowing developers to focus on what matters most: creating amazing user experiences.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Every component is crafted with accessibility, performance, and developer experience 
                in mind. We're not just building a library – we're building the foundation for 
                the next generation of web applications.
              </p>
            </div>
            
            <div className="relative animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              <div className="card-glass p-8 text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-brand-500 to-purple-600 rounded-3xl mx-auto mb-6 flex items-center justify-center animate-float">
                  <Code2 className="text-white" size={40} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Developer First</h3>
                <p className="text-gray-600 leading-relaxed">
                  Built by developers, for developers. We understand the challenges of modern 
                  web development and create solutions that actually work.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="py-24 bg-gradient-to-r from-gray-50 to-brand-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-brand-50 border border-brand-200 rounded-full text-brand-700 text-sm font-medium mb-6">
              <Award className="w-4 h-4 mr-2" />
              Our Values
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              What drives us <span className="text-gradient">forward</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our core values shape everything we do, from product decisions to team culture.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div key={index} className="card-elevated p-8 hover-lift transition-all duration-500 group" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="w-16 h-16 bg-gradient-to-r from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-purple-50 border border-purple-200 rounded-full text-purple-700 text-sm font-medium mb-6">
              <Users className="w-4 h-4 mr-2" />
              Meet the Team
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              The minds behind <span className="text-gradient">the magic</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A diverse team of passionate individuals working together to build the future of web development.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center group animate-fade-in-up" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="relative mb-6">
                  <div className={`w-24 h-24 bg-gradient-to-r ${member.gradient} rounded-3xl mx-auto flex items-center justify-center text-white text-2xl font-bold group-hover:scale-110 transition-transform duration-300 shadow-elegant-lg`}>
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-green-400 to-green-600 rounded-full border-2 border-white"></div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-brand-600 font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Unified CTA Section */}
      <div className="relative py-24 bg-gray-900 overflow-hidden">
        <div className="absolute inset-0 bg-mesh opacity-20"></div>
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-gradient-radial from-brand-500/30 to-transparent rounded-full blur-3xl"></div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to join our{" "}
            <span className="bg-gradient-to-r from-brand-400 to-purple-400 bg-clip-text text-transparent">
              mission?
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
            Whether you're a developer, designer, or just someone who loves great software, 
            we'd love to hear from you.
          </p>
          
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <a 
              href="/contact" 
              className="btn-gradient text-lg px-8 py-4"
            >
              Get in Touch
            </a>
            <a 
              href="/careers" 
              className="btn-ghost text-white border-2 border-gray-700 hover:border-brand-500 text-lg px-8 py-4"
            >
              Join Our Team
            </a>
          </div>

          {/* Newsletter Signup */}
          <div className="border-t border-gray-800 pt-12">
            <h3 className="text-2xl font-bold mb-4 text-gradient">
              Stay in the Loop
            </h3>
            <p className="text-gray-300 mb-6 max-w-lg mx-auto">
              Get updates on new components, features, and company news.
            </p>
            <div className="newsletter-container">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="newsletter-input newsletter-input-rounded"
              />
              <button className="newsletter-button newsletter-button-rounded">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}