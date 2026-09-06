import './App.css'
import DotField from './components/DotField'
import ScrollFadeSections from './components/ScrollFadeSections'
import MeetSection from './components/MeetSection'
import DescriptionSection from './components/DescriptionSection'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Login from "./pages/login";

function App() {
  const heroSections = [
    () => (
      <h1 className="hero-title">Tired of making study timetables?</h1>
    ),

    (isActive) => <MeetSection isActive={isActive} />,

    (isActive) => <DescriptionSection isActive={isActive} />,

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