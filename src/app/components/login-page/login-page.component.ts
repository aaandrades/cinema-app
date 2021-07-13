import { Component } from '@angular/core';
import { Validators, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent {
  loginForm: FormGroup;
  validUser: boolean = true;
  validPassword: boolean = true;

  constructor() {
    this.loginForm = new FormGroup({
      user: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
  }

  onSubmit() {
    this.loginForm.valid ? this.setLoginState() : this.validateForm();
  }

  setLoginState(): void {
    this.validUser = true;
    this.validPassword = true;
    console.log('EXECUTE THE SERVICE');
  }
  
  validateForm(): void {
    this.validUser = this.loginForm.get('user')?.valid || false;
    this.validPassword = this.loginForm.get('password')?.valid || false;
  }
}
