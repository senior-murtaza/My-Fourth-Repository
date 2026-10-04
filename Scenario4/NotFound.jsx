import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="page">
      <h1>404</h1>
      <p>Page was not found.</p>

      <Link to="/">Go Home</Link>
    </div>
  );
}

export default NotFound;
