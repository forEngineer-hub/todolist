import React from "react";
import { connect } from "react-redux";
import "./ToDos.css";
import { AddTodoActionCreator } from "../actions/index";

const ToDos: React.FC<any> = ({ todos, addTodoFn }) => {
  //document.getElementByClass('toDosInput').value
  console.log(todos);
  let input = React.createRef<HTMLInputElement>();

  return (
    <div id="toDoDivId">
      <h1>todos</h1>
      <div id="addToDosDiv">
        <input type="text" className="toDosInput" ref={input} />
        <button
          className="toDosBtn"
          onClick={()=> addTodoFn(input.current?.value)}
        >
          Add todos
        </button>
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

const mapDispatchToProps = dispatch => ({
  addTodoFn: (todoName: string) => dispatch(AddTodoActionCreator(todoName))
})

export default connect(mapStateToProps, mapDispatchToProps)(ToDos);
