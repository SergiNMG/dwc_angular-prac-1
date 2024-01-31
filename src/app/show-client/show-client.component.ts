import { Component } from '@angular/core';
import { ClientsHttpService } from '../services/clients-http.service';
import { ActivatedRoute } from '@angular/router';
import { Client } from '../models/client';

@Component({
  selector: 'app-show-client',
  templateUrl: './show-client.component.html',
  styleUrls: ['./show-client.component.css']
})
export class ShowClientComponent {

  id!: number;
  nombre!: string;
  cargo!: string;

  client!: Client;

  constructor(private clientsService: ClientsHttpService,
    private activeRoute: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.activeRoute.snapshot.params['id'];
    this.clientsService.getCliente(this.id).subscribe(data => {
      this.client = data;

      this.nombre = this.client.nombre;
      this.cargo = this.client.cargo;
    })
  }


}
