import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
  constructor(private http: HttpClient) {}

  // modify the return type to properly use the full response
  login1(data:any): Observable<any> {
    // implement here
    //  data=[{username: string, password: string}]
    // const body = {
    //   username: username,
    //   password: password
    // }
    return this.http.post('https://dummyjson.com/auth/login/',data)
  }



  login(data:any):Observable<any>{
    return this.http.post('https://reqres.in/api/login',data)
  } 
  // getToken(){
  //   return this.http.post('https://reqres.in/api/login',data)

  // }
}
