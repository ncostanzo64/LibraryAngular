import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StudentService } from 'src/service/StudentService';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentNavigatorComponent } from './student-navigator/student-navigator.component';
import { LoginComponent } from './login/login.component';
import { UserService } from 'src/service/user.service.client';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    StudentNavigatorComponent,
    LoginComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    StudentService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }