import "./styles.css";
import { IoMdTrash } from "react-icons/io";

export default function Card({
  transaction,
  setTransactionsList,
  setUnfilteredList,
  unfilteredList,
  setisClassActiveList,
}) {
  function deleteTransaction(transaction) {
    const newList = unfilteredList.filter((txn) => txn !== transaction);

    setTransactionsList(newList);
    setUnfilteredList(newList);
    setisClassActiveList([true, false, false]);
  }

  return (
    <li className="cardContainer">
      {transaction.type === "saída" ? (
        <div className="cardContainer__detail cardContainer__detail-deposit"></div>
      ) : (
        <div className="cardContainer__detail"></div>
      )}
      <div className="cardContainer__info">
        <p>{transaction.description}</p>
        <small>{transaction.type}</small>
      </div>
      <div className="cardContainer__price">R$ {transaction.value}</div>
      <div className="cardContainer__button">
        <button
          className="deleteButton"
          onClick={() => deleteTransaction(transaction)}
        >
          <IoMdTrash />
        </button>
      </div>
    </li>
  );
}
