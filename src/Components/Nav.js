import { Component } from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

class Nav extends Component {
  render() {
    return (
      <div className="navBar">
        <Link to="/">
          <div className="homeButton">
            <h1 className="logo">Budget App</h1>
          </div>
        </Link>
        <Link to="/new">
          <button className="new">NEW TRANSACTION</button>
        </Link>
      </div>
    );
  }
}

export default Nav;
