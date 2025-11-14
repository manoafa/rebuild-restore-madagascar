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
              A hope and a future for every child and family — in Ambohimahatsinjo, Madagascar, and beyond.
            </blockquote>
            <p className="text-lg text-gray-600 mb-8">
              We long to see a nation where people live with dignity, families are cared for, and communities flourish.
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
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Rebuilding</h3>
                <p className="text-sm text-gray-600"> Laying new foundations to go from brokenness to hope</p>
              </div>
              <div className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary/10 rounded-full mb-4 transition-transform duration-300 group-hover:scale-125">
                  <Heart className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Restoration</h3>
                <p className="text-sm text-gray-600">Rekindling faith, identity, worth and beauty.</p>
              </div>
              <div className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4 transition-transform duration-300 group-hover:scale-125">
                  <Users className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Next Generation</h3>
                <p className="text-sm text-gray-600">Empowered to stand tall, dream boldly, and lead with compassion.</p>
              </div>
            </div>

            <div className="space-y-6 text-gray-700">
              <p className="text-lg leading-relaxed">
               Madagascar, a jewel of the Indian Ocean, holds immense beauty and potential. Though burdened by poverty and broken systems, hope remains. We believe true restoration begins with faith — as hearts are turned to God, lives are rebuilt, and futures renewed.
              </p>
              
              <p className="text-lg leading-relaxed">
                We envision communities built on dignity, opportunity, compassion and care, where the next generation can dream freely and live purposefully. Together, we work to transform cycles of poverty into stories of hope and renewal. At RnR, we give our all to see  Madagascar restored — its people thriving, its beauty preserved.
              </p>
              
              <p className="text-lg leading-relaxed font-semibold text-primary">
                At RnR, we give our all to see  Madagascar restored — its people thriving, its beauty preserved.

              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default VisionSection
