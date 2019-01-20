import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { HomepageComponent } from './homepage/homepage.component';
import { CoursesListComponent } from './courses-list/courses-list.component';
import { InstructorProfileComponent } from './instructor-profile/instructor-profile.component';
import { CourseMaterialComponent } from './course-material/course-material.component';
import { AddannouncementComponent } from './addannouncement/addannouncement.component';
import { CoursesStudentComponent } from './courses-student/courses-student.component';
import { CourseMaterialStudentComponent } from './course-material-student/course-material-student.component';

const routes: Routes = [
  {path:'',component:HomepageComponent},

{path:'signup',component:SignupComponent},
{path:'signin',component:SigninComponent},
{path:'homepage',component:HomepageComponent},
{path:'courseslist',component:CoursesListComponent},
{path:'instrustorprofile',component:InstructorProfileComponent},
{path:'coursematerial',component:CourseMaterialComponent},
{path:'addannouncement',component:AddannouncementComponent},
{path:'coursesstudent',component:CoursesStudentComponent},
{path:'coursematerialstudent',component:CourseMaterialStudentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
