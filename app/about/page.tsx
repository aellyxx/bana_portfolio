'use client'

import Header from '@/components/header'
import About from '@/components/about'
import Footer from '@/components/footer'

export default function AboutPage() {
  return (
    <div className="bg-background min-h-screen">
      <Header />
      <main className="pt-16">
        <About />
      </main>
      <Footer />
    </div>
  )
}