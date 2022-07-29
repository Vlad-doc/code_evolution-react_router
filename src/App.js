import React from "react"
import { Routes, Route } from "react-router-dom"
// import About from "./components/about"
import Admin from "./components/admin"
import FeaturedProducts from "./components/featuredProducts"
import Home from "./components/home"
import Navbar from "./components/navbar"
import NewProducts from "./components/newProducts"
import NoMatch from "./components/noMatch"
import OrderSummary from "./components/orderSummary"
import Products from "./components/products"
import User from "./components/user"
import Users from "./components/users"
const LazyAbout = React.lazy(() => import("./components/about"))

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="about"
          element={
            <React.Suspense fallback="Loading...">
              <LazyAbout />
            </React.Suspense>
          }
        />
        <Route path="order-summary" element={<OrderSummary />} />
        <Route path="/products" element={<Products />}>
          <Route index element={<FeaturedProducts />} />
          <Route path="featured" element={<FeaturedProducts />} />
          <Route path="new" element={<NewProducts />} />
        </Route>
        <Route path="users" element={<Users />}>
          <Route path=":userId" element={<User />} />
          <Route path="admin" element={<Admin />} />
        </Route>

        <Route path="*" element={<NoMatch />} />
      </Routes>
    </>
  )
}

export default App
