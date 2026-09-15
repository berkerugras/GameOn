import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { IonIcon } from '@ionic/angular';

@Component({
  standalone: true,
  imports: [FormsModule, IonIcon, RouterLink],
  templateUrl: './owner-login.page.html',
  styleUrl: './owner-login.page.scss'
})
export class OwnerLoginPage {
  email = '';
  password = '';

  constructor(private readonly router: Router) {}

  signIn() {
    this.router.navigateByUrl('/saha-sahibi-panel');
  }
}
