import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { QRCodeModule } from 'angularx-qrcode';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QrcodeGeneratorComponent } from './qrcode-generator/qrcode-generator.component';
import { QrcodePicHandlerComponent } from './qrcode-generator/components/qrcode-pic-handler/qrcode-pic-handler.component';
import { QrcodeSkeletonComponent } from './qrcode-generator/components/qrcode-pic-handler/components/qrcode-skeleton/qrcode-skeleton.component';

@NgModule({
  declarations: [
    AppComponent,
    QrcodeGeneratorComponent,
    QrcodePicHandlerComponent,
    QrcodeSkeletonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    QRCodeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
