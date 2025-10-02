'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Target, Eye, Heart } from 'lucide-react'

const MissionVision = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Mission & Vision
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We are driven by a clear purpose and an ambitious vision for the future 
            of Madagascar's communities.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-gradient-to-br from-primary/5 to-primary/10 p-8 rounded-2xl"
          >
            <div className="flex items-center mb-6">
              <div className="bg-primary p-3 rounded-xl mr-4">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              To rebuild and restore communities across Madagascar by providing sustainable 
              solutions in education, healthcare, clean water, and economic development. 
              We believe in empowering local communities to create lasting change from within.
            </p>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-center">
                <Heart className="h-5 w-5 text-primary mr-3" />
                Provide essential services to underserved communities
              </li>
              <li className="flex items-center">
                <Heart className="h-5 w-5 text-primary mr-3" />
                Build sustainable infrastructure and systems
              </li>
              <li className="flex items-center">
                <Heart className="h-5 w-5 text-primary mr-3" />
                Empower local leaders and community members
              </li>
              <li className="flex items-center">
                <Heart className="h-5 w-5 text-primary mr-3" />
                Foster long-term partnerships and collaboration
              </li>
            </ul>
          </motion.div>

          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-gradient-to-br from-secondary/5 to-secondary/10 p-8 rounded-2xl"
          >
            <div className="flex items-center mb-6">
              <div className="bg-secondary p-3 rounded-xl mr-4">
                <Eye className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              A Madagascar where every community has access to quality education, 
              healthcare, clean water, and economic opportunities. We envision a 
              future where local communities are self-sufficient and thriving.
            </p>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-center">
                <Heart className="h-5 w-5 text-secondary mr-3" />
                Every child has access to quality education
              </li>
              <li className="flex items-center">
                <Heart className="h-5 w-5 text-secondary mr-3" />
                All communities have clean water and sanitation
              </li>
              <li className="flex items-center">
                <Heart className="h-5 w-5 text-secondary mr-3" />
                Healthcare services are accessible to everyone
              </li>
              <li className="flex items-center">
                <Heart className="h-5 w-5 text-secondary mr-3" />
                Economic opportunities are available locally
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default MissionVision



