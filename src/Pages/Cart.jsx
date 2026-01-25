import { useCart } from "../context/CartContext"
import { Link } from "react-router-dom"

function Cart() {
  const { cart, updateQty, removeItem, totalItems, totalPrice } = useCart()

  return (
    <div>
      <h2>Shopping Cart</h2>
      <p>Total Items: {totalItems}</p>
      <p>Total Price: ₹{totalPrice}</p>

      {cart.map((item) => (
        <div key={item.id} style={{ borderBottom: "1px solid #ccc" }}>
          <img src={item.image} width="80" />
          <h4>{item.name}</h4>
          <p>₹{item.price} × {item.qty}</p>

          <button onClick={() => updateQty(item.id, 1)}>+</button>
          <button onClick={() => updateQty(item.id, -1)}>-</button>
          <button onClick={() => removeItem(item.id)}>Delete</button>
        </div>
      ))}

      <Link to="/products">
        <button>Continue Shopping</button>
      </Link>

      <button>Checkout</button>
    </div>
  )
}

export default Cart