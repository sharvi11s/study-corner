import './App.css'
import DotField from './components/DotField'
import ScrollFadeSections from './components/ScrollFadeSections'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Login from "./pages/login";

function App() {
  const heroSections = [
    () => (
      <h1 className="hero-title">Tired of making study timetables?</h1>
    ),

    () => (
      <>
        <p className="meet">meet</p>
        <h2 className="studycorner-title">StudyCorner</h2>
        <p className="tagline">Your cozy corner for calmer semesters.</p>
      </>
    ),

    () => (
      <>
        <p className="tagline-final">A little corner where your timetable finally makes sense.</p>
        <Link to="/login" className="login-button"><b>GET STARTED</b></Link>
      </>
    ),
  ]

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <nav>
                <div>
                  <a href="/" className="logo">StudyCorner</a>
                  <a href="#features" className="nav-link">Features</a>
                  <a href="#about" className="nav-link">About</a>
                </div>
              </nav>

              <ScrollFadeSections sections={heroSections} background={<DotField />} />
            </>
          }
        />

        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App