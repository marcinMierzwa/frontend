import { effect, inject, Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SignUpUserResponse } from '../models/sign-up-user-response';
import { User } from '../models/user-model';
import { SignInUserResponse } from '../models/sign-in-user-response-model';
import { Observable } from 'rxjs';
import { UserResponse } from '../models/user-response';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  http: HttpClient = inject(HttpClient);
  isAuthenticated = signal<boolean>(false);
  accessToken = signal<string>('');



  // #SignUp
  signUp(formData: User): Observable<SignUpUserResponse> {
    return this.http.post<SignUpUserResponse>(
      'http://localhost:3000/auth/signUp',
      formData
    );
  }

  // #SingIn
  signIn(formData: User): Observable<SignInUserResponse> {
    return this.http.post<SignInUserResponse>(
      'http://localhost:3000/auth/signIn',
      formData
    );
  }

  // #getUserById
  getUserById(): Observable<UserResponse> {
    return this.http.get<UserResponse>('http://localhost:3000/auth/user');
}

refresh():any {
  return this.http.post('http://localhost:3000/auth/refresh', {}, {withCredentials: true} 
   )
 }



// #logout


// #isLoggedIn


}

