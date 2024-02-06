import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, retry, throwError } from 'rxjs';
import { Client } from '../models/client';

@Injectable({
  providedIn: 'root'
})
export class ClientsHttpService {

  constructor(private httpClient: HttpClient) { }

  url = "http://localhost:3000/clients"

  getClientes(): Observable<Client[]> {
    return this.httpClient.get<Client[]>(this.url)
      .pipe(retry(1));
  }

  getCliente(id: number): Observable<Client> {
    return this.httpClient.get<Client>(this.url + "/" + id)
  }

  postCliente(client: Client): Observable<Client> {
    return this.httpClient.post<Client>(this.url + "/" + client.id, client);
  }

  putCliente(client: Client): Observable<Client> {
    return this.httpClient.put<Client>(this.url + "/" + client.id, client)
  }

  deleteCliente(id: string): Observable<Client[]> {
    return this.httpClient.delete<Client[]>(this.url + "/" + id);
  }
}
