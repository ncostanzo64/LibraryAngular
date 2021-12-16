import { Injectable } from '@angular/core';

@Injectable()
export class StudentService {
    findAllStudents = () =>
        fetch('http://studentservice-env.eba-srf3wpnt.us-east-2.elasticbeanstalk.com/api/student')
            .then(response => response.json())
}