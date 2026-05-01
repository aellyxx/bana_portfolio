'use client'

import Image from 'next/image'

export default function About() {
  return (
    <section id="about" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-card/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          &lt;<span className="text-accent">About</span>&gt;
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-foreground/80 leading-relaxed">
              I am a highly motivated and versatile individual, always ready to embrace new challenges and learn from diverse experiences. I am committed to delivering exceptional results. With a positive attitude and a growth mindset, I am eager to make meaningful contributions and achieve remarkable success.
            </p>

            <p className="text-foreground/80 leading-relaxed">
              My journey in technology is driven by curiosity and a desire to build solutions that matter. I thrive in collaborative environments and enjoy solving complex problems with clean, efficient code.
            </p>

            <div className="flex flex-wrap gap-3 pt-4">
              {[
                'Frontend Development',
                'Backend Development',
                'Problem Solving',
                'UI/UX Design',
                'Team Collaboration'
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-accent/10 border border-accent text-accent rounded-full text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>


          <div className="flex justify-center items-center">
            <div className="relative w-64 h-72 md:w-72 md:h-80">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-accent/5 rounded-lg transform rotate-6"></div>

              <div className="relative rounded-lg overflow-hidden border border-border transform -rotate-3 h-full">
                <Image
                  src="images/profile.jpg"
                  alt="Profile"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}