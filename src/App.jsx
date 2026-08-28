import './App.css'

function App() {
  return (
    <>
      <nav>
        <div>
          <a href="/" className="logo">StudyCorner</a>
          <a href="#features" className="nav-link">Features</a>
          <a href="#about" className="nav-link">About</a>
        </div>
      </nav>

      <section className="hero">
        <h1 className="hero-title">Tired of making study timetables?</h1>
        <p className="meet">meet</p>
        <h2 className="studycorner-title">StudyCorner</h2>
        <p className="tagline">Your cozy corner for calmer semesters.</p>
        <p className="tagline-final">A little corner where your timetable finally makes sense.</p>
        <button className="login-button"><b>GET STARTED</b></button>
      </section>
    </>
  )
}

export default App