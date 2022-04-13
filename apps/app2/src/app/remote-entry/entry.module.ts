import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import {
  App2MainModule,
  App2GreetingComponent,
} from '@nx-module-federation/app2/main';

@NgModule({
  imports: [
    CommonModule,
    App2MainModule,
    RouterModule.forChild([
      {
        path: '',
        component: App2GreetingComponent,
      },
    ]),
  ],
  providers: [],
})
export class RemoteEntryModule {}
