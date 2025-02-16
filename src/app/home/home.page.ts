import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';
import { InformationCardComponent } from '../components/information-card/information-card.component';
import { ActivationCameraComponent } from '../components/activation-camera/activation-camera.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, CommonModule, IonContent, InformationCardComponent, ActivationCameraComponent],
})
export class HomePage {
  showCard: boolean = false;
  showCamera: boolean = false;

  toggleCard(){
    this.showCard = !this.showCard;
  }
  toggleCamera(){
    this.showCamera = !this.showCamera;
  }


}
