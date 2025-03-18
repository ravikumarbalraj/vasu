import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollaborateSeminarComponent } from './collaborate-seminar.component';

describe('CollaborateSeminarComponent', () => {
  let component: CollaborateSeminarComponent;
  let fixture: ComponentFixture<CollaborateSeminarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollaborateSeminarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollaborateSeminarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
