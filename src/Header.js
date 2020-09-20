import React, { Component } from "react";
import "./Header.css";

class Header extends Component {
  render() {
    return (
      <header className="myStyles">
        <h1>{this.props.title}</h1>
        <p></p>
        <a href="#button">{this.props.button}</a>
      </header>
    );
  }
}

export default Header;
