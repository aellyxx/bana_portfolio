'use client'

import Header from '@/components/header'
import Hero from '@/components/hero'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <div className="bg-background min-h-screen">
      <Header />
      <main className="pt-16">
        <Hero />
      </main>
      <Footer />
    </div>
  )
}
