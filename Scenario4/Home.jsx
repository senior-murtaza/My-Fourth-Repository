import { NavLink } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <nav>
      <h2>ShopZone</h2>

      <div>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/products">Products</NavLink>
        <NavLink to="/register">Register</NavLink>
        <NavLink to="/cart">Cart</NavLink>
      </div>
    </nav>
  );
}

export default App; 