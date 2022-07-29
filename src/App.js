import { Routes, Route } from "react-router-dom"
import About from "./components/about"
import FeaturedProducts from "./components/featuredProducts"
import Home from "./components/home"
import Navbar from "./components/navbar"
import NewProducts from "./components/newProducts"
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
          <Route index element={<FeaturedProducts />} />
          <Route path="featured" element={<FeaturedProducts />} />
          <Route path="new" element={<NewProducts />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
