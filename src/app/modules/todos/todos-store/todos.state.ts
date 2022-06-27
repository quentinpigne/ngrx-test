import { Todo } from '../models/todo';

export const todosFeatureKey = 'todos';

export interface TodosFeatureState {
  isLoading: boolean;
  todos: Todo[];
}

export const initialState: TodosFeatureState = { isLoading: false, todos: [] };
