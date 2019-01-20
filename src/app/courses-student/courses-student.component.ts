import { Component, OnInit } from '@angular/core';
import{CoursesStudent} from '../shared/courses-student.model';
import { CoursesStudentService } from './courses-student.service';

@Component({
  selector: 'app-courses-student',
  templateUrl: './courses-student.component.html',
  styleUrls: ['./courses-student.component.css']
})
export class CoursesStudentComponent implements OnInit {
  courses :CoursesStudent[];
  constructor(private coursestudentservice:CoursesStudentService) { }

  ngOnInit() {
    this.courses=this.coursestudentservice.getcourses();
  }
}
