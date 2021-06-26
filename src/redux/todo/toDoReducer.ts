import {
  ADD_TODO,
} from "../../components/ToDos/actions/index";
// demo nokey will cause error.
const defaultState = [{ id: "1", name: "sample: basketball", status: "done" }];

export type ToDo = {
  id: number;
  name: string;
  status: "done" | "undone";
};

export function addTodo(state = defaultState, action: any) {
  switch (action.type) {
    case ADD_TODO:
      return [ ...state, action.payload ];
    // case SHOW_ALL: return [...state]
    // case SHOW_DONE: return state
    // case SHOW_UNDONE: return state
    // case COMPELETE: return state
    default:
      return state;
  }
}
