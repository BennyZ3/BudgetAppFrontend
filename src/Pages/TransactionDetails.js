import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
// import { useEffect } from "react/cjs/react.development";

function TransactionDetails() {
  const params = useParams();
  const [transaction, setTransactions] = useState({});
  console.log(params.id);
  const URL = process.env.REACT_APP_API_URL + `/transactions/${params.id}`;
  useEffect(() => {
    axios.get(URL).then((response) => {
      setTransactions(response.data);
    });
  }, []);
  return (
    <div className="transactionDetails">
      <h2>{transaction.item_name}</h2>
      <h2>From: {transaction.source}</h2>
      <h2>Date: {transaction.date}</h2>
      <h2>Amount: {transaction.amount}</h2>
      {transaction.category && <h2>Category: {transaction.category}</h2>}
    </div>
  );
}

export default TransactionDetails;
