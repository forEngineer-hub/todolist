import React from "react";
import { connect } from "react-redux";
import "./ToDos.css";
import {
  AddTodoActionCreator,
  setFilterActionCreator,
  SHOW_ALL,
  SHOW_DONE,
  SHOW_UNDONE,
} from "../actions/index";

const ToDos: React.FC<any> = ({ todos, addTodoFn, setFilter, filterStatus }) => {
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
          onClick={() => addTodoFn(input.current?.value)}
        >
          Add todos
        </button>
      </div>
      <div>
        <button className="toDosBtn" onClick={() => setFilter(SHOW_ALL)}>
          show all
        </button>
        <button className="toDosBtn" onClick={() => setFilter(SHOW_DONE)}>
          show done
        </button>
        <button className="toDosBtn" onClick={() => setFilter(SHOW_UNDONE)}>
          show undone
        </button>
      </div>
      <div>
        <ul>
          {todos
            .filter((todo) => {
              return filterStatus === SHOW_ALL? true: todo.status === filterStatus;
            })
            .map((todo,index) => (
              <li key={index}>
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
  filterStatus: state.filter,
});

const mapDispatchToProps = (dispatch) => ({
  addTodoFn: (todoName: string) => dispatch(AddTodoActionCreator(todoName)),
  setFilter: (filter: string) => dispatch(setFilterActionCreator(filter)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ToDos);
