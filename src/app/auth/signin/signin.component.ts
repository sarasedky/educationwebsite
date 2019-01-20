import { Component, OnInit } from '@angular/core';
import { NgForm, FormBuilder,FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: [ './signin.component.css']
})
export class SigninComponent implements OnInit {
  userform:FormGroup;
  

  constructor(private authservice:AuthService, private fb :FormBuilder) { }

  ngOnInit() {
    this.userform= this.fb.group ({
      email : ['',[Validators.required,Validators.email]],
      
     password : ['',[Validators.required,Validators.minLength(6)]],
    });
  } 
  onSignin(form : NgForm){
    const email=form.value.email;
    const password=form.value.password;
    this.authservice.signinUser(email,password);


  }

}

