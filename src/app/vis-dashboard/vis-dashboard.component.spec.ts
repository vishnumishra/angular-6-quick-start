
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisDashboardComponent } from './vis-dashboard.component';

describe('VisDashboardComponent', () => {
  let component: VisDashboardComponent;
  let fixture: ComponentFixture<VisDashboardComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ VisDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VisDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
