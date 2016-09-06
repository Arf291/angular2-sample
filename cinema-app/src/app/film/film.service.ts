import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Film } from './film';

@Injectable()
export class FilmService {
  private apiUrl = '/api/films';
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(
    private http: Http
  ) {}

  private handleError(error: any): Promise<any> {
      console.error('An error occurred', error); // for demo purposes only
      return Promise.reject(error.message || error);
  }

  getFilms(): Promise<Film[]> {
    return this.http.get(this.apiUrl)
      .toPromise()
      .then(response => response.json().data as Film[])
      .catch(this.handleError)
  }
}