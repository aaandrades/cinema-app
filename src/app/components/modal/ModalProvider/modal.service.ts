import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  public showLoader$ = new BehaviorSubject(false);

  constructor() { }
  
  showLoader() {
    this.showLoader$.next(true);
  }

  hideLoader() {
    this.showLoader$.next(false);
  }

  subscribeLoader(): Observable<boolean> {
    return this.showLoader$.asObservable();
  }
}
