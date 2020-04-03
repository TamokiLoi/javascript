import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UiCustomLibComponent } from './ui-custom-lib.component';

describe('UiCustomLibComponent', () => {
  let component: UiCustomLibComponent;
  let fixture: ComponentFixture<UiCustomLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UiCustomLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UiCustomLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
