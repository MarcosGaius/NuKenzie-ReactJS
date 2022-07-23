import { useState } from "react";
import MainPage from "./Components/MainPage";
import InitialPage from "./Components/InitialPage";
import "./App.css";

function App() {
  const [transactionsList, setTransactionsList] = useState([
    { description: "Salário recebido", type: "entrada", value: 2500 },
    { description: "Conta de luz", type: "saída", value: -150 },
  ]);

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function handleLogin() {
    setIsLoggedIn((previousLogin) => !previousLogin);
  }

  console.log(transactionsList);

  return (
    <div className="App">
      {isLoggedIn ? (
        <MainPage
          transactionsList={transactionsList}
          setTransactionsList={setTransactionsList}
          setIsLoggedIn={setIsLoggedIn}
          handleLogin={handleLogin}
        />
      ) : (
        <InitialPage handleLogin={handleLogin} />
      )}
    </div>
  );
}

export default App;
