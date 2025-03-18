import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JoinEditorialBoardComponent } from './join-editorial-board.component';

describe('JoinEditorialBoardComponent', () => {
  let component: JoinEditorialBoardComponent;
  let fixture: ComponentFixture<JoinEditorialBoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JoinEditorialBoardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JoinEditorialBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
