import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RootStoreModule } from './root-store/root-store.module';
import { ShellModule } from './shell/shell.module';

@NgModule({
  imports: [CommonModule, RootStoreModule, ShellModule],
  exports: [RootStoreModule, ShellModule],
})
export class CoreModule {}
