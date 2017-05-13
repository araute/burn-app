import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ViewphotosPage } from './viewphotos';

@NgModule({
  declarations: [
    ViewphotosPage,
  ],
  imports: [
    IonicPageModule.forChild(ViewphotosPage),
  ],
  exports: [
    ViewphotosPage
  ]
})
export class ViewphotosPageModule {}
