import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { registerCredentials } from '../../models/interface';
import { UserFacade } from '../../store/facade/user.facade';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss'],
})
export class RegisterPageComponent implements OnInit {
  registerForm: FormGroup;
  validName: boolean = true;
  validOccupation: boolean = true;
  validEmail: boolean = true;
  validPassword: boolean = true;

  enableRegister: boolean = false;

  constructor(private userFacade: UserFacade) {
    this.registerForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    this.enableRegister = true;
    this.registerForm.valid ? this.setRegisterState() : this.validateForm();
  }

  setRegisterState(): void {
    this.validName = true;
    this.validEmail = true;
    this.validPassword = true;

    const buildRequest: registerCredentials = {
      name: this.registerForm.get('name')?.value,
      email: this.registerForm.get('email')?.value,
      password: this.registerForm.get('password')?.value,
    };

    this.userFacade.initRegister(buildRequest);
  }

  validateForm(): void {
    this.validName = this.registerForm.get('name')?.valid || false;
    this.validEmail = this.registerForm.get('email')?.valid || false;
    this.validPassword = this.registerForm.get('password')?.valid || false;
  }
}
