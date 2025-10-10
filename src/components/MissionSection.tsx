'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { BookOpen, Lightbulb, Shield } from 'lucide-react'

const MissionSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const missions = [
    {
      icon: BookOpen,
      title: 'Support Education',
      color: 'primary',
      bgColor: 'bg-primary/10',
      iconColor: 'text-primary',
      description: 'Education, as a foundation for growth, is the cornerstone of everything we do. We believe that knowledge is power, and by encouraging and providing access to quality education, we can equip young people with the skills they need to break the cycle of poverty. This empowers them to become confident individuals who can contribute meaningfully to their communities.'
    },
    {
      icon: Lightbulb,
      title: 'Promote Creativity',
      color: 'secondary',
      bgColor: 'bg-secondary/10',
      iconColor: 'text-secondary',
      description: 'We believe that every child has the potential for greatness, and creativity is the key to unlocking it. We will provide a safe space for children to explore their artistic talents, experiment with new ideas, and express themselves freely. Through music, art, and other programs, we will nurture their creativity and encourage them to think outside the box. By fostering a culture of innovation, we will empower our young people to become the changemakers of tomorrow.'
    },
    {
      icon: Shield,
      title: 'Foster Resilience',
      color: 'primary',
      bgColor: 'bg-primary/10',
      iconColor: 'text-primary',
      description: 'Life may not be easy but we believe in fostering resilience in the young people we serve. We will create a supportive environment where they can learn from their mistakes, overcome challenges, and develop a strong ethic and character. We will equip them with the tools they need to navigate the complexities of life and build a future filled with hope and opportunity. Our ultimate goal is to see them flourish into fully fledged, honorable individuals who contribute positively to society.'
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
            Our Mission
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We are committed to empowering the next generation through three core pillars 
            that form the foundation of our work in Madagascar.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {missions.map((mission, index) => (
            <motion.div
              key={mission.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 group"
            >
              <div className="p-8">
                <div className="text-center mb-6 group">
                  <div className={`inline-flex items-center justify-center w-20 h-20 ${mission.bgColor} rounded-full mb-6 transition-transform duration-300 group-hover:animate-bounce`}>
                    <mission.icon className={`h-10 w-10 ${mission.iconColor}`} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {mission.title}
                  </h3>
                </div>
                
                <p className="text-gray-700 leading-relaxed text-center">
                  {mission.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-primary to-secondary p-8 rounded-2xl text-white">
            <h3 className="text-2xl font-bold mb-4">
              Together, We Build the Future
            </h3>
            <p className="text-lg opacity-90 max-w-3xl mx-auto">
              Through education, creativity, and resilience, we're not just changing lives—we're 
              transforming communities and building a brighter tomorrow for Madagascar.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default MissionSection
