import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltredArticleComponent } from './filtred-article.component';

describe('FiltredArticleComponent', () => {
  let component: FiltredArticleComponent;
  let fixture: ComponentFixture<FiltredArticleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FiltredArticleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FiltredArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
