import { useEffect, useState } from 'react'
import './../styles/CookieBanner.css'

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent')
    if (!consent) setVisible(true)
  }, [])

  const accept = () => {
    localStorage.setItem('cookie-consent', 'accepted')
    setVisible(false)
  }

  const reject = () => {
    localStorage.setItem('cookie-consent', 'rejected')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="cookie-banner">
      <div className="cookie-text">
        🍪 Usamos cookies para mejorar tu experiencia y datos mínimos de
        funcionamiento. Puedes aceptar o rechazar.
      </div>
      <div className="cookie-actions">
        <button className="btn-reject" onClick={reject}>Rechazar</button>
        <button className="btn-accept" onClick={accept}>Aceptar</button>
      </div>
    </div>
  )
}