import { useState } from "react";
import Form from "../Form";
import Header from "../Header";
import List from "../List";
import TotalMoney from "../TotalMoney";
import "./styles.css";

export default function MainPage({
  transactionsList,
  setTransactionsList,
  setIsLoggedIn,
  handleLogin,
}) {
  const [unfilteredList, setUnfilteredList] = useState(transactionsList);
  const [isClassActiveList, setisClassActiveList] = useState([
    true,
    false,
    false,
  ]);
  return (
    <>
      <Header setIsLoggedIn={setIsLoggedIn} handleLogin={handleLogin} />
      <div className="contentWrapper">
        <div className="sideContent">
          <Form
            setTransactionsList={setTransactionsList}
            setUnfilteredList={setUnfilteredList}
            unfilteredList={unfilteredList}
            setisClassActiveList={setisClassActiveList}
          />
          <TotalMoney transactionsList={transactionsList} />
        </div>
        <List
          transactionsList={transactionsList}
          setTransactionsList={setTransactionsList}
          unfilteredList={unfilteredList}
          setUnfilteredList={setUnfilteredList}
          setisClassActiveList={setisClassActiveList}
          isClassActiveList={isClassActiveList}
        />
      </div>
    </>
  );
}
