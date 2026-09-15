import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: 'login', loadComponent: () => import('./features/login/login.page').then(m => m.LoginPage) },
  { path: 'register', loadComponent: () => import('./features/register/register.page').then(m => m.RegisterPage) },
  { path: 'home', loadComponent: () => import('./features/home/home.page').then(m => m.HomePage) },
  { path: 'explore', loadComponent: () => import('./features/explore/explore.page').then(m => m.ExplorePage) },
  { path: 'create', loadComponent: () => import('./features/create/create.page').then(m => m.CreatePage) },
  { path: 'matches', loadComponent: () => import('./features/matches/matches.page').then(m => m.MatchesPage) },
  { path: 'profile', loadComponent: () => import('./features/profile/profile.page').then(m => m.ProfilePage) },
  { path: 'coaches', loadComponent: () => import('./features/coaches/coaches.page').then(m => m.CoachesPage) },
  { path: 'coaches/:id', loadComponent: () => import('./features/coach-detail/coach-detail.page').then(m => m.CoachDetailPage) },
  { path: 'booking/:id', loadComponent: () => import('./features/booking/booking.page').then(m => m.BookingPage) },
  { path: 'bookings', loadComponent: () => import('./features/bookings/bookings.page').then(m => m.BookingsPage) },
  { path: 'teams/:id', loadComponent: () => import('./features/team/team.page').then(m => m.TeamPage) },
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: '**', redirectTo: 'home' }
];
