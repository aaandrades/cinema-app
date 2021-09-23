import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import {
  AlertsMessagesType,
  AlertsMessagesTypeInterface,
} from '../../../enums/AlertMessageTypes';

@Injectable({
  providedIn: 'root',
})
export class CustomModalService {
  public showModal$ = new BehaviorSubject({
    message: AlertsMessagesType.INITIAl_MESSAGE,
    show: false,
  });

  constructor() {}

  showModal(message: AlertsMessagesTypeInterface) {
    this.showModal$.next({
      show: true,
      message,
    });
  }

  hideModal() {
    this.showModal$.next({
      show: false,
      message: AlertsMessagesType.INITIAl_MESSAGE,
    });
  }

  subscribeModal(): Observable<ModalInterface> {
    return this.showModal$.asObservable();
  }
}

interface ModalInterface {
  message?: AlertsMessagesTypeInterface;
  show: Boolean;
}
