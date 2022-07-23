import "./styles.css";

export default function TotalMoney({ transactionsList }) {
  function calculateBalance() {
    const balance = transactionsList.reduce((previousTxn, currentTxn) => {
      return previousTxn + currentTxn.value;
    }, 0);

    return balance;
  }

  return (
    <div className="balanceContainer">
      <div className="balanceContainer__text">
        <p className="balanceContainer__title">Valor total:</p>
        <p className="balanceContainer__subtitle">
          O valor se refere ao saldo.
        </p>
      </div>
      <div className="balanceContainer__value">$ {calculateBalance()}</div>
    </div>
  );
}
