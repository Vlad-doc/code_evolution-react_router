import React from "react"
import { useNavigate } from "react-router-dom"
const OrderSummary = () => {
  const navigate = useNavigate()
  return (
    <>
      <div>Order confirm</div>
      <button onClick={() => navigate(-1)}>Back</button>
    </>
  )
}

export default OrderSummary
