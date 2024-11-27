import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VoituresComponent } from './voitures/voitures.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';
import { isPlatformBrowser } from '@angular/common';

function initializeKeycloak(keycloak: KeycloakService, platformId: Object) {
  return async () => {
    if (isPlatformBrowser(platformId)) {
      try {
        await keycloak.init({
          config: {
            url: 'http://localhost:8090',
            realm: 'yassine-realm',
            clientId: 'voiture-app'
          },
          initOptions: {
            onLoad: 'check-sso',
            checkLoginIframe: true,
            silentCheckSsoRedirectUri: window.location.origin + '/assets/silent-check-sso.html'
          }
        });
        console.log('Keycloak initialized successfully');
      } catch (error) {
        console.error('Keycloak initialization failed:', error);
      }
    } else {
      return Promise.resolve();
    }
  };
}


@NgModule({
  declarations: [
    AppComponent,
    VoituresComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule, 
    KeycloakAngularModule
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initializeKeycloak,
      multi: true,
      deps: [KeycloakService]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }