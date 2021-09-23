import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ResultsInterface } from '../store/model/movies.state';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  BASE_URL = 'https://imdb-api.com/API/';
  INTERNATIONAL_BASE_URL = 'https://imdb-api.com';

  constructor(private http: HttpClient) {}

  getMovies(tokenApi: string): Observable<ResultsInterface> {
    return this.http.get<ResultsInterface>(
      this.BASE_URL + 'Top250Movies/' + tokenApi
    );
  }
  getMovieById(tokenApi: string, id: string): Observable<ResultsInterface> {
    return this.http.get<any>(
      `${this.INTERNATIONAL_BASE_URL}/en/API/Title/${tokenApi}/${id}` 
    );
  }
}
