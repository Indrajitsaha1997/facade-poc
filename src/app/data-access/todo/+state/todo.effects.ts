import { TodoService } from './../gateway/todo.service';
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { loadTodos, loadTodosFailure, loadTodosSuccess } from './todo.action';
import { catchError, from, map, of, switchMap } from 'rxjs';
@Injectable()
export class TodoEffects {
  constructor(
    private action$: Actions,
    private todoService: TodoService
  ){}

  loadTodo$ = createEffect(()=>
    this.action$.pipe(
      ofType(loadTodos),
      switchMap(() => {
        return this.todoService.getAllTodos().pipe(
          map((todos: any)=> loadTodosSuccess(todos)),
          catchError((error) => of(loadTodosFailure({error})))
        )
      }
      )
    )
  )
}