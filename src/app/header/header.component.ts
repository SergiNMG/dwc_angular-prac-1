import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  selectValue: string = "Index";

  constructor(private router: Router) { }

  navigateTo(route: string) {
    this.router.navigate([route]);
  }
}
