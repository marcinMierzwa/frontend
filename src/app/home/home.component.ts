import { Component, inject, OnInit, signal } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { UserResponse } from '../models/user-response';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {

  isLoggedIn = signal<boolean>(false);

  apiService: ApiService = inject(ApiService);

  User$!: Observable<UserResponse>;

  ngOnInit(): void {
    this.User$ = this.apiService.getUserById();
    this.isLoggedInService();
  }

  isLoggedInService() {
    this.isLoggedIn.set(this.apiService.isLoggedIn())
  }
}
