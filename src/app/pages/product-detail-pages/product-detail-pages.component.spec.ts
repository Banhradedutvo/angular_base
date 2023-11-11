import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetailPagesComponent } from './product-detail-pages.component';

describe('ProductDetailPagesComponent', () => {
  let component: ProductDetailPagesComponent;
  let fixture: ComponentFixture<ProductDetailPagesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductDetailPagesComponent]
    });
    fixture = TestBed.createComponent(ProductDetailPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
