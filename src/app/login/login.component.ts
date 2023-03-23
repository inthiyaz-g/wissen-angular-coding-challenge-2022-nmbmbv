import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
/**
 * Modify the login component and the login template to collect login details and add the validators as necessary
 */
import { AuthenticationService } from "../services/authentication.service";
import { HttpErrorResponse } from "@angular/common/http";

@Component({
  templateUrl: "login.component.html"
})
export class LoginComponent implements OnInit {


  loginForm = new FormGroup({
    email: new FormControl("eve.holt@reqres.in",[Validators.required,Validators.minLength(6)]),
    password: new FormControl("cityslicka",[Validators.required,Validators.minLength(6)]),
  
    })
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authenticationService: AuthenticationService
  ) {}

  ngOnInit() {
    // setup the loginform and validators
    // this.loginForm = this.formBuilder.group({});
  }

  ngOnDestroy() {}

  onSubmit() {
    // 
    if(!this.loginForm.valid){
      alert("enter details")
          }
    console.log(this.loginForm.value)
        this.authenticationService.login(this.loginForm.value).subscribe((data:any)=>{
      console.log(data)
      alert("Wooh.. Login Successfull")
      // this.router.navigate(['/welcome',data.username])
      localStorage.setItem('token', data.token);

      this.router.navigate(['/welcome',data.token])

    },(err: HttpErrorResponse)=>{

      alert("login failed (Invalid username /password)")
    })
  }

  // implement the username validator. Min 6 characters and no digits, special chars
  usernameValidator() {
    return false;
  }

  // implement the password validator
  // Min 1 uppercase, 1 lower case and a digit. Total length >= 8
  passwordValidator() {
    return false;
  }
}
