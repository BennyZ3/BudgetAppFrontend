import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Nav from "./Components/Nav";
import Home from "./Pages/Home";
import NewTransaction from "./Pages/NewTransaction";
import TransactionDetails from "./Pages/TransactionDetails";

function App() {
  return (
    <div className="App">
      {/* Nav */}
      <Nav />
      {/* main */}
      <main>
        {/* Routes */}
        <Routes>
          {/* Home */}
          <Route exact path="/" element={<Home />} />
          <Route path="/new" element={<NewTransaction />} />
          {/* /transactions */}
          {/* /transactions/:id */}
          <Route path="/transactions/:id" element={<TransactionDetails />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
