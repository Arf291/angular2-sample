import { Component, Input } from '@angular/core';

import { Film } from './film';

@Component ({
  selector: 'film-card',
  templateUrl: 'src/app/film/film.component.html',
  styleUrls: [
    'src/app/film/film.component.css'
  ]
})

export class FilmComponent {
  @Input()
  film: Film;
}