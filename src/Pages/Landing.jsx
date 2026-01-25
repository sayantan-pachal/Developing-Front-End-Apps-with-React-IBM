import { Link } from "react-router-dom"

function Landing() {
  return (
    <div
      style={{
        backgroundImage: "url('/plants/bg.jpg')",
        height: "100vh",
        backgroundSize: "cover",
        color: "white",
        textAlign: "center",
        paddingTop: "150px",
      }}
    >
      <h1>Paradise Nursery</h1>
      <p>Your one-stop destination for healthy and happy houseplants.</p>
      <Link to="/products">
        <button style={{ padding: "10px 20px", fontSize: "16px" }}>
          Get Started
        </button>
      </Link>
    </div>
  )
}

export default Landing