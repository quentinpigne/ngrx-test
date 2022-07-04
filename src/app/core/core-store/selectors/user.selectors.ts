import { createSelector } from '@ngrx/store';
import { UserState } from '../states/user.state';

export const selectUserFeature = (state: { user: UserState }) => state.user;

export const selectUser = createSelector(selectUserFeature, (userState: UserState) => userState.user);
