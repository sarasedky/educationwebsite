import { Component, OnInit} from '@angular/core';
import { Courses } from '../shared/courses.model';
import {CoursesListService} from './courses-list.service';


import { DataStorageService } from '../shared/data-storage.service';
@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css'],
})
export class CoursesListComponent implements OnInit {
courses :Courses[];
constructor(private courselistservice:CoursesListService,private datastorageservice:DataStorageService)
{}
  ngOnInit() {
    this.courses=this.courselistservice.getCourses();
    this.datastorageservice.storeCourses();
     this.datastorageservice.getCourses();
  
  }
  

}
