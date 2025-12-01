import React, { useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import FeatureCard from './components/FeatureCard'
import Screenshots from './components/Screenshots'
import PaymentsDeepDive from './components/PaymentsDeepDive'
import FAQItem from './components/FAQItem'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'
import { initGA } from './utils/analytics'

export default function App() {
  useEffect(() => {
    initGA(import.meta.env.VITE_GA_MEASUREMENT_ID)
  }, [])

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <Header />
      <main className="max-w-6xl mx-auto px-6 py-12">
        <Hero />
        <section id="features" className="mt-12 grid md:grid-cols-3 gap-6">
          <FeatureCard title="Guided Onboarding" icon="👋" description="A friendly, swipeable onboarding guide that only appears on first launch." />
          <FeatureCard title="Flexible Auth" icon="🔑" description="Email/password, Google Sign-In; soft email verification for instant access." />
          <FeatureCard title="Shared Gallery" icon="🖼️" description="Upload and manage photos with selection mode, pinch-to-zoom, and conditional deletion." />
          <FeatureCard title="Rich Trip Plan" icon="✍️" description="Rich-text editing with view/edit modes and collaborative updates." />
          <FeatureCard title="Expense Manager" icon="💸" description="Split expenses, color-coded balances, monthly grouping and 'Settle Up' transactions." />
          <FeatureCard title="Dark Mode" icon="🌙" description="Carefully designed dark theme with theme-aware color palettes." />
        </section>

        <PaymentsDeepDive />

        <section id="faq" className="mt-16 grid md:grid-cols-2 gap-6">
          <FAQItem question="Do I have to verify my email before using the app?" answer="No. Email verification is soft: you can use the app immediately and we’ll send a verification email automatically. You can verify later from your Profile screen." />
          <FAQItem question="Can I use multiple currencies?" answer="Yes. Set your preferred currency in Profile. Monetary values will display in that currency by default; trip creators can add expenses in any supported currency." />
          <FAQItem question="Who can delete photos?" answer="Only the user who uploaded a photo can delete it. Group owners cannot delete other users' photos." />
          <FAQItem question="How does 'Settle Up' work?" answer="'Settle Up' records a direct payment between two users and becomes a special settlement entry in the expense list. It reduces balances accordingly." />
        </section>

        <section id="support" className="mt-16 mb-12 grid md:grid-cols-2 gap-8 items-start">
          <div>
            <h3 className="text-2xl font-bold">Need help?</h3>
            <p className="mt-2 text-gray-600 dark:text-gray-300 max-w-lg">We’re here to help — whether you found a bug, need guidance, or want to request a feature. Use the form to send us a message and we’ll get back to you.</p>
            <div className="mt-6 text-sm text-gray-600 dark:text-gray-300">
              <div><strong>Email</strong>: support@puratrip.app</div>
              <div className="mt-2">Privacy: We never share your data with third parties without consent. Authentication is handled by Firebase in the mobile app.</div>
            </div>
          </div>

          <ContactForm />
        </section>

        <Footer />
      </main>
    </div>
  )
}