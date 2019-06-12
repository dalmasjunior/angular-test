import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FilmApiService } from 'src/app/services/film-api.service';
import { IfStmt } from '@angular/compiler';

interface IFilm {
  id: number;
  vote_average: number;
  popularity: number;
  title: string;
  poster_path: string;
  genre_ids: Array<string>;
  backdrop_path: string;
  overview: string;
}

@Component({
  selector: 'app-film-detail',
  templateUrl: './film-detail.component.html',
  styleUrls: ['./film-detail.component.sass']
})
export class FilmDetailComponent implements OnInit {

  private filmId: string;
  private film: IFilm;

  constructor(private route: ActivatedRoute, private filmApi: FilmApiService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.filmId = params.get('id');
      this.filmApi.getFilmsListByPath(`/movie/${this.filmId}`).subscribe((filmDetail: IFilm) => {
        this.film = filmDetail;
      })
    })
  }

}
