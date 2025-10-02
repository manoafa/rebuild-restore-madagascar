'use client'

import { motion } from 'framer-motion'

const AboutHero = () => {
  return (
    <section className="relative py-20 bg-gradient-to-br from-primary/10 via-white to-secondary/10">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Who We Are
          </h1>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white p-8 rounded-2xl shadow-lg"
          >
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              After meeting a Korean church elder who wanted to contribute to feeding poor children, 
              we began this initiative in 2022 by serving 30 children in the small community of 
              Ambohimahatsinjo and providing free meals along with English classes on Saturdays in 
              the hope of giving them more opportunities in the future. With a continuously growing 
              number of students, we are expanding our support and services to reach the wider 
              community and eventually change the entire nation.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Madagascar is home to over 29 million people, with nearly 60% under the age of 25. 
              Yet, 67% of children face multidimensional poverty, lacking access to education, 
              healthcare, and basic needs. While 76% enroll in primary school, only 27% make it 
              to secondary education, and 1.7 million children remain out of school. Without urgent 
              action, this entire generation will continue being trapped in poverty. Investing in 
              education is not just a necessity, it's an opportunity to do something and we will 
              not ignore it.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default AboutHero



