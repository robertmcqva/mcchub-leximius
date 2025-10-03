// Modern Breadcrumb Component
import React from 'react'
import { Link } from 'react-router-dom'
import { ChevronRight, Home } from 'lucide-react'

interface BreadcrumbItem {
  label: string
  href?: string
  current?: boolean
}

interface BreadcrumbProps {
  items: BreadcrumbItem[]
  className?: string
  showHome?: boolean
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({ 
  items, 
  className = '',
  showHome = true 
}) => {
  return (
    <nav className={`flex items-center space-x-1 ${className}`} aria-label="Breadcrumb">
      {showHome && (
        <>
          <Link 
            to="/" 
            className="flex items-center justify-center w-7 h-7 text-gray-400 hover:text-brand-500 hover:bg-white/60 transition-all duration-200 rounded-md group"
            aria-label="Home"
          >
            <Home size={14} className="group-hover:scale-105 transition-transform duration-200" />
          </Link>
          <ChevronRight size={12} className="text-gray-300 mx-0.5" />
        </>
      )}
      
      {items.map((item, index) => (
        <React.Fragment key={index}>
          {item.current ? (
            <span className="inline-flex items-center px-2 py-1 text-xs font-medium text-gray-700 bg-white/60 rounded-md shadow-xs border border-gray-200/50">
              {item.label}
            </span>
          ) : (
            <Link 
              to={item.href || '#'} 
              className="inline-flex items-center px-2 py-1 text-xs text-gray-500 hover:text-gray-700 hover:bg-white/60 transition-all duration-200 rounded-md group"
            >
              <span className="group-hover:translate-x-0.5 transition-transform duration-200">
                {item.label}
              </span>
            </Link>
          )}
          
          {index < items.length - 1 && (
            <ChevronRight size={12} className="text-gray-300 mx-0.5" />
          )}
        </React.Fragment>
      ))}
    </nav>
  )
}

Breadcrumb.displayName = 'Breadcrumb'