import "./App.css";
import { useState } from "react";

function App() {
  // Input States
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // Error Message State
  const [errorMessage, setErrorMessage] = useState("");

  // Result State
  const [result, setResult] = useState("");

  // onChange Input Handlers
  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };
  return (
    <div className="App">
      <form
        className="form-box"
        onSubmit={(event) => {
          event.preventDefault();

          // condition identical passwords
          if (password !== confirmPassword) {
            alert("Your passwords don't match.");
          } else {
            document.querySelector("#create").classList.toggle("disappear") &&
              document.querySelector("#results").classList.add("appear");
          }
        }}
      >
        <div id="create">
          <h1>Create Account</h1>
          <div>
            <span>Name</span>
            <input
              value={name}
              type="text"
              placeholder="name"
              onChange={handleNameChange}
            />
          </div>
          <div>
            <span>Email</span>
            <input
              value={email}
              type="email"
              placeholder="email"
              onChange={handleEmailChange}
            />
          </div>
          <div>
            <span>Password</span>
            <input
              value={password}
              type="password"
              placeholder="password"
              onChange={handlePasswordChange}
            />
          </div>
          <div>
            <span>Confirm your password</span>
            <input
              value={confirmPassword}
              type="password"
              placeholder="confirm password"
              onChange={handleConfirmPasswordChange}
            />
          </div>
          <button type="submit">Register</button>
        </div>
      </form>
      <section id="results">
        <h1>Results</h1>
        <div>{name}</div>
        <div>{email}</div>
        <div>{password}</div>
        <button>Edit your information</button>
      </section>
    </div>
  );
}

export default App;
