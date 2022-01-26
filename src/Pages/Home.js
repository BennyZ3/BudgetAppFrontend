import axios from "axios";
import { useState, useEffect } from "react";
import SpendingRewards from "../Components/SpendingRewards";
import TransactionTable from "../Components/TransactionsTable";
import "./Home.css";
function Home() {
  const [transactions, setTransactions] = useState([]);
  const URL = process.env.REACT_APP_API_URL + `/transactions`;

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
      <div className="infoContainer">
        <div className="balanceContainer">
          <div className="balance">
            <h1>Balance: ${accountBalance(transactions).toFixed(2)}</h1>
          </div>
          <div className="breakdown">
            <h3>Earnings: ${earnings(transactions).toFixed(2)}</h3>
            <h3>Expenses: ${Math.abs(expenses(transactions)).toFixed(2)}</h3>
          </div>
        </div>
        <SpendingRewards transactions={transactions} />
      </div>
      <TransactionTable transactions={transactions} />
    </div>
  );
}

export default Home;
