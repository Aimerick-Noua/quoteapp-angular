import { Component } from '@angular/core';
import { AuthService } from 'src/app/authentication/services/auth.service';
import { TokenStorageService } from 'src/app/authentication/services/token-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private tokenStorage: TokenStorageService) { }

  logOut() {
    this.tokenStorage.signOut();
    window.location.reload();
  }
}
