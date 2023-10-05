import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TableModule } from 'primeng/table';

import { TodoRoutingModule } from './todo-routing.module';
import { TodoAddEditComponent } from './todo-add-edit/todo-add-edit.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { SkeletonModule } from 'primeng/skeleton';
@NgModule({
  declarations: [
    TodoAddEditComponent,
    TodoListComponent
  ],
  imports: [
    CommonModule,
    TodoRoutingModule,
    TableModule,
    ButtonModule,
    CardModule,
    InputTextModule,
    DropdownModule,
    SkeletonModule
  ]
})
export class TodoModule { }
