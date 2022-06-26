import { createReducer, on } from '@ngrx/store';
import { updateUser } from './root.actions';

import { initialState, RootState } from './root.state';

export const rootReducer = createReducer<RootState>(
  initialState,
  on(updateUser, (state: RootState, { user }: { user: string }) => ({ ...state, user })),
);
