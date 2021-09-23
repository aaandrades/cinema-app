import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import {
  enableLoadingAction,
  disableLoadingAction,
  EnableLoadingObserverActionsTypes,
  DisableLoadingObserverActionsTypes,
} from '../actions/loader.actions';
import { ModalService } from '../../components/modal/ModalProvider/modal.service';
import { map, tap } from 'rxjs/operators';

@Injectable()
export class LoaderEffects {
  constructor(private actions$: Actions, private modalService: ModalService) {}

  enableLoadingEffect: Observable<Action> = createEffect(
    () =>
      this.actions$.pipe(
        ofType(enableLoadingAction),
        tap(() => this.modalService.showLoader())
      ),
    { dispatch: false }
  );

  disableLoadingEffect: Observable<Action> = createEffect(
    () =>
      this.actions$.pipe(
        ofType(disableLoadingAction),
        tap(() => this.modalService.hideLoader())
      ),
    { dispatch: false }
  );

  enableLoadingObserverEffect$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(...EnableLoadingObserverActionsTypes),
      map(() => enableLoadingAction())
    )
  );

  disableLoadingObserverEffect$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(...DisableLoadingObserverActionsTypes),
      map(() => disableLoadingAction())
    )
  );

}
