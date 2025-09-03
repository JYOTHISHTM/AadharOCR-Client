import React, { useRef } from 'react'

export default function ImageUpload({ label, onChange, previewUrl }) {
  const inputRef = useRef(null)

  const handleFile = (e) => {
    const f = e.target.files?.[0]
    if (!f) {
      onChange(null)
      return
    }
    if (!['image/jpeg','image/png','image/webp'].includes(f.type)) {
      alert('Only JPG, PNG, or WEBP files are allowed')
      inputRef.current.value = ''
      onChange(null)
      return
    }
    if (f.size > 8 * 1024 * 1024) {
      alert('Max file size is 8MB')
      inputRef.current.value = ''
      onChange(null)
      return
    }
    onChange(f)
  }

  return (
    <div className="rounded-2xl border bg-white p-5 shadow-sm">
      <p className="mb-3 text-sm font-medium text-gray-700">{label}</p>
      <div className="flex gap-4 items-start">
        <div className="flex-1">
          <input
            ref={inputRef}
            type="file"
            accept="image/*"
            onChange={handleFile}
            className="block w-full text-sm text-gray-900 file:mr-4 file:rounded-lg file:border-0 file:bg-black file:px-4 file:py-2 file:text-sm file:font-semibold file:text-white hover:file:bg-gray-800"
          />
          <p className="mt-2 text-xs text-gray-500">Allowed: JPG, PNG, WEBP. Max 8MB.</p>
        </div>
        {previewUrl && (
          <img src={previewUrl} alt={`${label} preview`} className="h-28 w-44 object-cover rounded-lg border" />
        )}
      </div>
    </div>
  )
}
