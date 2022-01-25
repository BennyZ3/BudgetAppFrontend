import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import { Link } from "react-router-dom";
import "./TransactionDetails.css";

function TransactionDetails() {
  const params = useParams();
  const navigate = useNavigate();
  const [transaction, setTransactions] = useState({});
  console.log(params.id);
  const URL = process.env.REACT_APP_API_URL + `/transactions/${params.id}`;
  useEffect(() => {
    axios.get(URL).then((response) => {
      setTransactions(response.data);
    });
  }, []);
  const handleDelete = () => {
    axios.delete(URL).then(() => navigate("/"));
  };
  const upperCasing = (string) => {
    string = string.split("");
    string[0] = string[0].toUpperCase();
    return string.join("");
  };
  return (
    <div className="transactionDetails">
      <h1>{transaction.item_name}</h1>
      <h3>From: {transaction.source}</h3>
      <h3>Date: {transaction.date}</h3>
      <h3>Amount: {transaction.amount}</h3>
      {transaction.category && (
        <h2>Category: {upperCasing(transaction.category)}</h2>
      )}
      <Link to={`/transactions/${params.id}/edit`}>
        <button>Edit</button>
      </Link>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}

export default TransactionDetails;
