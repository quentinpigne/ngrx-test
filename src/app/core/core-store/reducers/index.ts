import { InjectionToken } from '@angular/core';
import { Action, ActionReducerMap } from '@ngrx/store';

import * as fromUser from './user.reducer';

export interface State {
  [fromUser.userFeatureKey]: fromUser.State;
}

export const ROOT_REDUCERS = new InjectionToken<ActionReducerMap<State, Action>>('Root reducers token', {
  factory: () => ({
    [fromUser.userFeatureKey]: fromUser.userReducer,
  }),
});
