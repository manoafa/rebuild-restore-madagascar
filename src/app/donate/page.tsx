'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Heart, Shield, CreditCard, CheckCircle, ArrowRight } from 'lucide-react'

const Donate = () => {
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
              Make a Difference
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Your donation helps us continue our vital work in communities across Madagascar. 
              Every contribution, no matter the size, makes a real impact.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
              <div className="flex items-center">
                <Shield className="h-4 w-4 mr-2 text-primary" />
                Secure & Safe
              </div>
              <div className="w-px h-4 bg-gray-400"></div>
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                Transparent Impact
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Donation Options */}
      <section ref={ref} className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Donation CTA */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8 }}
              className="flex flex-col items-center justify-center"
            >
              <div className="w-full max-w-md text-center space-y-6">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Make Your Donation
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  Support our mission to rebuild and restore communities in Madagascar. 
                  Your donation helps us provide education, meals, and essential support to children and families in need.
                </p>
                
                <a
                  href="https://givebutter.com/rnrmadagascar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full py-4 px-8 bg-primary text-white text-lg font-semibold rounded-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
                >
                  <Heart className="h-6 w-6 mr-2" />
                  Donate Now via Givebutter
                </a>
                
                <p className="text-sm text-gray-500 mt-4">
                  Secure donations processed through Givebutter
                </p>
              </div>
            </motion.div>

            {/* Impact Information */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Your Impact
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4 p-4 bg-blue-50 rounded-lg">
                    <div className="bg-primary p-2 rounded-lg">
                      <Heart className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">$25</h4>
                      <p className="text-gray-600">Provides nutritious meals for children in need for one month</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4 p-4 bg-orange-50 rounded-lg">
                    <div className="bg-secondary p-2 rounded-lg">
                      <Heart className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">$50</h4>
                      <p className="text-gray-600">Supplies a child with school materials and meals for one month</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4 p-4 bg-green-50 rounded-lg">
                    <div className="bg-green-500 p-2 rounded-lg">
                      <Heart className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">$100</h4>
                      <p className="text-gray-600">Supports after-school programs and tutoring for several children</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4 p-4 bg-purple-50 rounded-lg">
                    <div className="bg-purple-500 p-2 rounded-lg">
                      <Heart className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">$250</h4>
                      <p className="text-gray-600">Helps a family with food, education, and essential support for an entire month</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl">
                <h4 className="font-semibold text-gray-900 mb-4">Why Donate to Us?</h4>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                    <span>85% of donations go directly to programs</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                    <span>Transparent reporting on all projects</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                    <span>Local community involvement and leadership</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Givebutter Info */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Secure & Easy Donations
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              All donations are processed securely through Givebutter
            </p>
            
            <div className="max-w-2xl mx-auto">
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="space-y-4 text-left">
                  <div className="flex items-start space-x-4">
                    <Shield className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Secure Processing</h3>
                      <p className="text-gray-600">All transactions are encrypted and secure. We use Givebutter, a trusted platform for nonprofit donations.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <CreditCard className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Multiple Payment Options</h3>
                      <p className="text-gray-600">Accept credit cards, debit cards, PayPal, and other payment methods through Givebutter.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Instant Receipt</h3>
                      <p className="text-gray-600">You'll receive an immediate email confirmation for your donation and tax receipt.</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 pt-8 border-t">
                  <a
                    href="https://givebutter.com/rnrmadagascar"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-full py-3 px-6 bg-primary text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Visit Our Givebutter Campaign
                    <ArrowRight className="h-5 w-5 ml-2" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="font-semibold text-gray-900 mb-2">How much of my donation goes to programs?</h3>
              <p className="text-gray-600">85% of every donation goes directly to our programs and services. The remaining 15% covers essential operational costs like staff, fundraising, and administration.</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="font-semibold text-gray-900 mb-2">Can I make a recurring donation?</h3>
              <p className="text-gray-600">Yes! You can set up monthly, quarterly, or annual recurring donations. This helps us plan long-term projects and provides consistent support to communities.</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="font-semibold text-gray-900 mb-2">How will I know my donation was received?</h3>
              <p className="text-gray-600">You'll receive an immediate email confirmation, and we'll send you regular updates about the impact of your donation through our newsletter and annual reports.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Donate



