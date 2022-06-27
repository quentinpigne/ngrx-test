import { createAction, props } from '@ngrx/store';

export const updateUser = createAction('[CORE] Update user', props<{ user: string }>());
