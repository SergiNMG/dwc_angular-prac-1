import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticleComponent } from './article/article.component';
import { Article2Component } from './article2/article2.component';
import { FormsModule } from '@angular/forms';
import { Article3Component } from './article3/article3.component';

@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
    Article2Component,
    Article3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
