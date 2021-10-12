import { Action, createReducer, on } from '@ngrx/store';
import * as moviesActions from '../actions/movies.actions';
import { initialMovieState, initialSearch, MoviesState } from '../model/movies.state';

const multipleMovieReducer = createReducer(
  initialMovieState,
  on(moviesActions.fetchMoviesSuccessAction, (state: MoviesState, results) => ({
    ...state,
    results: results.results,
    loading: false,
  })),
  on(
    moviesActions.fetchMovieByIdSuccessAction,
    (state: MoviesState, response) => ({
      ...state,
      currentMovie: response.currentMovie,
      loading: false,
    })
  ),
  on(
    moviesActions.fetchMovieByExpressionSuccessAction,
    (state: MoviesState, response) => ({
      ...state,
      searchResults: response.searchResults,
      loading: false,
    })
  ),
  on(
    moviesActions.clearCurrentSearchAction,
    (state: MoviesState) => ({
      ...state,
      searchResults: initialSearch,
      loading: false,
    })
  )
);

export const moviesReducer = (
  state: MoviesState,
  action: Action
): MoviesState => {
  return multipleMovieReducer(state, action);
};
