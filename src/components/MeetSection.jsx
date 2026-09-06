import { useEffect, useState } from 'react'

// isActive tells us if this section is the one currently on screen
function MeetSection({ isActive }) {
  const [showTagline, setShowTagline] = useState(false)

  useEffect(() => {
    // if this section is not active anymore, hide the tagline again
    // so it can play the animation again next time
    if (!isActive) {
      setShowTagline(false)
      return
    }

    // wait a bit after the section becomes active, then show the tagline
    const timer = setTimeout(() => {
      setShowTagline(true)
    }, 1200)

    return () => clearTimeout(timer)
  }, [isActive])

  return (
    <>
      <p className="meet">meet</p>
      <h2 className="studycorner-title">StudyCorner</h2>
      <p
        className="tagline"
        style={{
          opacity: showTagline ? 1 : 0,
          transition: 'opacity 0.8s ease',
        }}
      >
        Your cozy corner for calmer semesters.
      </p>
    </>
  )
}

export default MeetSection