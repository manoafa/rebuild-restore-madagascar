'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, User, Mail, Phone, Calendar, MessageCircle } from 'lucide-react'

const VolunteerForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    dateOfBirth: '',
    email: '',
    phone: '',
    volunteerType: '',
    motivation: '',
    experience: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
    alert('Thank you for your application! We\'ll get back to you within 48 hours.')
    setFormData({
      fullName: '',
      dateOfBirth: '',
      email: '',
      phone: '',
      volunteerType: '',
      motivation: '',
      experience: ''
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
        {/* Full Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Full Name *
          </label>
          <div className="relative">
            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              required
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              placeholder="Enter your full name"
            />
          </div>
        </div>

        {/* Date of Birth */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Date of Birth *
          </label>
          <div className="relative">
            <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="date"
              name="dateOfBirth"
              value={formData.dateOfBirth}
              onChange={handleInputChange}
              required
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </div>
        </div>

        {/* Email and Phone */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                placeholder="your.email@example.com"
              />
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Phone Number *
            </label>
            <div className="relative">
              <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                required
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="+261 XX XX XXX XX"
              />
            </div>
          </div>
        </div>

        {/* Type of Volunteer - Radio Buttons */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">
            Type of Volunteer *
          </label>
          <div className="space-y-3">
            <label className="flex items-center p-4 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
              <input
                type="radio"
                name="volunteerType"
                value="teacher"
                checked={formData.volunteerType === 'teacher'}
                onChange={handleInputChange}
                required
                className="h-4 w-4 text-primary focus:ring-primary border-gray-300"
              />
              <div className="ml-3">
                <span className="block text-sm font-semibold text-gray-900">Teacher</span>
                <span className="block text-xs text-gray-600">Teach, play with, and mentor children</span>
              </div>
            </label>
            
            <label className="flex items-center p-4 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
              <input
                type="radio"
                name="volunteerType"
                value="administrator"
                checked={formData.volunteerType === 'administrator'}
                onChange={handleInputChange}
                required
                className="h-4 w-4 text-primary focus:ring-primary border-gray-300"
              />
              <div className="ml-3">
                <span className="block text-sm font-semibold text-gray-900">Administrator</span>
                <span className="block text-xs text-gray-600">Handle newsletters, social media, partner meetings</span>
              </div>
            </label>
          </div>
        </div>

        {/* Motivation */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Motivation for Joining *
          </label>
          <div className="relative">
            <MessageCircle className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <textarea
              name="motivation"
              value={formData.motivation}
              onChange={handleInputChange}
              required
              rows={4}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
              placeholder="Tell us why you want to volunteer with us and what you hope to contribute..."
            />
          </div>
        </div>

        {/* Volunteering Experience */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Volunteering Experience (if any)
          </label>
          <textarea
            name="experience"
            value={formData.experience}
            onChange={handleInputChange}
            rows={4}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
            placeholder="Please describe any previous volunteering experience you have (optional)..."
          />
        </div>

        {/* Newsletter Opt-in */}
        <div className="flex items-start space-x-3">
          <input
            type="checkbox"
            id="newsletter"
            className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded mt-1"
          />
          <label htmlFor="newsletter" className="text-sm text-gray-600">
            I would like to join the email list and stay updated on RnR's progress and opportunities.
          </label>
        </div>

        {/* Submit Button */}
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
              Submitting Application...
            </div>
          ) : (
            <div className="flex items-center justify-center">
              <Send className="h-5 w-5 mr-2" />
              Submit Application
            </div>
          )}
        </button>

        <p className="text-sm text-gray-500 text-center">
          * Required fields. We'll review your application and get back to you within 48 hours.
        </p>
      </form>
    </motion.div>
  )
}

export default VolunteerForm
