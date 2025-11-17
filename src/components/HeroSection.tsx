'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Play, Heart } from 'lucide-react'

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center -mt-20 pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div 
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/Home Banner.jpg')"
          }}
        ></div>
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      <div className="container-custom relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white space-y-8"
          >
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl lg:text-6xl font-bold leading-tight"
            >
              Rebuild & Restore
              <span className="block text-secondary">Madagascar</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-gray-200 leading-relaxed" >
              A community-driven education initiative committed to ending poverty in 
              Madagascar by empowering the next generation.
             </motion.p>
            <p className="text-xl text-gray-200 leading-relaxed">
             Join us in bringing hope and restoring lives through compassion, faith, 
             and education. Together, we can build the foundation for lasting change — 
             one child, one family, one community at a time.
             </p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                href="/donate"
                className="btn-primary text-lg px-8 py-4 flex items-center justify-center group"
              >
                Donate Now
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link
                href="/volunteer"
                className="btn-secondary text-lg px-8 py-4 flex items-center justify-center group"
              >
                Become a Volunteer
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>

            {/* <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex items-center space-x-8 text-sm text-gray-300"
            >
              <div className="flex items-center space-x-2">
                <Play className="h-4 w-4 text-secondary" />
                <span>Watch Our Story</span>
              </div>
              <div className="w-px h-4 bg-gray-400"></div>
              <div className="flex items-center space-x-2">
                <Heart className="h-4 w-4 text-red-500" />
                <span>Trusted by 10,000+ supporters</span>
              </div>
            </motion.div> */}
          </motion.div>

          {/* Image/Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative">
              <video
                src="/intro.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="rounded-2xl shadow-2xl w-full h-auto"
              >
                Your browser does not support the video tag.
              </video>
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">3+</div>
                  <div className="text-sm text-gray-600">Years of Impact</div>
                </div>
              </div>
              <div className="absolute -top-6 -right-6 bg-secondary text-white p-6 rounded-xl shadow-lg">
                <div className="text-center">
                  <div className="text-3xl font-bold">200+</div>
                  <div className="text-sm">Children helped</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
