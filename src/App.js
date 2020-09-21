import React, { Component } from "react";

class App extends Component {
  componentDidMount() {
    fetch("project")
      .then((res) => res.json())
      .then((data) => this.setState({ id: data.id }));
  }
  render() {
    return <div className="App"></div>;
  }
}

export default App;
