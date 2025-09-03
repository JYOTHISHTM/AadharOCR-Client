import axios from 'axios'

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000',
  withCredentials: false
})

export async function runOcr({ front, back }) {
  const fd = new FormData()
  fd.append('front', front)
  fd.append('back', back)
  const { data } = await api.post('/api/ocr', fd, {
    headers: { 'Content-Type': 'multipart/form-data' }
  })
  return data
}
