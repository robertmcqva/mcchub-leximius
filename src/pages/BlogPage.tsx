import React from 'react'
import { Link } from 'react-router-dom'
import { Calendar, User, ArrowRight } from 'lucide-react'

export const BlogPage: React.FC = () => {
  const posts = [
    {
      id: 1,
      title: "Building Scalable Web Applications with React and TypeScript",
      excerpt: "Learn best practices for creating maintainable and scalable web applications using modern React patterns and TypeScript.",
      author: "John Doe",
      date: "March 15, 2024",
      category: "Development",
      readTime: "8 min read"
    },
    {
      id: 2,
      title: "The Future of Web Development: Trends to Watch in 2024",
      excerpt: "Explore emerging technologies and trends that will shape the web development landscape in the coming year.",
      author: "Jane Smith",
      date: "March 12, 2024",
      category: "Technology",
      readTime: "6 min read"
    },
    {
      id: 3,
      title: "Optimizing Performance in Modern Web Applications",
      excerpt: "Discover techniques and tools for improving the performance of your web applications and delivering better user experiences.",
      author: "Mike Johnson",
      date: "March 10, 2024",
      category: "Performance",
      readTime: "10 min read"
    }
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Blog</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Insights, tutorials, and updates from our development team
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <article key={post.id} className="bg-white rounded-xl shadow-sm border hover:shadow-md transition-shadow">
            <div className="h-48 bg-gradient-to-r from-blue-500 to-purple-600 rounded-t-xl"></div>
            
            <div className="p-6">
              <div className="flex items-center text-sm text-gray-500 mb-3">
                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-medium">
                  {post.category}
                </span>
                <span className="mx-2">•</span>
                <span>{post.readTime}</span>
              </div>
              
              <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                {post.title}
              </h2>
              
              <p className="text-gray-600 mb-4 line-clamp-3">
                {post.excerpt}
              </p>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center text-sm text-gray-500">
                  <User size={16} className="mr-1" />
                  <span className="mr-3">{post.author}</span>
                  <Calendar size={16} className="mr-1" />
                  <span>{post.date}</span>
                </div>
                
                <Link
                  to={`/blog/${post.id}`}
                  className="text-blue-600 hover:text-blue-700 font-medium flex items-center"
                >
                  Read more
                  <ArrowRight size={16} className="ml-1" />
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
      
      <div className="text-center mt-12">
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
          Load More Posts
        </button>
      </div>
    </div>
  )
}