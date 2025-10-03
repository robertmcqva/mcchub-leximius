import React from 'react'
import { Code, Globe, Smartphone, Database, Cloud, Shield } from 'lucide-react'

export const ServicesPage: React.FC = () => {
  const services = [
    {
      icon: <Code className="text-blue-600" size={32} />,
      title: "Web Development",
      description: "Custom web applications built with modern frameworks and best practices."
    },
    {
      icon: <Globe className="text-green-600" size={32} />,
      title: "API Development",
      description: "Scalable REST and GraphQL APIs with comprehensive documentation."
    },
    {
      icon: <Smartphone className="text-purple-600" size={32} />,
      title: "Mobile Development",
      description: "Native and cross-platform mobile applications for iOS and Android."
    },
    {
      icon: <Database className="text-orange-600" size={32} />,
      title: "Database Design",
      description: "Optimized database architecture and data management solutions."
    },
    {
      icon: <Cloud className="text-indigo-600" size={32} />,
      title: "Cloud Infrastructure",
      description: "Scalable cloud deployment and infrastructure management."
    },
    {
      icon: <Shield className="text-red-600" size={32} />,
      title: "Security Audits",
      description: "Comprehensive security assessments and vulnerability testing."
    }
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Comprehensive solutions for all your web development needs
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div key={index} className="bg-white p-8 rounded-xl shadow-sm border hover:shadow-md transition-shadow">
            <div className="w-16 h-16 bg-gray-50 rounded-lg flex items-center justify-center mb-6">
              {service.icon}
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">{service.title}</h3>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}