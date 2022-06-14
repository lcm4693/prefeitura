import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaImovelComponent } from './consulta-imovel.component';

describe('ConsultaImovelComponent', () => {
  let component: ConsultaImovelComponent;
  let fixture: ComponentFixture<ConsultaImovelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultaImovelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultaImovelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
