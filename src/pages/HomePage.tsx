import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Star, Users, Zap, Shield, Code2, Sparkles, Rocket, Globe, ChevronRight } from 'lucide-react'

export const HomePage: React.FC = () => {
  return (
    <div className="bg-white overflow-hidden">
      {/* Modern Hero Section */}
      <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-white to-brand-50">
        {/* Background decorations */}
        <div className="absolute inset-0 bg-mesh opacity-30"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-radial from-brand-400/20 to-transparent rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-radial from-purple-400/20 to-transparent rounded-full blur-3xl animate-pulse-slow" style={{animationDelay: '1s'}}></div>
        
        {/* Floating elements */}
        <div className="absolute top-20 right-20 animate-float">
          <div className="w-16 h-16 bg-gradient-to-r from-brand-500 to-purple-600 rounded-2xl rotate-12 shadow-elegant-lg"></div>
        </div>
        <div className="absolute bottom-32 left-20 animate-float" style={{animationDelay: '2s'}}>
          <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl -rotate-12 shadow-elegant"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-brand-50 border border-brand-200 rounded-full text-brand-700 text-sm font-medium mb-8 animate-fade-in-up">
            <Sparkles className="w-4 h-4 mr-2" />
            Introducing MccHub Leximius v2.0
            <ChevronRight className="w-4 h-4 ml-2" />
          </div>
          
          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 animate-fade-in-up" style={{animationDelay: '0.1s'}}>
            <span className="block text-gray-900 mb-2">Build with</span>
            <span className="block bg-gradient-to-r from-brand-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-shimmer bg-[length:200%_100%]">
              Next-Gen Components
            </span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            The most advanced React component library for building beautiful, accessible, and performant web applications. 
            <span className="text-brand-600 font-semibold"> 50+ components</span>, TypeScript-first, and production-ready.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-fade-in-up" style={{animationDelay: '0.3s'}}>
            <Link 
              to="/library" 
              className="group bg-gradient-to-r from-brand-600 to-purple-600 text-white px-8 py-4 rounded-2xl font-semibold hover:from-brand-700 hover:to-purple-700 transition-all duration-300 inline-flex items-center shadow-elegant-lg hover:shadow-glow transform hover:-translate-y-0.5"
            >
              <Code2 className="mr-3 group-hover:animate-pulse" size={20} />
              Explore Components
              <ArrowRight className="ml-3 group-hover:translate-x-1 transition-transform" size={20} />
            </Link>
            <Link 
              to="/library/playground" 
              className="group bg-white text-gray-900 border-2 border-gray-200 px-8 py-4 rounded-2xl font-semibold hover:border-brand-300 hover:bg-brand-50 transition-all duration-300 inline-flex items-center shadow-elegant hover:shadow-elegant-lg"
            >
              <Rocket className="mr-3 group-hover:animate-bounce" size={20} />
              Try Playground
            </Link>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto animate-fade-in-up" style={{animationDelay: '0.4s'}}>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 mb-1">50+</div>
              <div className="text-sm text-gray-600">Components</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 mb-1">100%</div>
              <div className="text-sm text-gray-600">TypeScript</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 mb-1">99.9%</div>
              <div className="text-sm text-gray-600">Uptime</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 mb-1">10k+</div>
              <div className="text-sm text-gray-600">Developers</div>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Advanced Features Section */}
      <div className="py-32 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 bg-brand-50 border border-brand-200 rounded-full text-brand-700 text-sm font-medium mb-6">
              <Zap className="w-4 h-4 mr-2" />
              Powerful Features
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Everything you need to{" "}
              <span className="text-gradient">succeed</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Built with modern development practices and designed for teams that ship fast.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="group card-elevated p-8 hover-lift hover:shadow-glow transition-all duration-500">
              <div className="w-16 h-16 bg-gradient-to-r from-brand-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Zap className="text-white" size={28} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Lightning Fast</h3>
              <p className="text-gray-600 leading-relaxed">
                Optimized for performance with tree-shaking, lazy loading, and minimal bundle size. 
                Built for speed without compromising functionality.
              </p>
              <div className="mt-6 flex items-center text-brand-600 font-medium group-hover:translate-x-2 transition-transform duration-300">
                Learn more 
                <ArrowRight size={16} className="ml-2" />
              </div>
            </div>
            
            {/* Feature 2 */}
            <div className="group card-elevated p-8 hover-lift hover:shadow-glow transition-all duration-500" style={{animationDelay: '0.1s'}}>
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Shield className="text-white" size={28} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Type Safe</h3>
              <p className="text-gray-600 leading-relaxed">
                100% TypeScript with comprehensive type definitions, excellent IntelliSense support, 
                and compile-time error checking for bulletproof development.
              </p>
              <div className="mt-6 flex items-center text-brand-600 font-medium group-hover:translate-x-2 transition-transform duration-300">
                Learn more 
                <ArrowRight size={16} className="ml-2" />
              </div>
            </div>
            
            {/* Feature 3 */}
            <div className="group card-elevated p-8 hover-lift hover:shadow-glow transition-all duration-500" style={{animationDelay: '0.2s'}}>
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Users className="text-white" size={28} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Team Focused</h3>
              <p className="text-gray-600 leading-relaxed">
                Designed for collaborative development with consistent design tokens, 
                comprehensive theming, and scalable component architecture.
              </p>
              <div className="mt-6 flex items-center text-brand-600 font-medium group-hover:translate-x-2 transition-transform duration-300">
                Learn more 
                <ArrowRight size={16} className="ml-2" />
              </div>
            </div>
            
            {/* Feature 4 */}
            <div className="group card-elevated p-8 hover-lift hover:shadow-glow transition-all duration-500" style={{animationDelay: '0.3s'}}>
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Code2 className="text-white" size={28} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Developer First</h3>
              <p className="text-gray-600 leading-relaxed">
                Intuitive APIs, comprehensive documentation, live examples, and a powerful 
                playground for rapid prototyping and experimentation.
              </p>
              <div className="mt-6 flex items-center text-brand-600 font-medium group-hover:translate-x-2 transition-transform duration-300">
                Learn more 
                <ArrowRight size={16} className="ml-2" />
              </div>
            </div>
            
            {/* Feature 5 */}
            <div className="group card-elevated p-8 hover-lift hover:shadow-glow transition-all duration-500" style={{animationDelay: '0.4s'}}>
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Sparkles className="text-white" size={28} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Accessible</h3>
              <p className="text-gray-600 leading-relaxed">
                Built following WAI-ARIA guidelines with keyboard navigation, screen reader support, 
                and WCAG 2.1 AA compliance out of the box.
              </p>
              <div className="mt-6 flex items-center text-brand-600 font-medium group-hover:translate-x-2 transition-transform duration-300">
                Learn more 
                <ArrowRight size={16} className="ml-2" />
              </div>
            </div>
            
            {/* Feature 6 */}
            <div className="group card-elevated p-8 hover-lift hover:shadow-glow transition-all duration-500" style={{animationDelay: '0.5s'}}>
              <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Rocket className="text-white" size={28} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Production Ready</h3>
              <p className="text-gray-600 leading-relaxed">
                Battle-tested in production by thousands of developers. Comprehensive testing, 
                regular updates, and enterprise-grade reliability.
              </p>
              <div className="mt-6 flex items-center text-brand-600 font-medium group-hover:translate-x-2 transition-transform duration-300">
                Learn more 
                <ArrowRight size={16} className="ml-2" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Advanced Social Proof */}
      <div className="py-24 bg-gradient-to-r from-gray-50 to-brand-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Trusted by industry leaders
            </h3>
            <div className="flex items-center justify-center space-x-2 mb-8">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 fill-current" size={24} />
                ))}
              </div>
              <span className="text-lg text-gray-600 ml-4">4.9/5 from 2,000+ developers</span>
            </div>
            <p className="text-lg text-gray-600 mb-12">
              Join thousands of developers building the future with MccHub Leximius
            </p>
          </div>
          
          {/* Company logos */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center opacity-60 mb-16">
            {['TechCorp', 'InnovateInc', 'FutureSoft', 'DesignCo', 'BuildStudio'].map((company, index) => (
              <div key={index} className="flex items-center justify-center h-16 hover:opacity-100 transition-opacity">
                <div className="text-2xl font-bold text-gray-400 hover:text-gray-600 transition-colors">
                  {company}
                </div>
              </div>
            ))}
          </div>
          
          {/* Testimonials */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card-glass p-8 text-center">
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 fill-current" size={16} />
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">
                "MccHub Leximius has completely transformed our development workflow. The components are beautiful and the TypeScript support is incredible."
              </p>
              <div className="flex items-center justify-center">
                <div className="w-12 h-12 bg-gradient-to-r from-brand-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                  JS
                </div>
                <div>
                  <div className="font-semibold text-gray-900">John Smith</div>
                  <div className="text-sm text-gray-600">Lead Developer, TechCorp</div>
                </div>
              </div>
            </div>
            
            <div className="card-glass p-8 text-center">
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 fill-current" size={16} />
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">
                "The accessibility features and documentation are top-notch. Our entire team adopted it within a week. Game changer!"
              </p>
              <div className="flex items-center justify-center">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                  SM
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Sarah Miller</div>
                  <div className="text-sm text-gray-600">Product Manager, InnovateInc</div>
                </div>
              </div>
            </div>
            
            <div className="card-glass p-8 text-center">
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 fill-current" size={16} />
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">
                "Outstanding component library with excellent performance. The playground feature helps us prototype incredibly fast."
              </p>
              <div className="flex items-center justify-center">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                  MJ
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Mike Johnson</div>
                  <div className="text-sm text-gray-600">CTO, FutureSoft</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modern CTA Section */}
      <div className="relative py-32 bg-gray-900 overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 bg-mesh opacity-20"></div>
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-gradient-radial from-brand-500/30 to-transparent rounded-full blur-3xl"></div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <div className="inline-flex items-center px-4 py-2 bg-brand-900/50 border border-brand-700 rounded-full text-brand-300 text-sm font-medium mb-6">
              <Rocket className="w-4 h-4 mr-2" />
              Ready to Launch?
            </div>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Start building{" "}
            <span className="bg-gradient-to-r from-brand-400 to-purple-400 bg-clip-text text-transparent">
              amazing experiences
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
            Join thousands of developers who are already building the future with MccHub Leximius. 
            Get started today with our comprehensive component library.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <Link 
              to="/library" 
              className="group bg-gradient-to-r from-brand-600 to-purple-600 text-white px-10 py-5 rounded-2xl font-bold hover:from-brand-700 hover:to-purple-700 transition-all duration-300 inline-flex items-center shadow-elegant-lg hover:shadow-glow transform hover:-translate-y-1 text-lg"
            >
              <Code2 className="mr-3 group-hover:animate-pulse" size={24} />
              Start Building Now
              <ArrowRight className="ml-3 group-hover:translate-x-1 transition-transform" size={24} />
            </Link>
            
            <Link 
              to="/contact" 
              className="group text-gray-300 hover:text-white px-10 py-5 rounded-2xl font-semibold border-2 border-gray-700 hover:border-brand-500 transition-all duration-300 inline-flex items-center text-lg"
            >
              Talk to Sales
              <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </Link>
          </div>
          
          {/* Additional stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto text-center">
            <div>
              <div className="text-3xl font-bold text-white mb-2">14-day</div>
              <div className="text-gray-400">Free Trial</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-2">24/7</div>
              <div className="text-gray-400">Support</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-2">99.9%</div>
              <div className="text-gray-400">Uptime SLA</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}