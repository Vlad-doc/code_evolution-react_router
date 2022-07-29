import { Routes, Route } from "react-router-dom"
import About from "./components/about"
import Home from "./components/home"
import Navbar from "./components/navbar"
import NoMatch from "./components/noMatch"
import OrderSummary from "./components/orderSummary"

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="order-summary" element={<OrderSummary />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </>
  )
}

export default App
