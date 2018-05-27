import { Component, OnInit, Output, EventEmitter, ViewChild, AfterViewInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { JsonService } from '../services/json.service';
import { CalcService } from '../services/calc.service';
import { Movie } from '../models/movie.model';
import { JsonConfig } from '../properties/json.config';
import { RatingComponent } from '../rating/rating.component';
import { Rating } from '../models/rating.model';

@Component({
    selector: 'app-movie',
    templateUrl: './movie.component.html',
    providers: [JsonService, CalcService],
    styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit, AfterViewInit, OnChanges {
    private jSonConfig: JsonConfig;
    movie: Movie;
    movieId: string;
    rateType: string;
    rate: string;
    allFilled: boolean;
    movieChanged = 0;
    @ViewChild(RatingComponent) childRating;
    @Output() emitterRating = new EventEmitter<Rating>();
    @Output() emitterRatingType = new EventEmitter<string>();
    @Output() emitterFinish = new EventEmitter<boolean>();
    @Input() email: string;
    @Input() terms: boolean;

    constructor(
        private jsonService: JsonService,
        private calcService: CalcService
    ) {
        this.jSonConfig = new JsonConfig();
    }

    ngOnInit() {
        this.getRandomMovieFromOmdbApi();
        this.movieChanged = 0;
        this.allFilled = false;
    }

    ngAfterViewInit() {
        this.setRateTypeAndValue();
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (this.terms && this.email.length > 3) {
            this.allFilled = true;
        } else {
            this.allFilled = false;
        }
        console.log(this.terms && this.email.length > 3);
    }

    async getRandomMovieFromOmdbApi() {
        let id = this.calcService.getRandomArrayValue(this.jSonConfig.MovieIds);
        let key = this.calcService.getRandomArrayValue(this.jSonConfig.ApiKeys);
        await this.jsonService.getMovieFromOmdbById(id, key).then((res: Movie) => {
            this.movie = new Movie(res.id, res.Title, res.Poster);
            this.movieId = res.Title.toString();
        });
    }

    getAnotherMovie() {
        this.getRandomMovieFromOmdbApi();
        ++this.movieChanged;
    }

    vote() {
        this.setRateTypeAndValue();
        let rating = new Rating(this.movie.Title.toString(), this.rate.toString(), new Date());
        this.emitterRatingType.emit(this.rateType.toString());
        this.emitterRating.emit(rating);
        this.getAnotherMovie();
    }

    private setRateTypeAndValue() {
        this.rateType = this.childRating.rateType;
        if (this.rateType === 'thumbs') {
            if (this.childRating.thumbUp) {
                this.rate = 'thumbUp';
            }
            if (this.childRating.thumbDown) {
                this.rate = 'thumbDown';
            }
        }
        if (this.rateType === 'star') {
            for (let i = 0; i < this.childRating.stars.length; i++) {
                if (this.childRating.stars[i]) {
                    this.rate = i.toString();
                }
            }
        }
    }

    finish() {
        this.emitterFinish.emit(true);
    }
}
