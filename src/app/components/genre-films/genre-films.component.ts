import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-genre-films',
  templateUrl: './genre-films.component.html',
  styleUrls: ['./genre-films.component.sass']
})
export class GenreFilmsComponent implements OnInit {

  private name: string;
  private genreId: string;
  private path: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.genreId = params.get('id');
      this.name = params.get('name');
      this.path = `/discover/movie?with_genres=${this.genreId}&sort_by=popularity.desc`;
    })
  }

}
