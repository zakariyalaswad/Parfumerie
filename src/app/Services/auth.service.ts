import { Injectable } from '@angular/core';
import {createUserWithEmailAndPassword,signInWithEmailAndPassword, signOut} from 'firebase/auth';
import { auth } from './../firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  login(email:string,password:string){
    return signInWithEmailAndPassword(auth,email,password);
  }
  signup(email:string,password:string){
    return createUserWithEmailAndPassword(auth,email,password);
  }
  logout(){
    return signOut(auth);
  }


}
