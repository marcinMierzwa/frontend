import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { ApiService } from '../services/api.service';
import { User } from '../models/user-model';
import { SignUpUserResponse } from '../models/sign-up-user-response';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css',
})
export class SignUpComponent {
  router:Router = inject(Router)

  api: ApiService = inject(ApiService);

  formBuilder: FormBuilder = inject(FormBuilder);

  signUpForm = this.formBuilder.nonNullable.group({
    email: [
      '',
      [Validators.required, Validators.maxLength(100), Validators.email],
    ],
    password: ['', [Validators.required, Validators.maxLength(100)]],
  });

  submit(): void {
    const formData: User = this.signUpForm.getRawValue();
    this.api
      .signUp(formData)
      .subscribe({
        next: (res: SignUpUserResponse) => {
          console.log(`user id ${res._id} succesful register`);
         this.router.navigateByUrl('/signin')
        },
        error: (err) => console.log(err.error.message)
      });
  }
}
