import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ApiService } from '../services/api.service';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { User } from '../models/user-model';
import { SignInUserResponse } from '../models/sign-in-user-response-model';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})
export class SignInComponent {
  router:Router = inject(Router);

  api:ApiService = inject(ApiService);

  formBuilder:FormBuilder = inject(FormBuilder);

  signInForm = this.formBuilder.nonNullable.group({
    email: ['', [Validators.required, Validators.maxLength(100), Validators.email]],
    password: ['', [Validators.required, Validators.maxLength(100)]],
  });

  submitForm(): void {
    const formData: User = this.signInForm.getRawValue();
    this.api.signIn(formData)
    .subscribe({
      next: (res: SignInUserResponse) => {
        console.log(`succesful logged in user id ${res.userId}`);
        localStorage.setItem('accessToken', res.accessToken);
        this.router.navigateByUrl('home')
        },
      error: (err) => 
        console.log(err.error.message)
    });
  }
  

}
