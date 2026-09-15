import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { IonIcon } from '@ionic/angular';

@Component({
  standalone: true,
  imports: [FormsModule, IonIcon, RouterLink],
  templateUrl: './owner-register.page.html',
  styleUrl: './owner-register.page.scss'
})
export class OwnerRegisterPage {
  ownerName = '';
  facilityName = '';
  email = '';
  phone = '';
  fields = 2;
  password = '';

  constructor(private readonly router: Router) {}

  createOwnerAccount() {
    this.router.navigateByUrl('/saha-sahibi-panel');
  }
}
