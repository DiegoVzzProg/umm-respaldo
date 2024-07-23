import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.css']
})
export class UserMenuComponent implements OnInit {

  constructor(private _router: Router) { }

  public Nombre: string = "";
  public Matricula: string = "";
  ngOnInit() {
    const user: any = localStorage.getItem('usuario');
    const userJSON: any = JSON.parse(user);
    this.Nombre = userJSON.nombre + " " + userJSON.apellido_paterno + " " + userJSON.apellido_materno;
    this.Matricula = userJSON.username;
  }

  obtenerFecha(): string {
    const date = new Date();
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Los meses son de 0 a 11, así que sumamos 1
    const day = String(date.getDate()).padStart(2, '0'); // Asegurarse de que siempre tenga dos dígitos

    return `${year}-${month}-${day}`;
  }

  cerrarSession() {
    this._router.navigate(['umm/login']);
  }
}
