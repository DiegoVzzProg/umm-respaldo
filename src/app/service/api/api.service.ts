import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = 'http://localhost:3000/api/';  // URL de tu API

  constructor(private http: HttpClient) { }

  loginUser(username: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl + 'authenticate'}`, { username, password });
  }

  getUsers(username: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl + 'getUser'}`, { username });
  }

  getCalificaciones(username: number): Observable<any> {
    return this.http.post<any>(`${this.apiUrl + 'calificaciones'}`, { username });
  }

  getTareas(username: number): Observable<any> {
    return this.http.post<any>(`${this.apiUrl + 'tareas'}`, { username });
  }

  getPagosAdeudos(username: number): Observable<any> {
    return this.http.post<any>(`${this.apiUrl + 'adeudos'}`, { username });
  }
}
