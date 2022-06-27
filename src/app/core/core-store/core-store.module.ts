import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { coreReducer } from './core.reducer';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forRoot(
      { core: coreReducer },
      { runtimeChecks: { strictActionImmutability: true, strictStateImmutability: true } },
    ),
    StoreDevtoolsModule.instrument({ maxAge: 25 }),
  ],
  exports: [StoreModule],
})
export class CoreStoreModule {}
