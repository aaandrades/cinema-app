import { Action, createReducer, on } from '@ngrx/store';
import * as moviesActions from '../actions/movies.actions';
import { initialMovieState, MoviesState } from '../model/movies.state';

const multipleMovieReducer = createReducer(
  initialMovieState,
  on(moviesActions.fetchMoviesSuccessAction, (state: MoviesState, results) => ({
    ...state,
    results: results.results,
    loading: false,
  })),
  on(moviesActions.fetchMovieByIdSuccessAction, (state: MoviesState, response) => ({
    ...state,
    currentMovie: response.currentMovie,
    loading: false,
  }))
);

export const moviesReducer = (
  state: MoviesState,
  action: Action
): MoviesState => {
  return multipleMovieReducer(state, action);
};
