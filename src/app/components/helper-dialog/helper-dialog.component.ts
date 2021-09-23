import { Component, Output, OnInit, EventEmitter } from '@angular/core';
import { Constants } from '../../helpers/Constants';
@Component({
  selector: 'app-helper-dialog',
  templateUrl: './helper-dialog.component.html',
  styleUrls: ['./helper-dialog.component.scss'],
})
export class HelperDialogComponent {
  @Output() defaultCredentials = new EventEmitter<defaulCredentialsInterface>();
  showDialog = false;

  constructor() {}

  showDialogClick(): void {
    this.showDialog = !this.showDialog;
  }

  returnDefaultValues(): void {
    this.defaultCredentials.emit({
      user: Constants.defaultUser,
      password: Constants.defaultPassword,
    });
    this.showDialog = false;
  }

  get getItemClass(): string {
    return this.showDialog
      ? 'animate__animated animate__zoomIn disclaimer__dialog'
      : 'animate__animated animate__zoomOut disclaimer__dialog';
  }
}

export interface defaulCredentialsInterface {
  user: string;
  password: string;
}
