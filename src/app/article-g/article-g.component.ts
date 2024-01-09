import { Component, Input } from '@angular/core';
import { Article } from '../models/article';

@Component({
  selector: 'app-article-g',
  templateUrl: './article-g.component.html',
  styleUrls: ['./article-g.component.css']
})
export class ArticleGComponent {

  @Input() article!:Article

}
