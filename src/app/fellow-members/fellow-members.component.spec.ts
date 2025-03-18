import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FellowMembersComponent } from './fellow-members.component';

describe('FellowMembersComponent', () => {
  let component: FellowMembersComponent;
  let fixture: ComponentFixture<FellowMembersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FellowMembersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FellowMembersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
