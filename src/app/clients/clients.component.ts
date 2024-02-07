import { Component } from '@angular/core';
import { ClientsHttpService } from '../services/clients-http.service';
import { Client } from '../models/client';
import { Router } from '@angular/router';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent {
  id!: number;
  clients!: Client[];
  client!: Client;

  constructor(private clientsService: ClientsHttpService,
    private router: Router) { }

  ngOnInit() {
    this.clientsService.getClientes().subscribe(datos => {
      this.clients = datos;
      console.log(datos);
    });
  }

  showClient(id: number) {
    this.clientsService.getCliente(id).subscribe(dato => {
      this.client = dato;
      console.log(dato);
    });
  }

  deleteClient(id: number) {
    this.clientsService.deleteCliente(id).subscribe(dato => {
      console.log(dato);
    });
  }


  navigateTo(route: string) {
    this.router.navigate([route]);
  }
}
