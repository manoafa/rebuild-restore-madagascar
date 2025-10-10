'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Heart, CreditCard, Smartphone } from 'lucide-react'

const DonationForm = () => {
  const [selectedAmount, setSelectedAmount] = useState(0)
  const [customAmount, setCustomAmount] = useState('')
  const [isRecurring, setIsRecurring] = useState(false)
  const [paymentMethod, setPaymentMethod] = useState('stripe')

  const donationAmounts = [25, 50, 100, 250, 500, 1000]

  const handleAmountSelect = (amount: number) => {
    setSelectedAmount(amount)
    setCustomAmount('')
  }

  const handleCustomAmount = (value: string) => {
    setCustomAmount(value)
    setSelectedAmount(0)
  }

  const getFinalAmount = () => {
    return customAmount ? parseInt(customAmount) : selectedAmount
  }

  return (
    <div className="space-y-6">
      {/* Amount Selection */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-4">
          Select Donation Amount
        </label>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-4">
          {donationAmounts.map((amount) => (
            <button
              key={amount}
              onClick={() => handleAmountSelect(amount)}
              className={`p-4 rounded-lg border-2 font-medium transition-colors ${
                selectedAmount === amount
                  ? 'border-primary bg-primary text-white'
                  : 'border-gray-300 hover:border-primary hover:bg-primary/5'
              }`}
            >
              ${amount}
            </button>
          ))}
        </div>
        
        <div className="relative">
          <input
            type="number"
            placeholder="Enter custom amount"
            value={customAmount}
            onChange={(e) => handleCustomAmount(e.target.value)}
            className="w-full p-4 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
          />
          <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500">
            USD
          </span>
        </div>
      </div>

      {/* Recurring Donation */}
      <div className="flex items-center space-x-3">
        <input
          type="checkbox"
          id="recurring"
          checked={isRecurring}
          onChange={(e) => setIsRecurring(e.target.checked)}
          className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
        />
        <label htmlFor="recurring" className="text-sm font-medium text-gray-700">
          Make this a recurring monthly donation
        </label>
      </div>

      {/* Payment Method Selection */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-4">
          Payment Method
        </label>
        <div className="grid grid-cols-2 gap-4">
          <button
            onClick={() => setPaymentMethod('stripe')}
            className={`p-4 rounded-lg border-2 flex items-center justify-center space-x-2 transition-colors ${
              paymentMethod === 'stripe'
                ? 'border-primary bg-primary text-white'
                : 'border-gray-300 hover:border-primary hover:bg-primary/5'
            }`}
          >
            <CreditCard className="h-5 w-5" />
            <span>Credit Card</span>
          </button>
          <button
            onClick={() => setPaymentMethod('paypal')}
            className={`p-4 rounded-lg border-2 flex items-center justify-center space-x-2 transition-colors ${
              paymentMethod === 'paypal'
                ? 'border-primary bg-primary text-white'
                : 'border-gray-300 hover:border-primary hover:bg-primary/5'
            }`}
          >
            <Smartphone className="h-5 w-5" />
            <span>PayPal</span>
          </button>
        </div>
      </div>

      {/* Donation Summary */}
      {getFinalAmount() > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gray-50 p-6 rounded-xl"
        >
          <h3 className="font-semibold text-gray-900 mb-4">Donation Summary</h3>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span>Amount:</span>
              <span className="font-medium">${getFinalAmount()}</span>
            </div>
            {isRecurring && (
              <div className="flex justify-between">
                <span>Frequency:</span>
                <span className="font-medium">Monthly</span>
              </div>
            )}
            <div className="flex justify-between">
              <span>Payment Method:</span>
              <span className="font-medium capitalize">{paymentMethod}</span>
            </div>
            <div className="border-t pt-2">
              <div className="flex justify-between font-semibold">
                <span>Total:</span>
                <span>${getFinalAmount()}</span>
              </div>
            </div>
          </div>
        </motion.div>
      )}

      {/* Donate Button */}
      <button
        disabled={getFinalAmount() <= 0}
        className={`w-full py-4 px-6 rounded-lg font-semibold text-lg transition-colors ${
          getFinalAmount() > 0
            ? 'bg-primary text-white hover:bg-blue-700'
            : 'bg-gray-300 text-gray-500 cursor-not-allowed'
        }`}
      >
        {getFinalAmount() > 0 ? (
          <>
            <Heart className="inline h-5 w-5 mr-2" />
            Donate ${getFinalAmount()}
            {isRecurring && ' Monthly'}
          </>
        ) : (
          'Select an amount to continue'
        )}
      </button>

      {/* Security Notice */}
      <div className="text-center text-sm text-gray-500">
        <p>🔒 Your donation is secure and encrypted</p>
      </div>
    </div>
  )
}

export default DonationForm



