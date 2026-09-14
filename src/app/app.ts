import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { IonApp, IonIcon, IonRouterOutlet } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { add, calendarOutline, compassOutline, homeOutline, personOutline } from 'ionicons/icons';

@Component({
  imports: [IonApp, IonIcon, IonRouterOutlet, RouterLink, RouterLinkActive],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  constructor() { addIcons({ homeOutline, compassOutline, add, calendarOutline, personOutline }); }
}
