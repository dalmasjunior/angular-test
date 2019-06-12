import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenreFilmsComponent } from './genre-films.component';

describe('GenreFilmsComponent', () => {
  let component: GenreFilmsComponent;
  let fixture: ComponentFixture<GenreFilmsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenreFilmsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenreFilmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
