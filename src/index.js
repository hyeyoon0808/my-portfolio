import React, { Component } from "react";
import ReactDOM from "react-dom";
//import App from './App';
import Navigation from "./Navigation";
import Header from "./Header";
import Skills from "./Skills";
import * as serviceWorker from "./serviceWorker";

class App extends Component {
  render() {
    return (
      <div>
        <Navigation logoTitle="React Portfolio" />
        <Header title="Hyeyoon Cho" button="Find Out More" />
        <Skills />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));

serviceWorker.unregister();
