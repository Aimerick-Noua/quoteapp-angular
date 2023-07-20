import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent {
  formData: any = {
    email: ''
  };
  constructor(private authService: AuthService, private http: HttpClient) { }
  email: string = '';
  isSuccessful = false;
  notSuccessful = false;
  errorMessage = '';
  submit(form:NgForm):void {
    console.log(this.email);
    
    if (this.email) {
      const email  = this.formData
       this.authService.forgotPassword(email).subscribe(
        data => {
          this.isSuccessful = true;
          console.log(data);
          this.notSuccessful=false;
        },
        (err:Error )=> {
          this.notSuccessful=true;
          this.isSuccessful = false;
          this.errorMessage = err.message;
        }
      )
    }
    else {
      console.log(this.email)
      console.log('invalid email address');

    }
  }

}
