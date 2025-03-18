import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicationEthicsComponent } from './publication-ethics.component';

describe('PublicationEthicsComponent', () => {
  let component: PublicationEthicsComponent;
  let fixture: ComponentFixture<PublicationEthicsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublicationEthicsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicationEthicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
