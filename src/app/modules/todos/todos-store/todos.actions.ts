import { createAction, props } from '@ngrx/store';

import { Todo } from '../models/todo';

export const loadTodos = createAction('[Todos] Load todos');
export const fetchedTodos = createAction('[Todos] Fetched todos', props<{ todos: Todo[] }>());
