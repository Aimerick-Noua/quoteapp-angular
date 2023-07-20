import { AfterContentInit, AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Route, Router } from '@angular/router';
import { AuthService } from './authentication/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

private roles!:string[];
isLoggedIn = false;
showAdminBoard = false;
username!:string;

constructor(private authService:AuthService,private route:Router){}
ngOnInit():void{
  if(this.isLoggedIn){
    this.showAdminBoard = this.roles.includes('ADMIN');
  }
}
RegisterPage(){
this.route.navigate(['authentication/register']);
}
loginPage(){
  this.route.navigate(['authentication/login']);
}

}
