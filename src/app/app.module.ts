import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { SimpleNotificationsModule } from '../../node_modules/angular2-notifications';
import { AppRoutingModule } from './app-routing.module';

import { AdminModule } from './admin-page/admin.module';

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
import { AdminListComponent } from './admin-page/admin-list.component';
import { PlaylistDetailedComponent } from './playlist/playlist-detailed.component';
import { SongComponent } from './song/song.component';
import { PlaylistCreationComponent } from './profile-page/playlist-creation/playlist-creation.component';
import { PlaylistListingComponent } from './profile-page/playlist-listing/playlist-listing.component';
import { EditInformationComponent } from './profile-page/edit-information/edit-information.component';
import { PlaylistDropdownComponent } from './playlist-dropdown/playlist-dropdown.component';

import { SearchPlaylistPipe } from './pipes/search.pipe';
import { SortPlaylistsPipe } from './pipes/sort.pipe';

import {
  HttpOptionsService,
  RegisterService,
  LoginService,
  UserService ,
  PlaylistService,
  AdminService,
  ProfileService,
  SongService,
  PageService } from '../services';

import { AuthGuard } from './guard/auth.guard';
import { AdminGuard } from './guard/admin.guard';

import { HighlighterDirective } from './directives/highlighter.directive';
import { ZoomItemDirective } from './directives/zoom-item.directive';
import { BlurBackgroundDirective } from './directives/blur-background.directive';

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
    SearchPlaylistComponent,
    SortPlaylistsComponent,
    SearchPlaylistPipe,
    SortPlaylistsPipe,
    SongComponent,
    HighlighterDirective,
    PlaylistDropdownComponent,
    PlaylistDetailedComponent,
    PlaylistCreationComponent,
    ZoomItemDirective,
    PlaylistListingComponent,
    EditInformationComponent,
    BlurBackgroundDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    SimpleNotificationsModule,
    AppRoutingModule,
    AdminModule
  ],
  providers: [
    AuthGuard,
    AdminGuard,
    HttpOptionsService,
    RegisterService,
    LoginService,
    UserService,
    PlaylistService,
    AdminService,
    ProfileService,
    SongService,
    PageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
