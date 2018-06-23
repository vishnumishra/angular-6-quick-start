import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisProfileComponent } from './vis-profile.component';

describe('VisProfileComponent', () => {
  let component: VisProfileComponent;
  let fixture: ComponentFixture<VisProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
