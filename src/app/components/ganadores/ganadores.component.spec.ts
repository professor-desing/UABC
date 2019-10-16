import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GanadoresComponent } from './ganadores.component';

describe('GanadoresComponent', () => {
  let component: GanadoresComponent;
  let fixture: ComponentFixture<GanadoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GanadoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GanadoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
