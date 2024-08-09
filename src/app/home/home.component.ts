import { Component, inject, OnInit, signal } from '@angular/core';
// import { ApiService } from '../services/api.service';
import { NavbarComponent } from "../navbar/navbar.component";
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent, RouterLink, RouterLinkActive],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {

  // private api:ApiService = inject(ApiService)



  ngOnInit(): void {
    // this.api.getUserById().subscribe()
  }

}
