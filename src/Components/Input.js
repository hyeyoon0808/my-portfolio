import React from "react";
import axios from "axios";

export default class Input extends React.Component {
  state = {
    name: "",
  };

  handleChange = (event) => {
    this.setState({ name: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const user = {
      name: this.state.name,
    };
    axios.post("http://localhost:3000/project", { user }).then((res) => {
      console.log(res);
    });
  };
  render() {
    return (
      <form onSubmit={this.handleChange}>
        <label>
          Enter name:
          <input type="text" name="name" onChange={this.handleChange} />
        </label>
      </form>
    );
  }
}
