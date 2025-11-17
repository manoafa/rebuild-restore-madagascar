'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { BookOpen, Lightbulb, Shield } from 'lucide-react'

const MissionSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const missions = [
    {
      icon: BookOpen,
      title: 'Support Education',
      color: 'primary',
      bgColor: 'bg-primary/10',
      iconColor: 'text-primary',
      description: 'Education is a foundation for growth and a vital path out of poverty. By encouraging and providing access to quality learning opportunities, we equip young people with the knowledge, skills, and confidence they need to build a hopeful future and contribute meaningfully to their communities.'
    },
    {
      icon: Lightbulb,
      title: 'Promote Creativity',
      color: 'secondary',
      bgColor: 'bg-secondary/10',
      iconColor: 'text-secondary',
      description: 'We believe every child carries unique potential within them. We provide safe, inspiring spaces where they can explore their talents, express themselves freely, and develop innovative thinking. Through art, music, and other creative programs, we nurture imagination and a sense of purpose that empowers them to dream and achieve.'
    },
    {
      icon: Shield,
      title: 'Foster Resilience',
      color: 'primary',
      bgColor: 'bg-primary/10',
      iconColor: 'text-primary',
      description: 'Life brings challenges, but with encouragement and guidance, every young person can grow stronger. We help children and youth develop character, perseverance, and a positive mindset. Through mentorship and supportive relationships, they learn to face difficulties with courage and build a future filled with hope and opportunity.'
    },
    {
      icon: Shield,
      title: 'Cultivate Faith',
      color: 'primary',
      bgColor: 'bg-primary/10',
      iconColor: 'text-primary',
      description: 'Faith is the foundation that anchors and gives meaning to all we do. We walk alongside children and youth as they grow in their relationship with God — helping them discover that faith is not just learned, but lived, not inherited but personally found and built. Through discipleship, reflection, and community, we encourage them to build lives rooted in truth, love, and purpose.'
    }
  ]

  return (
    <section ref={ref} className="py-20 bg-gray-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Mission
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We are committed to empowering the next generation through education, creativity, resilience, and faith. Poverty is multidimensional — not only material, but emotional and spiritual. We do not believe that faith alone without action, or action without faith, can bring lasting change. Restoration happens when the whole person is cared for — body, mind, and spirit — and when justice, dignity, and worship are restored together.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {missions.map((mission, index) => (
            <motion.div
              key={mission.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 group"
            >
              <div className="p-8">
                <div className="text-center mb-6 group">
                  <div className={`inline-flex items-center justify-center w-20 h-20 ${mission.bgColor} rounded-full mb-6 transition-transform duration-300 group-hover:animate-bounce`}>
                    <mission.icon className={`h-10 w-10 ${mission.iconColor}`} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {mission.title}
                  </h3>
                </div>
                
                <p className="text-gray-700 leading-relaxed text-center">
                  {mission.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-primary to-secondary p-8 rounded-2xl text-white">
            <h3 className="text-2xl font-bold mb-4">
               Then your light will break forth like the dawn, and your healing will quickly appear!
            </h3>
            <p className="text-lg opacity-90 max-w-3xl mx-auto">
              <i>"Is not this the kind of fasting I have chosen: to loose the chains of injustice and untie the cords of the yoke, to set the oppressed free and break every yoke? Is it not to share your food with the hungry and to provide the poor wanderer with shelter— when you see the naked, to clothe them, and not to turn away from your own flesh and blood?"</i>
                <br /><center><span className="underline decoration-wavy text-tiny"><i>Isaiah 58 : 7 - 8</i></span></center>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default MissionSection
