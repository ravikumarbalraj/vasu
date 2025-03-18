import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JoinMemberComponent } from './join-member.component';

describe('JoinMemberComponent', () => {
  let component: JoinMemberComponent;
  let fixture: ComponentFixture<JoinMemberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JoinMemberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JoinMemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
