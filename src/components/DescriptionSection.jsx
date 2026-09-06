import { useEffect, useState } from 'react'

const features = [
  { emoji: '🗓️', text: 'Manage your timetable' },
  { emoji: '📚', text: 'Track assignments' },
  { emoji: '📝', text: 'Plan for exams' },
  { emoji: '📈', text: 'Monitor your progress' },
]

function DescriptionSection({ isActive }) {
  // keeps track of how many chips are currently visible
  const [visibleCount, setVisibleCount] = useState(0)

  useEffect(() => {
    if (!isActive) {
      setVisibleCount(0)
      return
    }

    // show one chip every 300ms, one after another
    const timers = features.map((feature, index) =>
      setTimeout(() => {
        setVisibleCount(index + 1)
      }, 300 * (index + 1))
    )

    return () => timers.forEach((t) => clearTimeout(t))
  }, [isActive])

  return (
    <div className="description-wrap">
      <h2 className="description-heading">
        One space. Every deadline.
      </h2>

      <div className="feature-chips">
        {features.map((feature, index) => (
          <div
            key={feature.text}
            className="feature-chip"
            style={{
              opacity: index < visibleCount ? 1 : 0,
              transform: index < visibleCount ? 'translateY(0)' : 'translateY(10px)',
              transition: 'opacity 0.5s ease, transform 0.5s ease',
            }}
          >
            <span className="feature-emoji">{feature.emoji}</span>
            <span>{feature.text}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default DescriptionSection