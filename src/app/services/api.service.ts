import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  // Setting Base Url
  private baseUrl: string="https://localhost:44318/api/User/";
  constructor(private http:HttpClient) { }

  // Api call for Getting List of Users
  getUser(){
    return this.http.get(this.baseUrl);
  }
}
