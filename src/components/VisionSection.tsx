'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Heart, Globe, Users } from 'lucide-react'

const VisionSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section ref={ref} className="py-20 bg-white text-justify">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Our Vision
          </h2>
          <div className="max-w-4xl mx-auto">
            <blockquote className="text-2xl font-medium text-primary mb-8 italic">
              "Ny hazo no vanon-ko lakana, ny tany naniriany no tsara"
            </blockquote>
            <p className="text-lg text-gray-600 mb-8">
              This Malagasy saying can loosely be translated into 'a sturdy boat finds its form in fertile ground.'
            </p>
          </div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-gradient-to-br from-primary/5 to-secondary/5 p-8 rounded-2xl shadow-lg"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4 transition-transform duration-300 group-hover:scale-125">
                  <Globe className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Natural Beauty</h3>
                <p className="text-sm text-gray-600">Breathtaking jewel of the Indian Ocean</p>
              </div>
              <div className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary/10 rounded-full mb-4 transition-transform duration-300 group-hover:scale-125">
                  <Users className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Youth Potential</h3>
                <p className="text-sm text-gray-600">Vibrant demographic exceeding half the population</p>
              </div>
              <div className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4 transition-transform duration-300 group-hover:scale-125">
                  <Heart className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Our Commitment</h3>
                <p className="text-sm text-gray-600">Loving our nation and giving our all</p>
              </div>
            </div>

            <div className="space-y-6 text-gray-700">
              <p className="text-lg leading-relaxed">
                Madagascar, a breathtaking jewel of the Indian Ocean, is blessed with immeasurable natural 
                resources, but burdened by persistent poverty. Environmental degradation, climate change 
                vulnerabilities, poor infrastructure and governance issues have long strangled its development, 
                hindering our island's fight for the future where its people flourish alongside its beauty.
              </p>
              
              <p className="text-lg leading-relaxed">
                Nevertheless, decades of struggle haven't dimmed the potential for progress. Hope remains, 
                and change is on the horizon. In RnR, we believe that Madagascar's brighter future lies in 
                supporting the next generation. With a vibrant youth demographic exceeding half the population, 
                Madagascar more than just literally sits on a goldmine. Nurturing this resource carefully can 
                unlock phenomenal growth and we are here to be actors and witnesses of this change.
              </p>
              
              <p className="text-lg leading-relaxed font-semibold text-primary">
                We love our nation and desire to give our all to make it thrive.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default VisionSection
