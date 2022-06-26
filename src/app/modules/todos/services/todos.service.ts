import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';

import { Todo } from '../models/todo';
import { fetchTodos } from '../todos-store/todos.actions';

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  constructor(private readonly httpClient: HttpClient, private readonly store: Store) {}

  fetchTodos(): void {
    this.httpClient
      .get<Todo[]>('https://jsonplaceholder.typicode.com/todos')
      .subscribe({ next: (todos: Todo[]) => this.store.dispatch(fetchTodos({ todos })) });
  }
}
