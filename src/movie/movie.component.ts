import { Component, OnInit } from '@angular/core';
import { MovieService } from './movie.service';
import { Movie } from './movie.model';
import { MovieIdList } from './movieidlist.model';

@Component({
    selector: 'app-movie',
    templateUrl: './movie.component.html',
    providers: [MovieService]
})
export class MovieComponent implements OnInit {
    public movie: Movie;
    private ids: MovieIdList;

    ngOnInit() {
        this.getRandomMovieFromOmdbApi();
    }

    constructor(private movieService: MovieService) {
      this.ids = new MovieIdList();
    }

    public getRandomMovieFromOmdbApi() {
      this.movie = new Movie();
      const id = this.getRandomMovieId();
      this.movieService.getMovieFromOmdbById(id)
        .subscribe((res: Movie) => this.movie = {
          Title: res['Title'],
          Poster: res['Poster']
        });
    }

    private getRandomMovieId(): string {
      return this.ids.list[this.randomInt(0, this.ids.list.length - 1)];
    }

    private randomInt(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}
