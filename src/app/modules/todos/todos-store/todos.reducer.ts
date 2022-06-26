import { ActionReducer, createReducer, on } from '@ngrx/store';

import { initialState, TodosFeatureState } from './todos.state';
import { fetchTodos } from './todos.actions';

import { Todo } from '../models/todo';

export const todosReducer: ActionReducer<TodosFeatureState> = createReducer<TodosFeatureState>(
  initialState,
  on(
    fetchTodos,
    (state: TodosFeatureState, { todos }: { todos: Todo[] }): TodosFeatureState => ({
      ...state,
      todos,
    }),
  ),
);
