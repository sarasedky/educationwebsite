import * as firebase from 'firebase';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Type } from '@angular/compiler';

@Injectable()
export class AuthService {
    isAdmin: boolean;
    userId: string;

    constructor(private router: Router) {


    }
  
    signupUser(email: string, password: string) {

        firebase.auth().createUserAndRetrieveDataWithEmailAndPassword(email, password)
            .catch(
                error => console.log(error)
            );
    }
    signinUser(email: string, password: string) {
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(
                response => {
                    this.userId = firebase.auth().currentUser.uid;

                    firebase.database().ref("/admin").once('value')
                        .then(snap => {
                            if (snap.val()[this.userId]) {
                                this.isAdmin = true;
                                sessionStorage.setItem('admin', 'true');
                            }
                            else {
                                this.isAdmin = false;
                            }
                            if (this.isAdmin) {
                                this.router.navigate(['/courseslist']);
                            }
                            else {
                                this.router.navigate(['/coursesstudent']);
        
                            }
                        }
                        );
                   


                }
            )
            .catch(
                error => console.log(error)
            );
    }
    logout() {
        firebase.auth().signOut();
        sessionStorage.removeItem('admin');
        sessionStorage.clear();
        this.isAdmin = false;

    }

    isAdminAuthenticated() {
        return sessionStorage.getItem('admin');
    }
}



