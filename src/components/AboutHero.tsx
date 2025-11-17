'use client'

import { motion } from 'framer-motion'

const AboutHero = () => {
  return (
    <section className="relative py-20 bg-gradient-to-br from-primary/10 via-white to-secondary/10 text-justify">
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
              Our journey began in 2022 after meeting a Korean church elder who longed to help feed children in need. Having grown up in Madagascar, together, we started small in our little village — serving 30 children in the rural community of Ambohimahatsinjo, offering free meals and English classes every Saturday. What began as a simple act of love grew into a vision to create opportunity and restoration for the next generation and our team grew to the global team it is today.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Madagascar is home to over 32 million people, with nearly 60% under the age of 25. Yet, 67% of children face multidimensional poverty — lacking access to education, healthcare, and basic needs. While 76% enroll in primary school, only 27% continue to secondary education, leaving 1.7 million children out of school. Without intervention, this generation risks being trapped in a cycle of poverty and lost potential.
            </p><br />
            <p className="text-lg text-gray-700 leading-relaxed">
              We believe investing in education and holistic care is not just a response to need — it’s an act of hope and faith in what Madagascar can become. From one small village, we are growing our programs to reach more families, build stronger communities, and ultimately help transform an entire nation, one restored life at a time.
            </p>

          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default AboutHero



