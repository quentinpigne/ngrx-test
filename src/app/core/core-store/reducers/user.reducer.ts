import { createReducer, on } from '@ngrx/store';

import { UserActions } from '../actions';

export const userFeatureKey = 'user';

export interface State {
  user: string;
  isLoading: boolean;
  isError: boolean;
}

export const initialState: State = {
  user: '',
  isLoading: false,
  isError: false,
};

export const userReducer = createReducer<State>(
  initialState,
  on(UserActions.loadUser, (state: State) => ({ ...state, isLoading: true })),
  on(UserActions.loadUserSuccess, (state: State, { user }: { user: string }) => ({
    ...state,
    user,
    isLoading: false,
    isError: false,
  })),
  on(UserActions.loadUserFailure, (state: State) => ({ ...state, user: '', isLoading: false, isError: false })),
);
