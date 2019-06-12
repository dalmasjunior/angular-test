import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeroComponent } from './components/hero/hero.component';
import { FilmSliderComponent } from './components/film-slider/film-slider.component';
import { FilmDetailComponent } from './components/film-detail/film-detail.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { GenreFilmsComponent } from './components/genre-films/genre-films.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeroComponent,
    FilmSliderComponent,
    FilmDetailComponent,
    NavBarComponent,
    GenreFilmsComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    CarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
