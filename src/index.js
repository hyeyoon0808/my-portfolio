import React, { Component } from "react";
import ReactDOM from "react-dom";
//import App from './App';
import Navigation from "./Navigation";
import Header from "./Header";
import Skills from "./Skills";
import Portfolio from "./Portfolio";
import * as serviceWorker from "./serviceWorker";
import Input from "./Components/Input";

class App extends Component {
  componentDidMount() {
    fetch("http://localhost:3000/project")
      .then((res) => res.json())
      .then((data) => this.setState({ id: data.id }));
  }
  render() {
    return (
      <div>
        <Navigation logoTitle="React Portfolio" />
        <Header title="Hyeyoon Cho" button="Find Out More" />
        <Portfolio />
        <Skills />
        <Input />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));

serviceWorker.unregister();
