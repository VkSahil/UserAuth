import { Component , OnInit } from '@angular/core';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { FormGroup, FormControl, Validators, FormBuilder  } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit{

  constructor(private formBuilder:FormBuilder , private auth:AuthService , private route:Router){}

  //Setting  Form as Object Of FormGroup
  signupForm!:FormGroup;

ngOnInit(){
  this.onLoad();
}

// First Function to Load Of Validation checker of Form
onLoad(){
  this.signupForm=this.formBuilder.group({
    firstname:['',[Validators.required]],
    lastname:['',[Validators.required]],
    username:['',[Validators.required]],
    email:['',[Validators.required]],
    password:['',[Validators.required]]
  });
}

// Registering USer Nad Redirectring It to Login page
onSubmit(){
  if(this.signupForm.valid){
    console.log(this.signupForm.value);
    this.auth.signUp(this.signupForm.value).subscribe({
      next:(res)=>{
        this.signupForm.reset();
        this.route.navigate(['login']);
      }
    })
  }
  else{
    this.validateAllFormFields(this.signupForm);
    alert("invalid");
  }
}

// Validations Checker And Show error After Submit Buuton Click if the Values are Not Valid
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

}
