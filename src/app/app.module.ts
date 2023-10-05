import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonComponent } from './shared/ui/button/button.component';
import { DashboardCardComponent } from './shared/ui/dashboard-card/dashboard-card.component';
import { DashboardComponent } from './shared/ui/dashboard/dashboard.component';
import { CardModule } from 'primeng/card';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { todoReducer } from './data-access/todo/+state/todo.reducer';
import { TodosFacade } from './data-access/todo/facade/todo.facade';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { TodoEffects } from './data-access/todo/+state/todo.effects';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    DashboardCardComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CardModule,
    StoreModule.forRoot({ todos: todoReducer }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    EffectsModule.forRoot([TodoEffects])
  ],
  providers: [TodosFacade],
  bootstrap: [AppComponent]
})
export class AppModule { }
