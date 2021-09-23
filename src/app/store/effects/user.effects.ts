import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { LoginService } from '../../services/login.service';
import * as actions from '../actions/user.actions';
import { Router } from '@angular/router';
import { AlertsMessagesType } from '../../enums/AlertMessageTypes';

@Injectable()
export class UserEffects {
  constructor(
    private actions$: Actions,
    private loginService: LoginService,
    private router: Router
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
}
