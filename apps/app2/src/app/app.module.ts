import {DoBootstrap, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import { RemoteEntryModule } from './remote-entry/entry.module';

@NgModule({
    imports: [
        BrowserModule,
        RemoteEntryModule
    ],
    providers: [],
    bootstrap: [],
})
export class AppModule implements DoBootstrap {
    ngDoBootstrap(appRef: any): void {
        console.log("removed in nx14")
    }
}
