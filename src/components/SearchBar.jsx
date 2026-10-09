import { useState } from 'react'
import './../styles/SearchBar.css'

export default function SearchBar({ onSearch, loading }) {
  const [url, setUrl] = useState('')

  const submit = (e) => {
    e.preventDefault()
    const clean = url.trim()
    if (!clean) return
    if (!/youtu\.?be/.test(clean)) {
      alert('Pega un enlace válido de YouTube')
      return
    }
    onSearch(clean)
  }

  return (
    <form className="searchbar" onSubmit={submit}>
      <input
        type="text"
        placeholder="Pega aquí el enlace de YouTube..."
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        disabled={loading}
      />
      <button type="submit" disabled={loading || !url.trim()}>
        {loading ? '...' : 'Buscar'}
      </button>
    </form>
  )
}