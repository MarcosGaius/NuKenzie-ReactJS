import "./styles.css";

export default function Form({
  setTransactionsList,
  setUnfilteredList,
  unfilteredList,
  setisClassActiveList,
}) {
  function handleFormSubmit(event) {
    const form = event.target.form;
    let txnType = form.txnTypes.value;
    const txnDescription = form.txnDescription.value;
    let txnValue = Number(form.txnValue.value);

    if (txnType === "saída" && txnValue > 0) {
      txnType -= txnValue * 2;
    } else if (txnType === "entrada" && txnValue < 0) {
      txnValue += txnValue * 2;
    }

    const newTxn = {
      description: txnDescription,
      type: txnType,
      value: txnValue,
    };

    if (Object.values(newTxn).includes("") || newTxn.value === 0) {
      return;
    }

    const newList = [...unfilteredList, newTxn];
    setTransactionsList(newList);
    setUnfilteredList(newList);
    setisClassActiveList([true, false, false]);
  }

  return (
    <div className="formContainer">
      <form>
        <div className="formDescriptionContainer">
          <label className="formLabel" htmlFor="txnDescription">
            Descrição
          </label>
          <input
            id="txnDescription"
            type="text"
            placeholder="Digite aqui sua descrição"
          ></input>
          <small>Ex: Compra de roupas</small>
        </div>

        <div className="formValueContainer">
          <div className="formValueContainer__value">
            <label className="formLabel" htmlFor="txnValue">
              Valor
            </label>
            <input id="txnValue" type="number" placeholder="1 R$"></input>
          </div>
          <div className="formValueContainer__type">
            <label className="formLabel" htmlFor="txnTypes">
              Tipo de valor
            </label>
            <select name="txnTypes" id="txnTypes">
              <option value="entrada">Entrada</option>
              <option value="saída">Saída</option>
            </select>
          </div>
        </div>
        <button
          className="mainButton mainButton--primary"
          onClick={(event) => {
            event.preventDefault();
            handleFormSubmit(event);
          }}
        >
          Inserir valor
        </button>
      </form>
    </div>
  );
}
