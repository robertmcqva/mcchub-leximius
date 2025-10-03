import { useLocation } from 'react-router-dom'
import { useMemo } from 'react'

interface BreadcrumbItem {
  label: string
  href?: string
  current?: boolean
}

// Route mapping for custom breadcrumb labels and paths
const routeMapping: Record<string, { label: string; parent?: string }> = {
  '/': { label: 'Home' },
  '/about': { label: 'About Us' },
  '/services': { label: 'Services' },
  '/pricing': { label: 'Pricing' },
  '/contact': { label: 'Contact' },
  '/blog': { label: 'Blog' },
  '/docs': { label: 'Documentation' },
  
  // Library routes
  '/library': { label: 'Components' },
  '/library/getting-started': { label: 'Getting Started', parent: '/library' },
  '/library/components': { label: 'Component Library', parent: '/library' },
  '/library/playground': { label: 'Playground', parent: '/library' },
  
  // Auth routes
  '/auth/login': { label: 'Sign In' },
  '/auth/register': { label: 'Sign Up' },
  
  // Protected routes
  '/dashboard': { label: 'Dashboard' },
  '/profile': { label: 'Profile' },
  '/projects': { label: 'Projects' },
  '/analytics': { label: 'Analytics' },
  
  // Legal routes
  '/legal/privacy': { label: 'Privacy Policy' },
  '/legal/terms': { label: 'Terms of Service' },
  
  // Admin routes
  '/admin': { label: 'Admin Panel' },
}

export const useBreadcrumbs = (): BreadcrumbItem[] => {
  const location = useLocation()
  
  return useMemo(() => {
    const pathname = location.pathname
    const breadcrumbs: BreadcrumbItem[] = []
    
    // Handle root path
    if (pathname === '/') {
      return [{ label: 'Home', href: '/', current: true }]
    }
    
    // Handle specific routes
    const routeConfig = routeMapping[pathname]
    if (routeConfig) {
      // Add parent breadcrumb if exists
      if (routeConfig.parent) {
        const parentConfig = routeMapping[routeConfig.parent]
        if (parentConfig) {
          breadcrumbs.push({
            label: parentConfig.label,
            href: routeConfig.parent
          })
        }
      }
      
      // Add current page
      breadcrumbs.push({
        label: routeConfig.label,
        current: true
      })
      
      return breadcrumbs
    }
    
    // Handle dynamic routes (like /blog/:slug or /library/components/:componentName)
    const pathSegments = pathname.split('/').filter(Boolean)
    
    for (let i = 0; i < pathSegments.length; i++) {
      const currentPath = '/' + pathSegments.slice(0, i + 1).join('/')
      const config = routeMapping[currentPath]
      
      if (config) {
        breadcrumbs.push({
          label: config.label,
          href: i === pathSegments.length - 1 ? undefined : currentPath,
          current: i === pathSegments.length - 1
        })
      } else {
        // Fallback for unmapped routes
        const segment = pathSegments[i]
        const label = segment
          .split('-')
          .map(word => word.charAt(0).toUpperCase() + word.slice(1))
          .join(' ')
        
        breadcrumbs.push({
          label,
          href: i === pathSegments.length - 1 ? undefined : currentPath,
          current: i === pathSegments.length - 1
        })
      }
    }
    
    return breadcrumbs
  }, [location.pathname])
}

// Helper function to determine if breadcrumbs should be shown
export const shouldShowBreadcrumbs = (pathname: string): boolean => {
  // Never show breadcrumbs on home page
  if (pathname === '/') return false
  
  // Don't show breadcrumbs on auth pages (they have their own back navigation)
  if (pathname.startsWith('/auth/')) return false
  
  // Don't show breadcrumbs on top-level pages that are directly accessible from main nav
  // These pages are already clearly indicated in the navigation
  const topLevelNavPages = ['/about', '/services', '/pricing', '/contact', '/blog']
  if (topLevelNavPages.includes(pathname)) return false
  
  // Don't show breadcrumbs on dashboard root or simple dashboard pages
  // Dashboard has its own navigation structure
  const dashboardPages = ['/dashboard', '/profile', '/projects', '/analytics', '/admin']
  if (dashboardPages.includes(pathname)) return false
  
  // Show breadcrumbs where they provide real navigation value:
  const shouldShow = 
    pathname.startsWith('/library/') ||           // Library subsections (Components > Getting Started)
    pathname.startsWith('/docs/') ||              // Documentation subsections
    pathname.startsWith('/legal/') ||             // Legal pages (not in main nav)
    pathname.startsWith('/coming-soon') ||        // Coming soon pages
    pathname.includes('/components/') ||          // Individual component pages
    pathname.split('/').filter(Boolean).length > 2 // Deep nested paths (3+ levels)
  
  return shouldShow
}

// Helper function to get navigation context for dead-end pages
export const getNavigationContext = (pathname: string) => {
  const contexts = {
    '/auth/login': {
      title: 'Welcome back',
      subtitle: 'Sign in to your account',
      backLink: { href: '/', label: 'Back to Home' },
      alternativeAction: { href: '/auth/register', label: "Don't have an account? Sign up" }
    },
    '/auth/register': {
      title: 'Join MccHub Leximius',
      subtitle: 'Create your account to get started',
      backLink: { href: '/', label: 'Back to Home' },
      alternativeAction: { href: '/auth/login', label: 'Already have an account? Sign in' }
    },
    '/legal/privacy': {
      title: 'Privacy Policy',
      subtitle: 'How we protect your data',
      backLink: { href: '/', label: 'Back to Home' },
    },
    '/legal/terms': {
      title: 'Terms of Service',
      subtitle: 'Our terms and conditions',
      backLink: { href: '/', label: 'Back to Home' },
    }
  }
  
  return contexts[pathname as keyof typeof contexts]
}