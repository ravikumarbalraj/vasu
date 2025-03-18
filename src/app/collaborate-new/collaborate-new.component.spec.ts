import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollaborateNewComponent } from './collaborate-new.component';

describe('CollaborateNewComponent', () => {
  let component: CollaborateNewComponent;
  let fixture: ComponentFixture<CollaborateNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollaborateNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollaborateNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
