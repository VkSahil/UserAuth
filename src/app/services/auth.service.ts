import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // Setting API URl
 private baseUrl: string="https://localhost:44318/api/User/";
  constructor(private http:HttpClient , private route : Router) { }

  // Registering Functionality
  signUp(userObj:any){
    return this.http.post<any>(`${this.baseUrl}register`,userObj);
  }

  // Login Functionality
  signIn(loginObj:any){
    return this.http.post<any>(`${this.baseUrl}authenticate`,loginObj);
  }

  // Storing Value of Token In Local Storage
  storeToken(tokenValue:any){
    localStorage.setItem('token',tokenValue)
  }

  // Getting Vlaue of Tokern From Local Storage
  getToken(){
    return localStorage.getItem('token');
  }

  // Check Wheter USer is signin or not
  isLoggedIn(){
    return !!localStorage.getItem('token');
  }

  // LogOut Functionality
  signOut(){
    localStorage.clear();
    this.route.navigate(['login']);
  }
}
