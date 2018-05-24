import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Movie } from '../models/movie.model';

export class JsonIp {
    ip: string;
    constructor() { }
}

@Injectable()
export class JsonService {
    private dbPath = 'assets/database.json';

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
