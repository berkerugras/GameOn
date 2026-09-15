import { Component, computed, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { IonIcon } from '@ionic/angular';
import { GameDataService } from '../../core/game-data.service';

@Component({
  standalone: true,
  imports: [FormsModule, IonIcon, RouterLink],
  templateUrl: './owner-dashboard.page.html',
  styleUrl: './owner-dashboard.page.scss'
})
export class OwnerDashboardPage {
  readonly data = inject(GameDataService);
  readonly facility = computed(() => this.data.facilities()[0]);
  readonly reservations = computed(() => this.data.facilityReservations().filter((item) => item.facilityId === this.facility().id));
  readonly todayReservations = computed(() => this.reservations().filter((item) => item.date === 'Bugün'));
  readonly todayRevenue = computed(() => this.todayReservations().reduce((total, item) => total + item.price, 0));
  customer = '';
  phone = '';
  field = 'Saha 1';
  date = 'Bugün';
  time = '21:00';
  duration = 1;

  readonly slots = ['09:00','10:00','11:00','12:00','14:00','16:00','18:00','20:00','21:00','22:00'];

  get reservationPrice() {
    return this.facility().hourlyPrice * Number(this.duration || 1);
  }

  addReservation() {
    if (!this.customer.trim() || !this.phone.trim()) {
      return;
    }

    this.data.addFacilityReservation({
      id: Date.now(),
      facilityId: this.facility().id,
      field: this.field,
      customer: this.customer,
      phone: this.phone,
      date: this.date,
      time: this.time,
      duration: this.duration,
      price: this.reservationPrice,
      status: 'confirmed'
    });

    this.customer = '';
    this.phone = '';
  }
}
