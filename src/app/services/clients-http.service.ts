import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from '../models/client';

@Injectable({
  providedIn: 'root'
})
export class ClientsHttpService {

  constructor(private httpClient: HttpClient) { }

  url = "http://localhost:3000/clients"

  getClientes(): Observable<Client[]> {
    return this.httpClient.get<Client[]>(this.url)
  }

  getCliente(id: number): Observable<Client> {
    return this.httpClient.get<Client>(this.url + "/" + id)
  }
}
