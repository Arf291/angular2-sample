import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Film } from './film';

const FILMS: Film[] = [
  {
      id: 1,
      name: 'The Departed',
      rating: 9.7,
      director: 'Martin Scorcese',
      sypnosis: 'Once upon a time...'
    },
    {
      id: 2,
      name: 'The Godfather',
      rating: 9.2,
      director: 'Francis Ford Coppola',
      sypnosis: 'Once upon a time...'
    },
    {
      id: 3,
      name: 'American History X',
      rating: 9.6,
      director: 'Tony Kaye',
      sypnosis: 'Once upon a time...'
    }
]

@Injectable()
export class FilmService {

  getFilms(): Promise<Film[]> {
    return Promise.resolve(FILMS);
  }
}