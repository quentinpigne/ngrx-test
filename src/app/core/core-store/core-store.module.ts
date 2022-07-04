import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { userReducer } from './reducers/user.reducer';

@NgModule({
  imports: [
    CommonModule,
    EffectsModule.forRoot(),
    StoreModule.forRoot(
      { user: userReducer },
      { runtimeChecks: { strictActionImmutability: true, strictStateImmutability: true } },
    ),
    StoreDevtoolsModule.instrument({ maxAge: 25 }),
  ],
  exports: [EffectsModule, StoreModule],
})
export class CoreStoreModule {}
