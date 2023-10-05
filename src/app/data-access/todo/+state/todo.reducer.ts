import { createReducer,on } from "@ngrx/store";
import{ loadTodos, loadTodosSuccess } from "./todo.action";
import { Todo } from "../gateway/todo.model";

export interface TodoState {
  todos: Todo[];
  error?: string;
  status: string;
}

export const initialState: TodoState = {
  todos: [],
  status: 'pending',
};

export const todoReducer = createReducer(
initialState,
// Load Todos Triggered
on(loadTodos, (state) => ({...state, status: 'loading'})),
// Handle successful loading of todos
on(loadTodosSuccess, (state, {todos}) => ({...state,todos: todos, status: "success"}))
)