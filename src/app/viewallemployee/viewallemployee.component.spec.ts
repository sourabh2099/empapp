import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewallemployeeComponent } from './viewallemployee.component';

describe('ViewallemployeeComponent', () => {
  let component: ViewallemployeeComponent;
  let fixture: ComponentFixture<ViewallemployeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewallemployeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewallemployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
