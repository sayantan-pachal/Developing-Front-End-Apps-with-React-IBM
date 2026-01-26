import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import { ShoppingCart } from "lucide-react";

function Header() {
  const { totalItems } = useCart();

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <Link
          to="/products"
          className="text-2xl font-extrabold text-white tracking-wide"
        >
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

          {/* Cart Icon */}
          <Link
            to="/cart"
            className="relative text-white hover:text-yellow-200 transition"
          >
            <ShoppingCart className="w-7 h-7" name="cart" />

            {/* Badge */}
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded-full animate-bounce">
                {totalItems}
              </span>
            )}
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;