import { createFeatureSelector, createSelector } from '@ngrx/store';
import { MoviesState } from '../model/movies.state';

const movieState = createFeatureSelector<any>('moviesState');
export const movieSelector = createSelector(
  movieState,
  (state: MoviesState) => state.results
);
export const currentMovieSelector = createSelector(
  movieState,
  (state: MoviesState) => state.currentMovie
);
