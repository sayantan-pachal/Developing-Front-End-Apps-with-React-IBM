function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-green-900 to-emerald-900 text-gray-200 mt-0">
      <div className="max-w-7xl mx-auto px-6 py-8 text-center space-y-3">

        <h3 className="text-lg font-semibold text-white">
          🌿 Paradise Nursery
        </h3>

        <p className="text-sm text-gray-300">
          Bringing nature closer to your home.
        </p>

        <p className="text-xs text-gray-400">
          © {new Date().getFullYear()} Paradise Nursery. All rights reserved.
        </p>
        <p className="text-gray-400 text-xs">
          Created by{" "}
          <a
            href="https://sayantanpachal.vercel.app"
            target="_blank"
            rel="noreferrer"
            className="text-gray-400 hover:underline"
          >
            Sayantan Pachal
          </a>
        </p>
      </div>
    </footer>
  )
}

export default Footer