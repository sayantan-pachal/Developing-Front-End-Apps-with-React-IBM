import plants from "../../data/plants";
import { useCart } from "../../context/CartContext";

function Products() {
  const { addToCart } = useCart();

  const categories = ["Indoor", "Medicinal", "Outdoor"];

  return (
    <section className="min-h-screen bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50 px-6 py-12">
      {/* Page Title */}
      <h2 className="text-5xl font-extrabold text-center text-green-900 mb-12 animate-pulse">
        🌱 Our Plants Collection
      </h2>

      {categories.map((category) => (
        <div key={category} className="mb-16">
          {/* Category Title */}
          <h3 className="text-3xl font-bold text-green-800 mb-6 border-l-8 border-green-500 pl-6">
            {category} Plants
          </h3>

          {/* Plant Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            {plants
              .filter((plant) => plant.category === category)
              .map((plant) => (
                <div
                  key={plant.id}
                  className="bg-gradient-to-br from-green-100 via-emerald-50 to-teal-100 rounded-3xl shadow-xl hover:shadow-2xl hover:scale-105 transform transition-all duration-300 overflow-hidden relative"
                >
                  {/* Stock Badge */}
                  {plant.stock && (
                    <span className="absolute top-3 left-3 bg-green-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                      In Stock
                    </span>
                  )}

                  {/* Image */}
                  <img
                    src={plant.image}
                    alt={plant.name}
                    className="w-full h-52 object-cover rounded-t-3xl"
                  />

                  {/* Card Content */}
                  <div className="p-6 text-center">
                    <h4 className="text-2xl font-bold text-green-900 mb-2">
                      {plant.name}
                    </h4>

                    <p className="text-xl font-semibold text-emerald-700 mb-4">
                      ₹{plant.price}
                    </p>

                    <button
                      onClick={() => addToCart(plant)}
                      className="w-full py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-semibold rounded-2xl shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))}
          </div>
        </div>
      ))}
    </section>
  );
}

export default Products;
