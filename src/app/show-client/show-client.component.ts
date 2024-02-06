import { Component, OnInit } from '@angular/core';
import { ClientsHttpService } from '../services/clients-http.service';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Client } from '../models/client';

@Component({
  selector: 'app-show-client',
  templateUrl: './show-client.component.html',
  styleUrls: ['./show-client.component.css']
})
export class ShowClientComponent implements OnInit {

  id!: number;
  nombre!: string;
  cargo!: string;

  clients!: Client[];
  client!: Client;

  constructor(private clientsService: ClientsHttpService,
    private activeRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.id = this.activeRoute.snapshot.params['id'];
    this.clientsService.getCliente(this.id).subscribe(data => {
      this.client = data;

      this.nombre = this.client.nombre;
      this.cargo = this.client.cargo;
    })
  }

  // putCliente(client: Client) {
  //   this.clientsService.putCliente(client).subscribe(updatedClient => {
  //     this.client = updatedClient;

  //     this.nombre = this.client.nombre;
  //     this.cargo = this.client.cargo;

  //     console.log(updatedClient);

  //     this.clientsService.getClientes().subscribe(datos => {
  //       this.clients = datos;

  //       this.navigateTo("/clients");
  //     });
  //   });
  // }

  putCliente() {
    let updatedClient: Client = {
      id: this.id,
      nombre: this.nombre,
      cargo: this.cargo
    };

    this.clientsService.putCliente(updatedClient).subscribe(() => {
      console.log(updatedClient);

      this.clientsService.getClientes().subscribe(clients => {
        this.clients = clients;

        this.navigateTo("/clients")
      })
    });
  }

  cancel() {
    this.nombre = this.client.nombre;
    this.cargo = this.client.cargo;
  }

  navigateTo(route: string) {
    this.router.navigate([route]);
  }
}
