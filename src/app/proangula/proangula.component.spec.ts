import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProangulaComponent } from './proangula.component';

describe('ProangulaComponent', () => {
  let component: ProangulaComponent;
  let fixture: ComponentFixture<ProangulaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProangulaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProangulaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
