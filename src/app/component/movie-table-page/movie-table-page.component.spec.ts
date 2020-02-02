import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieTablePageComponent } from './movie-table-page.component';

describe('MovieTablePageComponent', () => {
  let component: MovieTablePageComponent;
  let fixture: ComponentFixture<MovieTablePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieTablePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieTablePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
