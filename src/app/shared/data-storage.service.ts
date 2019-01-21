//this file to store or get the data,having method of storing/get data
//to inject httpclient i need to import injectable
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InstructorProfileComponent } from '../instructor-profile/instructor-profile.component';
import { AuthService } from '../auth/auth.service';
import { CoursesListService } from '../courses-list/courses-list.service';
import { Courses } from './courses.model';
import 'rxjs/Rx';
import { CoursesMaterialService } from '../course-material/course-material.service';
import { InstructorProfileService } from '../instructor-profile/instructor-profile.service';
import { Observable } from 'rxjs/Rx';


@Injectable()
export class DataStorageService {
  constructor(private httpClient: HttpClient, private courseslistservice: CoursesListService,
     private instructorprofileservice: InstructorProfileService,private coursematerialservice:CoursesMaterialService) { }
  //this is method
  storeCourses() {
    
    // console.log(this.courseslistservice.getCourses());
    //put is method of port request to overwrite data(url to the project,define what we would add)
    //return used to return to courselist
    return this.httpClient.post('https://educationapp-11114.firebaseio.com/courses.json',
      this.courseslistservice.getCourses());
  }
  storedata() {
    console.log(this.instructorprofileservice.getData());
    return this.httpClient.post('https://educationapp-11114.firebaseio.com/users.json',
      this.instructorprofileservice.getData());

  }
  storeCoursesMaterial(){
    return this.httpClient.post('https://educationapp-11114.firebaseio.com/coursesmaterial.json',
    this.coursematerialservice.getcoursesmaterial());
  }

  getCourses() {
 


  }
  //   return this.httpClient.get('https://educationapp-11114.firebaseio.com/courses.json')
  
  //     observe: 'body',
  //     responseType: 'json'
  //   })
  //   .map( 
  //     (courses)=>{
  //       for(let course of courses){
  //         if(!course['courses']){
  //           course['courses']=[];
  //         }
  //       }
  //       return courses;
  //     })
  //   .subscribe(
  //       (courses: Courses[]) => {
  //         console.log(courses);
  //         this.courseslistservice.setCourses(courses);
  //       });
  // }
  


}