'use client'

import { useEffect, useState } from 'react'
import { Github, Linkedin, Instagram } from 'lucide-react'
import { codeToHtml } from 'shiki'

export default function Hero() {
  const [highlightedCode, setHighlightedCode] = useState('')

  const code = `
currentSkills = {
  frontend: [
    'HTML', 'CSS', 'Tailwind',
    'JavaScript'
  ],
  backend: [
    'Node.js', 'Express.js',
    'MongoDB', 'Supabase'
  ],
};

console.log("Time to build cool stuffs");
`

  useEffect(() => {
    async function highlight() {
      const html = await codeToHtml(code, {
        lang: 'javascript',
        theme: 'github-dark'
      })

      setHighlightedCode(html)
    }

    highlight()
  }, [])

  return (
    <section id="home" className="relative py-20 md:py-32 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12 items-center">

        <div className="space-y-6">
          <div className="space-y-4">
            <p className="text-accent text-lg font-mono">&lt;Hello&gt;</p>
            <h1 className="text-4xl md:text-5xl font-bold">
              I&apos;m <span className="text-accent">Elyon Francine A. Baña</span>
            </h1>
            <p className="text-xl text-muted-foreground font-mono">
              I&apos;m a {'{'}Frontend Developer{'}'}
            </p>
          </div>

          <p className="text-foreground/80 leading-relaxed max-w-md">
            Enthusiastic learner diving into <span className="text-accent">web</span> and <span className="text-accent">software</span> development, aiming for a career in technology.
          </p>

          <div className="flex gap-4 pt-4">
            <a href="https://github.com/aellyxx" target="_blank" className="p-2 hover:bg-card rounded-lg transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://www.linkedin.com/in/elyon-francine-bana-562447339" target="_blank" className="p-2 hover:bg-card rounded-lg transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="https://www.instagram.com/aell_yon" target="_blank" className="p-2 hover:bg-card rounded-lg transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="hidden md:block">
          <div className="bg-card border border-border rounded-lg overflow-hidden">


            <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-muted/20">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <span className="text-xs text-muted-foreground ml-2">start.js</span>
            </div>


            <div className="p-6 overflow-auto max-h-96">
              <div
                className="text-sm"
                dangerouslySetInnerHTML={{ __html: highlightedCode }}
              />
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}