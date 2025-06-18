import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white p-4">
      {/* Hero Section */}
      <section className="text-center py-20">
        <h1 className="text-5xl font-extrabold mb-4">Welcome to TechNow</h1>
        <p className="text-lg text-gray-300 mb-8">
          Stay updated with the latest tech news, explore top tech personalities, and discover the biggest tech companies in the world.
        </p>
        <Link
          to="/trending"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition"
        >
          Explore Trending News
        </Link>
      </section>

      {/* Features Section */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 py-10">
        {/* Trending News */}
        <div className="bg-gray-800 rounded-lg shadow p-6 hover:scale-105 transition">
          <h2 className="text-2xl font-semibold mb-2">🔥 Trending News</h2>
          <p className="text-gray-400 mb-4">Catch up with the hottest news in tech globally, updated daily.</p>
          <Link to="/trending" className="text-blue-400 font-medium hover:underline">View News →</Link>
        </div>

        {/* Top Personalities */}
        <div className="bg-gray-800 rounded-lg shadow p-6 hover:scale-105 transition">
          <h2 className="text-2xl font-semibold mb-2">👤 Top Personalities</h2>
          <p className="text-gray-400 mb-4">Discover influential leaders shaping the tech industry today.</p>
          <Link to="/personalities" className="text-blue-400 font-medium hover:underline">Meet the Leaders →</Link>
        </div>

        {/* Top Companies */}
        <div className="bg-gray-800 rounded-lg shadow p-6 hover:scale-105 transition">
          <h2 className="text-2xl font-semibold mb-2">🏢 Top Companies</h2>
          <p className="text-gray-400 mb-4">Explore the world's biggest tech companies by market cap and influence.</p>
          <Link to="/companies" className="text-blue-400 font-medium hover:underline">Explore Companies →</Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-10 text-center text-gray-500 text-sm">
        © 2025 TechNow. All rights reserved.
      </footer>
    </div>
  );
}

export default Home;
