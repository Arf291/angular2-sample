import { Component, OnInit } from '@angular/core';

import { FilmService, Film } from '../film';

@Component({
  selector: 'cinema-ranking',
  templateUrl: 'src/app/ranking/ranking.component.html',
  styleUrls: [
    'src/app/films/films.component.css'
  ]
})

export class RankingComponent implements OnInit {
  public films: Film[];

  constructor(
    private filmService: FilmService
  ){}

  ngOnInit(): void {
    this.getFilms();
  }

  getFilms(): void {
    this.filmService.getFilms().then(
      films => this.films =  this.sortFilms(films)
    );
  }

  sortFilms(films: Film[]): Film[] {
    let sorted: Film[] = films.sort(
        (first, second): number => {
          if (first.rating > second.rating) {
            return -1;
          }
          else {
            return 1;
          }
        })
    return sorted;
  }
}
