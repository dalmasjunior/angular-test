import { Component, OnInit, Input } from '@angular/core';
import { FilmApiService } from 'src/app/services/film-api.service';

import { OwlOptions } from 'ngx-owl-carousel-o';
import { Router } from '@angular/router';

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
  selector: 'app-film-slider',
  templateUrl: './film-slider.component.html',
  styleUrls: ['./film-slider.component.sass']
})
export class FilmSliderComponent implements OnInit {
  @Input() path: string;
  @Input() title: string;

  private filmList: Array<IFilm>;

  constructor(private filmApi: FilmApiService, private router: Router) { }

  ngOnInit() {
    this.filmApi.getFilmsListByPath(this.path).subscribe( (list: any) => {
      this.filmList = list.results;
    });
  }

  openDetail(id:number) {
    this.router.navigateByUrl(`detail/${id}`);
  }

}
