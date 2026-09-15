import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { IonApp, IonIcon, IonRouterOutlet } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { add, arrowForward, businessOutline, calendarOutline, cashOutline, compassOutline, footballOutline, homeOutline, lockClosedOutline, mailOutline, personAddOutline, personOutline, timeOutline, trophyOutline } from 'ionicons/icons';

@Component({
  imports: [IonApp, IonIcon, IonRouterOutlet, RouterLink, RouterLinkActive],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  constructor(readonly router: Router) {
    addIcons({ homeOutline, compassOutline, add, calendarOutline, personOutline, mailOutline, lockClosedOutline, personAddOutline, arrowForward, trophyOutline, businessOutline, footballOutline, timeOutline, cashOutline });
  }

  get isAuthPage() {
    return this.router.url.startsWith('/login') || this.router.url.startsWith('/register') || this.router.url.startsWith('/saha-sahibi-') || this.router.url.startsWith('/pt-kayit');
  }
}
