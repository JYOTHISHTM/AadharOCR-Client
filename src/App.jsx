import React, { useState } from 'react'
import ImageUpload from './components/ImageUpload.jsx'
import ResultCard from './components/ResultCard.jsx'
import { runOcr } from './api/index.js'

export default function App() {
  const [front, setFront] = useState(null)
  const [back, setBack] = useState(null)
  const [previewFront, setPreviewFront] = useState(null)
  const [previewBack, setPreviewBack] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [result, setResult] = useState(null)

  const onFileChange = (side, file) => {
    if (side === 'front') {
      setFront(file)
      setPreviewFront(file ? URL.createObjectURL(file) : null)
    } else {
      setBack(file)
      setPreviewBack(file ? URL.createObjectURL(file) : null)
    }
  }

  const submit = async () => {
    setError('')
    setResult(null)
    if (!front || !back) {
      setError('Please select both front and back images.')
      return
    }
    try {
      setLoading(true)
      const res = await runOcr({ front, back })
      setResult(res)
    } catch (e) {
      setError(e?.response?.data?.error || e.message || 'OCR failed')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen">
      <header className="bg-white shadow">
        <div className="mx-auto max-w-5xl px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-2xl font-bold tracking-tight text-gray-900">Aadhaar OCR</h1>
          <p className="text-gray-500">Upload front & back images, then extract details with Google Vision.</p>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-6">
          <ImageUpload
            label="Front Side"
            onChange={(f) => onFileChange('front', f)}
            previewUrl={previewFront}
          />
          <ImageUpload
            label="Back Side"
            onChange={(f) => onFileChange('back', f)}
            previewUrl={previewBack}
          />
        </div>

        <div className="mt-6 flex items-center gap-3">
          <button
            onClick={submit}
            disabled={loading}
            className="rounded-xl bg-black px-5 py-3 text-white font-medium hover:bg-gray-800 transition disabled:opacity-60"
          >
            {loading ? 'Processing...' : 'Run OCR'}
          </button>
          {error && <span className="text-red-600">{error}</span>}
        </div>

        {result && (
          <div className="mt-8 grid md:grid-cols-2 gap-6">
            <ResultCard title="Extracted Details" data={result.extracted} />
          </div>
        )}
      </main>

      <footer className="py-8 text-center text-sm text-gray-400">
        Built with React + Tailwind, Express (TS), and Google Vision.
      </footer>
    </div>
  )
}
