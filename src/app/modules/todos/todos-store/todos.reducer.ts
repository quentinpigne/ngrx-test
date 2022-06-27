import { ActionReducer, createReducer, on } from '@ngrx/store';

import { initialState, TodosFeatureState } from './todos.state';
import { fetchedTodos, loadTodos } from './todos.actions';

import { Todo } from '../models/todo';

export const todosReducer: ActionReducer<TodosFeatureState> = createReducer<TodosFeatureState>(
  initialState,
  on(
    loadTodos,
    (state: TodosFeatureState): TodosFeatureState => ({
      ...state,
      isLoading: true,
    }),
  ),
  on(
    fetchedTodos,
    (state: TodosFeatureState, { todos }: { todos: Todo[] }): TodosFeatureState => ({
      ...state,
      isLoading: false,
      todos,
    }),
  ),
);
