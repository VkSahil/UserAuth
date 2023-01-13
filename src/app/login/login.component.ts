import { Component , OnInit } from '@angular/core';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { FormGroup, FormControl, Validators, FormBuilder  } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  implements OnInit {

  constructor(private formBuilder:FormBuilder , private auth:AuthService , private route:Router){}

  // Declaring and Initialzing Variable to use Through Out the Code
  loginForm!:FormGroup;
  password:any;
  show = false;

ngOnInit(){
  this.onLoad();
}

//First Function To Load Of Validation Check Form
onLoad(){
  this.password = 'password';
  this.loginForm=this.formBuilder.group({
    username:['',[Validators.required]],
    password:['',[Validators.required]]
  });
}

// Login Function and Navigate to dashboard
onSubmit(){
  if(this.loginForm.valid){
    console.log(this.loginForm.value);
    this.auth.signIn(this.loginForm.value).subscribe({
      next:(res)=>{
        this.loginForm.reset();
        this.auth.storeToken(res.token);
        this.route.navigate(['dashboard']);
      }
    })
  }
  else{
    this.validateAllFormFields(this.loginForm);
    alert("invalid");
  }
}

// Apply And Show Errors When Form Inputs are not valid
private validateAllFormFields(formGroup:FormGroup){
  Object.keys(formGroup.controls).forEach(field=>{
    const control = formGroup.get(field);
    if(control instanceof FormControl){
      control.markAsDirty({ onlySelf :true});
    }
    else if( control instanceof FormGroup){
      this.validateAllFormFields(control)
    }
  })
 }

 // Hide And Show PassWord on Eye Click
 onClick() {
  if (this.password === 'password') {
    this.password = 'text';
    this.show = true;
  } else {
    this.password = 'password';
    this.show = false;
  }
}
}
