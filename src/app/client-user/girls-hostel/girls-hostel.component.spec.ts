import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GirlsHostelComponent } from './girls-hostel.component';

describe('GirlsHostelComponent', () => {
  let component: GirlsHostelComponent;
  let fixture: ComponentFixture<GirlsHostelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GirlsHostelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GirlsHostelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
