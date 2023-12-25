import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-qrcode-pic-handler',
  templateUrl: './qrcode-pic-handler.component.html',
  styleUrls: ['./qrcode-pic-handler.component.css']
})
export class QrcodePicHandlerComponent implements OnInit {

  @Input() text!: string;

  constructor() { }

  ngOnInit(): void {
  }

  hasText() {
    return this.text.length > 0;
  }

}
