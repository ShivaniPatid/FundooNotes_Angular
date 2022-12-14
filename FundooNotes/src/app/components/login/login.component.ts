import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/userServices/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm!: FormGroup;
  submitted = false;
  users='1'

  constructor(private formBuilder: FormBuilder, private user : UserService) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
    //localStorage.setItem('SeesionUser',this.users)
  }

  get f() { return this.loginForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.valid) {
      let data = {
        email: this.loginForm.value.email,
        password: this.loginForm.value.password
      } 
      this.user.login(data).subscribe((response:any)=>{
        console.log(response);
        localStorage.setItem("token",response.data);
      })
    }

  }
}
