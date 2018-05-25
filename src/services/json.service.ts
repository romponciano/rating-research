import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie } from '../models/movie.model';

@Injectable()
export class JsonService {
    constructor(private _http: HttpClient) { }

    public getMovieFromOmdbById(id: string, key: string) {
        let apiRuestUrl = 'https://www.omdbapi.com/?apikey=' + key + '&i=' + id;
        return this._http.get<Movie>(apiRuestUrl);
    }

    public getIp() {
        return this._http.get(
            'https://api.ipify.org/?format=string',
            { responseType: 'text' }
        );
    }
}
