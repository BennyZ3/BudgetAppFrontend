import "./App.css";
import { Routes, Route } from "react-router-dom";
import Nav from "./Components/Nav";
import Home from "./Pages/Home";
import NewTransaction from "./Pages/NewTransaction";
import TransactionDetails from "./Pages/TransactionDetails";
import EditTransaction from "./Pages/EditTransaction";

function App() {
  return (
    <div className="App">
      <Nav />
      <main>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/new" element={<NewTransaction />} />
          <Route path="/transactions/:id" element={<TransactionDetails />} />
          <Route path="/transactions/:id/edit" element={<EditTransaction />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
