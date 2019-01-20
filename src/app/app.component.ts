import { Component,OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(){}
  ngOnInit(){
firebase.initializeApp({
  apiKey: "AIzaSyCzPCM2RkENk8ZfhiHcE30PnCGkt2HWqng",
  authDomain: "educationapp-11114.firebaseapp.com",
  databaseURL: "https://educationapp-11114.firebaseio.com",
  projectId: "educationapp-11114",
  storageBucket: "educationapp-11114.appspot.com",
  messagingSenderId: "944950779419"
});
  }
}
