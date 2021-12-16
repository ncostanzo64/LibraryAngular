import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from 'src/service/StudentService';

@Component({
  selector: 'app-student-navigator',
  templateUrl: './student-navigator.component.html',
  styleUrls: ['./student-navigator.component.css']
})
export class StudentNavigatorComponent implements OnInit {
  userId: any;

  constructor(private studentService: StudentService, private activatedRoute: ActivatedRoute) { }
  students: any[] | undefined;
  selectedStudent = {
  modules: [],
  id: undefined
};

  ngOnInit(): void {
    this.studentService.findAllStudents()
      .then(students => this.students = students)
<<<<<<< HEAD
      
=======
    this.activatedRoute
      .params
      .subscribe(params =>
        this.userId = params['userId']);
>>>>>>> 76444427ace7b033540e29401920faa5c25a2387
  }

  selectStudent(student: any) {
    this.selectStudent = student;
  }

}
