import { Component, OnInit } from '@angular/core';

import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
  selector: 'my-hero',
  template: `
  	<h1>{{title}}</h1>
  	<h2>My Heroes</h2>
	<ul class="heroes">
	  <li *ngFor="let hero of heroes" 
		[class.selected]="hero === selectedHero"
	  	(click)="onSelect(hero)">
	    <span class="badge">{{hero.id}}</span> {{hero.name}}
	  </li>
	</ul>

	<my-hero-detail [hero]="selectedHero"></my-hero-detail>
  `
 })

export class HeroComponent {
	title = 'Tour of Heroes';
	heroes: Hero[];
	selectedHero: Hero;

	constructor(private heroService: HeroService) { }

	ngOnInit(): void {
		this.getHeroes();
	}

	getHeroes(): void {
		this.heroService.getHeroes().then(
			heroes => this.heroes = heroes
		);
	}

	onSelect(hero: Hero): void {
		this.selectedHero = hero;
	}
}