import nuKenzieLogo from "./nuKenzieLogo.svg";
import "./styles.css";

export default function Header({ setIsLoggedIn, handleLogin }) {
  return (
    <header>
      <div className="headerContent">
        <img src={nuKenzieLogo} alt="Nu Kenzie" />
        <button className="mainButton" onClick={() => handleLogin()}>
          Início
        </button>
      </div>
    </header>
  );
}
