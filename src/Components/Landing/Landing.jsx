import { Link } from "react-router-dom";

function Landing() {
  return (
    <section
      className="min-h-screen bg-cover bg-center relative flex items-center"
      style={{
        backgroundImage:
          "url('/images/paradise-nursery.avif')",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        
        {/* Left Content */}
        <div className="text-white">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight">
            Welcome To <br />
            <span className="text-green-400">Paradise Nursery</span>
          </h1>

          <p className="text-lg md:text-xl mb-6 text-green-100">
            Where Green Meets Serenity
          </p>

          <Link to="/products">
            <button className="px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-bold rounded-full shadow-lg hover:scale-105 transition">
              Get Started
            </button>
          </Link>
        </div>

        {/* Right Content */}
        <div className="text-white text-sm md:text-base leading-relaxed bg-black/30 p-6 rounded-xl backdrop-blur-sm">
          <p className="mb-4">
            Welcome to <strong>Paradise Nursery</strong>, where green meets serenity.
            At Paradise Nursery, we are passionate about bringing nature closer
            to you. Our mission is to provide a wide range of high-quality plants
            that not only enhance the beauty of your surroundings but also
            contribute to a healthier and more sustainable lifestyle.
          </p>

          <p className="mb-4">
            From air-purifying plants to aromatic fragrant ones, we have
            something for every plant enthusiast. Our team of experts ensures
            that each plant meets our strict standards of quality and care.
          </p>

          <p>
            Whether you’re a seasoned gardener or just starting your green
            journey, we’re here to support you every step of the way. Join us in
            creating a greener, healthier world — right at your doorstep.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Landing;