'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Heart, Users, Target, Award } from 'lucide-react'
import HeroSection from '@/components/HeroSection'
import StatsSection from '@/components/StatsSection'
import FeaturedProjects from '@/components/FeaturedProjects'
import CallToAction from '@/components/CallToAction'

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <StatsSection />
      <FeaturedProjects />
      <CallToAction />
    </div>
  )
}

