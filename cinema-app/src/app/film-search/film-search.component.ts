import { Component, OnInit } from '@angular/core';

import { Observable }        from 'rxjs/Observable';
import { Subject }           from 'rxjs/Subject';

import { Film } from '../film';
import { FilmSearchService } from './film-search.service';

@Component({
  selector: 'film-search',
  templateUrl: 'src/app/film-search/film-search.component.html',
  providers: [ FilmSearchService ]
})

export class FilmSearchComponent implements OnInit {
  films: Observable<Film[]>;
  private searchTerms = new Subject<string>();

  constructor(
    private filmSearchService: FilmSearchService
  ){}

  ngOnInit(): void {
    this.films = this.searchTerms
      .debounceTime(300)
      .distinctUntilChanged()
      .switchMap(name => name
        ? this.filmSearchService.searchByName(name)
        : Observable.of<Film[]>([]))
      .catch(error => this.handleError(error))
  }

  searchByName(name: string): void {
    this.searchTerms.next(name);
  }

  handleError(error: any): Observable<Film[]> {
    console.error('An error occurred', error);
    return Observable.of<Film[]>([]);
  }
}
