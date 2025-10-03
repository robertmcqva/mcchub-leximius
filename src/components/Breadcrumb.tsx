// Modern Always-On Fixed Breadcrumb Component
import React from 'react'
import { Link } from 'react-router-dom'
import { 
  ChevronRight, Home, Info, Settings, DollarSign, Mail, FileText, Book,
  Package, Eye, Play, Grid, Code, MousePointer, Type, Square, AlertCircle,
  Tag, User, Shield, LogIn, UserPlus, BarChart3, FolderOpen, TrendingUp,
  Scale, Users, Cog, Clock, AlertTriangle
} from 'lucide-react'
import { useScrollDirection } from '../hooks/useScrollDirection'

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
  const { scrollDirection, scrollY } = useScrollDirection()
  
  // Hide breadcrumb when scrolling down (after 100px) to maximize content space
  // Show when scrolling up or at top of page
  const shouldHide = scrollDirection === 'down' && scrollY > 100
  
  // Subtle variant-specific styling that complements the navbar
  const variantStyles = {
    default: 'bg-gray-50/98 border-gray-200/30',
    auth: 'bg-blue-50/98 border-blue-200/30',
    admin: 'bg-red-50/98 border-red-200/30',
    dashboard: 'bg-purple-50/98 border-purple-200/30',
    library: 'bg-green-50/98 border-green-200/30'
  }

  const variantTextColors = {
    default: 'text-gray-600',
    auth: 'text-blue-600',
    admin: 'text-red-600', 
    dashboard: 'text-purple-600',
    library: 'text-green-600'
  }

  if (items.length === 0) return null

  return (
    <div className={`
      fixed top-16 left-0 right-0 z-30 transition-transform duration-300 ease-in-out
      ${shouldHide ? '-translate-y-full' : 'translate-y-0'}
      ${className}
    `}>
      <div className={`
        ${variantStyles[variant]} 
        border-b backdrop-blur-md
        transition-all duration-300 ease-in-out
        shadow-sm hover:shadow-md
      `}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav 
            className={`flex items-center ${compact ? 'py-1.5' : 'py-2'} space-x-1`} 
            aria-label="Breadcrumb"
          >
            {/* Home icon - subtle and minimal */}
            {showHome && items[0]?.href !== '/' && (
              <>
                <Link 
                  to="/" 
                  className={`
                    flex items-center justify-center w-6 h-6 
                    text-gray-400 hover:text-brand-500 hover:bg-white/50 
                    transition-all duration-200 rounded-md group
                    ${animated ? 'hover:scale-105' : ''}
                  `}
                  aria-label="Home"
                >
                  <Home size={12} className={animated ? 'group-hover:scale-110 transition-transform duration-200' : ''} />
                </Link>
                <ChevronRight size={10} className="text-gray-300 mx-0.5" />
              </>
            )}
            
            {items.map((item, index) => {
              const IconComponent = item.icon ? iconMap[item.icon] : null
              const isLast = index === items.length - 1
              
              return (
                <React.Fragment key={index}>
                  {item.current ? (
                    // Current page - subtle highlight
                    <div className={`
                      inline-flex items-center px-2 py-1 text-xs font-medium 
                      ${variantTextColors[variant]} bg-white/60
                      rounded-md shadow-xs border border-gray-200/30
                      ${animated ? 'animate-in slide-in-from-right-1 duration-300' : ''}
                    `}>
                      {IconComponent && (
                        <IconComponent size={10} className="mr-1.5 opacity-70" />
                      )}
                      <span className="truncate max-w-[150px]">{item.label}</span>
                    </div>
                  ) : (
                    // Clickable breadcrumb link - very subtle
                    <Link 
                      to={item.href || '#'} 
                      className={`
                        inline-flex items-center px-2 py-1 text-xs 
                        text-gray-500 hover:text-gray-700 hover:bg-white/40 
                        transition-all duration-200 rounded-md group
                        ${animated ? 'hover:scale-[1.01]' : ''}
                      `}
                    >
                      {IconComponent && (
                        <IconComponent 
                          size={10} 
                          className={`mr-1.5 opacity-50 group-hover:opacity-70 ${animated ? 'group-hover:scale-105 transition-all duration-200' : ''}`} 
                        />
                      )}
                      <span className={`truncate max-w-[150px] ${animated ? 'group-hover:translate-x-0.5 transition-transform duration-200' : ''}`}>
                        {item.label}
                      </span>
                    </Link>
                  )}
                  
                  {/* Separator arrow - very subtle */}
                  {!isLast && (
                    <ChevronRight 
                      size={10} 
                      className={`text-gray-300 mx-0.5 ${animated ? 'transition-transform duration-200' : ''}`} 
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