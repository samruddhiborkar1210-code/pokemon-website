import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (email && password) {
      localStorage.setItem("isLoggedIn", "true");
      navigate("/");
    } else {
      alert("Please enter email and password");
    }
  };

  return (
    <div className="login-page">

      <div className="login-card">

        <div className="login-icon">
          ⚡
        </div>

        <h1>Welcome Back!</h1>

        <p className="login-subtitle">
          Login to explore the Pokémon world
        </p>

        <form onSubmit={handleLogin}>

          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button className="login-btn" type="submit">
            Login ⚡
          </button>

        </form>

        <p className="login-footer">
          Catch them all! 🎯
        </p>

      </div>

    </div>
  );
}

export default Login;