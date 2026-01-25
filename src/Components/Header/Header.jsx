import { Link } from "react-router-dom"
import { useCart } from "../../context/CartContext"

function Header() {
  const { totalItems } = useCart()

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo / Title */}
        <Link to="/products" className="text-2xl font-extrabold text-white tracking-wide">
          🌿 Paradise Nursery
        </Link>

        {/* Navigation */}
        <nav className="flex items-center gap-6">
          <Link
            to="/products"
            className="text-white font-medium hover:text-yellow-200 transition"
          >
            Products
          </Link>

          <Link
            to="/cart"
            className="relative flex items-center gap-2 text-white font-medium hover:text-yellow-200 transition"
          >
            🛒 Cart

            {/* Cart Badge */}
            <span className="absolute -top-2 -right-4 bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
              {totalItems}
            </span>
          </Link>
        </nav>
      </div>
    </header>
  )
}

export default Header