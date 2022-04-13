import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { App1GreetingComponent } from './app1-greeting/app1-greeting.component';
import { SharedComponentsModule } from '@nx-mfe/shared/components'

@NgModule({
  imports: [CommonModule, SharedComponentsModule],
  declarations: [App1GreetingComponent],
  exports: [App1GreetingComponent]
})
export class App1MainModule {}
