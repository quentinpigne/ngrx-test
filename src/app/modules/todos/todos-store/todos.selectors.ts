import { createFeatureSelector, createSelector } from '@ngrx/store';

import { todosFeatureKey, TodosFeatureState } from './todos.state';

export const selectTodosFeature = createFeatureSelector<TodosFeatureState>(todosFeatureKey);

export const selectAllTodos = createSelector(selectTodosFeature, (state: TodosFeatureState) => state?.todos);
