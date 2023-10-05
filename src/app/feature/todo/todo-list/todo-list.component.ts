import { Component } from '@angular/core';
import { TodosFacade } from 'src/app/data-access/todo/facade/todo.facade';
@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {
  todos$ = this.todoFacade.allTodos$;
  constructor(private todoFacade: TodosFacade) {
  }
  ngOnInit() {
    this.todoFacade.loadAllTodo();
  }

}
