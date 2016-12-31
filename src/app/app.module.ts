import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { SimpleNotificationsModule } from '../../node_modules/angular2-notifications';
// import { Ng2AutoCompleteModule } from '../../node_modules/ng2-auto-complete/dist/ng2-auto-complete.umd';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { LoginPageComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RegisterComponent } from './register/register.component';
import { PlaylistComponent } from './playlist/playlist.component';
import { FooterComponent } from './footer/footer.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { SearchPlaylistComponent } from './search-playlist/search-playlist.component';
import { SortPlaylistsComponent } from './sort-playlists/sort-playlists.component';
import { SearchPlaylistPipe } from './pipes/search.pipe';
import { SortPlaylistsPipe } from './pipes/sort.pipe';

import {
  HttpOptionsService,
  RegisterService,
  LoginService,
  UserService ,
  PlaylistService,
  AdminService,
  ProfileService } from '../services';

import { AuthGuard } from './guard/auth.guard';
import { AdminGuard } from './guard/admin.guard';
import { SongComponent } from './song/song.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AboutPageComponent,
    ProfilePageComponent,
    LoginPageComponent,
    RegisterComponent,
    PageNotFoundComponent,
    PlaylistComponent,
    FooterComponent,
    AdminPageComponent,
    SearchPlaylistComponent,
    SortPlaylistsComponent,
    SearchPlaylistPipe,
    SortPlaylistsPipe,
    SongComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    SimpleNotificationsModule,
    AppRoutingModule
  ],
  providers: [
    HttpOptionsService,
    RegisterService,
    LoginService,
    UserService,
    AuthGuard,
    PlaylistService,
    AdminService,
    ProfileService,
    AdminGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
