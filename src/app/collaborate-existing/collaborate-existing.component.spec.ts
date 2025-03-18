import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollaborateExistingComponent } from './collaborate-existing.component';

describe('CollaborateExistingComponent', () => {
  let component: CollaborateExistingComponent;
  let fixture: ComponentFixture<CollaborateExistingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollaborateExistingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollaborateExistingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
