import { NavLink } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <nav>
      <h2>BookHub</h2>

      <div>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/register">Register</NavLink>
        <NavLink to="/books">Books</NavLink>
      </div>
    </nav>
  );
}

export default App;
