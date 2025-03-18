import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialIssueProposalComponent } from './special-issue-proposal.component';

describe('SpecialIssueProposalComponent', () => {
  let component: SpecialIssueProposalComponent;
  let fixture: ComponentFixture<SpecialIssueProposalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecialIssueProposalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecialIssueProposalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
