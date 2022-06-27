import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { todosFeatureKey } from './todos.state';
import { todosReducer } from './todos.reducer';
import { TodosEffects } from './todos.effects';

@NgModule({
  imports: [
    CommonModule,
    EffectsModule.forFeature([TodosEffects]),
    StoreModule.forFeature(todosFeatureKey, todosReducer),
  ],
  exports: [EffectsModule, StoreModule],
})
export class TodosStoreModule {}
