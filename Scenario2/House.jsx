import { NavLink } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">

      {/* Navigation */}
      <nav className="flex items-center justify-between bg-gray-900 px-10 py-5 shadow-lg">
        
        <h1 className="text-2xl font-bold text-white">
          ServiceGo
        </h1>

        <div className="flex gap-3">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `rounded-lg px-5 py-2 font-semibold transition ${
                isActive
                  ? "bg-white text-gray-900"
                  : "text-gray-300 hover:bg-gray-700 hover:text-white"
              }`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/form"
            className={({ isActive }) =>
              `rounded-lg px-5 py-2 font-semibold transition ${
                isActive
                  ? "bg-white text-gray-900"
                  : "text-gray-300 hover:bg-gray-700 hover:text-white"
              }`
            }
          >
            Sign Up
          </NavLink>

          <NavLink
            to="/card"
            className={({ isActive }) =>
              `rounded-lg px-5 py-2 font-semibold transition ${
                isActive
                  ? "bg-white text-gray-900"
                  : "text-gray-300 hover:bg-gray-700 hover:text-white"
              }`
            }
          >
            Cards
          </NavLink>
        </div>

      </nav>

      {/* Home Content */}
      <main className="flex min-h-[80vh] flex-col items-center justify-center px-6 text-center">

        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-600">
          Welcome to ServiceGo
        </p>

        <h2 className="max-w-3xl text-5xl font-bold leading-tight text-gray-900">
          Everything You Need,
          <span className="text-blue-600"> In One Place.</span>
        </h2>

        <p className="mt-6 max-w-xl text-lg leading-8 text-gray-600">
          Explore our services, create your account, and discover
          everything we have to offer.
        </p>

        <div className="mt-8 flex gap-4">
          <NavLink
            to="/form"
            className="rounded-lg bg-gray-900 px-7 py-3 font-semibold text-white transition hover:bg-gray-700"
          >
            Get Started
          </NavLink>

          <NavLink
            to="/card"
            className="rounded-lg border border-gray-300 bg-white px-7 py-3 font-semibold text-gray-900 transition hover:bg-gray-200"
          >
            View Services
          </NavLink>
        </div>

      </main>

      {/* Footer */}
      <footer className="border-t bg-white py-5 text-center text-sm text-gray-500">
        © 2026 ServiceGo. All rights reserved.
      </footer>

    </div>
  );
}