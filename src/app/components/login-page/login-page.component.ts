import { Component } from '@angular/core';
import { Validators, FormControl, FormGroup } from '@angular/forms';
import { defaulCredentialsInterface } from '../helper-dialog/helper-dialog.component';
import { credentials as credentialsInterface } from '../../models/interface';
import { UserFacade } from '../../store/facade/user.facade';
import { ModalService } from '../modal/ModalProvider/modal.service';
import { Constants } from '../../helpers/Constants';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
  providers: [UserFacade],
})
export class LoginPageComponent {
  loginForm: FormGroup;
  validUser: boolean = true;
  validPassword: boolean = true;

  constructor(
    private userFacade: UserFacade,
    private modalService: ModalService
  ) {
    this.loginForm = new FormGroup({
      user: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
    });
  }

  onSubmit() {
    this.loginForm.valid ? this.setLoginState() : this.validateForm();
  }

  setLoginState(): void {
    this.validUser = true;
    this.validPassword = true;
    this.showLoader();
    this.userFacade.initLogin(this.buildRequest);
  }

  validateForm(): void {
    this.validUser = this.loginForm.get('user')?.valid || false;
    this.validPassword = this.loginForm.get('password')?.valid || false;
  }

  updateFields(value: defaulCredentialsInterface): void {
    this.loginForm.patchValue({
      user: value.user,
      password: value.password,
    });
  }

  fastSubmit() {
    this.validUser = true;
    this.validPassword = true;
    this.userFacade.setPublicUser();
    this.showLoader();
    this.userFacade.initLogin({
      email: Constants.defaultUser,
      password: Constants.defaultPassword,
    });
  }

  showLoader() {
    this.modalService.showLoader(
      'If its the first login, this could take up to 30s because the backend is running on a free tier server'
    );
  }

  get buildRequest(): credentialsInterface {
    return {
      email: this.loginForm.get('user')?.value,
      password: this.loginForm.get('password')?.value,
    };
  }
}
