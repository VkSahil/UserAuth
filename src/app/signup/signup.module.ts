import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignupRoutingModule } from './signup-routing.module';
import { SignupComponent } from './signup.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import {ReactiveFormsModule} from '@angular/forms'
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    SignupComponent
  ],
  imports: [
    CommonModule,
    SignupRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class SignupModule { }
