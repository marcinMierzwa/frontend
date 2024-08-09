import { Component, inject, OnInit, signal } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Observable } from 'rxjs';
import { UserResponse } from '../../models/user-response';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-log-out',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './log-out.component.html',
  styleUrl: './log-out.component.css'
})
export class LogOutComponent implements OnInit {


  apiService: ApiService = inject(ApiService);


  User$!: Observable<UserResponse>;

  ngOnInit(): void {
    this.getUser();
     
  }


  getUser() {
    this.User$ = this.apiService.getUserById();
  }

  logOut(): void {

    }
  }
