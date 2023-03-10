import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

import {ReactiveFormsModule} from '@angular/forms'
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    LoginComponent,

  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule

  ]
})
export class LoginModule { }
