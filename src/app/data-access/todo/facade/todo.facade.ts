import { Injectable } from "@angular/core";

import { Store } from "@ngrx/store";
import { TodoState } from "../+state/todo.reducer";
import { loadTodos, loadTodosSuccess } from "../+state/todo.action";
import { selectAllTodos } from "../+state/todo.selectors";


@Injectable()
export class TodosFacade {
  public allTodos$ = this.store.select(selectAllTodos);
  constructor(private store: Store<TodoState>){}

  loadAllTodo(){
    // console.log(this.allTodos$.subscribe(res))
   this.store.dispatch(loadTodos());
  }
}