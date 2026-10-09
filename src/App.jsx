import { useState } from 'react'
import SearchBar from './components/SearchBar'
import Skeleton from './components/Skeleton'
import CookieBanner from './components/CookieBanner'
import RGBText from './components/RGBText'
import DownloadCard from './components/DownloadCard'
import './App.css'

// En local queda vacío (usa el proxy de Vite)
// En producción (Vercel) se rellena con la URL de Render
const API = import.meta.env.VITE_API_URL || ''

function App() {
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState(null)
  const [error, setError] = useState(null)

  const handleSearch = async (url) => {
    setError(null)
    setResult(null)
    setLoading(true)

    try {
      const res = await fetch(`${API}/api/info?url=${encodeURIComponent(url)}`)

      if (!res.ok) {
        const data = await res.json().catch(() => ({}))
        throw new Error(data.error || 'No se pudo obtener la información del video')
      }

      const data = await res.json()
      setResult(data)
    } catch (e) {
      if (e.message.includes('Failed to fetch')) {
        setError('No se puede conectar al servidor. ¿Está el backend corriendo?')
      } else {
        setError(e.message || 'Error al procesar el enlace')
      }
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="app">
      <div className="bg-hallucinate" aria-hidden="true" />
      <div className="bg-grid" aria-hidden="true" />

      <header className="header">
        <h1 className="logo">
          <span className="logo-icon">🎵</span>
          <RGBText text="Descarga MP3" />
        </h1>
        <p className="tagline">YouTube → MP3 / MP4 en segundos</p>
      </header>

      <main className="main">
        <SearchBar onSearch={handleSearch} loading={loading} />

        {error && <div className="error">⚠ {error}</div>}

        {loading && <Skeleton />}

        {!loading && result && <DownloadCard data={result} />}
      </main>

      <footer className="footer">
        <p>Hecho con 💜 · Uso personal responsable</p>
      </footer>

      <CookieBanner />
    </div>
  )
}

export default App