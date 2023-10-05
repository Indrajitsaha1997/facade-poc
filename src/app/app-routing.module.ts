
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './shared/ui/dashboard/dashboard.component';

const routes: Routes = [
  { path: 'dashboard', title: 'Welcome to the dashboard LORD Indra!', component: DashboardComponent },
  { path: 'todos', title: 'Welcome to the todos LORD Indra!',loadChildren:() => import('./feature/todo/todo.module').then(m=>m.TodoModule) },
  { path: '**', title: 'Welcome to the dashboard LORD Indra!', component: DashboardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
