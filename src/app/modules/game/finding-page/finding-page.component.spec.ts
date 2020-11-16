import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindingPageComponent } from './finding-page.component';

describe('FindingPageComponent', () => {
  let component: FindingPageComponent;
  let fixture: ComponentFixture<FindingPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindingPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
