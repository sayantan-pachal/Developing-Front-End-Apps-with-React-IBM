import { useState } from "react";
import plants from "../../data/plants";
import { useCart } from "../../context/CartContext";
import { Plus, Minus, ChevronRight } from "lucide-react";
import './button.css'; // for the "Show more" button animation

function Products() {
  const { cart, addToCart, updateQty } = useCart();

  const categories = ["Indoor", "Medicinal", "Outdoor"];

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
    <section className="min-h-screen bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50 px-6 py-12">
      <h2 className="text-5xl font-extrabold text-center text-green-900 mb-12">
        🌱 Our Plants Collection
      </h2>

      {categories.map((category) => (
        <div key={category} className="mb-16">
          <h3 className="text-3xl font-bold text-green-800 mb-6 border-l-8 border-green-500 pl-6">
            {category} Plants
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            {plants
              .filter((plant) => plant.category === category)
              .map((plant) => {
                const cartItem = cart.find((item) => item.id === plant.id);

                return (
                  <div
                    key={plant.id}
                    className="bg-gradient-to-br from-green-100 via-emerald-50 to-teal-100 rounded-3xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 overflow-hidden"
                  >
                    {/* Image */}
                    <img
                      src={plant.image}
                      alt={plant.name}
                      className="w-auto h-64 object-cover rounded-t-xl mx-auto mt-4"
                    />

                    {/* Content */}
                    <div className="p-6 text-center">
                      <h4 className="text-2xl font-bold text-green-900 mb-2">
                        {plant.name}
                      </h4>

                      <p className="text-xl font-semibold text-emerald-700 mb-4">
                        ₹{plant.price}
                      </p>

                      {/* NOT in cart */}
                      {!cartItem && (
                        <button
                          onClick={() => addToCart(plant)}
                          className="w-full py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-semibold rounded-2xl shadow hover:scale-105 transition"
                        >
                          Add to Cart
                        </button>
                      )}

                      {/* IN cart */}
                      {cartItem && (
                        <div className="flex items-center justify-center gap-4 bg-white rounded-xl py-2 shadow-inner">
                          <button
                            onClick={() => updateQty(plant.id, -1)}
                            className="p-2 bg-red-100 text-red-600 rounded-lg hover:bg-red-200"
                          >
                            <Minus size={16} />
                          </button>

                          <span className="text-lg font-bold text-green-900">
                            {cartItem.qty}
                          </span>

                          <button
                            onClick={() => updateQty(plant.id, 1)}
                            className="p-2 bg-green-100 text-green-700 rounded-lg hover:bg-green-200"
                          >
                            <Plus size={16} />
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      ))}
      <div className="mt-12 flex flex-col items-center gap-6">
        <button
          onClick={handleClick}
          disabled={loading}
          className={`px-8 py-4 flex items-center gap-2 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-semibold rounded-full shadow transition-transform ${loading ? "opacity-70 cursor-not-allowed" : "hover:scale-105"}`}
        >
          {loading ? "Loading..." : <>Show more <ChevronRight /></>}
        </button>
        <p className="text-center text-green-700 italic">
          Can't find your favorite plant? Contact us to request new additions!
        </p>
      </div>
      {toast === "error" && (
        <div className="fixed top-20 left-1/2 -translate-x-1/2  bg-[linear-gradient(90deg,#f53123,#60a5fa)] text-white px-4 py-3 rounded-xl shadow-lg font-semibold animate-toastDrop">
          Something went wrong ❌ Please try again
        </div>
      )}
    </section>
  );
}

export default Products;