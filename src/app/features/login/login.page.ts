import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { IonIcon } from '@ionic/angular';

@Component({
  standalone: true,
  imports: [FormsModule, IonIcon, RouterLink],
  templateUrl: './login.page.html',
  styleUrl: './login.page.scss'
})
export class LoginPage {
  email = '';
  password = '';
  rememberMe = true;

  constructor(private readonly router: Router) {}

  signIn() {
    this.router.navigateByUrl('/home');
  }
}
