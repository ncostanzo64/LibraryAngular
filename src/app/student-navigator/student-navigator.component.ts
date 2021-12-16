import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/service/StudentService';

@Component({
  selector: 'app-student-navigator',
  templateUrl: './student-navigator.component.html',
  styleUrls: ['./student-navigator.component.css']
})
export class StudentNavigatorComponent implements OnInit {


  constructor(private studentService: StudentService) { }
  students: any[] | undefined;
  selectedStudent = {
    modules: [],
    id: undefined
  };

  ngOnInit(): void {
    this.studentService.findAllStudents()
      .then(students => this.students = students)

  }

  selectStudent(student: any) {
    this.selectStudent = student;
  }

}
