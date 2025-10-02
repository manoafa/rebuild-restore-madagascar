import Link from 'next/link'
import { Heart, Mail, Phone, MapPin, Facebook, Twitter, Instagram } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom">
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Organization Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Heart className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold">Rebuild & Restore</span>
            </div>
            <p className="text-gray-300 text-sm">
              Building hope and restoring communities across Madagascar through sustainable development, 
              education, and humanitarian aid.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary transition-colors" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-gray-300 hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/projects" className="text-gray-300 hover:text-primary transition-colors">Our Projects</Link></li>
              <li><Link href="/blog" className="text-gray-300 hover:text-primary transition-colors">Blog & News</Link></li>
              <li><Link href="/volunteer" className="text-gray-300 hover:text-primary transition-colors">Volunteer</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-primary transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Ways to Help */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Ways to Help</h3>
            <ul className="space-y-2">
              <li><Link href="/donate" className="text-gray-300 hover:text-primary transition-colors">Make a Donation</Link></li>
              <li><Link href="/volunteer" className="text-gray-300 hover:text-primary transition-colors">Become a Volunteer</Link></li>
              <li><Link href="/projects" className="text-gray-300 hover:text-primary transition-colors">Sponsor a Project</Link></li>
              <li><Link href="/blog" className="text-gray-300 hover:text-primary transition-colors">Share Our Story</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary" />
                <span className="text-gray-300 text-sm">rebuild.restore.mada@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary" />
                <span className="text-gray-300 text-sm">+ 261 34 07 654 18</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary mt-1" />
                <span className="text-gray-300 text-sm">
                  AJA2 Ambohimahatsinjo<br />
                  Antananarivo 101, Madagascar
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2024 Rebuild & Restore Madagascar. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link href="/privacy" className="text-gray-400 hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-primary transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

