import {
  ADD_TODO,SetFilterAction,SET_FILTER
} from "../../components/ToDos/actions/index";
// demo nokey will cause error.
const defaultState = [{ id: "1", name: "sample: basketball", status: "done" }];

const defaultFilterState = 'all';

export type ToDo = {
  id: number;
  name: string;
  status: "done" | "undone";
};

export function addTodo(state = defaultState, action: any) {
  switch (action.type) {
    case ADD_TODO:
      return [ ...state, action.payload ];
    default:
      return state;
  }
}

export function filter(state = defaultFilterState, action: SetFilterAction) : string {
  switch (action.type) {
    case SET_FILTER:
      return action.payload;
    default:
      return state;
  }
}
