'use client'

import Header from '@/components/header'
import Projects from '@/components/projects'
import Footer from '@/components/footer'

export default function ProjectsPage() {
  return (
    <div className="bg-background min-h-screen">
      <Header />
      <main className="pt-16">
        <Projects />
      </main>
      <Footer />
    </div>
  )
}