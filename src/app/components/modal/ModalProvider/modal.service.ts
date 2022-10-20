import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  public showLoader$ = new BehaviorSubject({ show: false, message: '' });

  constructor() {}

  showLoader(message = '') {
    this.showLoader$.next({ show: true, message });
  }

  hideLoader() {
    this.showLoader$.next({ show: false, message: '' });
  }

  subscribeLoader(): Observable<{ show: boolean; message?: string }> {
    return this.showLoader$.asObservable();
  }
}
