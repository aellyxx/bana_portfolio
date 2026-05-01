'use client'

import { Github, Linkedin, Instagram } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: 'github', label: 'GitHub', href: 'https://github.com/aellyxx' },
    { icon: 'linkedin', label: 'LinkedIn', href: 'https://www.linkedin.com/in/elyon-francine-bana-562447339' },
    { icon: 'instagram', label: 'Instagram', href: 'https://www.instagram.com/aell_yon?igsh=MWpwcGE0dWJxOXh2' }
  ]

  return (
    <footer className="bg-card border-t border-border py-6 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">

        <div className="grid md:grid-cols-2 gap-6 mb-6">


          <div>
            <span className="text-foreground font-semibold">
              Elyon Francine A. Baña
            </span>
            <p className="text-foreground/60 text-sm mt-2">
              Building amazing web experiences with modern technologies.
            </p>
          </div>

       
          <div>
            <h3 className="text-foreground font-semibold mb-3">Follow</h3>

            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.icon}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-9 h-9 rounded-full bg-muted hover:bg-accent hover:text-accent-foreground transition-colors flex items-center justify-center"
                >
                  {social.icon === 'github' && <Github size={16} />}
                  {social.icon === 'linkedin' && <Linkedin size={16} />}
                  {social.icon === 'instagram' && <Instagram size={16} />}
                </a>
              ))}
            </div>
          </div>

        </div>

      
        <div className="border-t border-border pt-4 text-center">
          <p className="text-foreground/60 text-xs">
            © {currentYear} Elyon Francine A. Baña. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  )
}