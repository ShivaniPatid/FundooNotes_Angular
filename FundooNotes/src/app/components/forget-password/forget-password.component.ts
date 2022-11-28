import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/userServices/user.service';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent {
  searchMail!: FormGroup
  submitted = false;

  constructor(private formBuilder: FormBuilder, private user: UserService) { }

  ngOnInit() {
    this.searchMail = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  get f() { return this.searchMail.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.searchMail.valid) {
      let data = {
        email: this.searchMail.value.email
      }
      this.user.forget(data).subscribe((response:any)=>{
        console.log(response)
      })
    }

  }
}
