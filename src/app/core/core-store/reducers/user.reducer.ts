import { createReducer, on } from '@ngrx/store';

import { UserState, initialState } from '../states/user.state';
import * as UserActions from '../actions/user.actions';

export const userReducer = createReducer<UserState>(
  initialState,
  on(UserActions.loadUser, (state: UserState) => ({ ...state, isLoading: true })),
  on(UserActions.userFetchSuccess, (state: UserState, { user }: { user: string }) => ({
    ...state,
    user,
    isLoading: false,
    isError: false,
  })),
  on(UserActions.userFetchFailure, (state: UserState) => ({ ...state, user: '', isLoading: false, isError: false })),
);
