import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { credentials, registerCredentials } from '../models/interface';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  REST_API = 'https://restapi-in-nodejs.herokuapp.com';

  constructor(private http: HttpClient) {}

  loginService(credentials: credentials) {
    return this.http.post(this.REST_API + '/login', credentials);
  }

  registerService(register: registerCredentials) {
    return this.http.post(this.REST_API + '/users', register);
  }

  updateInformationService(request: any, id: string, token: string) {
    return this.http.put(this.REST_API + '/users/' + id, request, {
      headers: { Authorization: token, },
    });
  }
}
