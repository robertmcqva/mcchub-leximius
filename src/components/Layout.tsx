import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, User, Settings, LogOut } from 'lucide-react'

interface LayoutProps {
  children: React.ReactNode
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)
  const location = useLocation()
  
  const isAuthPage = location.pathname.startsWith('/auth')
  const isDashboard = location.pathname.startsWith('/dashboard') || 
                     location.pathname.startsWith('/profile') ||
                     location.pathname.startsWith('/projects') ||
                     location.pathname.startsWith('/analytics') ||
                     location.pathname.startsWith('/admin')

  return (
    <div className="min-h-screen bg-gray-50">
      {!isAuthPage && (
        <header className="bg-white shadow-sm border-b">
          <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex items-center">
                <Link to="/" className="flex-shrink-0 flex items-center">
                  <h1 className="text-xl font-bold text-gray-900">ProApp</h1>
                </Link>
                
                {!isDashboard && (
                  <div className="hidden md:ml-6 md:flex md:space-x-8">
                    <Link to="/about" className="text-gray-500 hover:text-gray-900 px-3 py-2 text-sm font-medium">
                      About
                    </Link>
                    <Link to="/services" className="text-gray-500 hover:text-gray-900 px-3 py-2 text-sm font-medium">
                      Services
                    </Link>
                    <Link to="/pricing" className="text-gray-500 hover:text-gray-900 px-3 py-2 text-sm font-medium">
                      Pricing
                    </Link>
                    <Link to="/contact" className="text-gray-500 hover:text-gray-900 px-3 py-2 text-sm font-medium">
                      Contact
                    </Link>
                  </div>
                )}
              </div>

              <div className="flex items-center space-x-4">
                {isDashboard ? (
                  <div className="flex items-center space-x-4">
                    <Link to="/dashboard" className="text-gray-500 hover:text-gray-900">
                      Dashboard
                    </Link>
                    <Link to="/projects" className="text-gray-500 hover:text-gray-900">
                      Projects
                    </Link>
                    <Link to="/analytics" className="text-gray-500 hover:text-gray-900">
                      Analytics
                    </Link>
                    <div className="relative group">
                      <button className="flex items-center space-x-1 text-gray-500 hover:text-gray-900">
                        <User size={20} />
                      </button>
                      <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 invisible group-hover:visible">
                        <Link to="/profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                          Profile
                        </Link>
                        <Link to="/settings" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                          Settings
                        </Link>
                        <button className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                          Sign out
                        </button>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="flex items-center space-x-4">
                    <Link to="/auth/login" className="text-gray-500 hover:text-gray-900 px-3 py-2 text-sm font-medium">
                      Sign in
                    </Link>
                    <Link to="/auth/register" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium">
                      Get started
                    </Link>
                  </div>
                )}

                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="md:hidden p-2 rounded-md text-gray-400 hover:text-gray-500"
                >
                  {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
              </div>
            </div>
          </nav>
        </header>
      )}

      <main className="flex-1">
        {children}
      </main>

      {!isAuthPage && !isDashboard && (
        <footer className="bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">ProApp</h3>
                <p className="text-gray-400">Building the future of professional web applications.</p>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Product</h4>
                <ul className="space-y-2 text-gray-400">
                  <li><Link to="/features" className="hover:text-white">Features</Link></li>
                  <li><Link to="/pricing" className="hover:text-white">Pricing</Link></li>
                  <li><Link to="/integrations" className="hover:text-white">Integrations</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Company</h4>
                <ul className="space-y-2 text-gray-400">
                  <li><Link to="/about" className="hover:text-white">About</Link></li>
                  <li><Link to="/blog" className="hover:text-white">Blog</Link></li>
                  <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Support</h4>
                <ul className="space-y-2 text-gray-400">
                  <li><Link to="/help" className="hover:text-white">Help Center</Link></li>
                  <li><Link to="/legal/privacy" className="hover:text-white">Privacy</Link></li>
                  <li><Link to="/legal/terms" className="hover:text-white">Terms</Link></li>
                </ul>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
              <p>&copy; 2025 ProApp. All rights reserved.</p>
            </div>
          </div>
        </footer>
      )}
    </div>
  )
}