import { useEffect, useRef, useState } from 'react'


function ScrollFadeSections({ sections, background }) {
  const wrapperRef = useRef(null)
  const [scrollProgress, setScrollProgress] = useState(0)


  useEffect(() => {
    function handleScroll() {
      const wrapper = wrapperRef.current
      if (!wrapper) return


      const rect = wrapper.getBoundingClientRect()
      const scrolledInto = -rect.top
      const maxScroll = wrapper.offsetHeight - window.innerHeight


      let percent = scrolledInto / maxScroll
      if (percent < 0) percent = 0
      if (percent > 1) percent = 1


      const progress = percent * (sections.length - 1)
      setScrollProgress(progress)
    }


    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])


  return (
    <div ref={wrapperRef} style={{ height: sections.length * 150 + 'vh', position: 'relative' }}>
      <div style={{ position: 'sticky', top: 0, height: '100vh', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0 }}>
          {background}
        </div>


        {sections.map((renderSection, index) => {
          const distance = Math.abs(scrollProgress - index)
          let opacity = 1 - distance * 1.5
          if (opacity < 0) opacity = 0


          const isActive = Math.round(scrollProgress) === index


          return (
            <div
              key={index}
              style={{
                position: 'absolute',
                inset: 0,
                opacity: opacity,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
              }}
            >
              {renderSection(isActive)}
            </div>
          )
        })}
      </div>
    </div>
  )
}


export default ScrollFadeSections
