import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  ResultsInterface,
  MassiveResultsInterface,
} from '../store/model/movies.state';
import { Observable, of } from 'rxjs';
import {
  searchMock,
  premiersMock,
  comingSoonMock,
  moviesResponse,
  movieMock,
} from '../mocks/movies.mock';
import {
  PremiersInterface,
  MovieIdInterface,
} from '../store/model/movies.state';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  BASE_URL = 'https://imdb-api.com/API/';
  INTERNATIONAL_BASE_URL = 'https://imdb-api.com';

  constructor(private http: HttpClient) {}

  getMovies(tokenApi: string): Observable<ResultsInterface> {
    // return of(moviesResponse);
    return this.http.get<ResultsInterface>(
      this.BASE_URL + 'Top250Movies/' + tokenApi
    );
  }

  getMovieById(tokenApi: string, id: string): Observable<MovieIdInterface> {
    // return of(movieMock);
    return this.http.get<any>(
      `${this.INTERNATIONAL_BASE_URL}/en/API/Title/${tokenApi}/${id}`
    );
  }

  getMovieByExpression(
    tokenApi: string,
    expression: string
  ): Observable<MassiveResultsInterface> {
    // return of(searchMock);
    return this.http.get<any>(
      `${this.BASE_URL}Search/${tokenApi}/${expression}`
    );
  }

  getPremiersMovies(tokenApi: string): Observable<PremiersInterface> {
    // return of(premiersMock);
    return this.http.get<any>(`${this.BASE_URL}InTheaters/${tokenApi}`);
  }

  getNewMovies(tokenApi: string): Observable<PremiersInterface> {
    // return of(comingSoonMock);
    return this.http.get<any>(`${this.BASE_URL}ComingSoon/${tokenApi}`);
  }
}
