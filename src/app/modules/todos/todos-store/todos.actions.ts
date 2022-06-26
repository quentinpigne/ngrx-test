import { createAction, props } from '@ngrx/store';

import { Todo } from '../models/todo';

export const fetchTodos = createAction('[Todos] Fetch todos', props<{ todos: Todo[] }>());
