import { select, Store } from '@ngrx/store';
import { credentials, registerCredentials } from '../../models/interface';
import { UserState } from '../model/user.state';
import {
  loginUserAction,
  registerUserAction,
  publicUserAccessAction,
} from '../actions/user.actions';
import { Injectable } from '@angular/core';
import { userSelector } from '../selector/user.selector';
import { Observable } from 'rxjs';
import { updateInformationAction } from '../actions/user.actions';

@Injectable({
  providedIn: 'root',
})
export class UserFacade {
  public user$: Observable<UserState> = this.store.pipe(select(userSelector));

  constructor(private store: Store<UserState>) {}

  public initLogin(request: credentials) {
    this.store.dispatch(loginUserAction(request));
  }

  public initRegister(request: registerCredentials) {
    this.store.dispatch(registerUserAction(request));
  }

  // Any type because the user can change all information
  // or just the name (public user)
  public updateInformation(request: any, id: string) {
    this.store.dispatch(updateInformationAction({ request, id }));
  }

  public setPublicUser() {
    this.store.dispatch(publicUserAccessAction());
  }
}
