import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JoinMembershipComponent } from './join-membership.component';

describe('JoinMembershipComponent', () => {
  let component: JoinMembershipComponent;
  let fixture: ComponentFixture<JoinMembershipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JoinMembershipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JoinMembershipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
