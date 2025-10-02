'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Heart, Target, Eye, Users, Award, Globe } from 'lucide-react'
import AboutHero from '@/components/AboutHero'
import VisionSection from '@/components/VisionSection'
import MissionSection from '@/components/MissionSection'
import TeamSection from '@/components/TeamSection'
import ValuesSection from '@/components/ValuesSection'

export default function About() {
  return (
    <div className="min-h-screen">
      <AboutHero />
      <VisionSection />
      <MissionSection />
      <ValuesSection />
      <TeamSection />
    </div>
  )
}
