import {ToDo} from '../../../redux/todo/toDoReducer';

export const ADD_TODO = "add_todo";
export const SHOW_ALL = "show_all";
export const SHOW_DONE = "show_done";
export const SHOW_UNDONE = "show_undone";
export const COMPELETE = "compelete";

interface AddTodoAction {
  type: typeof ADD_TODO;
  payload: ToDo | undefined;
}

export const showAll = {
  type: SHOW_ALL,
};

export const showDone = {
  type: SHOW_DONE,
};

export const ShowUnDone = {
  type: SHOW_UNDONE,
};

interface compelete {
  type: typeof COMPELETE;
  payload: number;
}

export type actionType = AddTodoAction;

export const AddTodoActionCreator = (todo?: ToDo): AddTodoAction => {
  return {
    type: ADD_TODO,
    payload: todo,
  };
};

export const CompeleteActionCreator = (index: number): compelete => {
  return {
    type: COMPELETE,
    payload: index,
  };
};
