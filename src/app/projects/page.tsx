'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Calendar, MapPin, Users, ArrowRight, Filter } from 'lucide-react'

const Projects = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [activeFilter, setActiveFilter] = useState('all')

  const projects = [
    {
      id: 1,
      title: 'Weekend Food Sharing',
      description: 'Providing free, nutritious meals to students after classes every Saturday to promote community care and reduce food insecurity.',
      image: '/heroscared.avif',
      status: 'Ongoing',
      category: 'Social',
      location: 'Antananarivo',
      volunteers: 12,
      progress: 75,
      startDate: '2022-09-03',
      endDate: ''
    },
    {
      id: 2,
      title: 'Education Center Construction',
      description: 'Building modern educational facilities to provide quality education for children in underserved communities.',
      image: '/heroscared.avif',
      status: 'Ongoing',
      category: 'Infrastructure',
      location: 'Antananarivo',
      volunteers: 5,
      progress: 15,
      startDate: '2025-03-01',
      endDate: ''
    },
    {
      id: 3,
      title: 'Sharing School Supplies',
      description: 'Collecting and distributing essential school materials to underprivileged students to support their education and learning success.',
      image: '/heroscared.avif',
      status: 'Completed',
      category: 'Education',
      location: 'Antananarivo',
      volunteers: 10,
      progress: 100,
      startDate: '2025-08-01',
      endDate: '2025-09-01'
    }
  ]

  const categories = ['all', 'Infrastructure', 'Education', 'Healthcare', 'Agriculture', 'Social', 'Emergency']

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter)

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
              Our Projects
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the impactful projects we're working on across Madagascar. 
              From infrastructure development to education and healthcare, each project 
              is designed to create lasting positive change.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-white border-b">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-6 py-3 rounded-lg font-medium transition-colors duration-200 ${
                  activeFilter === category
                    ? 'bg-primary text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category === 'all' ? 'All Projects' : category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section ref={ref} className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      project.status === 'Completed' 
                        ? 'bg-green-100 text-green-800' 
                        : project.status === 'Ongoing'
                        ? 'bg-blue-100 text-blue-800'
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 px-3 py-1 rounded-full text-sm font-medium text-gray-700">
                      {project.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {project.description}
                  </p>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center text-sm text-gray-600">
                      <MapPin className="h-4 w-4 mr-2 text-primary" />
                      {project.location}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Users className="h-4 w-4 mr-2 text-primary" />
                      {project.volunteers} volunteers
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Calendar className="h-4 w-4 mr-2 text-primary" />
                      {new Date(project.startDate).toLocaleDateString()} - {new Date(project.endDate).toLocaleDateString()}
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div className="mb-4">
                    <div className="flex justify-between text-sm text-gray-600 mb-1">
                      <span>Progress</span>
                      <span>{project.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-primary h-2 rounded-full transition-all duration-300"
                        style={{ width: `${project.progress}%` }}
                      ></div>
                    </div>
                  </div>

                  <button className="w-full btn-outline flex items-center justify-center group">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <p className="text-gray-500 text-lg">No projects found for the selected category.</p>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  )
}

export default Projects



