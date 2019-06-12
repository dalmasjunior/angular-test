import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { FilmDetailComponent } from './components/film-detail/film-detail.component';
import { GenreFilmsComponent } from './components/genre-films/genre-films.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'home'},
  {path: 'home', component: HomeComponent},
  {path: 'detail/:id', component: FilmDetailComponent},
  {path: 'genre/:id/:name', component: GenreFilmsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
