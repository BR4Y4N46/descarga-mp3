import './../styles/Skeleton.css'

export default function Skeleton() {
  return (
    <div className="skeleton-card">
      <div className="sk-thumb" />
      <div className="sk-info">
        <div className="sk-line sk-title" />
        <div className="sk-line sk-sub" />
        <div className="sk-btns">
          <div className="sk-btn" />
          <div className="sk-btn" />
        </div>
      </div>
    </div>
  )
}