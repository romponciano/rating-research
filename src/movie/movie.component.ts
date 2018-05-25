import { Component, OnInit } from '@angular/core';
import { JsonService } from '../services/json.service';
import { CalcService } from '../services/calc.service';
import { Movie } from '../models/movie.model';
import { JsonConfig } from '../properties/json.config';
import { StarRatingComponent } from '../rating/star-rating/star-rating.component';

@Component({
    selector: 'app-movie',
    templateUrl: './movie.component.html',
    providers: [JsonService, CalcService],
})
export class MovieComponent implements OnInit {
    public movie: Movie;
    private jSonConfig: JsonConfig;
    private lista: Movie[];

    constructor(
      private jsonService: JsonService,
      private calcService: CalcService
    ) {
      this.jSonConfig = new JsonConfig();
    }

    ngOnInit() {
      this.getRandomMovieFromOmdbApi();
      this.lista = [];
    }

    public getRandomMovieFromOmdbApi() {
      this.movie = new Movie();
      let id = this.calcService.getRandomArrayValue(this.jSonConfig.MovieIds);
      let key = this.calcService.getRandomArrayValue(this.jSonConfig.ApiKeys);
      this.jsonService.getMovieFromOmdbById(id, key)
        .subscribe((res: Movie) => this.movie = {
          Title: res['Title'],
          Poster: res['Poster']
        });
    }

    public getAnotherMovie() {
      this.getRandomMovieFromOmdbApi();
    }
}
