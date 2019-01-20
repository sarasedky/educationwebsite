import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';    
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import {CoursesListService} from './courses-list/courses-list.service';
import {AuthService} from './auth/auth.service';
import { HeaderComponent } from './header/header.component';
import { HomepageComponent } from './homepage/homepage.component';
import { CoursesListComponent } from './courses-list/courses-list.component';
import { CoursesEditComponent } from './courses-edit/courses-edit.component';
import { DataStorageService } from './shared/data-storage.service';
import { InstructorProfileComponent } from './instructor-profile/instructor-profile.component';
import { InstructorProfileService } from './instructor-profile/instructor-profile.service';
import { CourseMaterialComponent } from './course-material/course-material.component';
import { CoursesMaterialService } from './course-material/course-material.service';
import { AddannouncementComponent } from './addannouncement/addannouncement.component';
import { CoursesStudentComponent } from './courses-student/courses-student.component';
import { CoursesStudentService } from './courses-student/courses-student.service';
import { CourseMaterialStudentComponent } from './course-material-student/course-material-student.component';
import { CoursesMaterialStudentService } from './course-material-student/course-material-student.service';

@NgModule({
  declarations: [
    AppComponent,
   
    SignupComponent,
    SigninComponent,
    HeaderComponent,
    HomepageComponent,
    CoursesListComponent,
    CoursesEditComponent,
    InstructorProfileComponent,
    CourseMaterialComponent,
    AddannouncementComponent,
    CoursesStudentComponent,
    CourseMaterialStudentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [AuthService,CoursesListService,DataStorageService,
    InstructorProfileService,CoursesMaterialService
    ,CoursesStudentService,CoursesMaterialStudentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
