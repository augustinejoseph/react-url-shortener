import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QrcodePicHandlerComponent } from './qrcode-pic-handler.component';

describe('QrcodePicHandlerComponent', () => {
  let component: QrcodePicHandlerComponent;
  let fixture: ComponentFixture<QrcodePicHandlerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QrcodePicHandlerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QrcodePicHandlerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
