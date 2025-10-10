'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import Link from 'next/link'
import { Calendar, User, ArrowRight, Search, Tag } from 'lucide-react'

const Blog = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [searchTerm, setSearchTerm] = useState('')
  const [activeCategory, setActiveCategory] = useState('all')

  const blogPosts = [
    {
      id: 1,
      title: 'Empowering Education: Sharing School Supplies',
      excerpt: 'A team of 10 dedicated volunteers came together to collect and distribute essential school materials to underprivileged students, helping them start the school year with confidence and hope.',
      content: 'Full article content here...',
      image: '/heroscared.avif',
      author: 'Admin',
      date: '2024-01-15',
      category: 'Projects',
      tags: ['Social', 'Education', 'Community'],
      readTime: '5 min read'
    },
    // {
    //   id: 2,
    //   title: 'Volunteer Spotlight: Meet Jean-Baptiste',
    //   excerpt: 'Learn about Jean-Baptiste\'s journey from community member to project coordinator and how he\'s making a difference in his hometown.',
    //   content: 'Full article content here...',
    //   image: '/heroscared.avif',
    //   author: 'Maria Rodriguez',
    //   date: '2024-01-10',
    //   category: 'Volunteers',
    //   tags: ['Volunteer', 'Community', 'Leadership'],
    //   readTime: '3 min read'
    // },
    // {
    //   id: 3,
    //   title: 'Education Center Opens Its Doors',
    //   excerpt: 'After months of construction, our new education center in Toamasina is now open and welcoming students from the surrounding communities.',
    //   content: 'Full article content here...',
    //   image: '/heroscared.avif',
    //   author: 'Dr. Ahmed Hassan',
    //   date: '2024-01-05',
    //   category: 'Education',
    //   tags: ['Education', 'Construction', 'Students'],
    //   readTime: '4 min read'
    // },
    // {
    //   id: 4,
    //   title: 'Emergency Relief Response Update',
    //   excerpt: 'Our emergency response team has been working around the clock to provide aid to communities affected by recent flooding in the region.',
    //   content: 'Full article content here...',
    //   image: '/heroscared.avif',
    //   author: 'Emergency Response Team',
    //   date: '2024-01-01',
    //   category: 'Emergency',
    //   tags: ['Emergency', 'Relief', 'Flooding'],
    //   readTime: '6 min read'
    // },
    // {
    //   id: 5,
    //   title: 'Women\'s Empowerment Program Success Stories',
    //   excerpt: 'Three inspiring stories from women who have transformed their lives through our empowerment program and are now community leaders.',
    //   content: 'Full article content here...',
    //   image: '/heroscared.avif',
    //   author: 'Sarah Johnson',
    //   date: '2023-12-28',
    //   category: 'Social',
    //   tags: ['Women', 'Empowerment', 'Success'],
    //   readTime: '7 min read'
    // },
    // {
    //   id: 6,
    //   title: 'Annual Impact Report 2023',
    //   excerpt: 'A comprehensive look at our achievements, challenges, and impact throughout 2023, including key statistics and future goals.',
    //   content: 'Full article content here...',
    //   image: '/heroscared.avif',
    //   author: 'Executive Team',
    //   date: '2023-12-20',
    //   category: 'Reports',
    //   tags: ['Impact', 'Annual Report', 'Statistics'],
    //   readTime: '10 min read'
    // }
  ]

  const categories = ['all', 'Projects', 'Volunteers', 'Education', 'Emergency', 'Social', 'Reports']

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    const matchesCategory = activeCategory === 'all' || post.category === activeCategory
    return matchesSearch && matchesCategory
  })

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 via-white to-secondary/10">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Blog & News
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay updated with our latest projects, success stories, volunteer spotlights, 
              and news from communities across Madagascar.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 bg-white border-b">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors duration-200 ${
                    activeCategory === category
                      ? 'bg-primary text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category === 'all' ? 'All' : category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-12 bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-2xl shadow-lg overflow-hidden"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative">
                <img
                  src={blogPosts[0].image}
                  alt={blogPosts[0].title}
                  className="w-full h-64 lg:h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                    Featured
                  </span>
                </div>
              </div>
              <div className="p-8">
                <div className="flex items-center space-x-4 text-sm text-gray-600 mb-4">
                  <span className="flex items-center">
                    <User className="h-4 w-4 mr-1" />
                    {blogPosts[0].author}
                  </span>
                  <span className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    {new Date(blogPosts[0].date).toLocaleDateString()}
                  </span>
                  <span>{blogPosts[0].readTime}</span>
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  {blogPosts[0].title}
                </h2>
                <p className="text-gray-600 mb-6">
                  {blogPosts[0].excerpt}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {blogPosts[0].tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <Link
                  // href={`/blog/${blogPosts[0].id}`}
                  href="#"
                  className="btn-primary inline-flex items-center group"
                >
                  Read More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section ref={ref} className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.slice(1).map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 px-3 py-1 rounded-full text-sm font-medium text-gray-700">
                      {post.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center space-x-4 text-sm text-gray-600 mb-3">
                    <span className="flex items-center">
                      <User className="h-4 w-4 mr-1" />
                      {post.author}
                    </span>
                    <span className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {new Date(post.date).toLocaleDateString()}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.slice(0, 2).map((tag) => (
                      <span
                        key={tag}
                        className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{post.readTime}</span>
                    <Link
                      href={`/blog/${post.id}`}
                      className="text-primary hover:text-blue-700 font-medium text-sm flex items-center group"
                    >
                      Read More
                      <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <p className="text-gray-500 text-lg">No articles found matching your search criteria.</p>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  )
}

export default Blog



