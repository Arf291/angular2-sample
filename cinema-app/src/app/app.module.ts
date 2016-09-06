import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CoreModule }  from './core';

import { routing } from './app.routing';

import { NavComponent } from './shared';

import { AppComponent }  from './app.component';
import { FilmComponent, FilmService } from './film';
import { FilmsComponent } from './films';
import { RankingComponent } from './ranking';
import { FilmSearchComponent } from './film-search';

@NgModule({
  imports: [ 
    BrowserModule,
    CoreModule,
    routing
  ],
  declarations: [ 
    AppComponent,
    FilmComponent,
    FilmsComponent,
    NavComponent,
    RankingComponent,
    FilmSearchComponent
  ],
  providers: [
    FilmService
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
