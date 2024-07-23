import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _apiService: ApiService) { }

  public DatosCalificacion!: any[];
  displayedColumnsCalificacion: string[] = ['tetra', 'materia', 'calificacion'];

  public DatosTareas!: any[];
  displayedColumnsTareas: string[] = ['materia', 'titulo', 'action'];

  public DatosAdeudos!: any[];
  displayedColumnsAdeudos: string[] = ['tetra', 'fecha', 'adeudo', 'action'];

  public TituloPagoTemporal: string = "";
  ngOnInit() {
    const user: any = localStorage.getItem('usuario');
    const userJSON: any = JSON.parse(user);

    this._apiService.getCalificaciones(parseInt(userJSON.username)).subscribe((data: any) => {
      this.DatosCalificacion = data.tabla;
    });

    this._apiService.getTareas(parseInt(userJSON.username)).subscribe((data: any) => {
      this.DatosTareas = data.tabla;
    });
    this._apiService.getPagosAdeudos(userJSON.username).subscribe((data: any) => {
      this.DatosAdeudos = data.tabla;

      this.TituloPagoTemporal = data.tabla[0].titulo;
    })
  }

  formatNumber(value: number): string {
    return value.toLocaleString('en-US');
  }
}
