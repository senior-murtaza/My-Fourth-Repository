import { NavLink } from "react-router-dom";
import "./Home.css"

export default function Register(){
  return(
    <div className="home">
      <h1>Welcome to our Home Page</h1>
      <NavLink className="link"  to="sign">Sign Up</NavLink>
    </div>
  )
}