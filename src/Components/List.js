import React from "react";
import axios from "axios";

export default class List extends React.Component {
  state = {
    persons: [],
  };

  componentDidMount() {
    axios
      .get("http://localhost:3000/project")
      .then((res) => res.json())
      .then((data) => this.setState({ id: data.id }));
  }
  render() {
    return (
      <ul>
        {this.state.persons.map((person) => (
          <li key={person.id}>{person.name}</li>
        ))}
      </ul>
    );
  }
}
