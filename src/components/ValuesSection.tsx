'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Heart, Users, Shield, Globe, Lightbulb } from 'lucide-react'

const ValuesSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const values = [
    {
      icon: Heart,
      title: 'Compassion',
      description: 'We approach every community with empathy, understanding, and genuine care for the people we serve.'
    },
    {
      icon: Users,
      title: 'Community-Centered',
      description: 'We believe in working with communities, not for them, ensuring local voices lead the change.'
    },
    {
      icon: Shield,
      title: 'Transparency',
      description: 'We maintain complete transparency in our operations, finances, and impact reporting.'
    },
    {
      icon: Globe,
      title: 'Sustainability',
      description: 'All our projects are designed to create lasting, sustainable impact for future generations.'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'We embrace creative solutions and innovative approaches to address complex challenges.'
    },
    {
      icon: Users,
      title: 'Partnership',
      description: 'We believe in the power of partnerships, recognizing that lasting change and impact are never achieved alone.'
    }
  ]

  return (
    <section ref={ref} className="py-20 bg-gray-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Core Values
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            These fundamental principles guide everything we do and shape how we 
            approach our work in communities across Madagascar.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 text-center group"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6 transition-transform duration-500 group-hover:animate-ping group">
                <value.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {value.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ValuesSection



