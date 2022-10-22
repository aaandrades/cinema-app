import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { credentials, registerCredentials } from '../models/interface';
import { of } from 'rxjs';
import { userMock } from '../mocks/login.mock';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  REST_API = 'https://rest-api-node-h8c0.onrender.com';

  constructor(private http: HttpClient) {}

  loginService(credentials: credentials) {
    return of(userMock);
    // return this.http.post(this.REST_API + '/login', credentials);
  }

  registerService(register: registerCredentials) {
    return this.http.post(this.REST_API + '/users', register);
  }

  updateInformationService(request: any, id: string, token: string) {
    return this.http.put(this.REST_API + '/users/' + id, request, {
      headers: { Authorization: token },
    });
  }
}
