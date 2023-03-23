/**
 * Modify this file to fetch and display the login details
 */
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { AuthenticationService } from "../services/authentication.service";

@Component({
  selector: "app-welcome",
  templateUrl: "./welcome.component.html",
  styleUrls: ["./welcome.component.css"]
})
export class WelcomeComponent implements OnInit {
  user; // type this variable using user.type.ts file
  constructor( private authenticationService: AuthenticationService ,private http: HttpClient) {}
  data:any[];

  ngOnInit() {
    const token = localStorage.getItem('token') // get token from auth service
    const headers = new HttpHeaders({ Authorization: `Bearer ${token}` });
    this.http.get('https://reqres.in/api/unknown', { headers }).subscribe(
      (ddd) => {
        console.log(ddd['data']);
        this.data=ddd['data'];
        alert(ddd)
        console.log(1) // handle response
      },
      (error) => {
        console.error(error); // handle error
      }
    );
  }

  ngOnDestroy() {}
  getUsers() {
    const token = localStorage.getItem('token') // get token from auth service
    const headers = new HttpHeaders({ Authorization: `Bearer ${token}` });
    this.http.get('https://reqres.in/api/unknown', { headers }).subscribe(
      (data) => {
        console.log(data);
        console.log(1) // handle response
      },
      (error) => {
        console.error(error); // handle error
      }
    );
  }
}
