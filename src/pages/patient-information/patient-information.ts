import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {PatientPhotosPage,ThankyouPage} from '../pages';
 
@Component({
    templateUrl: 'patient-information.html'
})

export class PatientInformation {
    constructor(private navCtrl: NavController){
        
    }

    getPatientPhotos(){
        this.navCtrl.push(PatientPhotosPage);
    }

    submitPatientInformation() {
        this.navCtrl.push(ThankyouPage);
    }
}