import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-information-card',
  templateUrl: './information-card.component.html',
  styleUrls: ['./information-card.component.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule],
})
export class InformationCardComponent {
  @Input() title: string = 'Título por defecto';
  @Input() description: string = 'Descripción breve de la tarjeta.';
  @Input() imageUrl: string = 'https://via.placeholder.com/150';

  constructor() { }


}
