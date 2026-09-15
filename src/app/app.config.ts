import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter, withHashLocation as routerWithHashLocation } from '@angular/router';
import { routes } from './app.routes';
import { provideIonicAngular } from '@ionic/angular/provide';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes,withHashLocation()),
    provideIonicAngular({ mode: 'ios' })
  ]
};
function withHashLocation(): import("@angular/router").RouterFeatures {
  return routerWithHashLocation();
}

