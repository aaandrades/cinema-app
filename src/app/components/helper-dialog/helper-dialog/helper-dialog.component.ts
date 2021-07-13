import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-helper-dialog',
  templateUrl: './helper-dialog.component.html',
  styleUrls: ['./helper-dialog.component.scss']
})
export class HelperDialogComponent implements OnInit {

  showDialog = false;

  constructor() { }

  ngOnInit(): void {

  }

  showDialogClick(): void {
    this.showDialog = !this.showDialog;
  }

  get getItemClass(): string {
    return this.showDialog ? 'animate__animated animate__zoomIn disclaimer__dialog' : 'animate__animated animate__zoomOut disclaimer__dialog'
  }

}
