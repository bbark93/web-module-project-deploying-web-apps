import "./App.css";
import React from "react";
import Form from "./components/Form";
import TodoList from "./components/TodoList";

let id = 0;
let getId = () => ++id;

const initialTodos = [
  { id: getId(), name: "Walk the dog", completed: false },
  { id: getId(), name: "Learn React", completed: true },
  { id: getId(), name: "Have Fun", completed: false },
];

export default class App extends React.Component {
  state = {
    todos: initialTodos,
  };

  addTodo = (name) => {
    this.setState({
      ...this.state,
      todos: this.state.todos.concat({ id: getId(), name, completed: false }),
    });
  };

  toggleCompletion = (id) => {
    this.setState({
      ...this.state,
      todos: this.state.todos.map((td) => {
        if (id === td.id) return { ...td, completed: !td.completed };
        return td;
      }),
    });
  };

  render() {
    return (
      <div className="App">
        <div>
          <h1>My Todos</h1>
        </div>
        <div>
          <TodoList
            todos={this.state.todos}
            toggleCompletion={this.toggleCompletion}
          />
          <Form addTodo={this.addTodo} />
        </div>
      </div>
    );
  }
}
