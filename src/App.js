import { Routes, Route } from "react-router-dom"
import About from "./components/about"
import Home from "./components/home"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />
    </Routes>
  )
}

export default App
