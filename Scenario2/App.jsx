import { useState } from "react";

export default function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState([]);

  function Validation(e) {
    e.preventDefault();

    const errors = [];

    if (name.length < 2 || name.length > 15) {
      errors.push({
        element: "Name",
        errorText: "Invalid Name",
      });
    }

    if (email.length < 7 || !email.includes("@") || !/[0-9]/.test(email)) {
      errors.push({
        element: "email",
        errorText: "Invalid Ema",
      });
    }

    if (
      !userName.includes("@") ||
      !/[0-9]/.test(userName) ||
      !/[-_!#$%^&*]/.test(userName)
    ) {
      errors.push({
        element: "Username",
        errorText: "Invalid Username",
      });
    }

    if (
      password.length < 9 ||
      !/[0-9]/.test(password) ||
      !/[-_!#$%^&*]/.test(password)
    ) {
      errors.push({
        element: "Password",
        errorText: "Invalid Password",
      });
    }

    if (errors.length !== 0) {
      setErrorMessage(errors);
      return;
    }
    setErrorMessage([]);
    alert("Form submitted successfully!");
  }

  return (
    <div>
      <form action="#"
      onSubmit={Validation}>
        <label htmlFor="">Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label htmlFor="">Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="">User Name</label>
        <input
          type="text"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />

        <label htmlFor="">Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <input type="submit" />

        <div className="errors">
          {errorMessage.map((error, index) => (
            <p key={index}>
              {error.element}: {error.errorText}
            </p>
          ))}
        </div>
      </form>
    </div>
  );
}
