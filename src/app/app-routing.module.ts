import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TodosModule } from './modules/todos/todos.module';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'todos',
    pathMatch: 'full',
  },
  {
    path: 'todos',
    loadChildren: () => TodosModule,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
