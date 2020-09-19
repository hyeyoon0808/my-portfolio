import React, { Component } from "react";

import "./Navigation.css";

class Navigation extends Component {
  render() {
    const sections = ["Home", "About", "Services", "Portfolio", "contact"];
    const navLinks = sections.map((section) => {
      return (
        <li>
          <a href={"#" + section}>{section}</a>
        </li>
      );
    });
    return (
      <nav>
        <h2 class="logo">{this.props.logoTitle}</h2>
        <ul>{navLinks}</ul>
      </nav>
    );
  }
}

export default Navigation;
