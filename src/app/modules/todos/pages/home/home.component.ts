import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { loadTodos } from '../../todos-store/todos.actions';

@Component({
  selector: 'ngt-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private readonly store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(loadTodos());
  }
}
