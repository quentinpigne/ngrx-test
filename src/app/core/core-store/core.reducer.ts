import { createReducer, on } from '@ngrx/store';

import { CoreState, initialState } from './core.state';
import { updateUser } from './core.actions';

export const coreReducer = createReducer<CoreState>(
  initialState,
  on(updateUser, (state: CoreState, { user }: { user: string }) => ({ ...state, user })),
);
