'use client'

import { useState } from 'react'

export default function Home() {
  // This is the "state" for storing what the user types
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [experience, setExperience] = useState('')
  const [skills, setSkills] = useState('')


  return (
    <main className="max-w-2xl mx-auto mt-10 p-4">
      <h1 className="text-3xl font-bold mb-6">Resume Builder</h1>

{/* Form section */}
<div className="mb-6 space-y-4">
  {/* Name */}
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

  {/* Email */}
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

  {/* Experience */}
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

  {/* Skills */}
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


      {/* Resume preview */}
      <div className="p-4 border border-gray-200 rounded">
        <h2 className="text-xl font-bold mb-2">Resume Preview</h2>
        <p><strong>Name:</strong> {name || 'Your Name Here'}</p>
        <p><strong>Email:</strong> {email || 'your@email.com'}</p>
        <p><strong>Experience:</strong> {experience || 'Your experience goes here.'}</p>
        <p><strong>Skills:</strong> {skills || 'Your skills go here.'}</p>

      </div>
    </main>
  )
}
