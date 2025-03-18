import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BecomeReviewerComponent } from './become-reviewer.component';

describe('BecomeReviewerComponent', () => {
  let component: BecomeReviewerComponent;
  let fixture: ComponentFixture<BecomeReviewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BecomeReviewerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BecomeReviewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
