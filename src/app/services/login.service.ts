import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { credentials, registerCredentials } from '../models/interface';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  REST_API = 'https://restapi-in-nodejs.herokuapp.com';

  constructor(private http: HttpClient) { }

  loginService(credentials: credentials) {
    return this.http.post(this.REST_API + '/login', credentials);
  }
  
  registerService(register: registerCredentials) {
    return this.http.post(this.REST_API + '/users', register);
  }
}
