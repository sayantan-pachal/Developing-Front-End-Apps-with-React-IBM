/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from "react"

const CartContext = createContext()

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([])

  // ➕ Add item to cart
  const addToCart = (plant) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find(
        (item) => item.id === plant.id
      )

      if (existingItem) {
        return prevCart.map((item) =>
          item.id === plant.id
            ? { ...item, qty: item.qty + 1 }
            : item
        )
      }

      return [...prevCart, { ...plant, qty: 1 }]
    })
  }

  // 🔼🔽 Update quantity
  const updateQty = (id, change) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === id
            ? { ...item, qty: item.qty + change }
            : item
        )
        .filter((item) => item.qty > 0)
    )
  }

  // ❌ Remove item completely
  const removeItem = (id) => {
    setCart((prevCart) =>
      prevCart.filter((item) => item.id !== id)
    )
  }

  // 🧮 Total items
  const totalItems = cart.reduce(
    (total, item) => total + item.qty,
    0
  )

  // 💰 Total price
  const totalPrice = cart.reduce(
    (total, item) => total + item.qty * item.price,
    0
  )

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        updateQty,
        removeItem,
        totalItems,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

// 🔗 Custom hook
export const useCart = () => useContext(CartContext)