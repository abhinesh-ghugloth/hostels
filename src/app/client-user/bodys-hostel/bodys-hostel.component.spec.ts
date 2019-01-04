import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BodysHostelComponent } from './bodys-hostel.component';

describe('BodysHostelComponent', () => {
  let component: BodysHostelComponent;
  let fixture: ComponentFixture<BodysHostelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BodysHostelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BodysHostelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
