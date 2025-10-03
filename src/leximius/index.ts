// Leximius Component Library
// Main export file for all components, hooks, and utilities

// Components (only export components that exist)
export { Button } from './components/Button'
export { Input } from './components/Input'
export { Card } from './components/Card'
export { Badge } from './components/Badge'
export { Avatar } from './components/Avatar'
export { Alert } from './components/Alert'

// Hooks (only export hooks that exist)
export { useLocalStorage } from './hooks/useLocalStorage'
export { useToggle } from './hooks/useToggle'
export { useDebounce } from './hooks/useDebounce'
export { useClickOutside } from './hooks/useClickOutside'

// Utils
export { cn } from './utils/cn'
export * from './utils/formatters'
export * from './utils/validators'

// Types
export * from './types'

// Version
export const version = '1.0.0'