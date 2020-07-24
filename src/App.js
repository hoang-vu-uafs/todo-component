import React, { Component } from "react";
import Header from "./Components/Header";
import TextBar from "./Components/TextBar";
import List from "./Components/List";

import "./App.css";

class App extends Component {
  state = {
    text: "",
    todos: [],
  };

  inputHandle = (e) => {
    this.setState({
      text: e.target.value,
    });
  };

  addHandle(id) {
    this.setState((prevState) => ({
      todos: [
        ...prevState.todos,
        { theText: this.state.text, theCheck: false, theID: id },
      ],
    }));
  }

  deleteHandle = (i) => {
    const newTodos = [...this.state.todos];
    newTodos.splice(i, 1);
    this.setState({
      todos: newTodos,
    });
    console.log(this.state.todos);
  };

  checkHandle = (id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.theID !== id) return todo; //todo.id
        return {
          theText: todo.theText,
          theCheck: !todo.theCheck,
          theID: todo.theID,
        };
      }),
    });
  };

  countChecked = () => {
    let count = 0;
    this.state.todos.forEach((todo) => {
      if (todo.theCheck === true) {
        count++;
      }
    });

    return count;
  };

  id = 0;
  render() {
    this.id++;
    return (
      <div className="App">
        <Header leng={this.state.todos.length} check={this.countChecked()} />
        <TextBar input={this.inputHandle} add={() => this.addHandle(this.id)} />
        <List
          todos={this.state.todos}
          check={this.checkHandle}
          delete={this.deleteHandle}
        />
      </div>
    );
  }
}

export default App;
