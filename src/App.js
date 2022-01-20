import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Nav from "./Components/Nav";
import Home from "./Pages/Home";

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
          {/* /transactions */}
          {/* /transactions/:id */}
        </Routes>
      </main>
    </div>
  );
}

export default App;
