import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action, select, Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import {
  catchError,
  concatMap,
  map,
  switchMap,
  take,
  tap,
  withLatestFrom,
} from 'rxjs/operators';
import { LoginService } from '../../services/login.service';
import * as actions from '../actions/user.actions';
import { Router } from '@angular/router';
import { AlertsMessagesType } from '../../enums/AlertMessageTypes';
import { userSelector } from '../selector/user.selector';

@Injectable()
export class UserEffects {
  constructor(
    private actions$: Actions,
    private loginService: LoginService,
    private router: Router,
    private store: Store
  ) {}

  loginUserEffect$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.loginUserAction),
      switchMap((loginCredentials) =>
        this.loginService.loginService(loginCredentials).pipe(
          map((response: any) => actions.loginUserSuccessAction({ response })),
          catchError(() =>
            of(
              actions.loginUserErrorAction({
                message: AlertsMessagesType.INVALID_LOGIN,
              })
            )
          )
        )
      )
    )
  );

  registerUserEffect$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.registerUserAction),
      switchMap((registerCredentials) =>
        this.loginService.registerService(registerCredentials).pipe(
          map((response: any) => actions.registerUserSuccessAction(response)),
          catchError(() => of(actions.registerUserErrorAction()))
        )
      ),
      tap(() => this.router.navigate(['/dashboard']))
    )
  );

  updateInformationEffect$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.updateInformationAction),
      concatMap((userState) =>
        of(userState).pipe(
          withLatestFrom(this.store.pipe(select(userSelector)))
        )
      ),
      switchMap(([{ request, id }, userState]) =>
        this.loginService
          .updateInformationService(request, id, userState.token)
          .pipe(
            map((response: any) =>
              actions.updateInformationSuccessAction({
                response,
                message: AlertsMessagesType.SUCCESS_UPDATE,
              })
            ),
            catchError(() =>
              of(
                actions.updateInformationErrorAction({
                  message: AlertsMessagesType.FAILED_UPDATE_INFORMATION,
                })
              )
            )
          )
      )
    )
  );

  logoutEffect$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.logoutAction),
      switchMap(() => of(actions.logoutSuccessAction())),
      tap(() => this.router.navigate(['/login']))
    )
  );
}
