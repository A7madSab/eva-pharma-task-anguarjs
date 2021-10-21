import { AuthService } from './auth.service';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-root',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class loginComponent {
  isLoading: boolean = false;
  error: string = '';
  userData: { email: string; password: string } = { email: '', password: '' };

  constructor(private userDeoService: AuthService, private router: Router) {
    this.userDeoService.user.subscribe((res) => {
      console.log('ussssseeeer', res);
    });
  }

  onSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }

    this.userData.email = form.value.email;
    this.userData.password = form.value.password;

    this.isLoading = true;

    let authObs: Observable<Object>;
    authObs = this.userDeoService.login(this.userData);

    authObs.subscribe((resData) => {
      this.isLoading = false;
      this.router.navigate(['/']);
    });

    form.reset();
  }
}
