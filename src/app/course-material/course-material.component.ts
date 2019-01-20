import { Component, OnInit,ViewChild,ElementRef,  } from '@angular/core';

import { CoursesMaterial } from '../shared/coursesmaterial.model';
import { CoursesMaterialService } from './course-material.service';
import { DataStorageService } from '../shared/data-storage.service';
@Component({
  selector: 'app-course-material',
  templateUrl: './course-material.component.html',
  styleUrls: ['./course-material.component.css']
})
export class CourseMaterialComponent implements OnInit {
coursesmaterial:CoursesMaterial[];
@ViewChild ('nameInput') nameInputRef: ElementRef;
  constructor(private coursematerialservice:CoursesMaterialService,private dataStorageService:DataStorageService) { }
  ngOnInit() {
    // this.coursesmaterial=this.coursematerialservice.getcoursesmaterial();
    this.coursesmaterial=this.coursematerialservice.getcoursesmaterial();
    this.dataStorageService.storeCoursesMaterial();
  }
  onAddCourseMaterial(){
    const  CourseName=this.nameInputRef.nativeElement.value;
    const newCourses= new CoursesMaterial(CourseName);
    this.coursematerialservice.addCourses(newCourses);
    this.dataStorageService.storeCoursesMaterial().subscribe((response:Response )=>{
      console.log(response);
  }

    );}}