import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import {
  App1MainModule,
  App1GreetingComponent,
} from '@nx-module-federation/app1/main';

@NgModule({
  imports: [
    CommonModule,
    App1MainModule,
    RouterModule.forChild([
      {
        path: '',
        component: App1GreetingComponent,
      },
    ]),
  ],
  providers: [],
})
export class RemoteEntryModule {}
