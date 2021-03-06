import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonedasComponent } from './monedas.component';
import { Observable } from 'rxjs';


describe('MonedasComponent', () => {
  let component: MonedasComponent;
  let fixture: ComponentFixture<MonedasComponent>;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonedasComponent ]
    })
    .compileComponents();
   
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonedasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
