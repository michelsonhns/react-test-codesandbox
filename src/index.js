import React from "react";
import ReactDom from "react-dom";

class App extends React.Component {
  state = {
    clients: [
      { id: 1, firstName: "Joao" },
      { id: 2, firstName: "Maria" },
      { id: 3, firstName: "Karina" },
      { id: 4, firstName: "Michael" },
    ],
  };
  //comportements

  handleClick() {
    alert("hello");
  }

  render() {
    return (
      <div>
        <h1>Hello</h1>
        <button onClick={this.handleClick}>click</button>
        <ul>
          {this.state.clients.map((client) => (
            <li>
              {client.firstName} <button> X</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDom.render(<App />, rootElement);
