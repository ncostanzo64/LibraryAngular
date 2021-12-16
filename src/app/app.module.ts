import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StudentService } from 'src/service/StudentService';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentNavigatorComponent } from './student-navigator/student-navigator.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentNavigatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    StudentService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
