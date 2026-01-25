import plants from "../data/plants"
import { useCart } from "../context/CartContext"

function Products() {
  const { addToCart } = useCart()

  return (
    <div>
      <h2>Our Plants</h2>

      {["Indoor", "Medicinal", "Outdoor"].map((cat) => (
        <div key={cat}>
          <h3>{cat}</h3>

          <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
            {plants
              .filter((p) => p.category === cat)
              .map((plant) => (
                <div
                  key={plant.id}
                  style={{ border: "1px solid #ccc", padding: "10px" }}
                >
                  <img src={plant.image} width="120" />
                  <h4>{plant.name}</h4>
                  <p>₹{plant.price}</p>
                  <button onClick={() => addToCart(plant)}>
                    Add to Cart
                  </button>
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default Products