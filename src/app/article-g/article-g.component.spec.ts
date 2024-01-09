import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleGComponent } from './article-g.component';

describe('ArticleGComponent', () => {
  let component: ArticleGComponent;
  let fixture: ComponentFixture<ArticleGComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticleGComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArticleGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
