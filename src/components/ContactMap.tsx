'use client'

import { motion } from 'framer-motion'

const ContactMap = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      className="relative"
    >
      {/* Placeholder for Google Maps - In a real implementation, you would use Google Maps API */}
      <div className="w-full h-64 bg-gray-200 rounded-lg flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
            </svg>
          </div>
          <p className="text-gray-600 font-medium">Interactive Map</p>
          <p className="text-sm text-gray-500">123 Charity Street, New York, NY 10001</p>
        </div>
      </div>
      
      {/* Map overlay with additional info */}
      <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-lg">
        <div className="flex items-center justify-between">
          <div>
            <h4 className="font-semibold text-gray-900">Our Main Office</h4>
            <p className="text-sm text-gray-600">123 Charity Street, New York, NY 10001</p>
          </div>
          <button className="bg-primary text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
            Get Directions
          </button>
        </div>
      </div>
    </motion.div>
  )
}

export default ContactMap






