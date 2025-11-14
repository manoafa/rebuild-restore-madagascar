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
      title: 'Children and Youth Center',
      description: 'Construction of a 3-story multi-purpose center for education, arts, and community development.',
      image: '/Center.jpg',
      category: 'Infrastructure',
      status: 'Urgent - Ongoing',
      objective: 'Provide a permanent safe space for learning, creativity, and youth empowerment.',
      situation: 'Many of our activities currently take place in temporary, overcrowded spaces. To give children a true place to grow, we are building a permanent center with classrooms, workshops, a library, dormitory, cafeteria, and play areas on a 200 m² plot.',
      initial goal: '$35,000 (first phase)',
      total budget: '$87,000',
      progress: 'Design complete; land secured; fundraising in progress; well digging started.'
      startDate: ' October 2025',
      endDate:  'February 2026'
    },
    {
      id: 2,
      title: 'English Language Class',
      description: 'Weekly English classes designed to help children and youth build language skills for future education and career opportunities.',
      image: '/English.jpg',
      category: 'Education & Capacity Building',
      objective: 'Equip participants with basic to intermediate English communication skills, giving them greater access to higher education, global information, and employment opportunities.',
      situation: ' In rural communities, students rarely have the chance to learn English effectively due to a lack of teachers and materials. Our volunteer-led classes use songs, games, and conversation practice to make learning fun and meaningful.',
      schedule: 'Offered weekly',
      startDate: 'June 2022'
    },
    {
      id: 3,
      title: 'Character and Life Education',
      description: 'A weekly “life class” that teaches kindness, respect, discipline, and good manners to help children and youth grow into responsible, compassionate citizens and christians.',
      image: '/Life.jpg',
      category: 'Education & Capacity Building',
      objective: 'Develop moral character, social responsibility, and emotional intelligence in young people.',
      situation: 'Many children lack structured guidance in personal and social values. Through storytelling, role-play, and community examples, we help them learn respect, teamwork, honesty, and empathy in a practical and engaging way.',
      schedule: 'Offered weekly',
      startDate: 'June 2022',
    },  
{
      id: 4,
      title: 'Free Meal Sharing',
      description: 'Once a week, the center shares a nutritious meal with children and youth to promote community, health, and care.',
      image: '/Food.jpg',
       category: 'Community Support',
      objective: 'Support children’s nutrition, create a sense of belonging and prevent skipping school due to hunger.',
      situation: 'Many children come to school hungry, which affects concentration, growth, and motivation. With help from local rice donations and volunteers, we offer a weekly meal that nourishes both body and spirit.',
      schedule: 'Offered weekly',
      startDate: 'June 2022',
    },  
{
      id: 5,
      title: 'Parent Workshop',
      description: 'Monthly workshops to guide parents in supporting their children’s education and well-being, including marriage, family, and financial training.',
      image: '/Parents.jpg',
      category: 'Community Support',
      objective: 'Develop moral character, social responsibility, and emotional intelligence in young people.',
      situation: ' Many parents never had the chance to receive proper guidance on parenting or communication. Our workshops, led by local family educators, provide practical tools and encouragement to help families grow together in understanding and faith.',
      schedule: 'Offered monthly',
      startDate: ' March 2024',
      endDate: ''
    },  
{
      id: 6,
      title: 'Nanofinancing Project',
      description: 'A community-based microfunding initiative where members pool small contributions together. The combined amount, supplemented by the organization, is then distributed to members in rotation as seed money to start or strengthen their personal or small business projects.',
      image: '/Farming.jpg',
      category: 'Livelihood Development',
      objective: 'Promote financial inclusion and entrepreneurship among community members by providing access to small-scale funding and encouraging collective responsibility.',
      situation: 'Many children lack structured guidance in personal and social values. Through storytelling, role-play, and community examples, we help them learn respect, teamwork, honesty, and empathy in a practical and engaging way.',
      schedule: 'Offered weekly',
      startDate: 'September 2025',
    },  
{
      id: 7,
      title: 'School Supplies Donation',
      description: 'Collection and distribution of school supplies for the most disadvantaged children in our community.',
      image: '/Supplies.jpg',
      category: 'Education & Capacity Building',
      objective: 'Ensure every child has access to basic learning materials.',
      situation: 'For many children, the lack of notebooks, pencils, or uniforms is enough to keep them out of school. We partner with donors and schools to collect and distribute essential supplies each year.',
      schedule: 'Annually',
      startDate: 'September 2024',
    },
]

  const categories = ['all', 'Infrastructure', 'Education & Capacity Building', 'Community Support', 'Livelihood Development']

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
              From infrastructure development to education and family care, each project 
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



