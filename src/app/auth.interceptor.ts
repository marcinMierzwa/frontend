import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { ApiService } from './services/api.service';
import { inject } from '@angular/core';
import { catchError, switchMap, throwError } from 'rxjs';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const apiService: ApiService = inject(ApiService);
  const token = apiService.accessToken();
  const cloneRequest = req.clone({
    setHeaders: {
      Authorization: `Bearer ${token}`, 
    },
  });
  return next(cloneRequest).pipe(catchError((err: HttpErrorResponse) => {
    if(err.status === 401) {
      return apiService.refresh()
      .pipe(
        switchMap((res) => {
          console.log(res);
          
        })
      )

    }
    return throwError(() => err);
  }));
}
