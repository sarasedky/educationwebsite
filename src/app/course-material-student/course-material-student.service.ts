import {  CoursesMaterialStudent } from '../shared/course-material-student.model';
export class CoursesMaterialStudentService{
    
    private  coursesmaterial :CoursesMaterialStudent[]=[
          new CoursesMaterialStudent('lecture 1'),//create first lec and pass it's name
          new CoursesMaterialStudent('lecture 2'),
          new CoursesMaterialStudent('lecture 3'),
          new CoursesMaterialStudent('lecture 4'),
          new CoursesMaterialStudent('lecture 5'),
          new CoursesMaterialStudent('lecture 6'),
          new CoursesMaterialStudent('lecture 7') ,
          new CoursesMaterialStudent('lecture 8'),
          new CoursesMaterialStudent('lecture 9'),
          // new CoursesMaterialStudent('lecture 10'),
        ];
        getcoursesmaterial(){
          return this.coursesmaterial;
      }}