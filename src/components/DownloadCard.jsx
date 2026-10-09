import './../styles/SearchBar.css'

const API = import.meta.env.VITE_API_URL || ''

export default function DownloadCard({ data }) {
  const { title, thumbnail, author, duration, formats, url } = data

  const downloadUrl = (fmt) => {
    const params = new URLSearchParams({
      url: url || '',
      format: fmt,
      title: title || 'descarga'
    })
    return `${API}/api/download?${params.toString()}`
  }

  return (
    <div className="download-card">
      <img src={thumbnail} alt={title} className="thumb" />
      <div className="card-body">
        <h2>{title}</h2>
        <p className="meta">{author} · {duration}</p>

        <div className="formats">
          {(formats || ['mp3', 'mp4']).map((f) => (
            <a
              key={f}
              href={downloadUrl(f)}
              className={`fmt-btn fmt-${f}`}
              download
            >
              ⬇ {f.toUpperCase()}
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}