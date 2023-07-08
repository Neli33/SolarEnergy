import "./Navbar.css";
import { useNavigate, useLocation } from "react-router-dom";
import logo from "../../../assets/Logo.svg";
import dashboard from "../../../assets/dashboard.svg";
import unidadeConsumidora from "../../../assets/unidade-consumidora.svg";
import cadastroEnergiaGerada from "../../../assets/cadastro-energia-gerada.svg";

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const isSelected = (pathname) => {
    return location.pathname === pathname ? "selected" : "";
  };

  const handleClick = (pathname) => {
    navigate(pathname);
  };

  return (
    <nav className="Navbar">
      <img src={logo} alt="Solar Energy logo" onClick={() => navigate("/")} />

      <button
        className={isSelected("/dashboard")}
        onClick={() => handleClick("/dashboard")}
      >
        <img src={dashboard} alt="dashboard" />
        <span>Dashboard</span>
      </button>
      <button
        className={isSelected("/unidades")}
        onClick={() => handleClick("/unidades")}
      >
        <img src={unidadeConsumidora} alt="unidade consumidora" />
        <span>Unidade Consumidora</span>
      </button>
      <button
        className={isSelected("/geracoes")}
        onClick={() => handleClick("/geracoes")}
      >
        <img src={cadastroEnergiaGerada} alt="cadastro de energia gerada" />
        <span>Cadastro de Energia Gerada</span>
      </button>
    </nav>
  );
}
