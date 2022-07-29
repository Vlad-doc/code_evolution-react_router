import React from "react"
import { NavLink, Outlet } from "react-router-dom"

const Products = () => {
  const isActive = ({ isActive }) => (isActive ? "active" : "")

  return (
    <>
      <h2>Products</h2>
      <input type="search" placeholder="Search products" />
      <nav>
        {/* relative link */}
        <NavLink to={"featured"} className={isActive}>
          featured
        </NavLink>
        {/* absolute link */}
        <NavLink to={"/products/new"} className={isActive}>
          new
        </NavLink>
      </nav>
      <Outlet />
    </>
  )
}

export default Products
