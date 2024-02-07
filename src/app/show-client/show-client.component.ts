import { Component, OnInit } from '@angular/core';
import { ClientsHttpService } from '../services/clients-http.service';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Client } from '../models/client';

@Component({
  selector: 'app-show-client',
  templateUrl: './show-client.component.html',
  styleUrls: ['./show-client.component.css']
})
export class ShowClientComponent {

  // nombre!: string;
  // cargo!: string;

  clients!: Client[];
  client: Client = {
    id: 0,
    nombre: "",
    cargo: ""
  };

  constructor(private clientsService: ClientsHttpService,
    private activeRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    let id: number = this.activeRoute.snapshot.params['id'];
    this.clientsService.getCliente(id).subscribe(data => {
      this.client = data;
      console.log(data);
      // this.nombre = this.client.nombre;
      // this.cargo = this.client.cargo;

    });
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

    this.clientsService.putCliente(this.client).subscribe(data => {
      console.log(data);

      this.clientsService.getClientes().subscribe(clients => {
        this.clients = clients;
      })
    });
  }

  cancel() {
    this.navigateTo("/clients");
  }

  navigateTo(route: string) {
    this.router.navigate([route]);
  }
}
