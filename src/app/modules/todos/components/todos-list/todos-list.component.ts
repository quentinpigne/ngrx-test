import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { selectAllTodos } from '../../todos-store/todos.selectors';

import { Todo } from '../../models/todo';

@Component({
  selector: 'ngt-todos-list',
  templateUrl: './todos-list.component.html',
  styleUrls: ['./todos-list.component.scss'],
})
export class TodosListComponent implements OnInit {
  todos$!: Observable<Todo[]>;

  constructor(private readonly store: Store) {}

  ngOnInit(): void {
    this.todos$ = this.store.select(selectAllTodos);
  }
}
