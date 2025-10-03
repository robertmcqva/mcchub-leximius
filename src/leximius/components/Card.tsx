// Card component for the Leximius component library
import React from 'react'
import { cn } from '../utils/cn'
import type { CardProps } from '../types'

export const Card: React.FC<CardProps> = ({
  children,
  className,
  variant = 'default',
  padding = 'md',
  hover = false,
  ...props
}) => {
  const baseClasses = 'rounded-lg'
  
  const variantClasses = {
    default: 'bg-white border border-gray-200',
    outlined: 'bg-white border-2 border-gray-300',
    elevated: 'bg-white shadow-lg border border-gray-100',
  }
  
  const paddingClasses = {
    xs: 'p-2',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
    xl: 'p-10',
  }
  
  const hoverClass = hover ? 'hover:shadow-md transition-shadow' : ''

  return (
    <div
      className={cn(
        baseClasses,
        variantClasses[variant],
        paddingClasses[padding],
        hoverClass,
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

Card.displayName = 'Card'