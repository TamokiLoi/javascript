import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCruComponent } from './product-cru.component';

describe('ProductCruComponent', () => {
  let component: ProductCruComponent;
  let fixture: ComponentFixture<ProductCruComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductCruComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductCruComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
