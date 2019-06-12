import { Component, OnInit } from '@angular/core';
import { FilmApiService } from 'src/app/services/film-api.service';
import { Router } from '@angular/router';

interface Genre {
  id: number;
  name: string;
}


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.sass']
})
export class NavBarComponent implements OnInit {
  genres: Array<Genre> = new Array<Genre>();

  constructor(private filmApi: FilmApiService, private router: Router) { }

  ngOnInit() {
    this.filmApi.getGenreList().subscribe((data: any) => {
      this.genres = data.genres;
      console.log(data);
    });
  }

  openGenre(id: number, name: string) {
    this.router.navigate(['genre', id, name]);
  }
}
