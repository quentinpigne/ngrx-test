import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { rootReducer } from './root.reducer';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forRoot(
      { root: rootReducer },
      { runtimeChecks: { strictActionImmutability: true, strictStateImmutability: true } },
    ),
    StoreDevtoolsModule.instrument({ maxAge: 25 }),
  ],
  exports: [StoreModule],
})
export class RootStoreModule {}
