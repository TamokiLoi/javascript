import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryCruComponent } from './category-cru.component';

describe('CategoryCruComponent', () => {
  let component: CategoryCruComponent;
  let fixture: ComponentFixture<CategoryCruComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoryCruComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryCruComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
