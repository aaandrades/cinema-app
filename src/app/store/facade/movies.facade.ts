import { select, Store } from '@ngrx/store';
import { UserState } from '../model/user.state';
import { Injectable } from '@angular/core';
import { userSelector } from '../selector/user.selector';
import { Observable } from 'rxjs';
import { ResultsInterface } from '../model/movies.state';
import { movieSelector, currentMovieSelector } from '../selector/movie.selector';
import { fetchMovieById } from '../actions/movies.actions';

@Injectable({
  providedIn: 'root',
})
export class MoviesFacade {
  public movies$: Observable<any> = this.store.pipe(select(movieSelector));
  public currentMovie$: Observable<any> = this.store.pipe(select(currentMovieSelector));

  constructor(private store: Store<UserState>) {}

  getMovieById(id: string) {
    this.store.dispatch(fetchMovieById({ id }));
  }
}
