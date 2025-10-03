import React, { useState } from 'react'
import { Mail, Phone, MapPin, Clock, Send, MessageSquare, Users, Heart, ArrowRight } from 'lucide-react'

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.warn('Form submitted:', formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      content: "hello@mcchub.com",
      description: "Send us an email anytime",
      gradient: "from-brand-500 to-purple-600"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      content: "+1 (555) 123-4567",
      description: "Call us during business hours",
      gradient: "from-green-500 to-teal-600"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Office",
      content: "San Francisco, CA",
      description: "123 Business Ave, Suite 100",
      gradient: "from-purple-500 to-pink-600"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Hours",
      content: "Mon - Fri, 9AM - 6PM PST",
      description: "We're here to help",
      gradient: "from-orange-500 to-red-600"
    }
  ]

  const stats = [
    { number: "1000+", label: "Happy Clients", icon: <Users className="w-6 h-6" /> },
    { number: "24/7", label: "Support", icon: <MessageSquare className="w-6 h-6" /> },
    { number: "99.9%", label: "Uptime", icon: <Heart className="w-6 h-6" /> }
  ]

  return (
    <div className="bg-white overflow-hidden">
      {/* Modern Hero Section */}
      <div className="relative min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-gray-50 via-white to-brand-50">
        <div className="absolute inset-0 bg-mesh opacity-30"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-radial from-brand-400/20 to-transparent rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-radial from-purple-400/20 to-transparent rounded-full blur-3xl animate-pulse-slow" style={{animationDelay: '1s'}}></div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <div className="inline-flex items-center px-4 py-2 bg-brand-50 border border-brand-200 rounded-full text-brand-700 text-sm font-medium mb-8 animate-fade-in-up">
            <MessageSquare className="w-4 h-4 mr-2" />
            Let's Start a Conversation
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-8 animate-fade-in-up" style={{animationDelay: '0.1s'}}>
            <span className="text-gray-900 whitespace-nowrap">Get in touch </span>
            <span className="bg-gradient-to-r from-brand-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">with our team</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            We're here to help you succeed. Whether you have questions, need support, or want to discuss a project, 
            we'd love to hear from you.
          </p>
        </div>
      </div>

      {/* Contact Cards */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 mb-20">
            {contactInfo.map((info, index) => (
              <div key={index} className="card-elevated p-8 text-center group hover-lift animate-fade-in-up" style={{animationDelay: `${index * 0.1}s`}}>
                <div className={`w-16 h-16 bg-gradient-to-r ${info.gradient} rounded-3xl mx-auto mb-6 flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300 shadow-elegant-lg`}>
                  {info.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{info.title}</h3>
                <p className="text-lg font-semibold text-brand-600 mb-2">{info.content}</p>
                <p className="text-gray-600 text-sm">{info.description}</p>
              </div>
            ))}
          </div>

          {/* Main Contact Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="card-glass p-8 lg:p-12">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Send us a message</h2>
                <p className="text-gray-600 leading-relaxed">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="input-enhanced-glass"
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="input-enhanced-glass"
                      placeholder="john@company.com"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="input-enhanced-glass"
                    placeholder="How can we help you?"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="input-enhanced-glass resize-none"
                    placeholder="Tell us more about your project or question..."
                    required
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full btn-enhanced-gradient group"
                >
                  Send Message
                  <Send className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
                </button>
              </form>
            </div>

            {/* Additional Information */}
            <div className="space-y-8">
              {/* Why Choose Us */}
              <div className="card-elevated p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Why work with us?</h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-gradient-to-r from-brand-500 to-purple-600 rounded-2xl flex items-center justify-center mr-4 mt-1">
                      <Heart className="text-white" size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Dedicated Support</h4>
                      <p className="text-gray-600 text-sm">Our team is committed to your success with personalized attention.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-600 rounded-2xl flex items-center justify-center mr-4 mt-1">
                      <Users className="text-white" size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Expert Team</h4>
                      <p className="text-gray-600 text-sm">Work with experienced professionals who understand your needs.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mr-4 mt-1">
                      <MessageSquare className="text-white" size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Quick Response</h4>
                      <p className="text-gray-600 text-sm">Get answers fast with our responsive communication.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Stats */}
              <div className="card-glass p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Trusted by many</h3>
                <div className="grid grid-cols-3 gap-6">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="w-12 h-12 bg-gradient-to-r from-brand-500 to-purple-600 rounded-2xl mx-auto mb-3 flex items-center justify-center text-white">
                        {stat.icon}
                      </div>
                      <div className="text-2xl font-bold text-gray-900 mb-1">{stat.number}</div>
                      <div className="text-sm text-gray-600">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative py-24 bg-gray-900 overflow-hidden">
        <div className="absolute inset-0 bg-mesh opacity-20"></div>
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-gradient-radial from-brand-500/30 to-transparent rounded-full blur-3xl"></div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to start{" "}
            <span className="bg-gradient-to-r from-brand-400 to-purple-400 bg-clip-text text-transparent">
              your project?
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Let's discuss how we can help bring your vision to life with our expert team and cutting-edge solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:hello@mcchub.com" className="btn-enhanced-gradient text-lg px-8 py-4">
              Email Us Now
              <ArrowRight className="ml-2" size={20} />
            </a>
            <a href="tel:+15551234567" className="btn-ghost text-white border-2 border-gray-700 hover:border-brand-500 text-lg px-8 py-4">
              Call Us Today
            </a>
          </div>
          
          <p className="text-gray-400 text-sm mt-6">
            Typically respond within 2 hours • Free consultation • No obligation
          </p>
        </div>
      </div>
    </div>
  )
}
