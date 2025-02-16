import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { IonicModule } from '@ionic/angular';


@Component({
  selector: 'app-activation-camera',
  templateUrl: './activation-camera.component.html',
  styleUrls: ['./activation-camera.component.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule],
})
export class ActivationCameraComponent  {

  capturedImage: string | undefined = "" //almacena las fotos

  constructor() { }

  async openCamera(){
    try {
      const image = await Camera.getPhoto({
        quality:90,
        allowEditing: false,
        resultType: CameraResultType.Uri,
        source: CameraSource.Camera
      });
      this.capturedImage = image.webPath;
    }catch (error){
      console.error('Error al abrir la cámara:', error);

    }
  }


}
