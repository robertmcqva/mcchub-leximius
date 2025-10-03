import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Layout } from './components/Layout'
import { HomePage } from './pages/HomePage'
import { AboutPage } from './pages/AboutPage'
import { ServicesPage } from './pages/ServicesPage'
import { PricingPage } from './pages/PricingPage'
import { ContactPage } from './pages/ContactPage'
import { BlogPage } from './pages/BlogPage'
import { LoginPage } from './pages/auth/LoginPage'
import { RegisterPage } from './pages/auth/RegisterPage'
import { Dashboard } from './pages/dashboard/Dashboard'
import { ProfilePage } from './pages/profile/ProfilePage'
import { ProjectsPage } from './pages/projects/ProjectsPage'
import { AnalyticsPage } from './pages/analytics/AnalyticsPage'
import { AdminPanel } from './pages/admin/AdminPanel'
import { NotFoundPage } from './pages/NotFoundPage'
import { ProtectedRoute } from './components/ProtectedRoute'
import { AdminRoute } from './components/AdminRoute'
// Leximius Library Pages
import { LibraryOverviewPage } from './pages/library/LibraryOverviewPage'
import { ComponentsPage } from './pages/library/ComponentsPage'
import { ComponentDetailPage } from './pages/library/ComponentDetailPage'
import { GettingStartedPage } from './pages/library/GettingStartedPage'
import { PlaygroundPage } from './pages/library/PlaygroundPage'

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<BlogPage />} />
          
          {/* Leximius Library Routes */}
          <Route path="/library" element={<LibraryOverviewPage />} />
          <Route path="/library/getting-started" element={<GettingStartedPage />} />
          <Route path="/library/components" element={<ComponentsPage />} />
          <Route path="/library/playground" element={<PlaygroundPage />} />
          <Route path="/library/components/:componentName" element={<ComponentDetailPage componentName="Button" />} />
          
          {/* Auth Routes */}
          <Route path="/auth/login" element={<LoginPage />} />
          <Route path="/auth/register" element={<RegisterPage />} />
          
          {/* Protected User Routes */}
          <Route path="/dashboard" element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          } />
          <Route path="/profile" element={
            <ProtectedRoute>
              <ProfilePage />
            </ProtectedRoute>
          } />
          <Route path="/projects" element={
            <ProtectedRoute>
              <ProjectsPage />
            </ProtectedRoute>
          } />
          <Route path="/analytics" element={
            <ProtectedRoute>
              <AnalyticsPage />
            </ProtectedRoute>
          } />
          
          {/* Admin Routes */}
          <Route path="/admin/*" element={
            <AdminRoute>
              <AdminPanel />
            </AdminRoute>
          } />
          
          {/* 404 Route */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App