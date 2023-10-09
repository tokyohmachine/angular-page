import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlackSideComponent } from './black-side.component';

describe('BlackSideComponent', () => {
  let component: BlackSideComponent;
  let fixture: ComponentFixture<BlackSideComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BlackSideComponent]
    });
    fixture = TestBed.createComponent(BlackSideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
