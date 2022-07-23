import darkLogo from "./NuKenzieDark.svg";
import decor from "./InitialPageDecor.svg";
import "./styles.css";

export default function InitialPage({ handleLogin }) {
  return (
    <div className="initialPageWrapper">
      <div className="initialPageContainer">
        <div className="initialPageContainer__info">
          <img src={darkLogo} alt="Logotipo da Nu Kenzie" />
          <p>Centralize o controle das suas finanças</p>
          <small>de forma rápida e segura</small>
          <button
            className="mainButton mainButton--primary"
            onClick={() => handleLogin()}
          >
            Iniciar
          </button>
        </div>
        <div className="initialPageContainer__icon">
          <img src={decor} alt="Ícone de uma interface prototipada" />
        </div>
      </div>
    </div>
  );
}
