import{CoursesStudent} from '../shared/courses-student.model';

import { Subject } from 'rxjs/Subject';
import { Injectable } from '@angular/core';
@Injectable()
export class CoursesStudentService{
 
  private  courses :CoursesStudent[]=[
        new CoursesStudent('Software Engineering'),//create first course and pass it's name
        new CoursesStudent('Computer Archtecture') ,
        new CoursesStudent('OOP'),
        new CoursesStudent('Software Testing') ,
        new CoursesStudent('Algorithm') ,
      ];
      getcourses(){
        return this.courses;
    }
    }