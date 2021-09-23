import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import {
  modalAction,
  ModalObserverActionsTypes,
} from '../actions/modal.actions';
import { AlertsMessagesType, AlertsMessagesTypeInterface } from '../../enums/AlertMessageTypes';
import { CustomModalService } from '../../components/custom-modal/custom-modal-provider/custom-modal.service';

@Injectable()
export class ModalEffects {
  constructor(
    private actions$: Actions,
    public modalService: CustomModalService
  ) {}

  alertObserverEffect$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(...ModalObserverActionsTypes),
      map((action) => modalAction(action))
    )
  );

  alertEffect$: Observable<Action> = createEffect(
    () =>
      this.actions$.pipe(
        ofType(modalAction),
        tap((action) =>
          this.alertWithOptions(
            action.message || AlertsMessagesType.GENERIC_ERROR
          )
        )
      ),
    { dispatch: false }
  );

  async alertWithOptions(alertType: AlertsMessagesTypeInterface): Promise<void> {
    this.modalService.showModal(alertType);
  }
}
