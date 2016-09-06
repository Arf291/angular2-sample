import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs';

import { Film } from '../film';

@Injectable()
export class FilmSearchService {
  private apiUrl = '/api/films?name=';

  constructor(
    private http: Http
  ) {}

  searchByName(name: string): Observable<Film[]> {
    return this.http
               .get(`${this.apiUrl}${name}`)
               .map((response: Response) => response.json().data as Film[]);

  }
}