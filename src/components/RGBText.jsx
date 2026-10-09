import './../styles/RGBText.css'

export default function RGBText({ text }) {
  return (
    <span className="rgb-text">
      {text.split('').map((c, i) => (
        <span key={i} style={{ animationDelay: `${i * 0.08}s` }}>
          {c === ' ' ? '\u00A0' : c}
        </span>
      ))}
    </span>
  )
}