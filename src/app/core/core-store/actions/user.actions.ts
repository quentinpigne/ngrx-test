import { createAction, props } from '@ngrx/store';

export const loadUser = createAction('[CORE] Load user');
export const userFetchSuccess = createAction('[CORE] User fetch success', props<{ user: string }>());
export const userFetchFailure = createAction('[CORE] User fetch failure');
