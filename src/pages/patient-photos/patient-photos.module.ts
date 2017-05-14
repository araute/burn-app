import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PatientPhotosPage } from './patient-photos';

@NgModule({
  declarations: [
    PatientPhotosPage,
  ],
  imports: [
    IonicPageModule.forChild(PatientPhotosPage),
  ],
  exports: [
    PatientPhotosPage
  ]
})
export class PatientPhotosPageModule {}
