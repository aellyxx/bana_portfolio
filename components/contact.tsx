'use client'

import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }
  return (
    <section id="contact" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          &lt;<span className="text-accent">Contact</span>&gt;
        </h2>
        <p className="text-foreground/60 text-center mb-12">
          Let&apos;s connect and discuss your project
        </p>

        <div className="bg-card border border-border rounded-lg p-8 md:p-12">
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:border-accent transition-colors text-foreground"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="example@gmail.com"
                className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:border-accent transition-colors text-foreground"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your message here..."
                rows={5}
                className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:border-accent transition-colors text-foreground resize-none"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full px-6 py-3 bg-accent text-accent-foreground rounded-lg font-medium hover:opacity-90 transition-opacity"
            >
              Send Message
            </button>
          </form>

          <div className="mt-12 pt-8 border-t border-border">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <p className="text-muted-foreground text-sm mb-2">Email</p>
                <a href="mailto:contact@example.com" className="text-accent hover:underline">
                  elyonfrancinebana5@gmail.com
                </a>
              </div>
              <div className="text-center">
                <p className="text-muted-foreground text-sm mb-2">Phone</p>
                <a  className="text-accent hover:underline">
                  09975725766
                </a>
              </div>
              <div className="text-center">
                <p className="text-muted-foreground text-sm mb-2">Location</p>
                <p className="text-accent">Iloilo City</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
