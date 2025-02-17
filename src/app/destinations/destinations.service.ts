import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DestinationsService {
  private accessKey = '00bORbNasXiU6iQ5bkxoTHhDk9oT7CQZ4eSuPkrzlSU'; // Inserta aquí tu clave de Unsplash
  private apiUrl = `https://api.unsplash.com/search/photos`;

  constructor(private http: HttpClient) {}

  getImage(destination: string): Observable<any> {
    return this.http.get(`${this.apiUrl}?query=${destination}&client_id=${this.accessKey}&per_page=1`);
  }
}


