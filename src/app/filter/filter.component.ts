import { Component } from '@angular/core';
import { ArticleService } from '../services/article.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {

  precio!: number;
  orden!: string;

  constructor(private articleService: ArticleService,
    private router: Router) { }

  ngOnInit() {

  }

  filter() {
    this.router.navigate(['/article'],
      { queryParams: { precio: 700, orden: 'ascendente' } }
    )
  }
}
