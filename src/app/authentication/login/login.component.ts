import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { TokenStorageService } from '../services/token-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  formData: any = {
    username: '',
    password: ''
  };
  isLoggedIn = false;
  errorMessage = '';
  isSuccessful=false;
  roles: string[] = [];
  isSignUpFailed=false;
  constructor(private authService: AuthService, private tokenStorage: TokenStorageService,private route:Router) { }

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;
      console.log(this.roles);
      
    }
  }

  onSubmit(myForm:NgForm): void {
    const { email, password } = this.formData;

    this.authService.login(email, password).subscribe(
      data => {
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUser(data);
        this.isSuccessful=true;

        this.isLoggedIn = true;
        this.roles = this.tokenStorage.getUser().roles;
        this.route.navigate(['/dashboard/home']);
      },
      (err:Error) => {
        this.errorMessage = err.message;
        this.isSignUpFailed=true;
      }
    );
  }

  reloadPage(): void {
    window.location.reload();
  }
}