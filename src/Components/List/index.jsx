import noCardIcon from "./NoCard.svg";
import "./styles.css";
import Card from "../Card";

export default function List({
  transactionsList,
  setTransactionsList,
  unfilteredList,
  setUnfilteredList,
  setisClassActiveList,
  isClassActiveList,
}) {
  function getAllTransactions() {
    setTransactionsList(unfilteredList);
  }

  function getDepositTransactions() {
    setTransactionsList(unfilteredList.filter((txn) => txn.type === "entrada"));
  }

  function getWithdrawTransactions() {
    setTransactionsList(unfilteredList.filter((txn) => txn.type === "saída"));
  }

  return (
    <div className="listContainer">
      <div className="listHeader">
        <p>Resumo Financeiro</p>
        <div className="listHeader__buttons">
          <button
            className={
              isClassActiveList[0]
                ? "mainButton mainButton--primary"
                : "mainButton"
            }
            onClick={() => {
              getAllTransactions();
              setisClassActiveList([true, false, false]);
            }}
          >
            Todos
          </button>
          <button
            className={
              isClassActiveList[1]
                ? "mainButton mainButton--primary"
                : "mainButton"
            }
            onClick={() => {
              getDepositTransactions();
              setisClassActiveList([false, true, false]);
            }}
          >
            Entradas
          </button>
          <button
            className={
              isClassActiveList[2]
                ? "mainButton mainButton--primary"
                : "mainButton"
            }
            onClick={() => {
              getWithdrawTransactions();
              setisClassActiveList([false, false, true]);
            }}
          >
            Despesas
          </button>
        </div>
      </div>
      {transactionsList.length === 0 ? (
        <div>
          <img src={noCardIcon} alt="Ícone de cards não encontrados" />
        </div>
      ) : (
        <ul>
          {transactionsList.map((txn, index) => (
            <Card
              key={index}
              transaction={txn}
              setTransactionsList={setTransactionsList}
              setUnfilteredList={setUnfilteredList}
              unfilteredList={unfilteredList}
              setisClassActiveList={setisClassActiveList}
            />
          ))}
        </ul>
      )}
    </div>
  );
}
