import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VoituresComponent } from './voitures/voitures.component';
import { AuthGuard } from './guards/secure.guard';
//import { AuthGuard } from 'keycloak-angular';

const routes: Routes = [
  {
    path: "voitures", 
    component: VoituresComponent,canActivate:[AuthGuard], data : {roles:['ADMIN']}},
  {
    path: '',
    redirectTo: '/voitures',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
