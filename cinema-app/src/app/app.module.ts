import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { routing } from './app.routing';

import { NavComponent } from './shared';

import { AppComponent }  from './app.component';
import { FilmComponent, FilmService } from './film';
import { FilmsComponent } from './films';
import { RankingComponent } from './ranking';

@NgModule({
  imports: [ 
    BrowserModule,
    routing
  ],
  declarations: [ 
    AppComponent,
    FilmComponent,
    FilmsComponent,
    NavComponent,
    RankingComponent
  ],
  providers: [
    FilmService
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
