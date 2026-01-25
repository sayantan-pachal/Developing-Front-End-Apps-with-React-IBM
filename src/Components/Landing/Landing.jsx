import { Link } from "react-router-dom"

function Landing() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-green-200 via-emerald-100 to-teal-200 flex items-center justify-center">
      
      <div className="max-w-4xl mx-auto px-6 text-center">
        
        {/* Title */}
        <h1 className="text-5xl md:text-6xl font-extrabold text-green-900 mb-6">
          Paradise Nursery
        </h1>

        {/* Description */}
        <p className="text-lg md:text-xl text-green-800 mb-10 leading-relaxed">
          Welcome to <span className="font-semibold">Paradise Nursery</span>, your
          trusted destination for beautiful, healthy houseplants. We bring
          nature closer to your home with carefully grown indoor, outdoor, and
          medicinal plants.
        </p>

        {/* CTA Button */}
        <Link to="/products">
          <button className="px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-bold text-lg rounded-full shadow-lg hover:scale-105 hover:shadow-2xl transition-transform duration-300">
            🌿 Get Started
          </button>
        </Link>
      </div>
    </section>
  )
}

export default Landing
