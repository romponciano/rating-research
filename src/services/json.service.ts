import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie } from '../models/movie.model';
import { Observable } from 'rxjs';

@Injectable()
export class JsonService {
    constructor(private _http: HttpClient) { }

    public getMovieFromOmdbById(id: string, key: string): Promise<Movie> {
        let apiRuestUrl = 'https://www.omdbapi.com/?apikey=' + key + '&i=' + id;
        return this._http.get<Movie>(apiRuestUrl).toPromise<Movie>();
    }

    public getIp(): Promise<string> {
        return this._http.get(
            'https://api.ipify.org/?format=string',
            {responseType: 'text'}
        ).toPromise();
    }
}
