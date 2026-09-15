import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { IonIcon } from '@ionic/angular';

@Component({
  standalone: true,
  imports: [FormsModule, IonIcon, RouterLink],
  templateUrl: './register.page.html',
  styleUrl: './register.page.scss'
})
export class RegisterPage {
  fullName = '';
  email = '';
  password = '';
  position = 'Orta saha';
  acceptedTerms = true;

  constructor(private readonly router: Router) {}

  createAccount() {
    this.router.navigateByUrl('/home');
  }
}
