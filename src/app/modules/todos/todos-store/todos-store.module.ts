import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';

import { todosFeatureKey } from './todos.state';
import { todosReducer } from './todos.reducer';

@NgModule({
  imports: [CommonModule, StoreModule.forFeature(todosFeatureKey, todosReducer)],
  exports: [StoreModule],
})
export class TodosStoreModule {}
