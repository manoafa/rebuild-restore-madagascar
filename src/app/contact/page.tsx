'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Mail, Phone, MapPin, Clock, Send, MessageCircle } from 'lucide-react'
import ContactForm from '@/components/ContactForm'
import ContactMap from '@/components/ContactMap'

const Contact = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 via-white to-secondary/10">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Get in Touch
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Have questions about our work? Want to partner with us? Or simply want to learn more? 
              We'd love to hear from you. Reach out to us through any of the channels below.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
              <div className="flex items-center">
                <MessageCircle className="h-4 w-4 mr-2 text-primary" />
                Quick Response
              </div>          
              <div className="w-px h-4 bg-gray-400"></div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2 text-primary" />
                Multiple Channels
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section ref={ref} className="py-20 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Contact Information
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the most convenient way to reach us. We're here to help and answer 
              any questions you may have about our mission and work.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-center p-6 bg-gray-50 rounded-xl hover:shadow-2xl transition-shadow duration-300 group"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary/10 rounded-full mb-4 transition-transform duration-100 group-hover:animate-pulse">
                <Mail className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Email Us</h3>
              <p className="text-gray-600 mb-4">Send us a message anytime</p>
              <a
                href="mailto:contact@rnr.mg"
                className="text-secondary hover:text-primary font-medium"
              >
                contact@rnr.mg
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center p-6 bg-gray-50 rounded-xl hover:shadow-2xl transition-shadow duration-300 group"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary/10 rounded-full mb-4 transition-transform duration-100 group-hover:animate-pulse">
                <Phone className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Call Us</h3>
              <p className="text-gray-600 mb-4">Speak with our team directly</p>
              <a
                href="tel:+261340765418"
                className="text-secondary hover:text-primary font-medium"
              >
                + 261 34 07 654 18
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-center p-6 bg-gray-50 rounded-xl hover:shadow-2xl transition-shadow duration-300 group"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4 transition-transform duration-100 group-hover:animate-pulse">
                <MapPin className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Visit Us</h3>
              <p className="text-gray-600 mb-4">Our main office location</p>
              <p className="text-gray-700 text-sm">
                AJA2 Ambohimahatsinjo<br />
                Antananarivo 101, Madagascar
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Form and Map */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Send us a Message
              </h2>
              <p className="text-gray-600 mb-8">
                Fill out the form below and we'll get back to you within 24 hours. 
                For urgent matters, please call us directly.
              </p>
              <ContactForm />
            </motion.div>

            {/* Map and Additional Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Find Us
                </h3>
                <ContactMap />
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">
                  Quick Response Times
                </h4>
                <div className="space-y-3 text-sm text-gray-600">
                  <div className="flex justify-between">
                    <span>General Inquiries:</span>
                    <span className="font-medium">Within 24 hours</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Volunteer Applications:</span>
                    <span className="font-medium">Within 48 hours</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Partnership Inquiries:</span>
                    <span className="font-medium">Within 72 hours</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Emergency Contact:</span>
                    <span className="font-medium text-red-600">Immediate</span>
                  </div>
                </div>
              </div>

              <div className="bg-primary/5 p-6 rounded-xl">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">
                  Prefer to Connect on Social Media?
                </h4>
                <p className="text-gray-600 mb-4">
                  Follow us for updates, stories, and behind-the-scenes content from our work in Madagascar.
                </p>
                <div className="flex space-x-4">
                  <a href="#" className="text-primary hover:text-blue-700">
                    Facebook
                  </a>
                  {/* <a href="#" className="text-primary hover:text-blue-700">
                    Twitter
                  </a> */}
                  <a href="#" className="text-primary hover:text-blue-700">
                    Instagram
                  </a>
                  {/* <a href="#" className="text-primary hover:text-blue-700">
                    LinkedIn
                  </a> */}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white text-justify">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find quick answers to common questions about our organization, 
              volunteering, donations, and more.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="font-semibold text-gray-900 mb-2">How can I volunteer with your organization?</h3>
              <p className="text-gray-600">Visit our volunteer page to see current opportunities and fill out our application form. We'll review your application and get back to you within 48 hours.</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="font-semibold text-gray-900 mb-2">Are donations tax-deductible?</h3>
              <p className="text-gray-600">Yes, we are a registered 501(c)(3) nonprofit organization, so all donations are tax-deductible to the full extent allowed by law. However, we are still working on extending tax-deductible eligibility for donors outside of Madagascar.</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="font-semibold text-gray-900 mb-2">How do I know my donation is being used effectively?</h3>
              <p className="text-gray-600">We maintain complete transparency in our operations. 85% of donations go directly to programs, and we provide regular impact reports and updates on our website, which we also send by email to our donors.</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="font-semibold text-gray-900 mb-2">Can I visit your projects in Madagascar?</h3>
              <p className="text-gray-600">Yes! We welcome visitors who wish to see our projects in person. While we do not organize regular group trips, we’re happy to support you in planning your visit and coordinating with our local team.</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="font-semibold text-gray-900 mb-2">How can my company partner with you?</h3>
              <p className="text-gray-600">We welcome corporate partnerships! Contact us at partner@rnr.mg to discuss collaboration opportunities.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact






