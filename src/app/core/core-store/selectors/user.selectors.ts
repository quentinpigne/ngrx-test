import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromUser from '../reducers/user.reducer';

export const selectUserFeature = createFeatureSelector<fromUser.State>(fromUser.userFeatureKey);

export const selectUser = createSelector(selectUserFeature, (userState: fromUser.State) => userState.user);
