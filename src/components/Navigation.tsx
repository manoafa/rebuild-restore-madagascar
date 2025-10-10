'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()
  const isHomePage = pathname === '/'

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const leftNavItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Projects', href: '/projects' },
  ]

  const rightNavItems = [
    { name: 'Blog', href: '/blog' },
    { name: 'Volunteer', href: '/volunteer' },
    { name: 'Contact', href: '/contact' },
  ]

  const allNavItems = [...leftNavItems, ...rightNavItems]

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white shadow-lg backdrop-blur-md' 
        : 'bg-transparent'
    }`}>
      <div className="container-custom">
        <div className="flex items-center justify-between py-4">
          {/* Left Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {leftNavItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`transition-colors duration-200 font-medium ${
                  isHomePage
                    ? isScrolled
                      ? 'text-black hover:text-secondary'
                      : 'text-white hover:text-secondary'
                    : 'text-black hover:text-secondary'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Logo - Centered */}
          <Link href="/" className="flex items-center space-x-3">
            <Image
              src="/logo-with-shadow.png"
              alt="Rebuild & Restore Madagascar Logo"
              width={40}
              height={40}
              className="transition-all duration-200"
            />
            <div className="flex flex-col">
              <span className={`text-2xl font-bold transition-colors duration-200 ${
                isHomePage
                  ? isScrolled
                    ? 'text-black'
                    : 'text-white'
                  : 'text-black'
              }`}>
                Rebuild & Restore
              </span>
              <span className={`text-sm transition-colors duration-200 hidden sm:block ${
                isHomePage
                  ? isScrolled
                    ? 'text-gray-700'
                    : 'text-white/80'
                  : 'text-gray-700'
              }`}>
                Madagascar
              </span>
            </div>
          </Link>

          {/* Right Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {rightNavItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`transition-colors duration-200 font-medium ${
                  isHomePage
                    ? isScrolled
                      ? 'text-black hover:text-secondary'
                      : 'text-white hover:text-secondary'
                    : 'text-black hover:text-secondary'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/donate"
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                isHomePage
                  ? isScrolled
                    ? 'bg-primary text-white hover:bg-green-700'
                    : 'bg-secondary text-white hover:bg-red-700'
                  : 'bg-primary text-white hover:bg-green-700'
              }`}
            >
              Donate
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              isHomePage
                ? isScrolled
                  ? 'hover:bg-gray-100 text-black'
                  : 'hover:bg-white/20 text-white'
                : 'hover:bg-gray-100 text-black'
            }`}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial={false}
          animate={isOpen ? 'open' : 'closed'}
          variants={{
            open: { opacity: 1, height: 'auto' },
            closed: { opacity: 0, height: 0 }
          }}
          className="lg:hidden overflow-hidden"
        >
          <div className={`py-4 space-y-2 ${
            isHomePage && !isScrolled ? 'bg-black/20 backdrop-blur-md' : 'bg-white'
          }`}>
            {allNavItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`block px-4 py-2 rounded-lg transition-colors duration-200 ${
                  isHomePage && !isScrolled
                    ? 'text-white hover:text-primary hover:bg-white/10'
                    : 'text-black hover:text-primary hover:bg-gray-50'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="px-4 pt-2">
              <Link
                href="/donate"
                className={`w-full text-center block px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                  isHomePage && !isScrolled
                    ? 'bg-secondary text-white hover:bg-green-700'
                    : 'bg-primary text-white hover:bg-red-700'
                }`}
                onClick={() => setIsOpen(false)}
              >
                Donate
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </nav>
  )
}

export default Navigation

