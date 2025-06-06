// src/components/Contact.jsx
import React from 'react'

function Contact() {
  return (
    <section id="contact" className="py-20 px-6 bg-white max-w-3xl mx-auto text-center">
      <h2 className="text-3xl font-semibold mb-6">Contact</h2>
      <p className="mb-2">
        <strong>Email:</strong>{' '}
        <a href="mailto:npoojitha19@gmail.com" className="text-blue-600 hover:underline">
          npoojitha19@gmail.com
        </a>
      </p>
      <p className="mb-2">
        <strong>Phone:</strong> +1 (469) 396-1953
      </p>
      <p className="mb-2">
        <strong>GitHub:</strong>{' '}
        <a
          href="https://github.com/npoojitha19"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          npoojitha19
        </a>
      </p>
      <p>
        <strong>LinkedIn:</strong>{' '}
        <a
          href="https://www.linkedin.com/in/poojitha-n-5439a0271"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          poojitha-n-5439a0271
        </a>
      </p>
    </section>
  )
}

export default Contact
