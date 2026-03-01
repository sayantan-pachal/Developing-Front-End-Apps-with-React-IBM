import { useState } from "react";
import { Link } from "react-router-dom"
import { useCart } from "../../context/CartContext"
import './../Products/button.css'; // for the "Checkout" button animation and toast notification

function Cart() {
  const { cart, updateQty, removeItem, totalItems, totalPrice } = useCart()

  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState(null); // "success" | "error" | null

  const showToast = (type) => {
    setToast(type);

    setTimeout(() => {
      setToast(null);
    }, 4000);
  };

  const handleClick = () => {
    setLoading(true);

    // simulate async work (API call, page load, etc.)
    setTimeout(() => {
      setLoading(false);
      showToast("error"); // SAME toast style as ContactForm
    }, 2000);
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 px-6 py-12">

      {/* Page Title */}
      <h2 className="text-4xl font-extrabold text-center text-green-900 mb-10">
        🛒 Your Shopping Cart
      </h2>

      {cart.length === 0 ? (
        <div className="text-center">
          <p className="text-lg text-green-700 mb-6">
            Your cart is currently empty 🌱
          </p>
          <Link to="/products">
            <button className="px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-semibold rounded-full shadow hover:scale-105 transition-transform">
              Continue Shopping
            </button>
          </Link>
        </div>
      ) : (
        <>
          {/* Cart Summary */}
          <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-6 mb-10">
            <div className="flex justify-between text-lg font-semibold text-green-800">
              <span>Total Items: {totalItems}</span>
              <span>Total Cost: ₹{totalPrice}</span>
            </div>
          </div>

          {/* Cart Items */}
          <div className="max-w-4xl mx-auto space-y-6">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex flex-col md:flex-row items-center bg-white rounded-2xl shadow-lg p-5 gap-6"
              >
                {/* Image */}
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-32 h-32 object-cover rounded-xl"
                />

                {/* Details */}
                <div className="flex-1 text-center md:text-left">
                  <h4 className="text-xl font-bold text-green-900">
                    {item.name} <span className="text-green-800">({item.category} Plant)</span>
                  </h4>
                  <p className="text-green-700">
                    ₹{item.price} × {item.qty}
                  </p>
                  <p className="font-semibold text-emerald-600 mt-1">
                    Subtotal: ₹{item.price * item.qty}
                  </p>
                </div>

                {/* Quantity Controls */}
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => updateQty(item.id, -1)}
                    className="px-3 py-1 bg-red-100 text-red-600 font-bold rounded-lg hover:bg-red-200"
                  >
                    −
                  </button>

                  <span className="font-semibold">{item.qty}</span>

                  <button
                    onClick={() => updateQty(item.id, 1)}
                    className="px-3 py-1 bg-green-100 text-green-600 font-bold rounded-lg hover:bg-green-200"
                  >
                    +
                  </button>
                </div>

                {/* Delete Button */}
                <button
                  onClick={() => removeItem(item.id)}
                  className="text-sm text-red-500 hover:underline"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-6 mt-12">
            <Link to="/products">
              <button className="px-6 py-3 bg-gray-200 text-gray-800 font-semibold rounded-full hover:bg-gray-300">
                Continue Shopping
              </button>
            </Link>

            <button
              onClick={handleClick}
              disabled={loading}
              className={`px-8 py-4 flex items-center gap-2 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-semibold rounded-full shadow transition-transform ${loading ? "opacity-70 cursor-not-allowed" : "hover:scale-105"}`}
            >
              {loading ? "Processing..." : " Checkout"}
            </button>

          </div>
        </>
      )}
      {toast === "error" && (
        <div className="fixed top-20 left-1/2 -translate-x-1/2  bg-[linear-gradient(90deg,#f53123,#60a5fa)] text-white px-4 py-3 rounded-xl shadow-lg font-semibold animate-toastDrop">
          Checkout coming soon 🚧
        </div>
      )}
    </section>
  )
}

export default Cart
