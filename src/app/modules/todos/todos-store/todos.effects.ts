import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, EMPTY, map, mergeMap } from 'rxjs';
import { Todo } from '../models/todo';

import { TodosService } from '../services/todos.service';
import { fetchedTodos, loadTodos } from './todos.actions';

@Injectable()
export class TodosEffects {
  constructor(private readonly actions$: Actions, private readonly todosService: TodosService) {}

  loadTodos$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadTodos),
      mergeMap(() =>
        this.todosService.fetchTodos().pipe(
          map((todos: Todo[]) => fetchedTodos({ todos })),
          catchError(() => EMPTY),
        ),
      ),
    ),
  );
}
