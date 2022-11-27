import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegistrationComponent } from './components/registration/registration.component';
import { LoginComponent } from './components/login/login.component';
import { ForgetPasswordComponent } from './components/forget-password/forget-password.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginComponent,
    ForgetPasswordComponent,
    ResetPasswordComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
