import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from './material.module';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { GhUsersModule } from './gh-users/gh-users.module'


import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    GhUsersModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
