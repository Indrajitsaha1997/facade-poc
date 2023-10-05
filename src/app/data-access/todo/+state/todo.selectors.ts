import { createFeatureSelector, createSelector } from "@ngrx/store";
import { TodoState } from "./todo.reducer";

const getTodoState = createFeatureSelector<TodoState>('todos')

export const selectAllTodos = createSelector(
  getTodoState,
  (state: TodoState) => state.todos
);
