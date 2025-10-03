import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { User, ChevronDown, Code2, Sparkles, Github, Twitter, Linkedin, Instagram } from 'lucide-react'
import { Breadcrumb } from './Breadcrumb'
import { useBreadcrumbs, getBreadcrumbConfig } from '../hooks/useBreadcrumbs'

interface LayoutProps {
  children: React.ReactNode
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)
  const [isUserMenuOpen, setIsUserMenuOpen] = React.useState(false)
  const location = useLocation()
  const breadcrumbs = useBreadcrumbs()
  const breadcrumbConfig = getBreadcrumbConfig(location.pathname)
  
  const isAuthPage = location.pathname.startsWith('/auth')
  const isDashboard = location.pathname.startsWith('/dashboard') || 
                     location.pathname.startsWith('/profile') ||
                     location.pathname.startsWith('/projects') ||
                     location.pathname.startsWith('/analytics') ||
                     location.pathname.startsWith('/admin')

  // Close mobile menu when clicking outside
  React.useEffect(() => {
    const handleClickOutside = () => {
      setIsMenuOpen(false)
      setIsUserMenuOpen(false)
    }
    if (isMenuOpen || isUserMenuOpen) {
      document.addEventListener('click', handleClickOutside)
    }
    return () => document.removeEventListener('click', handleClickOutside)
  }, [isMenuOpen, isUserMenuOpen])

  return (
    <div className="min-h-screen bg-gray-50">
      {!isAuthPage && (
        <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-200/50 shadow-elegant">
          <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex items-center">
                <Link to="/" className="flex-shrink-0 flex items-center group">
                  <div className="relative">
                    <Code2 className="h-8 w-8 text-brand-600 group-hover:text-brand-700 transition-colors" />
                    <Sparkles className="h-3 w-3 text-brand-400 absolute -top-1 -right-1 animate-pulse" />
                  </div>
                  <h1 className="ml-3 text-xl font-bold bg-gradient-to-r from-brand-600 to-purple-600 bg-clip-text text-transparent whitespace-nowrap">
                    MccHub Leximius
                  </h1>
                </Link>
                
                {!isDashboard && (
                  <div className="hidden md:ml-8 md:flex md:space-x-1">
                    <Link to="/about" className="nav-link group">
                      <span className="relative">
                        About
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-600 transition-all duration-300 group-hover:w-full"></span>
                      </span>
                    </Link>
                    <Link to="/services" className="nav-link group">
                      <span className="relative">
                        Services
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-600 transition-all duration-300 group-hover:w-full"></span>
                      </span>
                    </Link>
                    <Link to="/library" className="nav-link group">
                      <span className="relative">
                        Components
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-600 transition-all duration-300 group-hover:w-full"></span>
                      </span>
                    </Link>
                    <Link to="/pricing" className="nav-link group">
                      <span className="relative">
                        Pricing
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-600 transition-all duration-300 group-hover:w-full"></span>
                      </span>
                    </Link>
                    <Link to="/blog" className="nav-link group">
                      <span className="relative">
                        Blog
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-600 transition-all duration-300 group-hover:w-full"></span>
                      </span>
                    </Link>
                    <Link to="/contact" className="nav-link group">
                      <span className="relative">
                        Contact
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-600 transition-all duration-300 group-hover:w-full"></span>
                      </span>
                    </Link>
                  </div>
                )}
              </div>

              <div className="flex items-center space-x-4">
                {isDashboard ? (
                  <div className="flex items-center space-x-1">
                    <Link to="/dashboard" className="nav-link">
                      Dashboard
                    </Link>
                    <Link to="/projects" className="nav-link">
                      Projects
                    </Link>
                    <Link to="/analytics" className="nav-link">
                      Analytics
                    </Link>
                    <div className="relative" onClick={(e) => e.stopPropagation()}>
                      <button 
                        onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                        className="flex items-center space-x-2 nav-link"
                      >
                        <div className="w-8 h-8 bg-gradient-to-r from-brand-500 to-purple-600 rounded-full flex items-center justify-center">
                          <User size={16} className="text-white" />
                        </div>
                        <ChevronDown size={16} className={`transform transition-transform ${isUserMenuOpen ? 'rotate-180' : ''}`} />
                      </button>
                      {isUserMenuOpen && (
                        <div className="absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-elegant-lg border border-gray-100 py-2 z-50 animate-fade-in-down">
                          <div className="px-4 py-3 border-b border-gray-100">
                            <p className="text-sm font-medium text-gray-900">John Doe</p>
                            <p className="text-xs text-gray-500">john@example.com</p>
                          </div>
                          <Link to="/profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors">
                            <User size={16} className="inline mr-3" />
                            Profile
                          </Link>
                          <Link to="/settings" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors">
                            Settings
                          </Link>
                          <hr className="my-2" />
                          <button className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors">
                            Sign out
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                ) : (
                  <div className="flex items-center space-x-3">
                    <Link to="/auth/login" className="btn-ghost whitespace-nowrap">
                      Sign in
                    </Link>
                    <Link to="/auth/register" className="btn-enhanced-gradient whitespace-nowrap">
                      Get started
                    </Link>
                  </div>
                )}

                {/* Mobile menu button */}
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    setIsMenuOpen(!isMenuOpen)
                  }}
                  className="md:hidden p-2 rounded-lg text-gray-500 hover:text-gray-700 hover:bg-gray-100 transition-colors"
                >
                  <div className="relative w-6 h-6">
                    <span className={`absolute top-2 left-0 w-6 h-0.5 bg-current transform transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1' : ''}`} />
                    <span className={`absolute top-3.5 left-0 w-6 h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`} />
                    <span className={`absolute top-5 left-0 w-6 h-0.5 bg-current transform transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1' : ''}`} />
                  </div>
                </button>
              </div>
            </div>

            {/* Mobile Navigation Menu */}
            {isMenuOpen && (
              <div className="md:hidden absolute top-16 left-0 right-0 bg-white border-b border-gray-200 shadow-elegant-lg z-40 animate-fade-in-down">
                <div className="px-4 py-6 space-y-4">
                  {!isDashboard ? (
                    <>
                      <Link 
                        to="/about" 
                        className="block py-2 text-gray-700 hover:text-brand-600 transition-colors"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        About
                      </Link>
                      <Link 
                        to="/services" 
                        className="block py-2 text-gray-700 hover:text-brand-600 transition-colors"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Services
                      </Link>
                      <Link 
                        to="/library" 
                        className="block py-2 text-gray-700 hover:text-brand-600 transition-colors"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Components
                      </Link>
                      <Link 
                        to="/pricing" 
                        className="block py-2 text-gray-700 hover:text-brand-600 transition-colors"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Pricing
                      </Link>
                      <Link 
                        to="/blog" 
                        className="block py-2 text-gray-700 hover:text-brand-600 transition-colors"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Blog
                      </Link>
                      <Link 
                        to="/contact" 
                        className="block py-2 text-gray-700 hover:text-brand-600 transition-colors"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Contact
                      </Link>
                      <hr className="my-4" />
                      <Link 
                        to="/auth/login" 
                        className="block py-2 text-gray-700 hover:text-brand-600 transition-colors"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Sign in
                      </Link>
                      <Link 
                        to="/auth/register" 
                        className="btn-enhanced-gradient block text-center"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Get started
                      </Link>
                    </>
                  ) : (
                    <>
                      <Link 
                        to="/dashboard" 
                        className="block py-2 text-gray-700 hover:text-brand-600 transition-colors"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Dashboard
                      </Link>
                      <Link 
                        to="/projects" 
                        className="block py-2 text-gray-700 hover:text-brand-600 transition-colors"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Projects
                      </Link>
                      <Link 
                        to="/analytics" 
                        className="block py-2 text-gray-700 hover:text-brand-600 transition-colors"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Analytics
                      </Link>
                    </>
                  )}
                </div>
              </div>
            )}
          </nav>
        </header>
      )}

      <main className="flex-1">
        {/* Simple breadcrumb navigation */}
        {breadcrumbConfig.show && !isAuthPage && breadcrumbs.length > 0 && (
          <Breadcrumb 
            items={breadcrumbs}
            showHome={breadcrumbConfig.showHome}
          />
        )}
        
        {/* Content with appropriate top spacing when breadcrumb is present */}
        <div className={
          breadcrumbConfig.show && !isAuthPage && breadcrumbs.length > 0 
            ? 'pt-10 bg-gray-50' 
            : ''
        }>
          {children}
        </div>
      </main>

      {!isAuthPage && !isDashboard && (
        <footer className="bg-gray-900 text-white relative overflow-hidden border-t border-gray-800">
          {/* Background decoration */}
          <div className="absolute inset-0 bg-mesh opacity-5"></div>
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-gradient-radial from-brand-500/10 to-transparent rounded-full blur-3xl"></div>
          
          <div className="relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
            {/* Only show newsletter section on pages without their own CTA */}
            {!location.pathname.includes('/about') && !location.pathname.includes('/contact') && (
              <div className="text-center mb-16">
                <h3 className="text-3xl font-bold mb-4 text-gradient">
                  Stay Updated
                </h3>
                <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
                  Get the latest updates, tutorials, and component releases delivered to your inbox.
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
            )}            {/* Main footer content */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
              <div>
                <div className="flex items-center mb-6">
                  <Code2 className="h-8 w-8 text-brand-400" />
                  <h3 className="ml-3 text-xl font-bold">MccHub Leximius</h3>
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Building the future of professional web applications with cutting-edge React components and modern design patterns.
                </p>
                <div className="flex space-x-4">
                  <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-brand-600 transition-colors hover-lift">
                    <Github size={20} />
                  </a>
                  <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-brand-600 transition-colors hover-lift">
                    <Twitter size={20} />
                  </a>
                  <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-brand-600 transition-colors hover-lift">
                    <Linkedin size={20} />
                  </a>
                  <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-brand-600 transition-colors hover-lift">
                    <Instagram size={20} />
                  </a>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold mb-6 text-lg">Product</h4>
                <ul className="space-y-3">
                  <li><Link to="/library" className="text-gray-300 hover:text-white transition-colors hover:translate-x-1 transform duration-200 block">Components</Link></li>
                  <li><Link to="/library/getting-started" className="text-gray-300 hover:text-white transition-colors hover:translate-x-1 transform duration-200 block">Getting Started</Link></li>
                  <li><Link to="/library/playground" className="text-gray-300 hover:text-white transition-colors hover:translate-x-1 transform duration-200 block">Playground</Link></li>
                  <li><Link to="/pricing" className="text-gray-300 hover:text-white transition-colors hover:translate-x-1 transform duration-200 block">Pricing</Link></li>
                  <li><Link to="/integrations" className="text-gray-300 hover:text-white transition-colors hover:translate-x-1 transform duration-200 block">Integrations</Link></li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold mb-6 text-lg">Company</h4>
                <ul className="space-y-3">
                  <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors hover:translate-x-1 transform duration-200 block">About Us</Link></li>
                  <li><Link to="/blog" className="text-gray-300 hover:text-white transition-colors hover:translate-x-1 transform duration-200 block">Blog</Link></li>
                  <li><Link to="/contact" className="text-gray-300 hover:text-white transition-colors hover:translate-x-1 transform duration-200 block">Contact</Link></li>
                  <li><Link to="/careers" className="text-gray-300 hover:text-white transition-colors hover:translate-x-1 transform duration-200 block">Careers</Link></li>
                  <li><Link to="/press" className="text-gray-300 hover:text-white transition-colors hover:translate-x-1 transform duration-200 block">Press Kit</Link></li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold mb-6 text-lg">Support</h4>
                <ul className="space-y-3">
                  <li><Link to="/help" className="text-gray-300 hover:text-white transition-colors hover:translate-x-1 transform duration-200 block">Help Center</Link></li>
                  <li><Link to="/docs" className="text-gray-300 hover:text-white transition-colors hover:translate-x-1 transform duration-200 block">Documentation</Link></li>
                  <li><Link to="/community" className="text-gray-300 hover:text-white transition-colors hover:translate-x-1 transform duration-200 block">Community</Link></li>
                  <li><Link to="/legal/privacy" className="text-gray-300 hover:text-white transition-colors hover:translate-x-1 transform duration-200 block">Privacy Policy</Link></li>
                  <li><Link to="/legal/terms" className="text-gray-300 hover:text-white transition-colors hover:translate-x-1 transform duration-200 block">Terms of Service</Link></li>
                </ul>
              </div>
            </div>
            
            {/* Bottom section */}
            <div className="pt-8 border-t border-gray-800">
              <div className="flex flex-col md:flex-row justify-between items-center">
                <p className="text-gray-400 text-sm">
                  &copy; 2025 MccHub Leximius. All rights reserved. Built with ❤️ and React.
                </p>
                <div className="flex items-center space-x-6 mt-4 md:mt-0">
                  <span className="text-gray-400 text-sm">Made with</span>
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded animate-pulse"></div>
                    <span className="text-sm text-gray-300">TypeScript</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-gradient-to-r from-cyan-500 to-blue-500 rounded animate-pulse"></div>
                    <span className="text-sm text-gray-300">React</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      )}
    </div>
  )
}
