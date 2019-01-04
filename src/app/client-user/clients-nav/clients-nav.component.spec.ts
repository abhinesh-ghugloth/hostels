import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientsNavComponent } from './clients-nav.component';

describe('ClientsNavComponent', () => {
  let component: ClientsNavComponent;
  let fixture: ComponentFixture<ClientsNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientsNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientsNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
