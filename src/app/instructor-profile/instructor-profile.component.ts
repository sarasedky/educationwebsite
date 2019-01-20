import { Component, OnInit, ViewChild,ElementRef, Input,  } from '@angular/core';

import { DataStorageService } from '../shared/data-storage.service';
import { InstructorProfileService } from './instructor-profile.service';
import { InstructorProfile } from '../shared/instructor-profile.model';
@Component({
  selector: 'app-instructor-profile',
  templateUrl: './instructor-profile.component.html',
  styleUrls: ['./instructor-profile.component.css']
})
export class InstructorProfileComponent implements OnInit {
  profilecontent :InstructorProfile[];
  @ViewChild ('firstname') firstnameRef: ElementRef;
  @ViewChild ('lastname') lastnameRef: ElementRef;
  @ViewChild ('email') emailRef: ElementRef;
  @ViewChild ('password') passwordRef: ElementRef;
  @ViewChild ('confirmpassword') confirmpasswordRef: ElementRef;
  constructor(private datastorageservice:DataStorageService,
        private instructorprofileservice:InstructorProfileService,) {
    
   }

  ngOnInit() {
    this.profilecontent=this.instructorprofileservice.getData();
    this.datastorageservice.storedata();
  }
  onAddData(){
  const  Fname=this.firstnameRef.nativeElement.value;
  const  Lname=this.lastnameRef.nativeElement.value;
 const  email=this.emailRef.nativeElement.value;
 const  password=this.passwordRef.nativeElement.value;
  const  confirmpassword=this.confirmpasswordRef.nativeElement.value;
  const NewInput= new InstructorProfile(Fname,Lname,email,password,confirmpassword);
  this.instructorprofileservice.addData(NewInput);
  this.datastorageservice.storedata().subscribe((response:Response )=>{
    console.log(response);
});
  }

}