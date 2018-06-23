
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisNavComponent } from './vis-nav.component';

describe('VisNavComponent', () => {
  let component: VisNavComponent;
  let fixture: ComponentFixture<VisNavComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ VisNavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VisNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
