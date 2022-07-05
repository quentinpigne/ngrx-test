import { createAction, props } from '@ngrx/store';

import { User } from '../../models/user';

export const loadUser = createAction('[CORE] Load user');
export const loadUserSuccess = createAction('[CORE] Load user success', props<{ user: User }>());
export const loadUserFailure = createAction('[CORE] Load user failure');
