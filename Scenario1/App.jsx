import { useState } from "react";

export default function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();

    const errors = [];

    if (name.length < 3 || name.length > 30) {
      errors.push({
        element: "Name",
        errorText: "Name is Invalid!"
      });
    }

    if (!email.includes("@")) {
      errors.push({
        element: "Email",
        errorText: "Email is Invalid!"
      });
    }

    if (subject.length < 5 || subject.length > 25) {
      errors.push({
        element: "Subject",
        errorText: "Subject is Invalid!"
      });
    }

    if (message.length < 3 || message.length > 15) {
      errors.push({
        element: "Message",
        errorText: "Message is Invalid!"
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
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h1>Contact Form</h1>

        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="text"
          placeholder="Subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        />

        <input
          type="text"
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        <button type="submit">Submit</button>

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