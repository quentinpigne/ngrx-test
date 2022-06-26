import { Component, Input } from '@angular/core';

import { Todo } from '../../models/todo';

@Component({
  selector: 'ngt-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent {
  @Input() todo!: Todo;
}
