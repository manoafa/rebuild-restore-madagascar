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
      role: 'Founder / Director',
      image: '/Johanna.jpg',
      bio: 'Johanna founded the organization with a deep belief that small acts of love can create lasting change. Guided by her Christian faith, she strives to build a space where hope, education, and compassion meet to serve children and families in need. Her vision continues to inspire the team to work faithfully and joyfully for the community.',
      linkedin: '#',
      email: '#'
    },
    {
      name: 'Manoa Fenosoa',
      role: 'Co-Founder/Program Manager',
      image: '/Fenosoa.jpg',
      bio: 'Fenosoa oversees the coordination of projects and ensures that each program reflects care, integrity, and purpose. She believes that serving others is one of the most practical ways to live out her faith, and she finds joy in seeing lives transformed through learning and community support.',
      linkedin: '#',
      email: '#'
    },
    {
      name: 'Manoa Fiderana',
      role: 'Consultant',
      image: '/Fiderana.jpg',
      bio: 'As a consultant who has lived most of his life in Madagascar, Fiderana provides valuable insight and guidance to help the organization grow sustainably and remain true to its values with local expertise.',
      linkedin: '#',
      email: '#'
    },
    {
      name: 'Jaritiana & Jimmy',
      role: 'Couple & Family educators',
      image: '/JariJimmy.jpg',
      bio: 'Passionate about strengthening families and helping couples, Jaritiana & Jimmy help couples in the community build healthy, faith-centered relationships. Through their guidance and workshops, they share practical tools for communication, unity, and love grounded in biblical principles. They believe that when families grow in grace and understanding, entire communities are strengthened.',
      linkedin: '#',
      email: '#'
    },
    {
      name: 'Christi Cobb',
      role: 'Co-Founder/U.S. Director',
      image: '/Christi.jpg',
      bio: 'An art and culture enthusiast, Christi is driven by a life of purpose and servanthood. With a heart for the development and discipleship of the Next Generation, she leads Rebuild N Restore\'s U.S.-based partnerships and supports organizational growth and new initiatives in collaboration with the Madagascar team.',
      linkedin: '#',
      email: '#'
    },
    {
      name: 'Sariaka',
      role: 'Volunteer',
      image: '/Sariaka.jpeg',
      bio: 'I was never particularly passionate about education, and honestly, I didn\'t know what my calling was. But through serving God with Rebuild and Restore Madagascar, I discovered and accepted it. Deep down, I had always desired to serve God in an organization, though I didn\'t know which one. Now, almost two years later, I\'m still here — always ready to give my best to share the Gospel with children, to plant God\'s Word in their hearts, and to pass on the little I know with love and faith.'
    },
    {
      name: 'Danielle',
      role: 'Volunteer',
      image: '/Danielle.jpeg',
      bio: 'But those who trust in the Lord will renew their strength. They will soar on wings like eagles. By trusting in God, all my youthful mistakes and weaknesses became my greatest testimonies and my strength to raise up this new generation. My calling generally focuses on teenagers and young adults, which ignites all my enthusiasm for these children.'
    },
    {
      name: 'Tandrify',
      role: 'Volunteer',
      image: '/Tandrify.jpg',
      bio: 'With a passion for empowering children through education and faith in Jesus, I love teaching with compassion, helping children learn and grow with confidence.'
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



