'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Calendar, Clock, MapPin, Users, Heart, ArrowRight } from 'lucide-react'

const VolunteerOpportunities = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const opportunities = [
    {
      id: 1,
      title: 'Education Volunteer',
      description: 'Help teach English, math, and science to children in rural schools. No teaching experience required - we provide training.',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      duration: '2-12 weeks',
      location: 'Antananarivo Region',
      commitment: 'Part-time',
      skills: ['Teaching', 'Communication', 'Patience'],
      requirements: ['18+ years old', 'English fluency', 'Background check']
    },
    {
      id: 2,
      title: 'Healthcare Assistant',
      description: 'Support our mobile healthcare units by assisting with patient care, health education, and community outreach programs.',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      duration: '1-6 months',
      location: 'Multiple Regions',
      commitment: 'Full-time',
      skills: ['Healthcare', 'Compassion', 'Organization'],
      requirements: ['Medical background preferred', '18+ years old', 'Health clearance']
    },
    {
      id: 3,
      title: 'Construction Volunteer',
      description: 'Help build schools, water wells, and community centers. Work alongside local builders and learn traditional construction techniques.',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      duration: '2-8 weeks',
      location: 'Toamasina Province',
      commitment: 'Full-time',
      skills: ['Construction', 'Teamwork', 'Physical fitness'],
      requirements: ['18+ years old', 'Physical fitness', 'Safety training']
    },
    {
      id: 4,
      title: 'Community Development Coordinator',
      description: 'Work with local leaders to identify community needs, develop programs, and implement sustainable development initiatives.',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      duration: '3-12 months',
      location: 'Fianarantsoa Region',
      commitment: 'Full-time',
      skills: ['Project Management', 'Leadership', 'Cultural Sensitivity'],
      requirements: ['Bachelor\'s degree', '2+ years experience', 'French/Malagasy helpful']
    },
    {
      id: 5,
      title: 'Women\'s Empowerment Mentor',
      description: 'Support women in starting businesses, developing skills, and becoming community leaders through our empowerment programs.',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      duration: '1-6 months',
      location: 'Antsiranana Region',
      commitment: 'Part-time',
      skills: ['Mentoring', 'Business', 'Empathy'],
      requirements: ['21+ years old', 'Business experience', 'Cultural sensitivity']
    },
    {
      id: 6,
      title: 'Remote Volunteer',
      description: 'Support our mission from anywhere in the world through virtual volunteering in areas like translation, fundraising, and social media.',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      duration: 'Flexible',
      location: 'Remote',
      commitment: 'Flexible',
      skills: ['Digital Skills', 'Communication', 'Self-motivation'],
      requirements: ['Reliable internet', 'Computer skills', 'Commitment to schedule']
    }
  ]

  return (
    <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {opportunities.map((opportunity, index) => (
        <motion.div
          key={opportunity.id}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: index * 0.1 }}
          className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
        >
          <div className="relative">
            <img
              src={opportunity.image}
              alt={opportunity.title}
              className="w-full h-48 object-cover"
            />
            <div className="absolute top-4 right-4">
              <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                {opportunity.commitment}
              </span>
            </div>
          </div>
          
          <div className="p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              {opportunity.title}
            </h3>
            <p className="text-gray-600 mb-4">
              {opportunity.description}
            </p>
            
            <div className="space-y-3 mb-6">
              <div className="flex items-center text-sm text-gray-600">
                <Calendar className="h-4 w-4 mr-2 text-primary" />
                {opportunity.duration}
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <MapPin className="h-4 w-4 mr-2 text-primary" />
                {opportunity.location}
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <Clock className="h-4 w-4 mr-2 text-primary" />
                {opportunity.commitment} commitment
              </div>
            </div>

            <div className="mb-6">
              <h4 className="font-semibold text-gray-900 mb-2">Required Skills:</h4>
              <div className="flex flex-wrap gap-2">
                {opportunity.skills.map((skill) => (
                  <span
                    key={skill}
                    className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <h4 className="font-semibold text-gray-900 mb-2">Requirements:</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                {opportunity.requirements.map((requirement, reqIndex) => (
                  <li key={reqIndex} className="flex items-start">
                    <Heart className="h-3 w-3 text-red-500 mr-2 mt-1" />
                    {requirement}
                  </li>
                ))}
              </ul>
            </div>

            <button className="w-full btn-outline flex items-center justify-center group">
              Apply Now
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </motion.div>
      ))}
    </div>
  )
}

export default VolunteerOpportunities






