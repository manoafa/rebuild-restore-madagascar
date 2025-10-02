'use client'

import { motion } from 'framer-motion'
import { CreditCard, Smartphone, Shield, Lock } from 'lucide-react'

const PaymentMethods = () => {
  const paymentMethods = [
    {
      name: 'Credit & Debit Cards',
      icon: CreditCard,
      description: 'Visa, Mastercard, American Express, Discover',
      features: ['Secure processing', 'Instant confirmation', 'Mobile friendly']
    },
    {
      name: 'PayPal',
      icon: Smartphone,
      description: 'Pay with your PayPal account or credit card',
      features: ['PayPal balance', 'Bank account', 'Credit cards']
    }
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
      {paymentMethods.map((method, index) => (
        <motion.div
          key={method.name}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: index * 0.1 }}
          className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
        >
          <div className="text-center mb-6">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
              <method.icon className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              {method.name}
            </h3>
            <p className="text-gray-600">
              {method.description}
            </p>
          </div>

          <ul className="space-y-3 mb-6">
            {method.features.map((feature, featureIndex) => (
              <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                <Shield className="h-4 w-4 text-green-500 mr-3" />
                {feature}
              </li>
            ))}
          </ul>

          <div className="flex items-center justify-center text-xs text-gray-500">
            <Lock className="h-4 w-4 mr-2" />
            SSL Encrypted & Secure
          </div>
        </motion.div>
      ))}
    </div>
  )
}

export default PaymentMethods



