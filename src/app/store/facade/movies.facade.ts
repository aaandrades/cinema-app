import { select, Store } from '@ngrx/store';
import { UserState } from '../model/user.state';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  clearCurrentSearchAction,
  fetchPremiersAction,
} from '../actions/movies.actions';
import {
  premiersMovieSelector,
  comingSoonSelector,
} from '../selector/movie.selector';
import {
  movieSelector,
  currentMovieSelector,
  searchMovieSelector,
} from '../selector/movie.selector';
import {
  fetchMovieById,
  fetchMovieByExpression,
} from '../actions/movies.actions';

@Injectable({
  providedIn: 'root',
})
export class MoviesFacade {
  public movies$: Observable<any> = this.store.pipe(select(movieSelector));

  public currentMovie$: Observable<any> = this.store.pipe(
    select(currentMovieSelector)
  );

  public searchMovies$: Observable<any> = this.store.pipe(
    select(searchMovieSelector)
  );

  public premierMovies$: Observable<any> = this.store.pipe(
    select(premiersMovieSelector)
  );

  public comingSoon$: Observable<any> = this.store.pipe(
    select(comingSoonSelector)
  );

  constructor(private store: Store<UserState>) {}

  getMovieById(id: string) {
    this.store.dispatch(fetchMovieById({ id }));
  }

  getMovieByExpression(expression: string) {
    this.store.dispatch(fetchMovieByExpression({ expression }));
  }

  clearSearchMovie() {
    this.store.dispatch(clearCurrentSearchAction());
  }

  getPremiersMovies() {
    this.store.dispatch(fetchPremiersAction());
  }
}
