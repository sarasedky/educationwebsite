import {  CoursesMaterial } from '../shared/coursesmaterial.model';
import { Subject } from 'rxjs';

export class CoursesMaterialService{
    
  private  coursesmaterial :CoursesMaterial[]=[
        new CoursesMaterial('Lecture 1'),//create first lec and pass it's name
        new CoursesMaterial('Lecture 2'),
        new CoursesMaterial('Lecture 3'),
        new CoursesMaterial('Lecture 4'),
        new CoursesMaterial('Lecture 5'),
        new CoursesMaterial('Lecture 6'),
        new CoursesMaterial('Lecture 7') ,
        new CoursesMaterial('Lecture 8'),
        new CoursesMaterial('Lecture 9'),
        new CoursesMaterial('Lecture 10'),
      ];
      getcoursesmaterial(){
        return this.coursesmaterial;
    }
    addCourses(coursesmaterial:CoursesMaterial){
      // console.log(this.courses);
       //console.log(courses);
       this.coursesmaterial.push(coursesmaterial);
      }
   }
    