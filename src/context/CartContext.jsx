import { createContext, useContext, useState } from "react"

const CartContext = createContext()

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([])

  const addToCart = (plant) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === plant.id)
      if (existing) {
        return prev.map((item) =>
          item.id === plant.id
            ? { ...item, qty: item.qty + 1 }
            : item
        )
      }
      return [...prev, { ...plant, qty: 1 }]
    })
  }

  const updateQty = (id, delta) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.id === id ? { ...item, qty: item.qty + delta } : item
        )
        .filter((item) => item.qty > 0)
    )
  }

  const removeItem = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id))
  }

  const totalItems = cart.reduce((a, b) => a + b.qty, 0)
  const totalPrice = cart.reduce((a, b) => a + b.qty * b.price, 0)

  return (
    <CartContext.Provider
      value={{ cart, addToCart, updateQty, removeItem, totalItems, totalPrice }}
    >
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => useContext(CartContext)