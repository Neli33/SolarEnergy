import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import image1 from "../../assets/image 1.png";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    const users = [
      { email: "neli@gmail.com", senha: "123" },
      { email: "solar@gmail.com", senha: "456" },
      { email: "energy@gmail.com", senha: "789" },
    ];

    const user = users.find(
      (user) => user.email === email && user.senha === senha
    );

    if (user) {
      navigate("/dashboard");
    } else {
      setError("Email ou senha inválidos");
    }
  };

  return (
    <div className="login-container">
      <div className="image-container">
        <img src={image1} alt="image1" />
      </div>
      <div className="form-container">
        <h1>Login</h1>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />
        <button onClick={handleLogin}>Entrar</button>
        {error && <p>{error}</p>}
      </div>
    </div>
  );
}
