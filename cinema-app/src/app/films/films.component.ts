import { Component, OnInit } from '@angular/core';

import { Film, FilmService } from '../film';

@Component ({
  selector: 'film-list',
  templateUrl: 'src/app/films/films.component.html',
  styleUrls: [ 'src/app/films/films.component.css' ]
})

export class FilmsComponent implements OnInit {
  public films: Film[];

  constructor(
    private filmService: FilmService
  ){}

  ngOnInit(): void {
    this.filmService.getFilms().then(
      films => this.films = films
    );
  }
}