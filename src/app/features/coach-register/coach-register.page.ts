import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { IonIcon } from '@ionic/angular';
import { GameDataService } from '../../core/game-data.service';

@Component({
  standalone: true,
  imports: [FormsModule, IonIcon, RouterLink],
  templateUrl: './coach-register.page.html',
  styleUrl: './coach-register.page.scss'
})
export class CoachRegisterPage {
  private readonly data = inject(GameDataService);
  private readonly router = inject(Router);

  name = '';
  title = 'Personal Trainer';
  gym = 'GameOn Online';
  district = 'Kadıköy';
  price = 1000;
  specialtyOne = 'Kuvvet';
  specialtyTwo = 'Kondisyon';
  language = 'Türkçe';
  bio = '';
  email = '';
  password = '';

  registerCoach() {
    if (!this.name.trim() || !this.email.trim()) {
      return;
    }

    this.data.addCoach({
      id: Date.now(),
      name: this.name.trim(),
      initials: this.initials,
      title: this.title,
      gym: this.gym,
      district: this.district,
      rating: 5,
      reviews: 0,
      price: Number(this.price || 0),
      distance: 'Yeni',
      verified: false,
      color: '#d8ff3e',
      specialties: [this.specialtyOne, this.specialtyTwo].filter(Boolean),
      languages: [this.language],
      bio: this.bio.trim() || 'GameOn uzerinden bire bir antrenman ve performans seanslari veriyorum.',
      slots: ['17:00', '18:30', '20:00']
    });

    this.router.navigateByUrl('/coaches');
  }

  get initials() {
    return this.name
      .trim()
      .split(/\s+/)
      .slice(0, 2)
      .map((part) => part[0]?.toUpperCase())
      .join('') || 'PT';
  }
}
