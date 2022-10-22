import { Component, OnInit } from '@angular/core';
import { ModalService } from './ModalProvider/modal.service';

@Component({
  selector: 'modal-component',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  showLoader = false;
  message = '';

  constructor(private modalService: ModalService) {}

  ngOnInit(): void {
    this.modalService.showLoader$.subscribe((subscription) => {
      this.showLoader = subscription.show;
      this.message = subscription.message || '';
    });
  }
}
