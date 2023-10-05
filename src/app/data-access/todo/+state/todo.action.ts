import { createAction, props } from "@ngrx/store";
import { Todo } from "../gateway/todo.model";

export const addTodo = createAction(
  '[Todo Page] Add Todo',
  props<{ content: string }>()
);

export const removeTodo = createAction(
  '[Todo Page] Remove Todo',
  props<{ id: string }>()
);

export const loadTodos = createAction('[Todo Component] Load Todos');

export const loadTodosSuccess = createAction(
  '[Todo Component] Load Todos Success',
  props<{ todos: Todo[] }>()
);

export const loadTodosFailure = createAction(
  '[Todo Component] Load Todos Failure',
  props<{ error: string }>()
);