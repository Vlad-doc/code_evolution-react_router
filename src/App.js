import { Routes, Route } from "react-router-dom"
import About from "./components/about"
import Featured from "./components/featured"
import Home from "./components/home"
import Navbar from "./components/navbar"
import New from "./components/new"
import NoMatch from "./components/noMatch"
import OrderSummary from "./components/orderSummary"
import Products from "./components/products"

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="order-summary" element={<OrderSummary />} />
        <Route path="*" element={<NoMatch />} />
        <Route path="/products" element={<Products />}>
          <Route path="featured" element={<Featured />} />
          <Route path="new" element={<New />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
