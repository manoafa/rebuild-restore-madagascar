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
      <div className="relative w-full h-64 rounded-lg overflow-hidden">
        {/* Google Map */}
        <iframe
          title="Google Map Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.1585987506724!2d47.50797987491259!3d-18.905800887171575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x21f07d64df59cc7b%3A0x6c92a7fbdc1a9c6b!2sAJA2%20Ambohimahatsinjo%2C%20Antananarivo%20101%2C%20Madagascar!5e0!3m2!1sen!2smg!4v1696593470585!5m2!1sen!2smg"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>

        {/* Map overlay with info */}
        <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-semibold text-gray-900">Our Main Office</h4>
              <p className="text-sm text-gray-600">
                AJA2 Ambohimahatsinjo, Antananarivo 101, Madagascar
              </p>
            </div>
            <a
              href="https://maps.app.goo.gl/iTVk7gBgHBwr15E4A"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
            >
              Get Directions
            </a>
          </div>
        </div>
      </div>

    </motion.div>
  )
}

export default ContactMap






