import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClimaService {
  private urlBase:string = 'https://api.openweathermap.org/data/2.5/weather';
  private api_key:string = '605507acf87117e111e54a3ab5238541';
  private difKelvin:number = 273.15;

  constructor(private http: HttpClient) { }

  buscarClima(ciudad: string): Observable<any> {
    return this.http.get(`${this.urlBase}?q=${ciudad}&appid=${this.api_key}`);
  }

  procesarDatosClima(data: any): any {
    return {
      ciudadNombre: data.name,
      paisNombre: data.sys.country,
      temperatura: Math.floor(data.main.temp - this.difKelvin),
      humedad: data.main.humidity,
      descripcion: data.weather[0].description,
      icono: `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
    };
  }
}
