import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Movie } from '../models/movie.model';
import { User } from '../models/user.model';
import { Observable } from 'rxjs/internal/Observable';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

export class JsonIp {
    ip: string;
    constructor() { }
}

@Injectable()
export class JsonService {
    private apiKey = '';
    private apiBaseUrl = 'https://www.omdbapi.com/?apikey=' + this.apiKey + '&i=';
    private dbPath = '';

    constructor(private _http: HttpClient) { }

    public getMovieFromOmdbById(id: string) {
        const requestUrl = this.apiBaseUrl + id;
        return this._http.get<Movie>(requestUrl);
    }

    public getIp() {
        return this._http.get(
            'https://api.ipify.org/?format=string',
            { responseType: 'text' }
        );
    }
}
