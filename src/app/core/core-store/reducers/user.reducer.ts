import { createReducer, on } from '@ngrx/store';

import { UserActions } from '../actions';
import { User } from '../../models/user';

export const userFeatureKey = 'user';

export interface State {
  user?: User;
  isLoading: boolean;
  isError: boolean;
}

export const initialState: State = {
  user: undefined,
  isLoading: false,
  isError: false,
};

export const userReducer = createReducer<State>(
  initialState,
  on(UserActions.loadUser, (state: State) => ({ ...state, isLoading: true })),
  on(UserActions.loadUserSuccess, (state: State, { user }: { user: User }) => ({
    ...state,
    user,
    isLoading: false,
    isError: false,
  })),
  on(UserActions.loadUserFailure, (state: State) => ({ ...state, user: undefined, isLoading: false, isError: false })),
);
