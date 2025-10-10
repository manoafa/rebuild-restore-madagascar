'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'
import { ArrowRight, Heart, Users, BookPlus, Share2 } from 'lucide-react'

const CallToAction = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section ref={ref} className="py-20 bg-gradient-to-r from-primary to-secondary">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center text-white"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Ready to Make a Difference?
          </h2>
          <p className="text-xl text-blue-100 mb-12 max-w-3xl mx-auto">
            Join the movement and be among the pioneering supporters making a difference. Whether through donations, volunteering, or spreading awareness, your involvement helps build powerful impact.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <Link href="/donate">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-center cursor-pointer group"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-4 transition-transform duration-300 group-hover:scale-125">
                  <Heart className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Donate</h3>
                <p className="text-blue-100">
                  Support our projects with a one-time or recurring donation
                </p>
              </motion.div>
            </Link>

            <Link href="/volunteer">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-center cursor-pointer group"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-4 transition-transform duration-300 group-hover:scale-125">
                  <Users className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Volunteer</h3>
                <p className="text-blue-100">
                  Join our team and make a hands-on impact in communities
                </p>
              </motion.div>
            </Link>

            <Link href="/blog">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-center cursor-pointer group"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-4 transition-transform duration-300 group-hover:scale-125">
                  <BookPlus className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Pray</h3>
                <p className="text-blue-100">
                  Lift us up in prayer and join our prayer community
                </p>
              </motion.div>
            </Link>

            <Link href="/contact">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="text-center cursor-pointer group"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-4 transition-transform duration-300 group-hover:scale-125">
                  <Share2 className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Share</h3>
                <p className="text-blue-100">
                  Help us spread the word and reach more supporters
                </p>
              </motion.div>
            </Link>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              href="/donate"
              className="bg-white text-primary px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors duration-200 inline-flex items-center justify-center group"
            >
              Donate Now
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <Link
              href="/volunteer"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-secondary transition-colors duration-200 inline-flex items-center justify-center group"
            >
              Become a Volunteer
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default CallToAction

