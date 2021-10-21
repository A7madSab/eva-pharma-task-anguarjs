import { BehaviorSubject, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';

import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { environment } from './../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class AuthService {
  httpOption = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  user = new BehaviorSubject<any>(null);

  constructor(private http: HttpClient, private router: Router) {}

  login(data: any): Observable<Object> {
    return this.http
      .post(`${environment.apiUrl}/user/login`, data, this.httpOption)
      .pipe(
        tap((resData: any) => {
          this.handleAuthentication(resData.token);
        })
      );
  }

  logout() {
    this.user.next(null);
    this.router.navigate(['/login']);
    localStorage.removeItem('token');
  }

  autoLogin() {
    const token = localStorage.getItem('token');
    if (!token) {
      return;
    }

    const userData = JSON.parse(token || '');
    this.user.next(userData);
  }

  private handleAuthentication(token: string) {
    const user = token;
    console.log('uuuuu', user);
    this.user.next(user);
    localStorage.setItem('token', JSON.stringify(token));
  }
}
