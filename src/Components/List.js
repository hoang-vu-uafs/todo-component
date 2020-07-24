import React from "react";

function List(props) {
  return (
    <div>
      {props.todos.map((todo, index) => {
        return (
          <div key={index}>
            <input
              type="checkbox"
              checked={todo.theCheck} //checked={this.state.todos.theCheck}
              onChange={() => props.check(todo.theID)} //todo.id not id
            />
            {todo.theText}
            <button onClick={() => props.delete(index)}>Delete</button>
          </div>
        );
      })}
    </div>
  );
}

export default List;
