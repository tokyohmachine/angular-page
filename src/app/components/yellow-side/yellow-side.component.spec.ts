import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YellowSideComponent } from './yellow-side.component';

describe('YellowSideComponent', () => {
  let component: YellowSideComponent;
  let fixture: ComponentFixture<YellowSideComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [YellowSideComponent]
    });
    fixture = TestBed.createComponent(YellowSideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
