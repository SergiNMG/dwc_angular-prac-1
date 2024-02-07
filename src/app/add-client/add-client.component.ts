import { Component } from '@angular/core';
import { ClientsHttpService } from '../services/clients-http.service';
import { Client } from '../models/client';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})
export class AddClientComponent {
  constructor(private clientService: ClientsHttpService,
    private router: Router
  ) { }

  newClient: Client = {
    id: 0,
    nombre: "",
    cargo: ""
  }

  clients!: Client[];
  error: boolean = false;
  errorText = "";

  postClient() {
    this.clientService.postCliente(this.newClient).subscribe(() => this.navigateTo('/clients'),
      error => {
        this.error = true;
        this.errorText = "Error: " + error.statusText
      }
    );
  }

  cancel() {
    this.navigateTo('/clients')
  }

  navigateTo(route: string) {
    this.router.navigate([route])
  }
}
