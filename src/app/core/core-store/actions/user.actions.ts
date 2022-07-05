import { createAction, props } from '@ngrx/store';

export const loadUser = createAction('[CORE] Load user');
export const loadUserSuccess = createAction('[CORE] Load user success', props<{ user: string }>());
export const loadUserFailure = createAction('[CORE] Load user failure');
