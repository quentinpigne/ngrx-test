import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreStoreModule } from './core-store/core-store.module';
import { ShellModule } from './shell/shell.module';

@NgModule({
  imports: [CommonModule, CoreStoreModule, ShellModule],
  exports: [CoreStoreModule, ShellModule],
})
export class CoreModule {}
