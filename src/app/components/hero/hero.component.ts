import { Component, OnInit } from '@angular/core';
import { FilmApiService } from 'src/app/services/film-api.service';
import { Router } from '@angular/router';

interface IDiscover {
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
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.sass']
})
export class HeroComponent implements OnInit {

  private discovered: Array<IDiscover>;

  constructor(private filmApi: FilmApiService, private router: Router) { }

  ngOnInit() {
    this.filmApi.getDiscoveredMovies().subscribe( (filList: any) => {
      this.discovered = filList.results;
    });
  }

  openDetail(id:number) {
    this.router.navigateByUrl(`detail/${id}`);
  }

}
