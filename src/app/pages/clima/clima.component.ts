import { Component} from '@angular/core';
import { ClimaService } from '../../services/servicio-clima.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-clima',
  templateUrl: './clima.component.html',
  styleUrls: ['./clima.component.css'],
  imports: [CommonModule,FormsModule],
  standalone: true
})
export class ClimaComponent {
  datosClima: any = {};
  ciudad: string = ''; // Definición de la propiedad ciudad

  constructor(private climaService: ClimaService) { }

  buscarClima() {
    if (this.ciudad) {
      this.climaService.buscarClima(this.ciudad)
        .subscribe((data: any) => {
          this.datosClima = this.climaService.procesarDatosClima(data);
        });
    }
  }
}

