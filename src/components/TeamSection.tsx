'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Linkedin, Mail } from 'lucide-react'

const TeamSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const team = [
    {
      name: 'Manoa Johanna',
      role: 'Executive Director',
      image: '/Johanna.jpeg',
      bio: 'With over 8 years of experience in international development, Johanna leads our organization with passion and expertise.',
      linkedin: '#',
      email: '#'
    },
    {
      name: 'Manoa Fiderana',
      role: 'General Secretary',
      image: '/Fiderana.jpeg',
      bio: 'A native of Madagascar, Fiderana brings deep local knowledge and community connections to our work.',
      linkedin: '#',
      email: '#'
    },
    {
      name: 'Manoa Fenosoa',
      role: 'Program Manager',
      image: '/Fenosoa.jpg',
      bio: 'Fenosoa oversees our education programs, ensuring they meet the highest standards of quality.',
      linkedin: '#',
      email: '#'
    },
    // {
    //   name: 'Manoa Johanna',
    //   role: 'Medical Director',
    //   image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    //   bio: 'Dr. Hassan leads our mobile healthcare initiatives, bringing essential medical services to remote communities.',
    //   linkedin: '#',
    //   email: 'ahmed@rebuildrestore.org'
    // }
  ]

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Meet Our Team
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our dedicated team of professionals and volunteers work tirelessly to 
            make a difference in communities across Madagascar.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-justify">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-1">
                  {member.name}
                </h3>
                <p className="text-primary font-medium mb-3">
                  {member.role}
                </p>
                <p className="text-gray-600 text-sm mb-4">
                  {member.bio}
                </p>
                
                {/* <div className="flex space-x-3">
                  <a
                    href={member.linkedin}
                    className="text-gray-400 hover:text-primary transition-colors"
                    aria-label={`${member.name} LinkedIn`}
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a
                    href={`mailto:${member.email}`}
                    className="text-gray-400 hover:text-primary transition-colors"
                    aria-label={`Email ${member.name}`}
                  >
                    <Mail className="h-5 w-5" />
                  </a>
                </div> */}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-12"
        >
          <p className="text-lg text-gray-600 mb-6">
            Want to join our team? We're always looking for passionate individuals 
            who share our mission.
          </p>
          <a
            href="/volunteer"
            className="btn-primary text-lg px-8 py-4"
          >
            Join Our Team
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default TeamSection



