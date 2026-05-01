'use client'

import Header from '@/components/header'
import Skills from '@/components/skills'
import Footer from '@/components/footer'

export default function SkillsPage() {
  return (
    <div className="bg-background min-h-screen">
      <Header />
      <main className="pt-16">
        <Skills />
      </main>
      <Footer />
    </div>
  )
}