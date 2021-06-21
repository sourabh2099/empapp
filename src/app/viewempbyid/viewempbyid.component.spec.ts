import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewempbyidComponent } from './viewempbyid.component';

describe('ViewempbyidComponent', () => {
  let component: ViewempbyidComponent;
  let fixture: ComponentFixture<ViewempbyidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewempbyidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewempbyidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
