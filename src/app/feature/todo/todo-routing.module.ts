import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoAddEditComponent } from './todo-add-edit/todo-add-edit.component';
const routes: Routes = [
  { path: 'todos', title: 'Here is all the to do, LORD Indra!', component: TodoListComponent },
  { path: 'create-todo', title: 'Todo Create', component: TodoAddEditComponent },
  { path: '**', title: 'Here is all the to do, LORD Indra!', component: TodoListComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodoRoutingModule { }
