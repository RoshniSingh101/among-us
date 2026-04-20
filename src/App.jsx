import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import CreateCrewmate from './pages/CreateCrewmate'
import EditCrewmate from './pages/EditCrewmate'
import CrewmateDetail from './pages/CrewmateDetail'
import './App.css'

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<CreateCrewmate />} />
          <Route path="/crewmate/:id" element={<CrewmateDetail />} />
          <Route path="/edit/:id" element={<EditCrewmate />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
