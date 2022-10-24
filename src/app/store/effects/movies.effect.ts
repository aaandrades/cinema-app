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
} from 'rxjs/operators';
import * as movies from '../actions/movies.actions';
import { userSelector } from '../selector/user.selector';
import { AlertsMessagesType } from '../../enums/AlertMessageTypes';
import { SnackbarProvider } from '../../components/snackbar/snackbar-provider/snackbar-provider.service';
import { convertImgUrl } from 'src/app/services/helpers/helpers';

@Injectable()
export class MoviesEffects {
  constructor(
    private actions$: Actions,
    private movieService: MoviesService,
    private router: Router,
    private store: Store,
    private snackbarProvider: SnackbarProvider
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
            const mappedMovies = response.items.map((item: any) => {
              return { ...item, image: convertImgUrl(item.image, 300) };
            });
            return movies.fetchMoviesSuccessAction({
              results: mappedMovies,
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
            const mappedActors = response.actorList.map((actor: any) => ({
              ...actor,
              image: convertImgUrl(actor.image, 600),
            }));
            const mappedMovie = {
              ...response,
              image: convertImgUrl(response.image, 600),
              actorList: mappedActors,
            };
            return movies.fetchMovieByIdSuccessAction({
              currentMovie: mappedMovie,
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
              const mappedMovies = response.results.map((movie: any) => ({
                ...movie,
                image: convertImgUrl(movie.image, 300),
              }));
              const mappedResponse = {
                ...response,
                results: mappedMovies,
              };
              return movies.fetchMovieByExpressionSuccessAction({
                searchResults: mappedResponse,
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
            const mappedMovies = response.items.map((item: any) => {
              return { ...item, image: convertImgUrl(item.image) };
            });
            return movies.fetchPremiersActionSuccess({
              premiers: mappedMovies,
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
            const mappedMovies = response.items.map((item: any) => {
              return { ...item, image: convertImgUrl(item.image) };
            });
            return movies.fetchNewMoviesSuccessAction({
              comingSoon: mappedMovies,
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
        tap(() => this.router.navigate(['/dashboard'])),
        tap(() => this.snackbarProvider.showSnackbar())
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
