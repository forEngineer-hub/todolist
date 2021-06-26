import React from "react";
import { connect } from "react-redux";
import "./ToDos.css";
import { AddTodoActionCreator } from "../actions/index";

const ToDos: React.FC<any> = ({todos}) => {
  console.log(todos);
  return (
    <div id="toDoDivId">
      <h1>todos</h1>
      <div id="addToDosDiv">
        <input type="text" className="toDosInput" />
        <button className="toDosBtn">Add todos</button>
      </div>
      <div>
        <button className="toDosBtn">show all</button>
        <button className="toDosBtn">show done</button>
        <button className="toDosBtn">show undone</button>
      </div>
      <div>
        <ul>
          {todos.map((todo) => (
            <li>
              <span>{todo.name}</span>
              <span>{todo.status}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  todos: state.addTodo,
});

const mapDispatchToProps = (dispatch) => ({
  init: (id) => dispatch(AddTodoActionCreator()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ToDos);
