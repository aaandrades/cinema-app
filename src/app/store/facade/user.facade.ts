import { select, Store } from '@ngrx/store';
import { credentials, registerCredentials } from '../../models/interface';
import { UserState } from '../model/user.state';
import { loginUserAction, registerUserAction } from '../actions/user.actions';
import { Injectable } from '@angular/core';
import { userSelector } from '../selector/user.selector';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserFacade {
  public user$: Observable<UserState> = this.store.pipe(select(userSelector));

  constructor(private store: Store<UserState>) { }
  
  public initLogin(request: credentials) {
    this.store.dispatch(loginUserAction(request));
  }
  
  public initRegister(request: registerCredentials) {
    this.store.dispatch(registerUserAction(request));
  }
}