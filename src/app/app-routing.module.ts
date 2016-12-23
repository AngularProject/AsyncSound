import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomePageComponentComponent } from './home-page/home-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { RegisterComponent} from './register/register.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home',  component: HomePageComponentComponent },
  { path: 'about', component: AboutPageComponent },
  { path: 'profile', component: ProfilePageComponent },
  { path: 'register', component: RegisterComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}