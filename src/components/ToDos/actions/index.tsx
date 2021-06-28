import {ToDo} from '../../../redux/todo/toDoReducer';

export const ADD_TODO = "add_todo";
export const SHOW_ALL = "show_all";
export const SHOW_DONE = "show_done";
export const SHOW_UNDONE = "show_undone";
export const COMPELETE = "compelete";

export let idx : number = 1;

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

export const AddTodoActionCreator = (name: string): AddTodoAction => {
  return {
    type: ADD_TODO,
    payload: {id:++idx, name: name, status : "undone"},
  };
};

export const CompeleteActionCreator = (index: number): compelete => {
  return {
    type: COMPELETE,
    payload: index,
  };
};
