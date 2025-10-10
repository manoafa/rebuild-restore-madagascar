'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Heart, GraduationCap, Users, Briefcase, BookOpen, Sparkles, Target, Hand } from 'lucide-react'
import VolunteerForm from '@/components/VolunteerForm'

const Volunteer = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const volunteerTypes = [
    {
      id: 1,
      type: 'Teacher',
      icon: GraduationCap,
      title: 'Become a Teacher Volunteer',
      description: 'Make a direct impact on children\'s lives through education and mentorship.',
      roles: [
        'Teach children in various subjects',
        'Play educational games and activities',
        'Mentor and guide young minds',
        'Create engaging learning experiences',
        'Build meaningful relationships with students'
      ],
      skills: ['Patience', 'Communication', 'Creativity', 'Empathy'],
      color: 'bg-blue-50',
      iconColor: 'text-blue-600',
      borderColor: 'border-blue-200'
    },
    {
      id: 2,
      type: 'Administrator',
      icon: Briefcase,
      title: 'Become an Administrator Volunteer',
      description: 'Help us run smoothly behind the scenes and amplify our impact.',
      roles: [
        'Update newsletters and communications',
        'Manage social media presence',
        'Coordinate meetings with partners',
        'Handle administrative tasks',
        'Support fundraising and outreach efforts'
      ],
      skills: ['Organization', 'Digital Skills', 'Communication', 'Time Management'],
      color: 'bg-green-50',
      iconColor: 'text-green-600',
      borderColor: 'border-green-200'
    }
  ]

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
            <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-full mb-6">
              <Hand className="h-10 w-10 text-primary" />
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Join Our Mission
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              We all have something to give! Be part of the change and help us build a brighter future for Madagascar's youth.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
              <div className="flex items-center">
                <Heart className="h-4 w-4 mr-2 text-primary" />
                Make a Difference
              </div>          
              <div className="w-px h-4 bg-gray-400"></div>
              <div className="flex items-center">
                <Users className="h-4 w-4 mr-2 text-primary" />
                Join Our Community
              </div>
              <div className="w-px h-4 bg-gray-400"></div>
              <div className="flex items-center">
                <Sparkles className="h-4 w-4 mr-2 text-primary" />
                Create Lasting Impact
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-8 rounded-2xl">
              <Target className="h-16 w-16 animate-jump-in animate-infinite text-primary mx-auto mb-6" />
              <p className="text-lg text-gray-700 leading-relaxed text-center">
                Madagascar's future rests on the shoulders of its youth. Yet, poverty often forces children to work instead of learn. 
                Here at RnR, we're committed to changing that narrative. But we can't do it alone. Will you join us? Whether you have 
                supplies to donate, time to volunteer, expertise to offer, or simply a heart for prayer, your contribution can make a difference. 
                By volunteering your funds, skills, offering online guidance, or simply keeping Madagascar's children in your prayers, 
                you become part of the solution. Join our email list and stay updated on our progress. Together, we can build a brighter 
                future for Madagascar's youth.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Volunteer Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Volunteer With Us?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Your time and talents can create lasting change in the lives of Madagascar's children
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4 group animate-wiggle-more animate-infinite">
                <Heart className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Direct Impact</h3>
              <p className="text-gray-600">
                See the tangible results of your efforts in the lives of children and communities
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary/10 rounded-full mb-4 group animate-wiggle-more animate-infinite">
                <Users className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Supportive Community</h3>
              <p className="text-gray-600">
                Join a network of passionate volunteers committed to making a difference
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4 group animate-wiggle-more animate-infinite">
                <BookOpen className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Personal Growth</h3>
              <p className="text-gray-600">
                Develop new skills, gain experience, and grow personally while helping others
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Volunteer Types Section */}
      <section ref={ref} className="py-20 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Volunteer Opportunities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the role that best matches your skills and passion
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {volunteerTypes.map((volunteer, index) => (
              <motion.div
                key={volunteer.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`${volunteer.color} border-2 ${volunteer.borderColor} rounded-2xl p-8 hover:shadow-2xl transition-shadow duration-300`}
              >
                <div className="flex items-center mb-6">
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-white rounded-full mr-4 shadow-md`}>
                    <volunteer.icon className={`h-8 w-8 ${volunteer.iconColor}`} />
                  </div>
                  <div>
                    <span className="text-sm font-medium text-gray-600 uppercase tracking-wide">
                      {volunteer.type}
                    </span>
                    <h3 className="text-2xl font-bold text-gray-900">
                      {volunteer.title}
                    </h3>
                  </div>
                </div>

                <p className="text-gray-700 mb-6 text-lg">
                  {volunteer.description}
                </p>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                    <Target className="h-5 w-5 mr-2 text-primary" />
                    Your Role:
                  </h4>
                  <ul className="space-y-2">
                    {volunteer.roles.map((role, roleIndex) => (
                      <li key={roleIndex} className="flex items-start text-gray-700">
                        <span className="inline-block w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>{role}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">
                    Skills Needed:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {volunteer.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="bg-white px-3 py-1 rounded-full text-sm font-medium text-gray-700 shadow-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Apply to Volunteer
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Fill out the application form below and take the first step toward making a difference
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            <VolunteerForm />
          </div>
        </div>
      </section>

      {/* Additional Ways to Help */}
      <section className="py-20 bg-gradient-to-r from-primary/60 to-secondary/50 text-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-4xl font-bold mb-6">
              Can't Volunteer Right Now?
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
              There are many other ways you can support our mission and help Madagascar's children
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/donate" className="bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Make a Donation
              </a>
              <a href="/projects" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary transition-colors">
                Sponsor a Project
              </a>
              <a href="/contact" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary transition-colors">
                Partner With Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Volunteer

