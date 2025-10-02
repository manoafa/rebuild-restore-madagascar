'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, User, Mail, MessageCircle } from 'lucide-react'

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    inquiryType: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsSubmitting(false)
    alert('Thank you for your message! We\'ll get back to you within 24 hours.')
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
      inquiryType: ''
    })
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-white rounded-xl shadow-lg p-8"
    >
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Full Name *
            </label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="Enter your full name"
              />
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email Address *
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="Enter your email address"
              />
            </div>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Inquiry Type *
          </label>
          <select
            name="inquiryType"
            value={formData.inquiryType}
            onChange={handleInputChange}
            required
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
          >
            <option value="">Select inquiry type</option>
            <option value="general">General Information</option>
            <option value="volunteer">Volunteer Opportunities</option>
            <option value="donation">Donation Questions</option>
            <option value="partnership">Partnership Inquiry</option>
            <option value="media">Media Inquiry</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Subject *
          </label>
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleInputChange}
            required
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
            placeholder="Brief description of your inquiry"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Message *
          </label>
          <div className="relative">
            <MessageCircle className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              required
              rows={6}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
              placeholder="Please provide details about your inquiry..."
            />
          </div>
        </div>

        <div className="flex items-start space-x-3">
          <input
            type="checkbox"
            id="newsletter"
            className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded mt-1"
          />
          <label htmlFor="newsletter" className="text-sm text-gray-600">
            I would like to receive updates about Rebuild & Restore Madagascar's work and impact.
          </label>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full py-4 px-6 rounded-lg font-semibold text-lg transition-colors ${
            isSubmitting
              ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
              : 'bg-primary text-white hover:bg-blue-700'
          }`}
        >
          {isSubmitting ? (
            <div className="flex items-center justify-center">
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
              Sending Message...
            </div>
          ) : (
            <div className="flex items-center justify-center">
              <Send className="h-5 w-5 mr-2" />
              Send Message
            </div>
          )}
        </button>

        <p className="text-sm text-gray-500 text-center">
          * Required fields. We'll respond to your message within 24 hours.
        </p>
      </form>
    </motion.div>
  )
}

export default ContactForm






