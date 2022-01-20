import axios from "axios";
import { Component, useState, useEffect } from "react";
import TransactionTable from "../Components/TransactionsTable";

function Home() {
  const [transactions, setTransactions] = useState([]);
  const URL = `http://localhost:3003/transactions`;

  useEffect(() => {
    axios.get(URL).then((response) => {
      setTransactions(response.data);
    });
  }, []);
  function accountBalance(transactions) {
    return transactions.reduce((a, b) => {
      return a + Number(b.amount);
    }, 0);
  }
  return (
    <div className="Home">
      <h1>Balance: {accountBalance(transactions)}</h1>
      <TransactionTable transactions={transactions} />
    </div>
  );
}

export default Home;
