import { NONAME } from 'dns';
import {ToDo} from '../../../redux/todo/toDoReducer';

export const ADD_TODO = "add_todo";
export const SHOW_ALL = "all";
export const SHOW_DONE = "done";
export const SHOW_UNDONE = "undone";
export const COMPELETE = "compelete";
export const SET_FILTER = "SET_FILTER";

export let idx : number = 1;

interface AddTodoAction {
  type: typeof ADD_TODO;
  payload: ToDo | undefined;
}

export interface SetFilterAction {
  type: typeof SET_FILTER;
  payload: string;
}


//动态生成action
export const setFilterActionCreator = (filter: string): SetFilterAction => {
  return {
    type: SET_FILTER,
    payload: filter,
  };
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
