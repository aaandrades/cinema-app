import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action, select, Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import * as actions from '../actions/user.actions';
import { Router } from '@angular/router';
import { MoviesService } from 'src/app/services/movies.service';
import {
  tap,
  switchMap,
  map,
  catchError,
  concatMap,
  withLatestFrom,
  mergeMap,
} from 'rxjs/operators';
import * as movies from '../actions/movies.actions';
import { userSelector } from '../selector/user.selector';
import { AlertsMessagesType } from '../../enums/AlertMessageTypes';
import {
  fetchMovieByExpression,
  fetchNewMoviesSuccessAction,
} from '../actions/movies.actions';

@Injectable()
export class MoviesEffects {
  constructor(
    private actions$: Actions,
    private movieService: MoviesService,
    private router: Router,
    private store: Store
  ) {}

  fetchMoviesEffect$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.loginUserSuccessAction),
      concatMap((userState) =>
        of(userState).pipe(
          withLatestFrom(this.store.pipe(select(userSelector)))
        )
      ),
      switchMap(([userState]) =>
        this.movieService.getMovies(userState.response.tokenApi).pipe(
          map((response: any) => {
            if (response.errorMessage !== '') {
              throw new Error(response.errorMessage);
            }
            return movies.fetchMoviesSuccessAction({
              results: response.items,
            });
          }),
          catchError((err) => {
            console.error('ERROR IN : ', err);
            return of(
              movies.fetchMoviesErrorAction({
                message: AlertsMessagesType.ERROR_FETCHING_MOVIES,
              })
            );
          })
        )
      )
    )
  );

  fetchMovieByIdEffect$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(movies.fetchMovieById),
      concatMap((userState) =>
        of(userState).pipe(
          withLatestFrom(this.store.pipe(select(userSelector)))
        )
      ),
      switchMap(([action, userState]) =>
        this.movieService.getMovieById(userState.token_api, action.id).pipe(
          map((response: any) => {
            if (response.errorMessage !== '') {
              throw new Error(response.errorMessage);
            }
            return movies.fetchMovieByIdSuccessAction({
              currentMovie: response,
            });
          }),
          catchError((err) => {
            console.error('ERROR IN : ', err);
            return of(
              movies.fetchMoviesErrorAction({
                message: AlertsMessagesType.ERROR_FETCHING_MOVIES,
              })
            );
          })
        )
      )
    )
  );

  fetchMovieByExpressionEffect$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(movies.fetchMovieByExpression),
      concatMap((userState) =>
        of(userState).pipe(
          withLatestFrom(this.store.pipe(select(userSelector)))
        )
      ),
      switchMap(([action, userState]) =>
        this.movieService
          .getMovieByExpression(userState.token_api, action.expression)
          .pipe(
            map((response: any) => {
              if (response.errorMessage !== '') {
                throw new Error(response.errorMessage);
              }
              return movies.fetchMovieByExpressionSuccessAction({
                searchResults: response,
              });
            }),
            catchError((err) => {
              console.error('ERROR IN : ', err);
              return of(
                movies.fetchMoviesErrorAction({
                  message: AlertsMessagesType.ERROR_FETCHING_MOVIES,
                })
              );
            })
          )
      )
    )
  );

  fetchPremiersMoviesEffect$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(movies.fetchPremiersAction),
      concatMap((userState) =>
        of(userState).pipe(
          withLatestFrom(this.store.pipe(select(userSelector)))
        )
      ),
      switchMap(([_, userState]) =>
        this.movieService.getPremiersMovies(userState.token_api).pipe(
          map((response: any) => {
            if (response.errorMessage !== '') {
              throw new Error(response.errorMessage);
            }
            return movies.fetchPremiersActionSuccess({
              premiers: response.items,
            });
          }),
          catchError((err) => {
            console.error('ERROR IN : ', err);
            return of(
              movies.fetchMoviesErrorAction({
                message: AlertsMessagesType.ERROR_FETCHING_MOVIES,
              })
            );
          })
        )
      )
    )
  );

  fetchNewMoviesEffect$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(movies.fetchPremiersActionSuccess),
      concatMap((userState) =>
        of(userState).pipe(
          withLatestFrom(this.store.pipe(select(userSelector)))
        )
      ),
      switchMap(([_, userState]) =>
        this.movieService.getNewMovies(userState.token_api).pipe(
          map((response: any) => {
            if (response.errorMessage !== '') {
              throw new Error(response.errorMessage);
            }
            return movies.fetchNewMoviesSuccessAction({
              comingSoon: response.items,
            });
          }),
          catchError((err) => {
            console.error('ERROR IN : ', err);
            return of(
              movies.fetchMoviesErrorAction({
                message: AlertsMessagesType.ERROR_FETCHING_MOVIES,
              })
            );
          })
        )
      )
    )
  );

  redirectToLoginEffect$: Observable<Action> = createEffect(
    () =>
      this.actions$.pipe(
        ofType(movies.fetchMoviesSuccessAction),
        tap(() => this.router.navigate(['/dashboard']))
      ),
    { dispatch: false }
  );

  redirectToSearchEffect$: Observable<Action> = createEffect(
    () =>
      this.actions$.pipe(
        ofType(movies.fetchMovieByIdSuccessAction),
        tap(() => this.router.navigate(['/details']))
      ),
    { dispatch: false }
  );
}
