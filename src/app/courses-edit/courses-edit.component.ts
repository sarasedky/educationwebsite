import { Component, OnInit, ViewChild,ElementRef,  } from '@angular/core';
import { Courses } from '../shared/courses.model';
import { HttpClient } from '@angular/common/http';
import { CoursesListService } from '../courses-list/courses-list.service';
import { DataStorageService } from '../shared/data-storage.service';
import { Observable } from 'rxjs/Observable';
@Component({
  selector: 'app-courses-edit',
  templateUrl: './courses-edit.component.html',
  styleUrls: ['./courses-edit.component.css']
})
export class CoursesEditComponent implements OnInit {

  // get value of nameinput by ViewChild
  @ViewChild ('nameInput') nameInputRef: ElementRef;

  courses: Observable<Courses[]>; 
   
  constructor(private courselistservice:CoursesListService,private dataStorageService:DataStorageService,private httpClient: HttpClient) { }
 
  ngOnInit() {
  }
  onAddCourse(){
    // create course with this data
    const  CourseName=this.nameInputRef.nativeElement.value;
    const newCourses= new Courses(CourseName);
    this.courselistservice.addCourses(newCourses);
     this.dataStorageService.storeCourses().subscribe((response:Response )=>{
    console.log(response);
});
 }
onSavaData(){
//   this.dataStorageService.storeCourses().subscribe((response:Response )=>{
//     console.log(response);
// });
}



}