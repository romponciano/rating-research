import { Component, OnInit } from '@angular/core';
import { JsonService } from '../services/json.service';
import { CalcService } from '../services/calc.service';
import { Movie } from '../models/movie.model';

@Component({
    selector: 'app-movie',
    templateUrl: './movie.component.html',
    providers: [JsonService, CalcService]
})
export class MovieComponent implements OnInit {
    public movie: Movie;
    private ids: string[];

    constructor(
      private jsonService: JsonService,
      private calcService: CalcService
    ) {
      this.ids = [
        'tt2488496', 'tt0499549', 'tt0120338', 'tt0848228', 'tt4154756',
        'tt0468569', 'tt3748528', 'tt1345836', 'tt0083866', 'tt0435761',
        'tt3498820', 'tt0107290', 'tt3896198', 'tt1201607', 'tt0266543',
        'tt0121766', 'tt0167260', 'tt1431045', 'tt2096673', 'tt0167261',
        'tt2948356', 'tt2015381', 'tt0109830', 'tt0076759', 'tt0371746',
        'tt0241527', 'tt0120737', 'tt3501632', 'tt0110357', 'tt0086190',
        'tt0325980', 'tt1074638', 'tt0903624', 'tt0417741', 'tt0926084',
        'tt0167404', 'tt1049413', 'tt1375666', 'tt0080684', 'tt0330373',
        'tt0198781', 'tt1119646', 'tt1454468', 'tt0126029', 'tt0317705',
        'tt0073195', 'tt1843866', 'tt1170358', 'tt1490017', 'tt0796366'
      ];
    }

    ngOnInit() {
      this.getRandomMovieFromOmdbApi();
    }

    public getRandomMovieFromOmdbApi() {
      this.movie = new Movie();
      const id = this.calcService.getRandomArrayValue(this.ids);
      this.jsonService.getMovieFromOmdbById(id)
        .subscribe((res: Movie) => this.movie = {
          Title: res['Title'],
          Poster: res['Poster']
        });
    }
}
