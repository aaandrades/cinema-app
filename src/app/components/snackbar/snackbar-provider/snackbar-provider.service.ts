import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SnackbarProvider {
  public showSnackbar$ = new BehaviorSubject({
    show: false,
  });

  constructor() {}

  showSnackbar() {
    this.showSnackbar$.next({
      show: true,
    });
  }

  hideSnackbar() {
    this.showSnackbar$.next({
      show: false,
    });
  }

  subscribeSnackbar(): Observable<SnackbarInterface> {
    return this.showSnackbar$.asObservable();
  }
}

interface SnackbarInterface {
  show: Boolean;
}
