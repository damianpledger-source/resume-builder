'use client'

import React, { useState, useRef } from 'react'
import { useReactToPrint } from 'react-to-print'

// ResumePreview component
function ResumePreview({ name, email, experience, skills }: any) {
  return (
    <div className="p-4 border border-gray-200 rounded">
      <h2 className="text-xl font-bold mb-2">Resume Preview</h2>
      <p><strong>Name:</strong> {name || 'Your Name Here'}</p>
      <p><strong>Email:</strong> {email || 'your@email.com'}</p>
      <p><strong>Experience:</strong> {experience || 'Your experience goes here.'}</p>
      <p><strong>Skills:</strong> {skills || 'Your skills go here.'}</p>
    </div>
  )
}

export default function Home() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [experience, setExperience] = useState('')
  const [skills, setSkills] = useState('')

  const componentRef = useRef<any>(null)

  const handlePrint = () => {
  if (componentRef.current) {
    const printFunc: any = useReactToPrint({
      // @ts-ignore-error: content is valid, type mismatch workaround
      content: () => componentRef.current,
    })
    printFunc()
  }
}

  return (
    <main className="max-w-2xl mx-auto mt-10 p-4">
      <h1 className="text-3xl font-bold mb-6">Resume Builder</h1>

      {/* Form section */}
      <div className="mb-6 space-y-4">
        <div>
          <label className="block mb-2 font-bold">Full Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your full name"
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
        </div>

        <div>
          <label className="block mb-2 font-bold">Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
        </div>

        <div>
          <label className="block mb-2 font-bold">Experience:</label>
          <textarea
            value={experience}
            onChange={(e) => setExperience(e.target.value)}
            placeholder="Describe your experience"
            className="w-full border border-gray-300 rounded px-3 py-2"
            rows={4}
          />
        </div>

        <div>
          <label className="block mb-2 font-bold">Skills:</label>
          <textarea
            value={skills}
            onChange={(e) => setSkills(e.target.value)}
            placeholder="List your skills"
            className="w-full border border-gray-300 rounded px-3 py-2"
            rows={2}
          />
        </div>
      </div>

      {/* Resume preview with ref */}
      <div ref={componentRef}>
        <ResumePreview
          name={name}
          email={email}
          experience={experience}
          skills={skills}
        />
      </div>

      {/* Download PDF button */}
      <button
        onClick={handlePrint}
        className="mt-4 bg-blue-700 text-white px-4 py-2 rounded"
      >
        Download PDF
      </button>
    </main>
  )
}
