import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { StudentNavigatorComponent } from './student-navigator/student-navigator.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'student', component: StudentNavigatorComponent }
];

export  const routing = RouterModule.forRoot(routes);
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
