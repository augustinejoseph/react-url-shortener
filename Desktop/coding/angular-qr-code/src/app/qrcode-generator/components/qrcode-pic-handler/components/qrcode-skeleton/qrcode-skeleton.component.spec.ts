import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QrcodeSkeletonComponent } from './qrcode-skeleton.component';

describe('QrcodeSkeletonComponent', () => {
  let component: QrcodeSkeletonComponent;
  let fixture: ComponentFixture<QrcodeSkeletonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QrcodeSkeletonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QrcodeSkeletonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
