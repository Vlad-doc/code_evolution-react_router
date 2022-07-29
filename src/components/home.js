import React from "react"
import { useNavigate } from "react-router-dom"

const Home = () => {
  const navigate = useNavigate()
  return (
    <>
      <h2>Home Page</h2>
      <button onClick={() => navigate("/order-summary")}>Order</button>
    </>
  )
}

export default Home
