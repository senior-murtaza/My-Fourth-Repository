import { NavLink } from "react-router-dom";

export default function Navigation() {
  return (
    <nav className="flex justify-center gap-4 bg-gray-900 p-5">
      <NavLink
        to="/"
        className={({ isActive }) =>
          `rounded-lg px-5 py-2 font-semibold ${
            isActive
              ? "bg-white text-gray-900"
              : "text-white hover:bg-gray-700"
          }`
        }
      >
        Home
      </NavLink>

      <NavLink
        to="/form"
        className={({ isActive }) =>
          `rounded-lg px-5 py-2 font-semibold ${
            isActive
              ? "bg-white text-gray-900"
              : "text-white hover:bg-gray-700"
          }`
        }
      >
        Sign Up
      </NavLink>

      <NavLink
        to="/card"
        className={({ isActive }) =>
          `rounded-lg px-5 py-2 font-semibold ${
            isActive
              ? "bg-white text-gray-900"
              : "text-white hover:bg-gray-700"
          }`
        }
      >
        Card
      </NavLink>
    </nav>
  );
}