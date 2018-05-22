import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie } from './movie.model';
import { config } from 'rxjs';

@Injectable()
export class MovieService {
    private apiKey = '';
    private apiBaseUrl = 'https://www.omdbapi.com/?apikey=' + this.apiKey + '&i=';

    constructor(private _http: HttpClient) {}

    public getMovieFromOmdbById(id: string) {
        const requestUrl = this.apiBaseUrl + id;
        return this._http.get<Movie>(requestUrl);
    }
}
