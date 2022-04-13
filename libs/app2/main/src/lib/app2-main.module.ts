import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { App2GreetingComponent } from './app2-greeting/app2-greeting.component';
import { SharedComponentsModule } from '@nx-module-federation/shared/components';

@NgModule({
  imports: [CommonModule, SharedComponentsModule],
  declarations: [App2GreetingComponent],
  exports: [App2GreetingComponent],
})
export class App2MainModule {}
