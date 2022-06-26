import { Todo } from '../models/todo';

export const todosFeatureKey = 'todos';

export interface TodosFeatureState {
  todos: Todo[];
}

export const initialState: TodosFeatureState = { todos: [] };
