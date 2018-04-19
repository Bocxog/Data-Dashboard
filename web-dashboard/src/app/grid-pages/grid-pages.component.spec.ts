import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridPagesComponent } from './grid-pages.component';

describe('GridPagesComponent', () => {
  let component: GridPagesComponent;
  let fixture: ComponentFixture<GridPagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridPagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
