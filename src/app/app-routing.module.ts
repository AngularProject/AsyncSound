import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomePageComponent } from './home-page/home-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { RegisterComponent} from './register/register.component';
import { LoginPageComponent} from './login/login.component';
import { PlaylistComponent } from './playlist/playlist.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { SongComponent } from './song/song.component';
import { PlaylistCreationComponent } from './profile-page/playlist-creation/playlist-creation.component';
import { PlaylistListingComponent } from './profile-page/playlist-listing/playlist-listing.component';
import { EditInformationComponent } from './profile-page/edit-information/edit-information.component';

import { AuthGuard } from './guard/auth.guard';
import { AdminGuard } from './guard/admin.guard';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home',  component: HomePageComponent },
  { path: 'about', component: AboutPageComponent },
  { path: 'profile/:username', component: ProfilePageComponent, canActivate: [AuthGuard],
    children: [
      { path: 'create-playlist', component: PlaylistCreationComponent },
      { path: 'user-playlists', component: PlaylistListingComponent },
      { path: 'edit-information', component: EditInformationComponent }
  ] },
  // { path: 'profile', component: ProfilePageComponent, canActivate: [AuthGuard] },
  { path: 'admin', component: AdminPageComponent, canActivate: [AdminGuard] },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'playlists', component: PlaylistComponent },
  { path: 'songs', component: SongComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}