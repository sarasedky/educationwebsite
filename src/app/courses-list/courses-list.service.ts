import { Courses } from '../shared/courses.model';

import { Subject } from 'rxjs/Subject';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class CoursesListService{
  // private courses: Courses[] = [];
  // coursesChanged= new Subject<Courses[]>();
    constructor( private httpclient:HttpClient){

    }
  private  courses :Courses[]=[
        new Courses('Software Engineering'),//create first course and pass it's name
        new Courses('Computer Archtecture') ,
        new Courses('OOP'),
        new Courses('Software Testing') ,
      
      ];
      setCourses(courses : Courses[]){//get array of courses
          
          this.courses = courses;
          
        

      }
      getCourses(){
          return this.courses;
      }
      addCourses(courses:Courses){
         // console.log(this.courses);
          //console.log(courses);
          this.courses.push(courses);
         }
      }
