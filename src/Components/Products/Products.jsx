import plants from "../../data/plants";
import { useCart } from "../../context/CartContext";
import { Minus, Plus } from "lucide-react";

function Products() {
  const { cart, addToCart, updateQty } = useCart();

  const categories = ["Indoor", "Medicinal", "Outdoor"];

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
                      className="w-full h-52 object-cover rounded-t-3xl"
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
    </section>
  );
}

export default Products;