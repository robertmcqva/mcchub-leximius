// Modern Always-On Breadcrumb Component
import React from 'react'
import { Link } from 'react-router-dom'
import { 
  ChevronRight, Home, Info, Settings, DollarSign, Mail, FileText, Book,
  Package, Eye, Play, Grid, Code, MousePointer, Type, Square, AlertCircle,
  Tag, User, Shield, LogIn, UserPlus, BarChart3, FolderOpen, TrendingUp,
  Scale, Users, Cog, Clock, AlertTriangle
} from 'lucide-react'

// Icon mapping for breadcrumb items
const iconMap: Record<string, React.ComponentType<any>> = {
  Home, Info, Settings, DollarSign, Mail, FileText, Book,
  Package, Eye, Play, Grid, Code, MousePointer, Type, Square, AlertCircle,
  Tag, User, Shield, LogIn, UserPlus, BarChart3, FolderOpen, TrendingUp,
  Scale, Users, Cog, Clock, AlertTriangle
}

interface BreadcrumbItem {
  label: string
  href?: string
  current?: boolean
  icon?: string
}

interface BreadcrumbProps {
  items: BreadcrumbItem[]
  className?: string
  variant?: 'default' | 'auth' | 'admin' | 'dashboard' | 'library'
  showHome?: boolean
  animated?: boolean
  compact?: boolean
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({ 
  items, 
  className = '',
  variant = 'default',
  showHome = true,
  animated = true,
  compact = false
}) => {
  // Variant-specific styling
  const variantStyles = {
    default: 'bg-white/60 border-gray-200/50',
    auth: 'bg-blue-50/80 border-blue-200/50',
    admin: 'bg-red-50/80 border-red-200/50',
    dashboard: 'bg-purple-50/80 border-purple-200/50',
    library: 'bg-green-50/80 border-green-200/50'
  }

  const variantTextColors = {
    default: 'text-gray-700',
    auth: 'text-blue-700',
    admin: 'text-red-700', 
    dashboard: 'text-purple-700',
    library: 'text-green-700'
  }

  if (items.length === 0) return null

  return (
    <div className={`sticky top-16 z-40 ${className}`}>
      <div className={`
        ${variantStyles[variant]} 
        backdrop-blur-sm border-b shadow-sm
        transition-all duration-300 ease-in-out
      `}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav 
            className={`flex items-center ${compact ? 'py-2' : 'py-3'} space-x-1`} 
            aria-label="Breadcrumb"
          >
            {/* Home icon - always visible when showHome is true */}
            {showHome && items[0]?.href !== '/' && (
              <>
                <Link 
                  to="/" 
                  className={`
                    flex items-center justify-center w-8 h-8 
                    text-gray-400 hover:text-brand-500 hover:bg-white/80 
                    transition-all duration-200 rounded-lg group
                    ${animated ? 'hover:scale-105' : ''}
                  `}
                  aria-label="Home"
                >
                  <Home size={16} className={animated ? 'group-hover:scale-110 transition-transform duration-200' : ''} />
                </Link>
                <ChevronRight size={14} className="text-gray-300 mx-1" />
              </>
            )}
            
            {items.map((item, index) => {
              const IconComponent = item.icon ? iconMap[item.icon] : null
              const isLast = index === items.length - 1
              
              return (
                <React.Fragment key={index}>
                  {item.current ? (
                    // Current page - non-clickable
                    <div className={`
                      inline-flex items-center px-3 py-1.5 text-sm font-medium 
                      ${variantTextColors[variant]} ${variantStyles[variant]} 
                      rounded-lg shadow-sm border
                      ${animated ? 'animate-in slide-in-from-right-2 duration-300' : ''}
                    `}>
                      {IconComponent && (
                        <IconComponent size={14} className="mr-2 opacity-70" />
                      )}
                      <span className="truncate max-w-[200px]">{item.label}</span>
                    </div>
                  ) : (
                    // Clickable breadcrumb link
                    <Link 
                      to={item.href || '#'} 
                      className={`
                        inline-flex items-center px-3 py-1.5 text-sm 
                        text-gray-500 hover:text-gray-700 hover:bg-white/80 
                        transition-all duration-200 rounded-lg group
                        ${animated ? 'hover:scale-[1.02]' : ''}
                      `}
                    >
                      {IconComponent && (
                        <IconComponent 
                          size={14} 
                          className={`mr-2 opacity-60 group-hover:opacity-80 ${animated ? 'group-hover:scale-110 transition-all duration-200' : ''}`} 
                        />
                      )}
                      <span className={`truncate max-w-[200px] ${animated ? 'group-hover:translate-x-0.5 transition-transform duration-200' : ''}`}>
                        {item.label}
                      </span>
                    </Link>
                  )}
                  
                  {/* Separator arrow */}
                  {!isLast && (
                    <ChevronRight 
                      size={14} 
                      className={`text-gray-300 mx-1 ${animated ? 'transition-transform duration-200' : ''}`} 
                    />
                  )}
                </React.Fragment>
              )
            })}
          </nav>
        </div>
      </div>
    </div>
  )
}

Breadcrumb.displayName = 'Breadcrumb'