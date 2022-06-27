import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Todo } from '../models/todo';

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  constructor(private readonly httpClient: HttpClient, private readonly store: Store) {}

  fetchTodos(): Observable<Todo[]> {
    return this.httpClient.get<Todo[]>('https://jsonplaceholder.typicode.com/todos');
  }
}
