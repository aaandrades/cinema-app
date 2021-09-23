import { Component, OnInit } from '@angular/core';
import { CustomModalService } from './custom-modal-provider/custom-modal.service';
import { ModalService } from '../modal/ModalProvider/modal.service';
import {
  AlertsMessagesTypeInterface,
  AlertsMessagesType,
} from '../../enums/AlertMessageTypes';

@Component({
  selector: 'app-custom-modal',
  templateUrl: './custom-modal.component.html',
  styleUrls: ['./custom-modal.component.scss'],
})
export class CustomModalComponent implements OnInit {
  showModal = true;
  alertInfo: AlertsMessagesTypeInterface = AlertsMessagesType.GENERIC_ERROR;

  constructor(private customModalService: CustomModalService) {}

  ngOnInit(): void {
    this.customModalService.showModal$.subscribe((subscription) => {
      this.alertInfo = subscription.message;
      this.showModal = subscription.show;
    });
  }

  disableModal() {
    this.customModalService.hideModal();
  }
}
