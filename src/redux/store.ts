import { createStore } from 'redux';
import languageReducer from "./language/languageReducer";
import { combineReducers } from 'redux'
import {addTodo, filter} from '../redux/todo/toDoReducer';



const rootReducer = combineReducers({
    languageReducer, addTodo, filter
})

const store = createStore(rootReducer,
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()
    );

export type RootState = ReturnType<typeof store.getState>

export default store;