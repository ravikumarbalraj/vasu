import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BioticaLifeMemberComponent } from './biotica-life-member.component';

describe('BioticaLifeMemberComponent', () => {
  let component: BioticaLifeMemberComponent;
  let fixture: ComponentFixture<BioticaLifeMemberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BioticaLifeMemberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BioticaLifeMemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
