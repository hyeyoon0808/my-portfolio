import React, { Component } from "react";
import Background from "./img/background2.jpg";

const myStyles = {
  backgroundImage: "url('./img/background2.jpg')",
  height: "300px",
  backgroundSize: "cover",
};
class Header extends Component {
  render() {
    return <header style={myStyles}></header>;
  }
}

export default Header;
