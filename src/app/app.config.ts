import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import {provideHttpClient, withFetch, withInterceptors} from '@angular/common/http';

import { provideAnimations } from '@angular/platform-browser/animations';
import { provideCharts, withDefaultRegisterables } from 'ng2-charts';
import {jwtInterceptor} from './core/auth/auth-interceptor';



export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(withFetch()),
    provideAnimations(), provideCharts(withDefaultRegisterables()),
    provideCharts(withDefaultRegisterables()),
    provideHttpClient(withInterceptors([
     jwtInterceptor
    ]))
  ]
};
