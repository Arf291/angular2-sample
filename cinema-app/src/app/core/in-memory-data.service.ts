import { InMemoryDbService } from 'angular2-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let films = [
      {
        id: 1,
        name: 'The Departed',
        rating: 9.7,
        director: 'Martin Scorcese',
        sypnosis: 'Once upon a time...'
      },
      {
        id: 2,
        name: 'The Godfather, part I',
        rating: 9.4,
        director: 'Francis Ford Coppola',
        sypnosis: 'Once upon a time...'
      },
      {
        id: 3,
        name: 'American History X',
        rating: 9.6,
        director: 'Tony Kaye',
        sypnosis: 'Once upon a time...'
      },
      {
        id: 4,
        name: 'Gladiator',
        rating: 9.5,
        director: 'Ridley Scot',
        sypnosis: 'Once upon a time...'
      }
    ];
    return {films};
  }
}
