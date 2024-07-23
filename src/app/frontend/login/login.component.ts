import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/service/api/api.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  users: any[] = [];

  constructor(private _apiService: ApiService, private _router: Router) { }

  ngOnInit() {
    localStorage.clear();
    console.clear();
  }

  agregarClass(elemento: any) {
    if (elemento.value.length > 0)
      elemento.classList.add('valid');
    else
      elemento.classList.remove('valid');
  }

  validarUsuario(usuario: string, password: string) {
    this._apiService.loginUser(usuario, password).subscribe((data: any) => {
      if (data.mensaje == '') {
        localStorage.setItem('usuario', JSON.stringify(data.tabla));
        this._router.navigate(['umm']);
      }
    }, error => {
      console.error('Error:', error);
    });
  }

}