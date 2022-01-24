import axios from "axios";
import { useState, useEffect } from "react";
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
  function earnings(transactions) {
    return transactions
      .filter((item) => {
        return item.amount > 0;
      })
      .reduce((a, b) => {
        return a + Number(b.amount);
      }, 0);
  }
  function expenses(transactions) {
    return transactions
      .filter((item) => {
        return item.amount < 0;
      })
      .reduce((a, b) => {
        return a + Number(b.amount);
      }, 0);
  }
  return (
    <div className="Home">
      <h1>Balance: {accountBalance(transactions)}</h1>
      <h3>Earnings: {earnings(transactions)}</h3>
      <h3>Expenses: {expenses(transactions)}</h3>
      <TransactionTable transactions={transactions} />
    </div>
  );
}

export default Home;
