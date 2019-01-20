import { Component, OnInit } from '@angular/core';
import { CoursesMaterialStudent } from '../shared/course-material-student.model';
import { CoursesMaterialStudentService } from './course-material-student.service';
@Component({
  selector: 'app-course-material-student',
  templateUrl: './course-material-student.component.html',
  styleUrls: ['./course-material-student.component.css']
})
export class CourseMaterialStudentComponent implements OnInit {
  coursesmaterial:CoursesMaterialStudent[];

  constructor(private coursematerialstudentservice:CoursesMaterialStudentService) { }

  ngOnInit() {
    this.coursesmaterial=this.coursematerialstudentservice.getcoursesmaterial();
  }
}
