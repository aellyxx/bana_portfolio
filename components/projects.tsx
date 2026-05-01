'use client'

import { Github, ExternalLink } from 'lucide-react'

export default function Projects() {
  const projects = [
    {
      title: "Everything Matcha",
      description:
        "Everything Matcha is a blog website that I created to share my passion and love for matcha",
      tags: ["Next.js", "TypeScript", "Tailwind CSS"],
      github: "https://github.com/aellyxx/everything-matcha",
      live: "https://everything-matcha.vercel.app/",
    },
    {
      title: "Sigrab",
      description:
        "Sigrab is a ticketing website for the Sigrab Film Festival. I contributed to the front-end design of the admin panel.",
      tags: ["Next.js", "Prisma", "MongoDB"],
      github: "",
      live: "https://www.sigrab.site/",
    },
    {
      title: "Candelight",
      description:
        "Candlelight is a blog where I share my love for candle making, including guides and materials.",
      tags: ["Next.js", "TypeScript", "Tailwind CSS"],
      github: "https://github.com/aellyxx/candelight",
      live: "https://candelight.vercel.app/",
    },
  ]

  return (
    <section id="projects" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-card/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          &lt;<span className="text-accent">Projects</span>&gt;
        </h2>
        <p className="text-foreground/60 mb-12">Some of my recent work</p>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-background border border-border rounded-lg p-6 hover:border-accent transition-all duration-300 hover:shadow-lg hover:shadow-accent/10"
            >
              <h3 className="text-xl font-semibold mb-2 group-hover:text-accent transition-colors">
                {project.title}
              </h3>

              <p className="text-foreground/70 text-sm mb-4 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 text-xs bg-accent/10 text-accent rounded border border-accent/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex gap-3 mt-4 pt-4 border-t border-border">
                {project.github ? (
                  <a
                    href={project.github}
                    target="_blank"
                    className="flex-1 flex items-center justify-center gap-2 py-2 px-3 bg-card hover:bg-muted rounded-lg text-sm transition-colors"
                  >
                    <Github size={16} />
                    Code
                  </a>
                ) : (
                  <div className="flex-1 flex items-center justify-center gap-2 py-2 px-3 bg-card/50 text-muted-foreground rounded-lg text-sm cursor-not-allowed">
                    Private
                  </div>
                )}

                <a
                  href={project.live}
                  target="_blank"
                  className="flex-1 flex items-center justify-center gap-2 py-2 px-3 border border-accent text-accent hover:bg-accent/10 rounded-lg text-sm transition-colors"
                >
                  <ExternalLink size={16} />
                  Live
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}