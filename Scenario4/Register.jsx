import { useState } from "react";

function Register() {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState([]);

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    const newErrors = [];

    if (form.username.length < 3) {
      newErrors.push(
        "Username must contain at least 3 characters."
      );
    }

    if (!form.email.includes("@")) {
      newErrors.push("Enter a valid email.");
    }

    if (form.password.length < 8) {
      newErrors.push(
        "Password must contain at least 8 characters."
      );
    }

    if (form.password !== form.confirmPassword) {
      newErrors.push("Passwords do not match.");
    }

    setErrors(newErrors);

    if (newErrors.length === 0) {
      alert("Registration successful!");

      setForm({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    }
  }

  return (
    <div className="form-container">
      <h1>Register</h1>

      <form onSubmit={handleSubmit}>
        <input
          name="username"
          placeholder="Username"
          value={form.username}
          onChange={handleChange}
        />

        <input
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
        />

        <input
          name="password"
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
        />

        <input
          name="confirmPassword"
          type="password"
          placeholder="Confirm password"
          value={form.confirmPassword}
          onChange={handleChange}
        />

        {errors.map((error, index) => (
          <p className="error" key={index}>
            {error}
          </p>
        ))}

        <button>Create Account</button>
      </form>
    </div>
  );
}

export default Register;