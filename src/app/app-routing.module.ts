import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentNavigatorComponent } from './student-navigator/student-navigator.component';

const routes: Routes = [
  { path: 'student', component: StudentNavigatorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
