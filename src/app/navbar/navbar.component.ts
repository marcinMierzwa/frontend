import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AuthComponent } from "./auth/auth.component";
import { LogOutComponent } from "./log-out/log-out.component";
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, AuthComponent, LogOutComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  apiService: ApiService = inject(ApiService);

  isAuth = this.apiService.isAuthenticated;


}
