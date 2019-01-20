import { Component, OnInit } from '@angular/core';
import{ NgForm, FormBuilder,FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../auth.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: [
  './signup.component.css']
})
export class SignupComponent implements OnInit {
  userform:FormGroup;
  constructor(private authservice:AuthService,private fb :FormBuilder) { }

  ngOnInit() {
    this.userform= this.fb.group ({
      //  To add a validator
      //  The first item in the array is the default value if any, then the next item in the array is the validator. Here we are adding a required 
      //  validator meaning that the email attribute must have a value in it.
      email : ['',[Validators.required,Validators.email]],
      
      password : ['',[Validators.required,Validators.minLength(6)]],
    });
  }
  onSignup(form: NgForm)
  {
    const email=form.value.email;
    const password=form.value.password;
    // const Instructor=form.value.Instructor;
    // const Student=form.value.Student;
    this.authservice.signupUser(email,password);

  }

}
