'use client'

export default function Skills() {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js', 'Vue.js']
    },
    {
      title: 'Backend',
      skills: ['Node.js', 'Express.js', 'MongoDB', 'Firebase', 'PostgreSQL']
    },
    {
      title: 'Tools & Platforms',
      skills: ['Git', 'GitHub', 'VS Code', 'Figma',]
    },
    {
      title: 'Languages',
      skills: ['JavaScript', 'Python', 'C++', 'HTML/CSS', 'SQL']
    }
  ]

  return (
    <section id="skills" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          &lt;<span className="text-accent">Skills</span>&gt;
        </h2>
        <p className="text-foreground/60 mb-12">Technologies and tools I work with</p>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="bg-card border border-border rounded-lg p-6 hover:border-accent transition-colors"
            >
              <h3 className="text-xl font-semibold mb-4 text-accent">{category.title}</h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 bg-muted/50 text-foreground rounded-full text-sm border border-border hover:border-accent hover:bg-accent/10 transition-all cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
