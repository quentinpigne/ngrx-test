import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodosRoutingModule } from './todos-routing.module';

import { HomeComponent } from './pages/home/home.component';
import { TodosListComponent } from './components/todos-list/todos-list.component';
import { TodosStoreModule } from './todos-store/todos-store.module';
import { TodoComponent } from './components/todo/todo.component';

@NgModule({
  imports: [CommonModule, TodosRoutingModule, TodosStoreModule],
  declarations: [HomeComponent, TodosListComponent, TodoComponent],
})
export class TodosModule {}
