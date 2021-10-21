import { Component, OnInit } from '@angular/core';

import { AuthService } from 'src/app/pages/login/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  isAuthenticated = false;
  private userSub: Subscription;

  constructor(private auth: AuthService) {
    this.userSub = this.auth.user.subscribe((user) => {
      this.isAuthenticated = !user ? false : true;
      console.log(!user);
    });
  }

  ngOnInit(): void {}

  logout() {
    this.auth.logout();
  }

  ngOnDestroy() {
    this.userSub.unsubscribe();
  }
}
